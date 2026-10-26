// ========================================================
// Dragon English 100 - 極限暗記暗誦學習系統 核心互動引擎
// ========================================================

class DragonApp {
  constructor() {
    this.sentences = DRAGON_100_DATA || [];
    this.currentId = 1;
    this.currentStep = 1;
    this.audioCtx = null;
    this.countdownTimer = null;
    this.countdownSeconds = 3;
    this.isCountingDown = false;
    this.hasKeyedFirstChar = false;
    this.speechRate = 1.0;
    this.speechVoice = null;
    this.isShadowLooping = false;
    this.shadowLoopCount = 0;
    this.shadowMaxLoops = 3;

    // Load persisted state
    this.progress = this.loadStorage('dragon_progress', {});
    this.bookmarks = this.loadStorage('dragon_bookmarks', []);
    this.mistakes = this.loadStorage('dragon_mistakes', []);
    this.customSlots = this.loadStorage('dragon_custom_slots', {});
    this.settings = this.loadStorage('dragon_settings', {
      theme: 'dark',
      soundFx: true,
      voicePref: 'en-US',
      strictMode: false,
      countdownEnabled: true,
      playbackSpeed: 1.00
    });
    if (!this.settings.playbackSpeed) {
      this.settings.playbackSpeed = this.settings.normalRate || 1.00;
    }
    this.speechRate = this.settings.playbackSpeed;

    // Survival state
    this.survival = {
      active: false,
      lives: 3,
      score: 0,
      streak: 0,
      highScore: this.loadStorage('dragon_survival_highscore', 0),
      currentIdx: null,
      timer: null,
      timeLeft: 20
    };

    // Sprint state
    this.sprint = {
      queue: [],
      currentIndex: 0,
      completedCount: 0
    };

    this.init();
  }

  init() {
    this.applyTheme(this.settings.theme);
    this.initAudioContext();
    this.initSpeechVoices();
    this.bindEvents();
    this.renderMiniGrid();
    this.renderLargeGrid();
    this.renderExplorer();
    this.loadSentence(1);
    this.updateGlobalStats();
    this.updateSpeedDisplayTag();
  }

