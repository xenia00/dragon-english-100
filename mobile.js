// ========================================================
// Dragon English 100 - 手機掌中極速版 (Mobile Core Engine)
// ========================================================

class DragonMobileApp {
  constructor() {
    this.sentences = (typeof DRAGON_100_DATA !== 'undefined') ? DRAGON_100_DATA : [];
    this.examples = (typeof DRAGON_100_EXAMPLES !== 'undefined') ? DRAGON_100_EXAMPLES : {};
    
    this.currentId = 1;
    this.currentView = 'flashcard';
    this.isCardFlipped = false;
    this.activeExIndex = 0;
    this.audioCtx = null;
    this.speechVoice = null;
    this.voices = [];
    
    // Shared LocalStorage
    this.progress = this.loadStorage('dragon_progress', {});
    this.bookmarks = this.loadStorage('dragon_bookmarks', []);
    this.settings = this.loadStorage('dragon_settings', {
      theme: 'dark',
      soundFx: true,
      playbackSpeed: 1.00,
      accentPref: 'en-US'
    });
    if (!this.settings.playbackSpeed) this.settings.playbackSpeed = 1.00;
    this.selectedAccent = this.settings.accentPref || 'en-US';

    // Puzzle State
    this.puzzle = {
      correctChunks: [],
      placedChunks: [],
      availableChunks: [],
      isSolved: false
    };

    // Player State
    this.player = {
      isPlaying: false,
      loopMode: 'all', // 'all' | 'star' | 'repeat-single'
      queue: [],
      queueIndex: 0,
      timer: null
    };

    // Touch gesture state
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;

    this.init();
  }