  // --- Storage Helper ---
  loadStorage(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  saveStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  // --- Sound FX via Web Audio API ---
  initAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      this.audioCtx = new AudioContextClass();
    }
  }

  ensureAudioResume() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playSound(type) {
    if (!this.settings.soundFx || !this.audioCtx) return;
    this.ensureAudioResume();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success') {
      // Major triad arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const o = this.audioCtx.createOscillator();
        const g = this.audioCtx.createGain();
        o.connect(g);
        g.connect(this.audioCtx.destination);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now + idx * 0.07);
        g.gain.setValueAtTime(0.12, now + idx * 0.07);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
        o.start(now + idx * 0.07);
        o.stop(now + idx * 0.07 + 0.25);
      });
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'reflex') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  }

  // --- Web Speech API (TTS) ---
  initSpeechVoices() {
    if (!('speechSynthesis' in window)) return;
    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const voiceSelect = document.getElementById('select-voice');
      if (!voiceSelect) return;
      voiceSelect.innerHTML = '';

      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      englishVoices.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.voiceURI;
        opt.textContent = `${v.name} (${v.lang})`;
        if (v.lang === this.settings.voicePref || v.default) {
          opt.selected = true;
          this.speechVoice = v;
        }
        voiceSelect.appendChild(opt);
      });

      if (!this.speechVoice && englishVoices.length > 0) {
        this.speechVoice = englishVoices[0];
      }
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  speakSentence(text, callback, customRate = null) {
    if (!('speechSynthesis' in window)) {
      if (callback) callback();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = (customRate !== null) ? customRate : this.speechRate;
    if (this.speechVoice) {
      utterance.voice = this.speechVoice;
    }

    const waveform = document.getElementById('audio-waveform');
    if (waveform) waveform.classList.add('playing');

    utterance.onend = () => {
      if (waveform) waveform.classList.remove('playing');
      if (callback) callback();
    };

    utterance.onerror = () => {
      if (waveform) waveform.classList.remove('playing');
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  }

  toggleShadowLoop() {
    const btn = document.getElementById('btn-loop-shadow');
    if (this.isShadowLooping) {
      this.isShadowLooping = false;
      window.speechSynthesis.cancel();
      if (btn) btn.innerHTML = '🔄 開始循環跟讀 (3次)';
      this.showToast('已停止循環跟讀');
      return;
    }

    this.isShadowLooping = true;
    this.shadowLoopCount = 0;
    if (btn) btn.innerHTML = '⏹️ 停止跟讀循環';
    this.showToast('開始影子跟讀循環，請戴上耳機邊聽邊朗讀！');
    this.executeShadowCycle();
  }

  executeShadowCycle() {
    if (!this.isShadowLooping) return;
    const item = this.getItemById(this.currentId);
    if (!item) return;

    this.shadowLoopCount++;
    this.speakSentence(item.en, () => {
      if (!this.isShadowLooping) return;
      if (this.shadowLoopCount >= this.shadowMaxLoops) {
        this.isShadowLooping = false;
        const btn = document.getElementById('btn-loop-shadow');
        if (btn) btn.innerHTML = '🔄 開始循環跟讀 (3次)';
        this.showToast('恭喜完成 3 次跟讀訓練！');
        this.markStatus(this.currentId, 'shadowed');
        return;
      }
      // Pause 2 seconds for shadowing utterance
      setTimeout(() => {
        if (this.isShadowLooping) this.executeShadowCycle();
      }, 1800);
    });
  }

  // --- Playback Speed Controller Modal ---
  openSpeedModal() {
    const modal = document.getElementById('speed-modal');
    if (!modal) return;

    const currentRate = this.settings.playbackSpeed || 1.00;
    this.setSpeedDisplayOnly(currentRate);
    this.renderSpeedPresets(currentRate);
    modal.classList.add('open');
  }

  closeSpeedModal() {
    const modal = document.getElementById('speed-modal');
    if (modal) modal.classList.remove('open');
  }

  setSpeedDisplayOnly(val) {
    const displayNum = document.getElementById('speed-display-num');
    if (displayNum) displayNum.textContent = val.toFixed(2);

    const slider = document.getElementById('speed-range-slider');
    if (slider) slider.value = val;

    const descEl = document.getElementById('speed-desc-hint');
    if (descEl) {
      if (val <= 0.55) descEl.textContent = '超慢清晰，字字分明，拆解連音與弱讀細節';
      else if (val <= 0.85) descEl.textContent = '慢速朗讀，適合跟讀初階與咬字雕刻';
      else if (val <= 1.15) descEl.textContent = '母語人士正常自然會話語速 (常規)';
      else if (val <= 1.45) descEl.textContent = '流利快讀，挑戰大腦瞬間英語骨架反射';
      else descEl.textContent = '倍速極限挑戰，高壓磨練聽覺神經反應';
    }
  }

  setSpeedValue(val) {
    val = Math.max(0.30, Math.min(2.00, Math.round(val * 100) / 100));
    this.settings.playbackSpeed = val;
    this.speechRate = val;
    this.saveStorage('dragon_settings', this.settings);
    this.updateSpeedDisplayTag();
    this.setSpeedDisplayOnly(val);
    this.highlightActivePreset(val);
  }

  renderSpeedPresets(currentVal) {
    const container = document.getElementById('speed-presets-grid');
    if (!container) return;
    container.innerHTML = '';

    const presets = [
      { val: 0.50, sub: '超慢清晰' },
      { val: 0.75, sub: '慢速拆解' },
      { val: 1.00, sub: '正常原速' },
      { val: 1.25, sub: '自然流利' },
      { val: 1.50, sub: '快速挑戰' },
      { val: 2.00, sub: '極限倍速' }
    ];

    presets.forEach(p => {
      const pill = document.createElement('div');
      pill.className = 'speed-preset-pill';
      pill.dataset.val = p.val;
      if (Math.abs(currentVal - p.val) < 0.02) {
        pill.classList.add('active');
      }
      pill.innerHTML = `
        <span class="speed-preset-val">${p.val.toFixed(2)}x</span>
        <span class="speed-preset-sub">${p.sub}</span>
      `;
      pill.addEventListener('click', () => {
        this.setSpeedValue(p.val);
        this.playSound('tick');
      });
      container.appendChild(pill);
    });
  }

  highlightActivePreset(currentVal) {
    document.querySelectorAll('.speed-preset-pill').forEach(pill => {
      const val = parseFloat(pill.dataset.val);
      pill.classList.toggle('active', Math.abs(currentVal - val) < 0.02);
    });
  }

  updateSpeedDisplayTag() {
    const spd = this.settings.playbackSpeed || 1.00;
    const tag = document.getElementById('current-speed-tag');
    if (tag) tag.textContent = `${spd.toFixed(2)}x`;
  }

  // --- Sentence Operations ---
  getItemById(id) {
    return this.sentences.find(s => s.id === id) || this.sentences[0];
  }

  loadSentence(id) {
    this.currentId = id;
    const item = this.getItemById(id);
    if (!item) return;

    // Advance status to 'learning' if it was unstarted
    const curStatus = this.getStatus(id);
    if (curStatus === 'unstarted') {
      this.markStatus(id, 'learning', false);
    }

    // Update Header and Badges
    document.getElementById('card-id-badge').textContent = `No. ${String(item.id).padStart(2, '0')}`;
    document.getElementById('card-category-tag').textContent = item.category;

    // Bookmark status
    const bkmBtn = document.getElementById('btn-bookmark');
    if (bkmBtn) {
      if (this.bookmarks.includes(item.id)) {
        bkmBtn.classList.add('active');
        bkmBtn.innerHTML = '★ 已收藏';
      } else {
        bkmBtn.classList.remove('active');
        bkmBtn.innerHTML = '☆ 收藏';
      }
    }

    // Chinese Displays
    document.getElementById('prompt-main-cn').textContent = item.cn;
    const simpEl = document.getElementById('prompt-simplified-cn');
    simpEl.textContent = `💡 和文和訳（思考降解）：${item.simplified_cn}`;
    simpEl.classList.remove('show');
    document.getElementById('btn-toggle-simplified').textContent = '顯示意譯降解';

    // Step 1: Deconstruction
    document.getElementById('deconstruct-en-preview').textContent = item.en;
    document.getElementById('deconstruct-skeleton').textContent = item.skeleton;
    document.getElementById('deconstruct-grammar').textContent = item.grammar;
    document.getElementById('deconstruct-pitfall').textContent = item.pitfall;

    // Step 2: Shadowing
    this.renderShadowingText(item.en);

    // Step 3: Blind Recall Reset
    this.resetRecallState();

    // Step 4: Slot Sandbox
    document.getElementById('slot-formula-display').textContent = item.skeleton;
    this.renderSlotExamples(item.id);

    const savedUserSlot = this.customSlots[item.id];
    document.getElementById('user-slot-en-input').value = savedUserSlot ? savedUserSlot.en : '';
    document.getElementById('user-slot-cn-input').value = savedUserSlot ? savedUserSlot.cn : '';

    // Update mini-grid active
    document.querySelectorAll('.grid-cell').forEach(cell => {
      cell.classList.toggle('active-item', parseInt(cell.dataset.id) === item.id);
    });

    // Update sidebar list active
    document.querySelectorAll('.sidebar-sentence-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.id) === item.id);
    });

    this.updateGlobalStats();
  }

  renderSlotExamples(id) {
    const listContainer = document.getElementById('slot-examples-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const examples = (typeof DRAGON_100_EXAMPLES !== 'undefined' && DRAGON_100_EXAMPLES[id])
      ? DRAGON_100_EXAMPLES[id]
      : (this.getItemById(id)?.slot_example ? [
          {
            tag: '日常情境',
            en: this.getItemById(id).slot_example.custom_demo,
            cn: this.getItemById(id).slot_example.custom_cn
          }
        ] : []);

    examples.forEach((ex, idx) => {
      const card = document.createElement('div');
      card.className = 'slot-example-card';
      card.innerHTML = `
        <div class="slot-example-top">
          <span class="slot-context-badge">${this.escapeHtml(ex.tag || `例句 ${idx + 1}`)}</span>
          <button class="btn-speak-example" title="播放此例句原音">
            <span>🔊</span> 朗讀原音
          </button>
        </div>
        <div class="slot-example-en">${this.escapeHtml(ex.en)}</div>
        <div class="slot-example-cn">${this.escapeHtml(ex.cn)}</div>
      `;

      card.querySelector('.btn-speak-example').addEventListener('click', () => {
        this.speakSentence(ex.en);
        this.showToast(`🔊 正在朗讀：${ex.tag}`);
      });

      listContainer.appendChild(card);
    });
  }

  renderShadowingText(text) {
    const container = document.getElementById('shadowing-en-text');
    if (!container) return;
    const words = text.split(' ');
    container.innerHTML = words.map(w => {
      // Mark key content words or prepositions
      const clean = w.toLowerCase().replace(/[^a-z]/g, '');
      const isStress = clean.length > 5 || ['never', 'must', 'without', 'not', 'before', 'because'].includes(clean);
      return isStress ? `<span class="stress-word">${w}</span>` : w;
    }).join(' ');
  }

  // --- Step Switching ---
  switchStep(stepNum) {
    this.currentStep = stepNum;
    document.querySelectorAll('.step-tab').forEach(tab => {
      tab.classList.toggle('active', parseInt(tab.dataset.step) === stepNum);
    });
    document.querySelectorAll('.step-content-body').forEach(body => {
      body.classList.toggle('active', parseInt(body.dataset.step) === stepNum);
    });

    if (stepNum === 2) {
      // Auto play speech on entering step 2
      this.speakSentence(this.getItemById(this.currentId).en);
    } else if (stepNum === 3) {
      this.startCountdown();
      setTimeout(() => {
        const area = document.getElementById('typing-area');
        if (area) area.focus();
      }, 100);
    } else {
      this.stopCountdown();
    }
  }

  // --- Step 3: Blind Recall Engine ---
  startCountdown() {
    this.stopCountdown();
    this.hasKeyedFirstChar = false;
    const timerDisplay = document.getElementById('timer-count');
    const reflexBadge = document.getElementById('reflex-badge');
    if (reflexBadge) reflexBadge.style.display = 'none';

    if (!this.settings.countdownEnabled) {
      if (timerDisplay) timerDisplay.textContent = '--';
      return;
    }

    this.countdownSeconds = 3;
    if (timerDisplay) timerDisplay.textContent = this.countdownSeconds;
    this.isCountingDown = true;

    this.countdownTimer = setInterval(() => {
      this.countdownSeconds--;
      if (timerDisplay) timerDisplay.textContent = this.countdownSeconds;
      this.playSound('tick');

      if (this.countdownSeconds <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
    this.isCountingDown = false;
  }

  resetRecallState() {
    this.stopCountdown();
    const area = document.getElementById('typing-area');
    if (area) area.value = '';
    const diffPanel = document.getElementById('diff-result-panel');
    if (diffPanel) diffPanel.classList.remove('show');
    const peekEl = document.getElementById('peek-text-hint');
    if (peekEl) peekEl.style.display = 'none';
  }

  onUserTyped() {
    if (this.isCountingDown && !this.hasKeyedFirstChar) {
      this.hasKeyedFirstChar = true;
      this.stopCountdown();
      this.playSound('reflex');
      const reflexBadge = document.getElementById('reflex-badge');
      if (reflexBadge) {
        reflexBadge.style.display = 'inline-flex';
        reflexBadge.textContent = '⚡ 瞬發神經反射達成 (3秒內直覺輸出)';
      }
    }
  }

  peekHint() {
    const item = this.getItemById(this.currentId);
    const hint = item.en.split(' ').map(w => w[0] + '..').join(' ');
    this.showToast(`提示首字母：${hint}`);
  }

  // --- High-Precision Diff Engine ---
  tokenize(sentence, keepPunct = true) {
    if (keepPunct) {
      // Split into words while keeping punctuation attached or separated
      return sentence.trim().split(/\s+/);
    }
    return sentence.toLowerCase().replace(/[.,!?"';:()\-]/g, '').trim().split(/\s+/);
  }

  cleanWord(w) {
    return w.toLowerCase().replace(/^[^\w]+|[^\w]+$/g, '');
  }

  evaluateRecall() {
    const inputArea = document.getElementById('typing-area');
    const userInput = (inputArea ? inputArea.value : '').trim();
    const item = this.getItemById(this.currentId);
    if (!item) return;

    if (!userInput) {
      this.showToast('請先輸入你的英文默寫！');
      return;
    }

    const target = item.en;
    const isStrict = this.settings.strictMode;

    const userWords = userInput.split(/\s+/);
    const targetWords = target.split(/\s+/);

    // LCS (Longest Common Subsequence) on word tokens
    const m = userWords.length;
    const n = targetWords.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const match = isStrict
          ? userWords[i - 1] === targetWords[j - 1]
          : this.cleanWord(userWords[i - 1]) === this.cleanWord(targetWords[j - 1]);
        if (match) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Backtrack to build diff
    let i = m, j = n;
    const diffTokens = [];
    let errorCount = 0;

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0) {
        const exactMatch = userWords[i - 1] === targetWords[j - 1];
        const lenientMatch = this.cleanWord(userWords[i - 1]) === this.cleanWord(targetWords[j - 1]);

        if (isStrict ? exactMatch : lenientMatch) {
          if (!exactMatch && !isStrict) {
            // Case or punctuation warning
            diffTokens.unshift({ type: 'warning', text: userWords[i - 1], expect: targetWords[j - 1] });
          } else {
            diffTokens.unshift({ type: 'correct', text: userWords[i - 1] });
          }
          i--; j--;
          continue;
        }
      }

      if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        // Missing from user
        diffTokens.unshift({ type: 'missing', text: targetWords[j - 1] });
        errorCount++;
        j--;
      } else if (i > 0) {
        // Redundant or typo from user
        diffTokens.unshift({ type: 'wrong', text: userWords[i - 1] });
        errorCount++;
        i--;
      }
    }

    const isPerfect = (errorCount === 0);
    this.renderDiffResult(diffTokens, item.en, isPerfect);

    if (isPerfect) {
      this.playSound('success');
      this.markStatus(item.id, 'mastered');
      this.removeFromMistakes(item.id);
      this.showToast('🎉 太棒了！一字不差，成功點亮綠燈！');
    } else {
      this.playSound('error');
      this.addToMistakes(item.id);
      this.showToast('發現拼寫或文法差異，請對照紅綠標記！');
    }
  }

  renderDiffResult(diffTokens, standardEn, isPerfect) {
    const diffPanel = document.getElementById('diff-result-panel');
    const badge = document.getElementById('diff-badge');
    const wrapper = document.getElementById('diff-tokens-wrapper');
    const standardEl = document.getElementById('diff-standard-solution');

    if (!diffPanel || !wrapper) return;
    diffPanel.classList.add('show');

    if (isPerfect) {
      badge.className = 'diff-status-badge perfect';
      badge.innerHTML = '✓ 100% 精準通關 (Mastered)';
    } else {
      badge.className = 'diff-status-badge has-error';
      badge.innerHTML = '✗ 存在拼寫或結構差異 (Review Needed)';
    }

    wrapper.innerHTML = diffTokens.map(tok => {
      if (tok.type === 'correct') {
        return `<span class="diff-token correct">${this.escapeHtml(tok.text)}</span>`;
      } else if (tok.type === 'warning') {
        return `<span class="diff-token warning" title="標點或大小寫差異（預期：${tok.expect}）">${this.escapeHtml(tok.text)}*</span>`;
      } else if (tok.type === 'missing') {
        return `<span class="diff-token missing" title="缺漏單字">[+ ${this.escapeHtml(tok.text)}]</span>`;
      } else {
        return `<span class="diff-token wrong" title="拼錯或多餘">${this.escapeHtml(tok.text)}</span>`;
      }
    }).join(' ');

    standardEl.textContent = standardEn;
  }

  // --- Step 4: Slot-Filling Sandbox ---
  saveUserSlot() {
    const enVal = document.getElementById('user-slot-en-input').value.trim();
    const cnVal = document.getElementById('user-slot-cn-input').value.trim();

    if (!enVal) {
      this.showToast('請輸入替換後的英文造句！');
      return;
    }

    this.customSlots[this.currentId] = { en: enVal, cn: cnVal };
    this.saveStorage('dragon_custom_slots', this.customSlots);
    this.playSound('success');
    this.showToast('個人化造句已儲存到你的筆記本！');
  }

  // --- Status and Stats Management ---
  getStatus(id) {
    return (this.progress[id] && this.progress[id].status) ? this.progress[id].status : 'unstarted';
  }

  markStatus(id, newStatus, updateUI = true) {
    if (!this.progress[id]) {
      this.progress[id] = { status: newStatus, attempts: 1, masteredAt: null };
    } else {
      this.progress[id].status = newStatus;
      this.progress[id].attempts = (this.progress[id].attempts || 0) + 1;
    }

    if (newStatus === 'mastered') {
      this.progress[id].masteredAt = new Date().toISOString();
    }

    this.saveStorage('dragon_progress', this.progress);
    if (updateUI) {
      this.renderMiniGrid();
      this.renderLargeGrid();
      this.updateGlobalStats();
    }
  }

  toggleBookmark(id) {
    const idx = this.bookmarks.indexOf(id);
    if (idx >= 0) {
      this.bookmarks.splice(idx, 1);
      this.showToast(`已取消 No.${id} 收藏`);
    } else {
      this.bookmarks.push(id);
      this.showToast(`已將 No.${id} 加入收藏`);
    }
    this.saveStorage('dragon_bookmarks', this.bookmarks);
    this.loadSentence(this.currentId);
  }

  addToMistakes(id) {
    if (!this.mistakes.includes(id)) {
      this.mistakes.push(id);
      this.saveStorage('dragon_mistakes', this.mistakes);
    }
  }

  removeFromMistakes(id) {
    const idx = this.mistakes.indexOf(id);
    if (idx >= 0) {
      this.mistakes.splice(idx, 1);
      this.saveStorage('dragon_mistakes', this.mistakes);
    }
  }

  updateGlobalStats() {
    let masteredCount = 0;
    let learningCount = 0;
    let shadowedCount = 0;

    for (let i = 1; i <= 100; i++) {
      const st = this.getStatus(i);
      if (st === 'mastered') masteredCount++;
      else if (st === 'shadowed') shadowedCount++;
      else if (st === 'learning') learningCount++;
    }

    const masteredEls = document.querySelectorAll('.stat-val-mastered');
    masteredEls.forEach(el => el.textContent = masteredCount);

    const percent = Math.round((masteredCount / 100) * 100);
    const percentEls = document.querySelectorAll('.stat-val-percent');
    percentEls.forEach(el => el.textContent = `${percent}%`);

    const learningEls = document.querySelectorAll('.stat-val-learning');
    learningEls.forEach(el => el.textContent = learningCount + shadowedCount);

    const mistakesEls = document.querySelectorAll('.stat-val-mistakes');
    mistakesEls.forEach(el => el.textContent = this.mistakes.length);

    const pill = document.getElementById('header-mastered-count');
    if (pill) pill.textContent = `${masteredCount}/100 綠燈`;
  }

  // --- Rendering Grids ---
  renderMiniGrid() {
    const container = document.getElementById('mini-grid');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.id = i;
      cell.textContent = i;

      const st = this.getStatus(i);
      if (st !== 'unstarted') {
        cell.classList.add(`status-${st}`);
      }
      if (i === this.currentId) {
        cell.classList.add('active-item');
      }

      cell.title = `No.${i}: ${this.getItemById(i).cn}`;
      cell.addEventListener('click', () => {
        this.loadSentence(i);
      });
      container.appendChild(cell);
    }
  }

  renderLargeGrid(filter = 'all') {
    const container = document.getElementById('large-100-grid');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
      const st = this.getStatus(i);
      const isBookmarked = this.bookmarks.includes(i);
      const isMistake = this.mistakes.includes(i);

      if (filter === 'mastered' && st !== 'mastered') continue;
      if (filter === 'incomplete' && st === 'mastered') continue;
      if (filter === 'bookmarked' && !isBookmarked) continue;
      if (filter === 'mistakes' && !isMistake) continue;

      const cell = document.createElement('div');
      cell.className = 'grid-cell-large';
      if (st !== 'unstarted') cell.classList.add(`status-${st}`);

      cell.innerHTML = `
        <div class="cell-num">${String(i).padStart(2, '0')}</div>
        <div class="cell-status-dot"></div>
      `;

      cell.title = `No.${i}: ${this.getItemById(i).cn}`;
      cell.addEventListener('click', () => {
        this.switchView('study');
        this.loadSentence(i);
      });
      container.appendChild(cell);
    }
  }

  // --- Rendering Explorer View ---
  renderExplorer(searchQuery = '', categoryFilter = 'all') {
    const container = document.getElementById('sentences-table-wrapper');
    if (!container) return;
    container.innerHTML = '';

    const query = searchQuery.trim().toLowerCase();
    const filtered = this.sentences.filter(s => {
      const matchCat = (categoryFilter === 'all' || s.category === categoryFilter);
      const matchQuery = !query ||
        s.en.toLowerCase().includes(query) ||
        s.cn.toLowerCase().includes(query) ||
        s.grammar.toLowerCase().includes(query) ||
        String(s.id) === query;
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted);">無符合條件的句型</div>';
      return;
    }

    filtered.forEach(item => {
      const st = this.getStatus(item.id);
      const row = document.createElement('div');
      row.className = 'sentence-row-card';

      row.innerHTML = `
        <div class="row-left">
          <div class="row-id">${String(item.id).padStart(2, '0')}</div>
          <div class="row-content">
            <div class="row-en">${this.escapeHtml(item.en)}</div>
            <div class="row-cn">${this.escapeHtml(item.cn)}</div>
            <div class="row-grammar">📌 ${this.escapeHtml(item.grammar)}</div>
          </div>
        </div>
        <div class="row-actions">
          <button class="btn-icon btn-row-speak" title="原音朗讀">🔊</button>
          <button class="btn-pill btn-row-study" style="font-size: 0.8rem;">研練</button>
        </div>
      `;

      row.querySelector('.btn-row-speak').addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakSentence(item.en);
      });

      row.querySelector('.btn-row-study').addEventListener('click', () => {
        this.switchView('study');
        this.loadSentence(item.id);
      });

      container.appendChild(row);
    });
  }

  // --- Daily Sprint (每日 5 句) ---
  initDailySprint() {
    // Pick 3 non-mastered + 2 review
    const unmastered = this.sentences.filter(s => this.getStatus(s.id) !== 'mastered');
    const mastered = this.sentences.filter(s => this.getStatus(s.id) === 'mastered');

    const shuffledUnmastered = [...unmastered].sort(() => 0.5 - Math.random());
    const shuffledMastered = [...mastered].sort(() => 0.5 - Math.random());

    let sprintSet = [];
    if (shuffledUnmastered.length >= 3) {
      sprintSet.push(...shuffledUnmastered.slice(0, 3));
      if (shuffledMastered.length >= 2) {
        sprintSet.push(...shuffledMastered.slice(0, 2));
      } else {
        sprintSet.push(...shuffledUnmastered.slice(3, 5));
      }
    } else {
      sprintSet = [...this.sentences].sort(() => 0.5 - Math.random()).slice(0, 5);
    }

    this.sprint.queue = sprintSet;
    this.sprint.currentIndex = 0;
    this.sprint.completedCount = 0;

    this.renderSprintUI();
  }

  renderSprintUI() {
    const dotsContainer = document.getElementById('sprint-progress-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    this.sprint.queue.forEach((item, idx) => {
      const dot = document.createElement('div');
      dot.className = 'sprint-dot';
      dot.textContent = idx + 1;
      if (idx < this.sprint.completedCount) dot.classList.add('done');
      if (idx === this.sprint.currentIndex) dot.classList.add('current');
      dotsContainer.appendChild(dot);
    });

    const currentItem = this.sprint.queue[this.sprint.currentIndex];
    if (!currentItem) {
      document.getElementById('sprint-content-area').innerHTML = `
        <div style="text-align: center; padding: 3rem;">
          <h2 style="color: #10b981; margin-bottom: 1rem;">🎉 今日衝刺 5 句全部通關！</h2>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">大腦神經骨架已經建立，明日請繼續保持！</p>
          <button class="btn-pill" id="btn-restart-sprint" style="background: #10b981; color: #fff;">再衝刺一輪 (New Sprint)</button>
        </div>
      `;
      document.getElementById('btn-restart-sprint')?.addEventListener('click', () => this.initDailySprint());
      return;
    }

    document.getElementById('sprint-prompt-cn').textContent = currentItem.cn;
    document.getElementById('sprint-typing-area').value = '';
    document.getElementById('sprint-diff-panel').classList.remove('show');
  }

  evaluateSprintRecall() {
    const currentItem = this.sprint.queue[this.sprint.currentIndex];
    if (!currentItem) return;
    const input = document.getElementById('sprint-typing-area').value.trim();

    if (!input) {
      this.showToast('請輸入英文默寫！');
      return;
    }

    const isMatch = this.cleanWord(input.replace(/[.,!?"';:()\-]/g, '')) === 
                    this.cleanWord(currentItem.en.replace(/[.,!?"';:()\-]/g, ''));

    const diffPanel = document.getElementById('sprint-diff-panel');
    diffPanel.classList.add('show');

    if (isMatch) {
      this.playSound('success');
      this.markStatus(currentItem.id, 'mastered');
      this.sprint.completedCount++;
      this.sprint.currentIndex++;
      this.showToast('答對！自動晉級下一題');
      setTimeout(() => this.renderSprintUI(), 1200);
    } else {
      this.playSound('error');
      this.addToMistakes(currentItem.id);
      document.getElementById('sprint-diff-feedback').innerHTML = `
        <div style="color: #ef4444; margin-bottom: 0.5rem;">尚未完全精準，請再對照標準句：</div>
        <div style="color: #38bdf8; font-family: var(--font-mono); font-size: 1.1rem;">${currentItem.en}</div>
      `;
    }
  }

  // --- Survival Challenge (百句生存戰) ---
  startSurvival() {
    this.survival.active = true;
    this.survival.lives = 3;
    this.survival.score = 0;
    this.survival.streak = 0;

    document.getElementById('survival-start-card').style.display = 'none';
    document.getElementById('survival-play-card').style.display = 'block';
    document.getElementById('survival-gameover-card').style.display = 'none';

    this.nextSurvivalQuestion();
  }

  nextSurvivalQuestion() {
    if (this.survival.lives <= 0) {
      this.endSurvival();
      return;
    }

    // Pick random sentence
    const randIdx = Math.floor(Math.random() * this.sentences.length);
    this.survival.currentIdx = randIdx;
    const item = this.sentences[randIdx];

    document.getElementById('survival-prompt-cn').textContent = item.cn;
    document.getElementById('survival-typing-area').value = '';
    document.getElementById('survival-typing-area').focus();

    this.updateSurvivalHUD();

    // Start 20s question timer
    clearInterval(this.survival.timer);
    this.survival.timeLeft = 20;
    document.getElementById('survival-timer-val').textContent = `${this.survival.timeLeft}s`;

    this.survival.timer = setInterval(() => {
      this.survival.timeLeft--;
      document.getElementById('survival-timer-val').textContent = `${this.survival.timeLeft}s`;
      if (this.survival.timeLeft <= 0) {
        clearInterval(this.survival.timer);
        this.survivalWrong('時間截止！');
      }
    }, 1000);
  }

  updateSurvivalHUD() {
    const hearts = '❤️'.repeat(this.survival.lives) + '🖤'.repeat(Math.max(0, 3 - this.survival.lives));
    document.getElementById('survival-hearts').textContent = hearts;
    document.getElementById('survival-score').textContent = `得分: ${this.survival.score}`;
    document.getElementById('survival-streak').textContent = `連勝: ${this.survival.streak}`;
    document.getElementById('survival-highscore').textContent = `歷史最佳: ${this.survival.highScore}`;
  }

  evaluateSurvivalRecall() {
    clearInterval(this.survival.timer);
    const item = this.sentences[this.survival.currentIdx];
    const input = document.getElementById('survival-typing-area').value.trim();

    const isMatch = this.cleanWord(input.replace(/[.,!?"';:()\-]/g, '')) === 
                    this.cleanWord(item.en.replace(/[.,!?"';:()\-]/g, ''));

    if (isMatch) {
      this.playSound('success');
      this.survival.streak++;
      const bonus = this.survival.streak * 50;
      this.survival.score += (100 + bonus);
      this.markStatus(item.id, 'mastered');

      if (this.survival.score > this.survival.highScore) {
        this.survival.highScore = this.survival.score;
        this.saveStorage('dragon_survival_highscore', this.survival.highScore);
      }

      this.showToast(`🔥 連勝 +1！獲得 ${100 + bonus} 分！`);
      setTimeout(() => this.nextSurvivalQuestion(), 600);
    } else {
      this.survivalWrong(`拼寫錯誤！正確標準句：${item.en}`);
    }
  }

  survivalWrong(msg) {
    this.playSound('error');
    this.survival.lives--;
    this.survival.streak = 0;
    this.showToast(msg);
    this.updateSurvivalHUD();

    if (this.survival.lives <= 0) {
      this.endSurvival();
    } else {
      setTimeout(() => this.nextSurvivalQuestion(), 1500);
    }
  }

  endSurvival() {
    clearInterval(this.survival.timer);
    this.survival.active = false;
    document.getElementById('survival-play-card').style.display = 'none';
    document.getElementById('survival-gameover-card').style.display = 'block';
    document.getElementById('survival-final-score').textContent = this.survival.score;
    document.getElementById('survival-final-high').textContent = this.survival.highScore;
  }

  // --- Views Navigation ---
  switchView(viewName) {
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.toggle('active', sec.dataset.view === viewName);
    });
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    if (viewName === 'sprint') {
      this.initDailySprint();
    } else if (viewName === 'grid') {
      this.renderLargeGrid();
    } else if (viewName === 'explorer') {
      this.renderExplorer();
    }
  }

  // --- Theme ---
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.settings.theme = theme;
    this.saveStorage('dragon_settings', this.settings);
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  toggleTheme() {
    const next = this.settings.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  // --- Toast notifications ---
  showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  // --- Event Bindings ---
  bindEvents() {
    // Navigation Tabs
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchView(btn.dataset.view);
      });
    });

    // Theme & Audio Controls in Header
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('btn-toggle-sound')?.addEventListener('click', () => {
      this.settings.soundFx = !this.settings.soundFx;
      this.saveStorage('dragon_settings', this.settings);
      document.getElementById('btn-toggle-sound').textContent = this.settings.soundFx ? '🔔' : '🔕';
      this.showToast(this.settings.soundFx ? '提示音效已開啟' : '提示音效已靜音');
    });

    // Guide Modal
    document.getElementById('btn-open-guide')?.addEventListener('click', () => {
      document.getElementById('guide-modal').classList.add('open');
    });
    document.getElementById('btn-close-guide')?.addEventListener('click', () => {
      document.getElementById('guide-modal').classList.remove('open');
    });
    document.getElementById('guide-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'guide-modal') {
        document.getElementById('guide-modal').classList.remove('open');
      }
    });

    // Shortcuts Modal
    document.getElementById('btn-open-shortcuts')?.addEventListener('click', () => {
      document.getElementById('shortcuts-modal').classList.add('open');
    });
    document.getElementById('btn-close-shortcuts')?.addEventListener('click', () => {
      document.getElementById('shortcuts-modal').classList.remove('open');
    });
    document.getElementById('shortcuts-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'shortcuts-modal') {
        document.getElementById('shortcuts-modal').classList.remove('open');
      }
    });

    // Reset Data Modal / Button
    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm('確定要重置所有通關進度與筆記記錄嗎？（此動作不可復原）')) {
        localStorage.clear();
        location.reload();
      }
    });

    // Step Tabs
    document.querySelectorAll('.step-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.switchStep(parseInt(tab.dataset.step));
      });
    });

    // Sentence Card Prev / Next
    document.getElementById('btn-prev-sentence')?.addEventListener('click', () => {
      if (this.currentId > 1) this.loadSentence(this.currentId - 1);
    });
    document.getElementById('btn-next-sentence')?.addEventListener('click', () => {
      if (this.currentId < 100) this.loadSentence(this.currentId + 1);
    });
    document.getElementById('btn-bottom-prev')?.addEventListener('click', () => {
      if (this.currentId > 1) this.loadSentence(this.currentId - 1);
    });
    document.getElementById('btn-bottom-next')?.addEventListener('click', () => {
      if (this.currentId < 100) this.loadSentence(this.currentId + 1);
    });

    // Bookmark button
    document.getElementById('btn-bookmark')?.addEventListener('click', () => {
      this.toggleBookmark(this.currentId);
    });

    // Simplified Chinese toggle
    document.getElementById('btn-toggle-simplified')?.addEventListener('click', () => {
      const el = document.getElementById('prompt-simplified-cn');
      const isShow = el.classList.toggle('show');
      document.getElementById('btn-toggle-simplified').textContent = isShow ? '隱藏意譯降解' : '顯示意譯降解';
    });

    // Step 1 Quick Audio Controls
    document.getElementById('btn-step1-speak')?.addEventListener('click', () => {
      this.speakSentence(this.getItemById(this.currentId).en);
    });
    document.getElementById('btn-step1-tune')?.addEventListener('click', () => {
      this.openSpeedModal();
    });

    // Step 2 Shadowing Controls
    document.getElementById('btn-play-shadow')?.addEventListener('click', () => {
      this.speakSentence(this.getItemById(this.currentId).en);
    });
    document.getElementById('btn-open-speed-modal')?.addEventListener('click', () => {
      this.openSpeedModal();
    });
    document.getElementById('btn-loop-shadow')?.addEventListener('click', () => {
      this.toggleShadowLoop();
    });
    document.getElementById('btn-shadow-complete')?.addEventListener('click', () => {
      this.playSound('success');
      this.markStatus(this.currentId, 'shadowed');
      this.showToast('跟讀完成！自動進入極限盲測');
      this.switchStep(3);
    });
    document.getElementById('select-voice')?.addEventListener('change', (e) => {
      const voices = window.speechSynthesis.getVoices();
      this.speechVoice = voices.find(v => v.voiceURI === e.target.value);
    });

    // Speed Modal Controls (matching user screenshot)
    document.getElementById('btn-close-speed')?.addEventListener('click', () => {
      this.closeSpeedModal();
    });
    document.getElementById('btn-close-speed-x')?.addEventListener('click', () => {
      this.closeSpeedModal();
    });
    document.getElementById('btn-apply-speed')?.addEventListener('click', () => {
      this.closeSpeedModal();
      this.showToast('✓ 播放速度已儲存');
    });
    document.getElementById('speed-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'speed-modal') {
        this.closeSpeedModal();
      }
    });

    document.getElementById('btn-speed-minus')?.addEventListener('click', () => {
      const cur = this.settings.playbackSpeed || 1.00;
      this.setSpeedValue(cur - 0.05);
      this.playSound('tick');
    });
    document.getElementById('btn-speed-plus')?.addEventListener('click', () => {
      const cur = this.settings.playbackSpeed || 1.00;
      this.setSpeedValue(cur + 0.05);
      this.playSound('tick');
    });

    document.getElementById('speed-range-slider')?.addEventListener('input', (e) => {
      this.setSpeedValue(parseFloat(e.target.value));
    });

    document.getElementById('btn-test-speed')?.addEventListener('click', () => {
      const targetRate = this.settings.playbackSpeed || 1.00;
      this.speakSentence(this.getItemById(this.currentId).en, null, targetRate);
      this.showToast(`🔊 正在以 ${targetRate.toFixed(2)}x 試聽原句`);
    });

    // Step 3 Blind Recall Controls
    document.getElementById('typing-area')?.addEventListener('input', () => {
      this.onUserTyped();
    });
    document.getElementById('btn-submit-recall')?.addEventListener('click', () => {
      this.evaluateRecall();
    });
    document.getElementById('btn-peek-hint')?.addEventListener('click', () => {
      this.peekHint();
    });
    document.getElementById('chk-strict-mode')?.addEventListener('change', (e) => {
      this.settings.strictMode = e.target.checked;
      this.saveStorage('dragon_settings', this.settings);
    });
    document.getElementById('chk-countdown')?.addEventListener('change', (e) => {
      this.settings.countdownEnabled = e.target.checked;
      this.saveStorage('dragon_settings', this.settings);
      if (!e.target.checked) this.stopCountdown();
    });

    // Step 4 Slot Sandbox
    document.getElementById('btn-save-slot')?.addEventListener('click', () => {
      this.saveUserSlot();
    });

    // Grid Filter Tags
    document.querySelectorAll('.btn-filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderLargeGrid(btn.dataset.filter);
      });
    });

    // Explorer Filter & Search
    document.getElementById('explorer-search-input')?.addEventListener('input', (e) => {
      const cat = document.getElementById('explorer-category-select')?.value || 'all';
      this.renderExplorer(e.target.value, cat);
    });
    document.getElementById('explorer-category-select')?.addEventListener('change', (e) => {
      const q = document.getElementById('explorer-search-input')?.value || '';
      this.renderExplorer(q, e.target.value);
    });

    // Daily Sprint Events
    document.getElementById('btn-submit-sprint')?.addEventListener('click', () => {
      this.evaluateSprintRecall();
    });
    document.getElementById('btn-skip-sprint')?.addEventListener('click', () => {
      this.sprint.currentIndex++;
      this.renderSprintUI();
    });

    // Survival Challenge Events
    document.getElementById('btn-start-survival')?.addEventListener('click', () => {
      this.startSurvival();
    });
    document.getElementById('btn-submit-survival')?.addEventListener('click', () => {
      this.evaluateSurvivalRecall();
    });
    document.getElementById('btn-restart-survival')?.addEventListener('click', () => {
      this.startSurvival();
    });

    // Populate Sidebar Sentence List
    const sidebarList = document.getElementById('sidebar-sentence-list');
    if (sidebarList) {
      this.sentences.forEach(s => {
        const itemBtn = document.createElement('button');
        itemBtn.className = 'sidebar-sentence-btn';
        itemBtn.dataset.id = s.id;
        itemBtn.innerHTML = `
          <span class="sidebar-sentence-num">${String(s.id).padStart(2, '0')}</span>
          <span class="sidebar-sentence-text">${this.escapeHtml(s.cn)}</span>
        `;
        itemBtn.addEventListener('click', () => this.loadSentence(s.id));
        sidebarList.appendChild(itemBtn);
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts if user is typing in general text inputs unless specifically Enter
      const activeEl = document.activeElement;
      const isInput = (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA'));

      if (e.key === 'Enter') {
        if (activeEl && activeEl.id === 'typing-area' && (e.ctrlKey || e.metaKey || !e.shiftKey)) {
          e.preventDefault();
          this.evaluateRecall();
        } else if (activeEl && activeEl.id === 'sprint-typing-area') {
          e.preventDefault();
          this.evaluateSprintRecall();
        } else if (activeEl && activeEl.id === 'survival-typing-area') {
          e.preventDefault();
          this.evaluateSurvivalRecall();
        }
      }

      // Alt + 1..4 switch steps
      if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        this.switchStep(parseInt(e.key));
      }

      // Alt + ArrowLeft / ArrowRight to switch sentences
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        if (this.currentId > 1) this.loadSentence(this.currentId - 1);
      }
      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        if (this.currentId < 100) this.loadSentence(this.currentId + 1);
      }

      // Ctrl + Space to speak standard rate
      if (e.ctrlKey && !e.altKey && e.code === 'Space') {
        e.preventDefault();
        this.speakSentence(this.getItemById(this.currentId).en);
      }

      // Tab for Peek Hint in recall step
      if (e.key === 'Tab' && activeEl && activeEl.id === 'typing-area') {
        e.preventDefault();
        this.peekHint();
      }
    });
  }
}

// Instantiate App on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new DragonApp();
});