  init() {
    this.initAudioContext();
    this.initSpeechVoices();
    this.bindEvents();
    this.updateTopProgress();
    this.updateSpeedDisplays();
    this.loadSentence(1);
    this.renderSentenceList();
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

  // --- Web Audio Synthesis (Sound FX) ---
  initAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
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
    } else if (type === 'flip') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'placed') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'success') {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const o = this.audioCtx.createOscillator();
        const g = this.audioCtx.createGain();
        o.connect(g);
        g.connect(this.audioCtx.destination);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now + idx * 0.06);
        g.gain.setValueAtTime(0.12, now + idx * 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.22);
        o.start(now + idx * 0.06);
        o.stop(now + idx * 0.06 + 0.22);
      });
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(175, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  }

  // --- Web Speech API (Audio Playback) ---
  speakSentence(text, callback, customRate = null) {
    if (!('speechSynthesis' in window)) {
      if (callback) callback();
      return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = (customRate !== null) ? customRate : (this.settings.playbackSpeed || 1.00);
    if (this.speechVoice) {
      utterance.voice = this.speechVoice;
    }

    const pulseRing = document.getElementById('audio-pulse-ring');
    if (pulseRing) pulseRing.classList.add('active');

    const disc = document.getElementById('player-disc');
    const wave = document.getElementById('player-wave');
    if (disc) disc.classList.add('spinning');
    if (wave) wave.classList.add('playing');

    utterance.onend = () => {
      if (pulseRing) pulseRing.classList.remove('active');
      if (disc) disc.classList.remove('spinning');
      if (wave) wave.classList.remove('playing');
      if (callback) callback();
    };

    utterance.onerror = () => {
      if (pulseRing) pulseRing.classList.remove('active');
      if (disc) disc.classList.remove('spinning');
      if (wave) wave.classList.remove('playing');
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const pulseRing = document.getElementById('audio-pulse-ring');
    if (pulseRing) pulseRing.classList.remove('active');
    const disc = document.getElementById('player-disc');
    const wave = document.getElementById('player-wave');
    if (disc) disc.classList.remove('spinning');
    if (wave) wave.classList.remove('playing');
  }

  // --- Speech Voice & Accent Selector ---
  initSpeechVoices() {
    if (!('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      this.voices = allVoices.filter(v => v.lang.toLowerCase().startsWith('en'));
      if (this.voices.length === 0) {
        this.voices = allVoices; // fallback if no specific en filter matches
      }
      this.populateVoiceSelect();
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  populateVoiceSelect() {
    const select = document.getElementById('sheet-voice-select');
    if (!select) return;

    select.innerHTML = '';
    if (this.voices.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '系統預設英文語音';
      select.appendChild(opt);
      return;
    }

    this.voices.forEach((voice) => {
      const opt = document.createElement('option');
      opt.value = voice.voiceURI;
      opt.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [預設]' : ''}`;
      select.appendChild(opt);
    });

    const savedURI = this.settings.voiceURI;
    if (savedURI && this.voices.some(v => v.voiceURI === savedURI)) {
      select.value = savedURI;
      this.speechVoice = this.voices.find(v => v.voiceURI === savedURI);
    } else {
      const targetAccent = this.selectedAccent || 'en-US';
      const matchingVoice = this.voices.find(v => v.lang.replace('_', '-').toLowerCase().startsWith(targetAccent.toLowerCase())) || this.voices[0];
      if (matchingVoice) {
        select.value = matchingVoice.voiceURI;
        this.speechVoice = matchingVoice;
      }
    }
  }

  selectVoiceAccent(langPrefix) {
    this.selectedAccent = langPrefix;
    this.settings.accentPref = langPrefix;

    document.querySelectorAll('.sheet-voice-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.lang === langPrefix);
    });

    const matchingVoice = this.voices.find(v => v.lang.replace('_', '-').toLowerCase().startsWith(langPrefix.toLowerCase()));
    if (matchingVoice) {
      this.speechVoice = matchingVoice;
      this.settings.voiceURI = matchingVoice.voiceURI;
      const select = document.getElementById('sheet-voice-select');
      if (select) select.value = matchingVoice.voiceURI;
      this.saveStorage('dragon_settings', this.settings);
      this.showToast(`已切換口音：${matchingVoice.name}`);
    } else {
      this.showToast(`已切換偏好，若系統無特定語音將使用預設`);
    }
  }

  // --- Sentence Operations ---
  getItemById(id) {
    return this.sentences.find(s => s.id === id) || this.sentences[0];
  }

  loadSentence(id) {
    if (id < 1) id = 1;
    if (id > 100) id = 100;
    this.currentId = id;
    const item = this.getItemById(id);

    // Reset Card Flip to Front
    this.isCardFlipped = false;
    const cardEl = document.getElementById('flashcard-card');
    if (cardEl) cardEl.classList.remove('flipped');

    // Update Header Bookmark state
    this.updateBookmarkButton();

    // Render Flashcard View
    this.renderFlashcard(item);

    // Setup Puzzle View
    this.initPuzzle(item);

    // Update Player View details
    this.updatePlayerCard(item);

    // Update Progress
    this.updateTopProgress();
  }

  nextSentence() {
    if (this.currentId < 100) {
      this.playSound('tick');
      this.loadSentence(this.currentId + 1);
    } else {
      this.showToast('已是最後一句！');
    }
  }

  prevSentence() {
    if (this.currentId > 1) {
      this.playSound('tick');
      this.loadSentence(this.currentId - 1);
    } else {
      this.showToast('已是第一句！');
    }
  }

  // --- Flashcard View Logic ---
  renderFlashcard(item) {
    // Navigator ID & Dot
    const idEl = document.getElementById('fc-current-id');
    if (idEl) idEl.textContent = `No. ${String(item.id).padStart(2, '0')}`;

    const dotEl = document.getElementById('fc-status-dot');
    if (dotEl) {
      const st = this.getStatus(item.id);
      dotEl.className = 'id-status-dot ' + (st === 'mastered' ? 'mastered' : st === 'learning' ? 'learning' : '');
    }

    // Card Front
    const catEl = document.getElementById('fc-category-badge');
    if (catEl) catEl.textContent = item.grammar.split('：')[0] || '核心句型骨架';

    const cnEl = document.getElementById('fc-main-cn');
    if (cnEl) cnEl.textContent = item.cn;

    const degEl = document.getElementById('fc-degraded-cn');
    if (degEl) {
      degEl.textContent = `💡 和文和訳（思考降解）：${item.simplified_cn}`;
      degEl.classList.remove('show');
    }

    // Card Back
    const backEn = document.getElementById('fc-back-en');
    if (backEn) backEn.textContent = item.en;

    const backSkel = document.getElementById('fc-back-skeleton');
    if (backSkel) backSkel.textContent = `🏗️ 骨架：${item.skeleton}`;

    const backPit = document.getElementById('fc-back-pitfall');
    if (backPit) backPit.textContent = `⚠️ 竹岡流避坑提示：${item.pitfall}`;

    // Render 3 Examples in Card Back
    this.renderCardExamples(item.id);
  }

  renderCardExamples(id) {
    const examples = this.examples[id] || [];
    this.activeExIndex = 0;

    const tabsContainer = document.getElementById('fc-example-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = '';
      const defaultLabels = ['💼 職場', '☕ 日常', '💬 決策'];
      for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.className = `ex-tab-btn ${i === 0 ? 'active' : ''}`;
        const ex = examples[i];
        btn.textContent = ex ? (ex.tag.split(' ')[0] + ' ' + (ex.tag.split(' ')[1] || '情境')) : defaultLabels[i];
        btn.addEventListener('click', (e) => {
          e.stopPropagation(); // prevent card flip
          this.switchExampleTab(i, examples);
        });
        tabsContainer.appendChild(btn);
      }
    }

    this.displayExampleContent(examples[0]);
  }

  switchExampleTab(index, examples) {
    this.activeExIndex = index;
    document.querySelectorAll('.ex-tab-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
    this.displayExampleContent(examples[index]);
  }

  displayExampleContent(ex) {
    if (!ex) return;
    const tagEl = document.getElementById('fc-ex-tag');
    const enEl = document.getElementById('fc-ex-en');
    const cnEl = document.getElementById('fc-ex-cn');

    if (tagEl) tagEl.textContent = ex.tag;
    if (enEl) enEl.textContent = ex.en;
    if (cnEl) cnEl.textContent = ex.cn;

    const btnSpeak = document.getElementById('btn-fc-speak-example');
    if (btnSpeak) {
      btnSpeak.onclick = (e) => {
        e.stopPropagation();
        this.speakSentence(ex.en);
        this.showToast(`🔊 正在朗讀：${ex.tag}`);
      };
    }
  }

  toggleCardFlip() {
    const cardEl = document.getElementById('flashcard-card');
    if (!cardEl) return;
    this.isCardFlipped = !this.isCardFlipped;
    cardEl.classList.toggle('flipped', this.isCardFlipped);
    this.playSound('flip');
  }

  // --- Puzzle View Logic (詞塊速拼) ---
  initPuzzle(item) {
    this.puzzle.isSolved = false;
    this.puzzle.placedChunks = [];
    this.puzzle.correctChunks = this.splitIntoChunks(item.en);
    
    // Scramble chunks with unique ids
    const chips = this.puzzle.correctChunks.map((chunk, idx) => ({
      id: `c_${idx}`,
      text: chunk,
      order: idx
    }));
    this.puzzle.availableChunks = [...chips].sort(() => 0.5 - Math.random());

    // UI Updates
    const puzId = document.getElementById('puz-current-id');
    if (puzId) puzId.textContent = `No. ${String(item.id).padStart(2, '0')}`;

    const puzCn = document.getElementById('puz-cn-prompt');
    if (puzCn) puzCn.textContent = item.cn;

    const feedbackBanner = document.getElementById('puz-feedback-banner');
    if (feedbackBanner) {
      feedbackBanner.className = 'puzzle-feedback-banner';
      document.getElementById('puz-feedback-text').textContent = '';
    }

    const slotContainer = document.getElementById('puz-slot-container');
    if (slotContainer) {
      slotContainer.classList.remove('solved');
    }

    this.renderPuzzleUI();
  }

  splitIntoChunks(text) {
    // 1. First split by punctuation like commas or semicolons
    const commaParts = text.split(/([,;:]\s+)/);
    let raw = [];
    for (let i = 0; i < commaParts.length; i += 2) {
      const part = commaParts[i] || '';
      const punct = commaParts[i + 1] || '';
      if ((part + punct).trim()) {
        raw.push((part + punct).trim());
      }
    }

    // 2. If chunk is too long (> 4 words), split around prepositions / conjunctions
    let finalChunks = [];
    const splitKeywords = ['to', 'and', 'that', 'because', 'before', 'after', 'when', 'if', 'with', 'for', 'which', 'or', 'while'];

    raw.forEach(chunk => {
      const words = chunk.split(/\s+/);
      if (words.length <= 4) {
        finalChunks.push(chunk);
      } else {
        let splitIdx = -1;
        for (let j = 2; j < words.length - 1; j++) {
          if (splitKeywords.includes(words[j].toLowerCase())) {
            splitIdx = j;
            break;
          }
        }
        if (splitIdx === -1) splitIdx = Math.floor(words.length / 2);
        finalChunks.push(words.slice(0, splitIdx).join(' '));
        finalChunks.push(words.slice(splitIdx).join(' '));
      }
    });

    return finalChunks.filter(c => c.length > 0);
  }

  renderPuzzleUI() {
    const slotContainer = document.getElementById('puz-slot-container');
    const bankContainer = document.getElementById('puz-chips-bank');
    if (!slotContainer || !bankContainer) return;

    // Render Slots (placed chunks)
    slotContainer.innerHTML = '';
    if (this.puzzle.placedChunks.length === 0) {
      slotContainer.innerHTML = '<div class="slot-placeholder" id="puz-slot-placeholder">點擊下方詞塊放入此處...</div>';
    } else {
      this.puzzle.placedChunks.forEach((chip, idx) => {
        const chipEl = document.createElement('button');
        chipEl.className = 'chunk-chip placed' + (this.puzzle.isSolved ? ' correct' : '');
        chipEl.textContent = chip.text;
        chipEl.addEventListener('click', () => {
          if (!this.puzzle.isSolved) {
            this.unplaceChunk(idx);
          }
        });
        slotContainer.appendChild(chipEl);
      });
    }

    // Render Bank (available chunks)
    bankContainer.innerHTML = '';
    this.puzzle.availableChunks.forEach((chip) => {
      const chipEl = document.createElement('button');
      chipEl.className = 'chunk-chip';
      chipEl.textContent = chip.text;
      chipEl.addEventListener('click', () => {
        if (!this.puzzle.isSolved) {
          this.placeChunk(chip);
        }
      });
      bankContainer.appendChild(chipEl);
    });
  }

  placeChunk(chip) {
    this.puzzle.availableChunks = this.puzzle.availableChunks.filter(c => c.id !== chip.id);
    this.puzzle.placedChunks.push(chip);
    this.playSound('placed');
    this.renderPuzzleUI();

    // Check if all chunks placed
    if (this.puzzle.availableChunks.length === 0) {
      this.verifyPuzzle();
    }
  }

  unplaceChunk(index) {
    const [removed] = this.puzzle.placedChunks.splice(index, 1);
    this.puzzle.availableChunks.push(removed);
    this.playSound('tick');
    this.renderPuzzleUI();
  }

  verifyPuzzle() {
    const isCorrect = this.puzzle.placedChunks.every((chip, idx) => chip.order === idx);
    const feedbackBanner = document.getElementById('puz-feedback-banner');
    const feedbackText = document.getElementById('puz-feedback-text');
    const slotContainer = document.getElementById('puz-slot-container');

    if (isCorrect) {
      this.puzzle.isSolved = true;
      this.playSound('success');
      this.markStatus(this.currentId, 'mastered');

      if (slotContainer) slotContainer.classList.add('solved');
      if (feedbackBanner) feedbackBanner.className = 'puzzle-feedback-banner success';
      if (feedbackText) feedbackText.textContent = '🎉 完美組裝！一字不差點亮通關燈！';

      const item = this.getItemById(this.currentId);
      this.speakSentence(item.en);
      this.renderPuzzleUI();
      this.showToast('✓ 詞塊速拼通關！已自動記為精通');
    } else {
      this.playSound('error');
      if (feedbackBanner) feedbackBanner.className = 'puzzle-feedback-banner error';
      if (feedbackText) feedbackText.textContent = '語序有誤，再想想看！點擊上方詞塊可收回重排';
      this.showToast('順序尚未正確，請調整詞塊');
    }
  }

  givePuzzleHint() {
    if (this.puzzle.isSolved) return;
    const nextExpectedOrder = this.puzzle.placedChunks.length;
    const targetChip = this.puzzle.availableChunks.find(c => c.order === nextExpectedOrder);
    if (targetChip) {
      this.placeChunk(targetChip);
      this.showToast(`💡 自動填入：${targetChip.text}`);
    } else {
      this.showToast('請先移除排錯的詞塊！');
    }
  }

  resetPuzzle() {
    this.initPuzzle(this.getItemById(this.currentId));
    this.playSound('tick');
    this.showToast('已重設題目詞塊');
  }

  // --- Player View Logic (隨身聽磨耳朵) ---
  updatePlayerCard(item) {
    const discNum = document.getElementById('player-disc-num');
    if (discNum) discNum.textContent = `No.${String(item.id).padStart(2, '0')}`;

    const enEl = document.getElementById('player-current-en');
    if (enEl) enEl.textContent = item.en;

    const cnEl = document.getElementById('player-current-cn');
    if (cnEl) cnEl.textContent = item.cn;

    const skelEl = document.getElementById('player-current-skeleton');
    if (skelEl) skelEl.textContent = `🏗️ ${item.skeleton}`;
  }

  toggleContinuousPlayer() {
    if (this.player.isPlaying) {
      this.pauseContinuousPlayer();
    } else {
      this.startContinuousPlayer();
    }
  }

  startContinuousPlayer() {
    this.player.isPlaying = true;
    const btnIcon = document.getElementById('player-play-icon');
    if (btnIcon) btnIcon.textContent = '⏸️';

    const pill = document.getElementById('player-status-pill');
    if (pill) {
      pill.textContent = '🎧 正在連播聽誦中...';
      pill.style.color = '#38bdf8';
    }

    this.buildPlayerQueue();
    this.playNextInQueue();
  }

  pauseContinuousPlayer() {
    this.player.isPlaying = false;
    clearTimeout(this.player.timer);
    this.stopSpeech();

    const btnIcon = document.getElementById('player-play-icon');
    if (btnIcon) btnIcon.textContent = '▶';

    const pill = document.getElementById('player-status-pill');
    if (pill) {
      pill.textContent = '已暫停';
      pill.style.color = 'var(--text-secondary)';
    }
  }

  buildPlayerQueue() {
    if (this.player.loopMode === 'star') {
      this.player.queue = this.bookmarks.length > 0 ? [...this.bookmarks] : [this.currentId];
    } else if (this.player.loopMode === 'repeat-single') {
      this.player.queue = [this.currentId];
    } else {
      // 1 to 100 starting from currentId
      const allIds = [];
      for (let i = this.currentId; i <= 100; i++) allIds.push(i);
      for (let i = 1; i < this.currentId; i++) allIds.push(i);
      this.player.queue = allIds;
    }
    this.player.queueIndex = 0;
  }

  playNextInQueue() {
    if (!this.player.isPlaying) return;

    if (this.player.queue.length === 0) {
      this.showToast('播放隊列為空！');
      this.pauseContinuousPlayer();
      return;
    }

    const currentId = this.player.queue[this.player.queueIndex];
    this.loadSentence(currentId);

    const item = this.getItemById(currentId);
    
    // Speak English sentence
    this.speakSentence(item.en, () => {
      if (!this.player.isPlaying) return;

      // 1.5s interval pause before next
      this.player.timer = setTimeout(() => {
        if (!this.player.isPlaying) return;

        if (this.player.loopMode === 'repeat-single') {
          this.playNextInQueue();
        } else {
          this.player.queueIndex = (this.player.queueIndex + 1) % this.player.queue.length;
          this.playNextInQueue();
        }
      }, 1500);
    });
  }

  // --- Sentence List (100 句清單) ---
  renderSentenceList(filter = 'all', keyword = '') {
    const container = document.getElementById('mobile-sentences-list');
    if (!container) return;
    container.innerHTML = '';

    keyword = (keyword || '').toLowerCase().trim();

    let filtered = this.sentences.filter(item => {
      const matchKey = !keyword || item.en.toLowerCase().includes(keyword) || item.cn.includes(keyword) || item.skeleton.toLowerCase().includes(keyword);
      if (!matchKey) return false;

      const st = this.getStatus(item.id);
      const isStarred = this.bookmarks.includes(item.id);

      if (filter === 'mastered') return st === 'mastered';
      if (filter === 'learning') return st === 'learning';
      if (filter === 'starred') return isStarred;
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">無符合搜尋條件的句型</div>';
      return;
    }

    filtered.forEach(item => {
      const st = this.getStatus(item.id);
      const row = document.createElement('div');
      row.className = `m-sentence-row ${st || ''}`;
      row.innerHTML = `
        <div class="m-row-left">
          <span class="m-row-id">${String(item.id).padStart(2, '0')}</span>
          <div class="m-row-text">
            <div class="m-row-en">${this.escapeHtml(item.en)}</div>
            <div class="m-row-cn">${this.escapeHtml(item.cn)}</div>
          </div>
        </div>
        <button class="m-row-action" title="朗讀原音">🔊</button>
      `;

      row.addEventListener('click', () => {
        this.loadSentence(item.id);
        this.switchView('flashcard');
      });

      row.querySelector('.m-row-action').addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakSentence(item.en);
        this.showToast(`No.${item.id} 正在朗讀`);
      });

      container.appendChild(row);
    });
  }

  // --- View Switcher ---
  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.mobile-view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Pause player if leaving player view
    if (viewName !== 'player' && this.player.isPlaying) {
      this.pauseContinuousPlayer();
    }

    this.playSound('tick');
  }

  // --- Speed Bottom Sheet ---
  openSpeedSheet() {
    const sheet = document.getElementById('speed-sheet');
    const backdrop = document.getElementById('sheet-backdrop');
    if (!sheet || !backdrop) return;

    const rate = this.settings.playbackSpeed || 1.00;
    this.setSpeedDisplayOnly(rate);
    this.renderSheetPresets(rate);

    backdrop.classList.add('open');
    sheet.classList.add('open');
    this.playSound('tick');
  }

  closeSpeedSheet() {
    const sheet = document.getElementById('speed-sheet');
    const backdrop = document.getElementById('sheet-backdrop');
    if (sheet) sheet.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  setSpeedValue(val) {
    val = Math.max(0.30, Math.min(2.00, Math.round(val * 100) / 100));
    this.settings.playbackSpeed = val;
    this.saveStorage('dragon_settings', this.settings);
    
    this.setSpeedDisplayOnly(val);
    this.updateSpeedDisplays();
    this.highlightActivePreset(val);
  }

  setSpeedDisplayOnly(val) {
    const displayNum = document.getElementById('sheet-speed-num');
    if (displayNum) displayNum.textContent = `${val.toFixed(2)}x`;

    const slider = document.getElementById('sheet-speed-slider');
    if (slider) slider.value = val;

    const descEl = document.getElementById('sheet-speed-desc');
    if (descEl) {
      if (val <= 0.55) descEl.textContent = '超慢清晰，字字分明，拆解連音細節';
      else if (val <= 0.85) descEl.textContent = '慢速朗讀，適合跟讀咬字記憶';
      else if (val <= 1.15) descEl.textContent = '母語人士正常自然會話語速 (常規)';
      else if (val <= 1.45) descEl.textContent = '流利快讀，挑戰瞬間骨架反射';
      else descEl.textContent = '極限倍速挑戰，高壓磨練聽覺';
    }
  }

  renderSheetPresets(currentVal) {
    const container = document.getElementById('sheet-presets-grid');
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
      pill.className = 'sheet-preset-pill';
      pill.dataset.val = p.val;
      if (Math.abs(currentVal - p.val) < 0.02) {
        pill.classList.add('active');
      }
      pill.innerHTML = `
        <span class="sheet-preset-val">${p.val.toFixed(2)}x</span>
        <span class="sheet-preset-sub">${p.sub}</span>
      `;
      pill.addEventListener('click', () => {
        this.setSpeedValue(p.val);
        this.playSound('tick');
      });
      container.appendChild(pill);
    });
  }

  highlightActivePreset(currentVal) {
    document.querySelectorAll('.sheet-preset-pill').forEach(pill => {
      const val = parseFloat(pill.dataset.val);
      pill.classList.toggle('active', Math.abs(currentVal - val) < 0.02);
    });
  }

  updateSpeedDisplays() {
    const spd = this.settings.playbackSpeed || 1.00;
    const topTag = document.getElementById('top-speed-tag');
    if (topTag) topTag.textContent = `${spd.toFixed(2)}x`;

    const frontPill = document.getElementById('fc-front-speed-pill');
    if (frontPill) frontPill.textContent = `${spd.toFixed(2)}x`;
  }

  // --- Bookmark and Progress Status ---
  getStatus(id) {
    return this.progress[id] || 'untested';
  }

  markStatus(id, status) {
    this.progress[id] = status;
    this.saveStorage('dragon_progress', this.progress);
    this.updateTopProgress();

    const dotEl = document.getElementById('fc-status-dot');
    if (dotEl) {
      dotEl.className = 'id-status-dot ' + (status === 'mastered' ? 'mastered' : status === 'learning' ? 'learning' : '');
    }
  }

  updateTopProgress() {
    const mastered = Object.values(this.progress).filter(s => s === 'mastered').length;
    const percent = Math.round((mastered / 100) * 100);
    const textEl = document.getElementById('top-progress-text');
    if (textEl) {
      textEl.textContent = `通關 ${mastered} / 100 (${percent}%)`;
    }
  }

  toggleBookmark() {
    const idx = this.bookmarks.indexOf(this.currentId);
    if (idx > -1) {
      this.bookmarks.splice(idx, 1);
      this.showToast('已取消收藏');
    } else {
      this.bookmarks.push(this.currentId);
      this.showToast('★ 已加入收藏清單');
    }
    this.saveStorage('dragon_bookmarks', this.bookmarks);
    this.updateBookmarkButton();
    this.playSound('tick');
  }

  updateBookmarkButton() {
    const btn = document.getElementById('btn-top-bookmark');
    if (!btn) return;
    const isStarred = this.bookmarks.includes(this.currentId);
    btn.classList.toggle('starred', isStarred);
    btn.innerHTML = isStarred ? '★' : '☆';
  }

  // --- Toast ---
  showToast(msg) {
    const toast = document.getElementById('mobile-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Event Bindings ---
  bindEvents() {
    // Top Bar Actions
    document.getElementById('btn-top-bookmark')?.addEventListener('click', () => {
      this.toggleBookmark();
    });

    document.getElementById('btn-top-speed')?.addEventListener('click', () => {
      this.openSpeedSheet();
    });

    // Flashcard Scene Tap & Swipes
    const scene = document.getElementById('flashcard-scene');
    if (scene) {
      // Tap to Flip (unless clicking on interactive buttons inside)
      scene.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
          return;
        }
        this.toggleCardFlip();
      });

      // Touch Swipes
      scene.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
        this.touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      scene.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.touchEndY = e.changedTouches[0].screenY;
        this.handleCardSwipe();
      }, { passive: true });
    }

    // Card Nav Buttons
    document.getElementById('btn-card-prev')?.addEventListener('click', () => this.prevSentence());
    document.getElementById('btn-card-next')?.addEventListener('click', () => this.nextSentence());

    // Front Card Audio & Toggle
    document.getElementById('btn-fc-play-front')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = this.getItemById(this.currentId);
      this.speakSentence(item.en);
    });

    document.getElementById('btn-fc-toggle-degrade')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const el = document.getElementById('fc-degraded-cn');
      if (el) el.classList.toggle('show');
    });

    // Back Card Audio
    document.getElementById('btn-fc-play-back')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = this.getItemById(this.currentId);
      this.speakSentence(item.en);
    });

    // Mastery Action Buttons
    document.getElementById('btn-mark-review')?.addEventListener('click', () => {
      this.playSound('tick');
      this.markStatus(this.currentId, 'learning');
      this.showToast('標記為待強化 ⚠️');
      setTimeout(() => this.nextSentence(), 350);
    });

    document.getElementById('btn-mark-master')?.addEventListener('click', () => {
      this.playSound('success');
      this.markStatus(this.currentId, 'mastered');
      this.showToast('🎉 通關點燈 🟩');
      setTimeout(() => this.nextSentence(), 350);
    });

    // Puzzle Tools
    document.getElementById('btn-puz-audio-hint')?.addEventListener('click', () => {
      const item = this.getItemById(this.currentId);
      this.speakSentence(item.en);
      this.showToast('🔊 播放原音提示');
    });

    document.getElementById('btn-puz-hint')?.addEventListener('click', () => {
      this.givePuzzleHint();
    });

    document.getElementById('btn-puz-reset')?.addEventListener('click', () => {
      this.resetPuzzle();
    });

    document.getElementById('btn-puz-next')?.addEventListener('click', () => {
      this.nextSentence();
    });

    // Continuous Player Controls
    document.getElementById('btn-player-toggle')?.addEventListener('click', () => {
      this.toggleContinuousPlayer();
    });

    document.getElementById('btn-player-next')?.addEventListener('click', () => {
      if (this.currentId < 100) this.loadSentence(this.currentId + 1);
      if (this.player.isPlaying) this.playNextInQueue();
    });

    document.getElementById('btn-player-prev')?.addEventListener('click', () => {
      if (this.currentId > 1) this.loadSentence(this.currentId - 1);
      if (this.player.isPlaying) this.playNextInQueue();
    });

    document.querySelectorAll('.player-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.player-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.player.loopMode = btn.dataset.mode;
        this.playSound('tick');
        this.showToast(`播放模式：${btn.textContent.trim()}`);
        if (this.player.isPlaying) {
          this.buildPlayerQueue();
        }
      });
    });

    // Sentence List Search and Filter
    const searchInput = document.getElementById('list-search-input');
    searchInput?.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
      this.renderSentenceList(activeFilter, e.target.value);
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const kw = document.getElementById('list-search-input')?.value || '';
        this.renderSentenceList(chip.dataset.filter, kw);
        this.playSound('tick');
      });
    });

    // Bottom Navigation Bar
    document.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'btn-open-speed-sheet') {
          this.openSpeedSheet();
        } else {
          this.switchView(btn.dataset.view);
        }
      });
    });

    // Speed Bottom Sheet
    document.getElementById('btn-close-sheet')?.addEventListener('click', () => {
      this.closeSpeedSheet();
    });

    document.getElementById('sheet-backdrop')?.addEventListener('click', () => {
      this.closeSpeedSheet();
    });

    document.getElementById('btn-sheet-apply')?.addEventListener('click', () => {
      this.closeSpeedSheet();
      this.showToast('✓ 語速已儲存');
    });

    document.getElementById('btn-sheet-minus')?.addEventListener('click', () => {
      const cur = this.settings.playbackSpeed || 1.00;
      this.setSpeedValue(cur - 0.05);
      this.playSound('tick');
    });

    document.getElementById('btn-sheet-plus')?.addEventListener('click', () => {
      const cur = this.settings.playbackSpeed || 1.00;
      this.setSpeedValue(cur + 0.05);
      this.playSound('tick');
    });

    document.getElementById('sheet-speed-slider')?.addEventListener('input', (e) => {
      this.setSpeedValue(parseFloat(e.target.value));
    });

    document.getElementById('btn-sheet-test')?.addEventListener('click', () => {
      const targetRate = this.settings.playbackSpeed || 1.00;
      const item = this.getItemById(this.currentId);
      this.speakSentence(item.en, null, targetRate);
      this.showToast(`🔊 正在以 ${targetRate.toFixed(2)}x 試聽原句`);
    });

    // Voice Accent & Character Selectors
    document.querySelectorAll('.sheet-voice-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.selectVoiceAccent(tab.dataset.lang);
        this.playSound('tick');
      });
    });

    document.getElementById('sheet-voice-select')?.addEventListener('change', (e) => {
      const voice = this.voices.find(v => v.voiceURI === e.target.value);
      if (voice) {
        this.speechVoice = voice;
        this.settings.voiceURI = voice.voiceURI;
        this.saveStorage('dragon_settings', this.settings);
        this.showToast(`已選用語音：${voice.name}`);
      }
    });
  }

  handleCardSwipe() {
    const diffX = this.touchEndX - this.touchStartX;
    const diffY = this.touchEndY - this.touchStartY;

    // Must be predominantly horizontal gesture
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 48) {
      if (diffX < 0) {
        // Swipe Left: Next Sentence
        this.nextSentence();
      } else {
        // Swipe Right: Prev Sentence
        this.prevSentence();
      }
    }
  }
}

// Instantiate Mobile App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.mobileApp = new DragonMobileApp();
});
