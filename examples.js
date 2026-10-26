// Dragon English 100 - 實戰情境抽換 3 大示範例句庫
// 涵蓋：💼 職場工作 / ☕ 日常生活 / 💬 溝通論述 三大維度，均支援英文原音朗讀

const DRAGON_100_EXAMPLES = {
  1: [
    { tag: "💼 職場工作", en: "It would be unwise to deploy the code and leave the office immediately.", cn: "發布代碼後立刻離開辦公室是極不明智的。" },
    { tag: "☕ 日常生活", en: "It would be dangerous to drive on icy roads and use your phone at the same time.", cn: "在結冰的路面上開車還同時滑手機是極其危險的。" },
    { tag: "💬 決策建議", en: "It would be prudent to review the contract and consult our legal team first.", cn: "先審閱合約並諮詢法務團隊會是審慎的做法。" }
  ],
  2: [
    { tag: "💼 專案管理", en: "It is essential to review the contract before the client signs it.", cn: "在客戶簽署合約之前進行審查是至關重要的。" },
    { tag: "☕ 戶外休閒", en: "It is wise to check the weather forecast before you go hiking in the mountains.", cn: "去山區登山健行之前先查看天氣預報是明智的。" },
    { tag: "💻 系統維運", en: "It is critical to back up your database before the migration script runs.", cn: "在資料庫遷移腳本執行前進行備份至關重要。" }
  ],
  3: [
    { tag: "☕ 晨間日常", en: "It is really relaxing to drink coffee on the balcony, watching the rain fall.", cn: "坐在陽台上喝咖啡、看著雨滴落下，真的很放鬆。" },
    { tag: "💼 工作小憩", en: "It is refreshing to take a short walk after meetings, listening to gentle podcasts.", cn: "開完會後去散散步、聽聽溫和的播客，讓人精神一振。" },
    { tag: "🏖️ 度假體驗", en: "It was delightful to sit on the beach, listening to ocean waves crash.", cn: "坐在沙灘上聆聽海浪拍岸，令人心曠神怡。" }
  ],
  4: [
    { tag: "💼 職場進修", en: "Most software engineers take online courses to prepare for technical interviews.", cn: "大多數軟體工程師都會上線上課程來準備技術面試。" },
    { tag: "🎓 校園求學", en: "Most college students review past exam papers to prepare for final exams.", cn: "大多數大學生會複習歷屆考古題來準備期末考。" },
    { tag: "🏃 運動競技", en: "Most marathon runners train for months to prepare for the international race.", cn: "大多數馬拉松跑者會嚴格訓練數個月來準備國際賽事。" }
  ],
  5: [
    { tag: "📱 數位產品", en: "When waiting for the web page to load, modern users become impatient in only three seconds.", cn: "等網頁載入時，現代用戶只要等三秒就會感到不耐煩。" },
    { tag: "☕ 都會通勤", en: "When waiting for the delayed subway to arrive, commuters become restless in just five minutes.", cn: "等地鐵誤點抵達時，通勤族只要等五分鐘就會開始坐立難安。" },
    { tag: "🍽️ 餐飲服務", en: "When waiting for food delivery to arrive, hungry customers become irritated in twenty minutes.", cn: "等外送送達時，飢餓的顧客只要等二十分鐘就會感到煩躁。" }
  ],
  6: [
    { tag: "💼 技術社群", en: "A young developer sitting across from me asked me what framework I was using.", cn: "坐在我對面的年輕工程師問我正在使用什麼框架。" },
    { tag: "✈️ 旅途交流", en: "A friendly tourist sitting next to me on the flight asked me where I was traveling.", cn: "飛機上坐在我旁邊的友善遊客問我要去哪裡旅行。" },
    { tag: "☕ 咖啡館中", en: "A college student sitting at the neighboring table asked me what book I was reading.", cn: "坐在隔壁桌的大學生問我正在閱讀什麼書。" }
  ],
  7: [
    { tag: "💼 商務出差", en: "The guide told us that we should buy a subway pass to get around Tokyo because taxis were expensive.", cn: "導遊告訴我們應該買地鐵周遊券遊覽東京，因為計程車很貴。" },
    { tag: "🚗 旅遊探索", en: "Local residents told us that we should rent an electric scooter to get around the island because buses were infrequent.", cn: "當地居民建議我們租電動機車環島，因為公車班次很少。" },
    { tag: "🏙️ 城市漫遊", en: "Our host told us that we should walk to get around downtown because parking was nearly impossible.", cn: "房東告訴我們在市中心遊覽最好步行，因為找停車位幾乎不可能。" }
  ],
  8: [
    { tag: "💼 職場制度", en: "Employees should be free to decide when to take leave and whether to work remotely.", cn: "員工應該有自由決定何時休假以及是否遠距辦公。" },
    { tag: "🎓 生涯主導", en: "Students should be free to decide what major to choose and whether to study abroad.", cn: "學生應當有自由決定選擇何種主修以及是否出國留學。" },
    { tag: "🏠 居家生活", en: "Adults should be free to decide where to live and whether to buy a home.", cn: "成年人應當有自由決定在哪裡生活以及是否要購屋。" }
  ],
  9: [
    { tag: "💼 投資風險", en: "It is difficult to predict when and how the financial market will fluctuate.", cn: "很難預測金融市場會在何時以及以何種幅度波動。" },
    { tag: "🌧️ 自然災害", en: "It is nearly impossible to predict where and when severe lightning will strike.", cn: "要精確預測劇烈雷擊何時何地會發生幾乎是不可能的。" },
    { tag: "🚀 科技趨勢", en: "It is impossible to predict which AI technology will revolutionize daily life next.", cn: "根本無法預測接下來會是哪一項 AI 技術徹底改變日常生活。" }
  ],
  10: [
    { tag: "💼 團隊溝通", en: "The manager insisted that the server was stable, but I couldn't help feeling nervous.", cn: "經理堅稱伺服器很穩定，但我還是忍不住感到緊張。" },
    { tag: "✈️ 飛行體驗", en: "The flight attendant insisted that everything was fine, but passengers couldn't help feeling anxious.", cn: "空服員堅稱一切正常，但乘客們還是忍不住感到焦慮。" },
    { tag: "🩺 健康關懷", en: "The doctor insisted that the minor procedure was routine, but I couldn't help feeling worried.", cn: "醫生堅稱這只是常規小手術，但我還是忍不住感到擔憂。" }
  ],
  11: [
    { tag: "💻 資安防範", en: "It never occurred to me that the password could be guessed so easily.", cn: "我從沒想到密碼竟然會這麼容易被猜出來。" },
    { tag: "☕ 人際互動", en: "It never occurred to me that my joke might embarrass him in front of colleagues.", cn: "我壓根沒料到我的玩笑可能會讓他在同事面前感到尷尬。" },
    { tag: "📈 商業敏銳", en: "It never occurred to our founders that this side project might turn into a billion-dollar business.", cn: "創辦人從未想到這個業餘副專案竟然能發展成市值數十億的企業。" }
  ],
  12: [
    { tag: "💼 遠距會議", en: "\"The team standup is about to begin.\" \"OK, I'm coming right now.\"", cn: "「團隊站會馬上要開始了！」「好的，我馬上上線。」" },
    { tag: "🚗 出行相約", en: "\"The rideshare car has arrived outside.\" \"OK, I'm coming down the elevator.\"", cn: "「預約的車已經在門口了！」「好的，我正搭電梯下去。」" },
    { tag: "🍽️ 家庭日常", en: "\"Dinner is on the table!\" \"Thanks, Mom, I'm coming right away.\"", cn: "「晚飯端上桌囉！」「謝謝媽媽，我馬上來。」" }
  ],
  13: [
    { tag: "💼 商務聯繫", en: "I'll send you the updated project slides when I get to the meeting room.", cn: "我一抵達會議室就會把最新的專案簡報發送給你。" },
    { tag: "✈️ 差旅回報", en: "I'll message you on Slack when I arrive at the hotel in Singapore.", cn: "我一抵達新加坡的飯店就會在 Slack 上傳訊息報備。" },
    { tag: "☕ 日常關心", en: "I'll call my family when I return home from the office tonight.", cn: "我今晚一下班回到家就會打電話給家人報平安。" }
  ],
  14: [
    { tag: "🚆 捷運交通", en: "If you take the subway to the international terminal from here, you have to transfer twice.", cn: "如果從這裡搭地鐵去國際航廈，你必須轉乘兩次車。" },
    { tag: "🗺️ 觀光旅遊", en: "If you take the train to the mountain resort, you have to change once at the central hub.", cn: "如果搭火車去山區渡假村，你必須在中央轉運站轉車一次。" },
    { tag: "🚲 通勤路線", en: "If you commute across the bay during peak hours, you have to change lines several times.", cn: "如果在尖峰時段跨灣通勤，你必須轉乘好幾條路線。" }
  ],
  15: [
    { tag: "🎓 求職選擇", en: "I've decided to look for a job abroad when I graduate from university.", cn: "我已經決定大學畢業後要在海外求職。" },
    { tag: "💼 職涯規劃", en: "She has decided to pursue a master's degree abroad when her current contract ends.", cn: "她已經決定目前合約期滿後要出國攻讀碩士學位。" },
    { tag: "🌍 公益體驗", en: "He has decided to volunteer abroad when he completes his military service.", cn: "他已經決定服完兵役後要前往國外擔任國際志工。" }
  ],
  16: [
    { tag: "💼 會議室設備", en: "This projector doesn't work. Something seems to be wrong with the HDMI connection.", cn: "這台投影機沒有畫面，HDMI 連接好像出了問題。" },
    { tag: "☕ 日常家電", en: "The air conditioner doesn't work. Something seems to be wrong with the remote sensor.", cn: "冷氣機不會動了，遙控感應器好像壞掉了。" },
    { tag: "📱 科技周邊", en: "My Bluetooth earbuds don't work. Something seems to be wrong with the charging case.", cn: "我的藍牙耳機沒聲音，充電盒好像故障了。" }
  ],
  17: [
    { tag: "💼 職場導師", en: "The best thing about my internship at the startup was that the senior engineers mentored me patiently.", cn: "在該新創公司實習最棒的事，就是資深工程師非常有耐心地指導我。" },
    { tag: "✈️ 城市生活", en: "The best thing about living in Kyoto was that historic shrines were within walking distance.", cn: "住在京都最棒的事，就是古老的神社都在步行範圍之內。" },
    { tag: "🤝 團隊文化", en: "The best thing about our engineering culture was that team members welcomed constructive feedback.", cn: "我們團隊文化最棒的地方，在於成員們都很歡迎建設性的回饋意見。" }
  ],
  18: [
    { tag: "🌍 跨國旅居", en: "I lived in London for two years when I was in high school because my mother was transferred there.", cn: "我高中時曾在倫敦住過兩年，因為我母親被調派到那裡工作。" },
    { tag: "💼 部門異動", en: "He lived in Singapore for four years because his engineering squad was relocated there.", cn: "他曾在新加坡住過四年，因為他的工程小隊整體搬遷到了那裡。" },
    { tag: "🎓 學術訪問", en: "She lived in Zurich for three semesters because she was awarded a prestigious research fellowship.", cn: "她曾在蘇黎世待過三個學期，因為她榮獲了頂尖的研究獎學金。" }
  ],
  19: [
    { tag: "💼 雲端科技", en: "Remote work is widely adopted, so subscriptions to cloud services have been rapidly increasing over the last few years.", cn: "遠距辦公被廣泛採用，因此過去幾年雲端服務的訂閱量激增。" },
    { tag: "📱 行動支付", en: "Digital wallets are widely accepted, so cashless transactions have been rapidly increasing over the last few years.", cn: "電子錢包被普及接受，使得過去幾年無現金交易額迅速攀升。" },
    { tag: "🚗 綠色出行", en: "Electric vehicles are widely promoted, so installations of charging stations have been rapidly increasing over the last few years.", cn: "電動車受到廣泛推廣，因此過去幾年充電樁的安裝量大幅增長。" }
  ],
  20: [
    { tag: "💼 技術實力", en: "I've often heard him boast that he can solve any system bottleneck, but I've never actually seen him write clean code.", cn: "我常聽他誇口能解決任何系統瓶頸，但我從沒見過他寫出乾淨代碼。" },
    { tag: "🗣️ 外語口語", en: "I've often heard her boast that she speaks fluent Spanish, but I've never actually heard her converse with native speakers.", cn: "我常聽她自吹西班牙語流利，但我從沒聽過她和母語人士對話。" },
    { tag: "🎸 樂器演奏", en: "We've often heard Tom boast that he plays drums skillfully, but we've never actually seen him perform on stage.", cn: "我們常聽湯姆自誇打鼓技巧純熟，但從沒親眼看過他在舞台上演奏。" }
  ],
  21: [
    { tag: "💼 職場適應", en: "It has been only three days since I joined the tech squad, but I'm already used to the sprint pace.", cn: "雖然我加入技術團隊才三天，但我已經適應衝刺節奏了。" },
    { tag: "🌆 移居生活", en: "It has been only a month since she moved to Vancouver, but she is already used to the rainy climate.", cn: "雖然她搬到溫哥華才一個月，但已經適應那裡的雨季了。" },
    { tag: "🏋️ 健身養成", en: "It has been only two weeks since he started morning workouts, but he is already used to waking up early.", cn: "雖然他開始晨練才兩週，但已經習慣早起了。" }
  ],
  22: [
    { tag: "✈️ 航班滿座", en: "When I boarded the international flight, I couldn't find any empty row to lie down.", cn: "當我登上國際航班時，找不到任何一排空位能躺下休息。" },
    { tag: "☕ 咖啡客滿", en: "When we entered the popular cafe, we couldn't find an empty table near the window.", cn: "當我們走進那家熱門咖啡館時，找不到任何靠窗的空桌。" },
    { tag: "🏢 共享空間", en: "When I arrived at the coworking space, I couldn't find an empty desk with a monitor.", cn: "當我抵達共享辦公空間時，找不到附有螢幕的空辦公桌。" }
  ],
  23: [
    { tag: "💼 代碼閱讀", en: "I'm not wearing my reading glasses now, so I can't make out what the console error log says.", cn: "我現在沒戴老花眼鏡，所以看不清楚控制台錯誤日誌寫了什麼。" },
    { tag: "🚗 道路指引", en: "It's raining heavily now, so I can't make out what the highway exit sign says.", cn: "現在雨下得很大，所以我看不清楚高速公路出口路標寫了什麼。" },
    { tag: "📜 菜單字跡", en: "The lighting in the bistro is dim, so we can't make out what the chalkboard menu says.", cn: "小餐館裡的燈光很暗，所以我們看不清楚黑板菜單寫了什麼。" }
  ],
  24: [
    { tag: "💼 團隊融入", en: "Less than a week after joining the engineering squad, without realizing it, I started using their technical jargon.", cn: "加入工程團隊不到一週，不知不覺中我就開始使用他們的技術行話了。" },
    { tag: "🌏 跨國交流", en: "Less than two months after moving to London, without realizing it, he began speaking with a British accent.", cn: "搬到倫敦不到兩個月，不知不覺中他就開始帶有英式口音了。" },
    { tag: "☕ 習慣養成", en: "Less than three days after starting remote work, without realizing it, she adopted the habit of taking midday strolls.", cn: "開始遠距工作不到三天，不知不覺中她就養成了中午散步的習慣。" }
  ],
  25: [
    { tag: "📱 科技學習", en: "Children learn to operate intuitive tablet computers by the age of three or four.", cn: "幼童在三到四歲左右就學會操作直覺式的平板電腦。" },
    { tag: "🏊 體能技能", en: "Most athletes learn to swim and ride bicycles by the age of seven or eight.", cn: "大多數運動員在七到八歲左右就學會了游泳和騎自行車。" },
    { tag: "🎵 音樂啟蒙", en: "Talented young musicians learn to read complex sheet music by the age of six.", cn: "具備天賦的年輕音樂家在六歲左右便學會看懂複雜的樂譜。" }
  ],
  26: [
    { tag: "💼 專案攻堅", en: "Thanks to the detailed setup guide you wrote, I managed to configure the server without getting lost.", cn: "多虧你寫的詳細設定指引，我才能順利配置好伺服器而沒有走彎路。" },
    { tag: "✈️ 海外自助", en: "Thanks to the offline map app, we managed to find the hidden guesthouse without asking anyone.", cn: "多虧了離線地圖軟體，我們順利找到了那家隱蔽的民宿而沒問路。" },
    { tag: "🎓 學業突破", en: "Thanks to the professor's timely advice, she managed to complete her thesis without missing the deadline.", cn: "多虧教授的及時指導，她才能順利完成論文而沒有錯過截止日期。" }
  ],
  27: [
    { tag: "💼 年假旅行", en: "Last autumn I took ten days off, and went on a road trip across Hokkaido with my family.", cn: "去年秋天我請了十天假，和家人一起去北海道公路旅行。" },
    { tag: "🏖️ 渡假放鬆", en: "Last winter he took a week off, and went on a skiing trip in Switzerland with close friends.", cn: "去年冬天他請了一週假，和摯友一起去瑞士滑雪渡假。" },
    { tag: "🌴 身心充電", en: "Last month she took three days off, and went on a wellness retreat in Bali with her sister.", cn: "上個月她請了三天假，和姊姊一起去峇里島進行身心靈休養。" }
  ],
  28: [
    { tag: "💼 職場重逢", en: "The company headquarters had changed a lot, so when I visited after five years, I didn't recognize the lobby.", cn: "公司總部變化太大了，以致五年後我造訪時都沒認出接待大廳。" },
    { tag: "🏙️ 都市變遷", en: "The district had changed a lot, so when I drove through the avenue, I didn't recognize the old neighborhood.", cn: "這個街區變化實在太大了，當我開車經過大道時，根本認不出舊社區。" },
    { tag: "👥 故友相見", en: "David had changed a lot, so when I bumped into him at the airport, I didn't recognize him at first glance.", cn: "戴維變化太大了，以致在機場巧遇時我第一眼都沒認出他來。" }
  ],
  29: [
    { tag: "🏫 重訪母校", en: "When I visited my high school for the first time in fifteen years, I found that it was no longer what it used to be.", cn: "相隔十五年再次回訪母校，我發現它已經不再是當年的模樣了。" },
    { tag: "🏙️ 故土尋根", en: "When she visited her coastal hometown for the first time in a decade, she found that it was no longer what it used to be.", cn: "十年後重訪海濱故鄉，她發現那裡已面目全非，不再是記憶中的樣子。" },
    { tag: "⛺ 舊地重遊", en: "When we visited our favorite summer campsite for the first time in years, we found that it was no longer what it used to be.", cn: "相隔數年重訪喜愛的夏日營地，我們發現那裡已不再是過去的樣貌。" }
  ],
  30: [
    { tag: "💼 上線攻堅", en: "I stayed up till three last night fixing critical production bugs, so I feel completely exhausted today.", cn: "昨晚為了修復正式環境的重大問題熬夜到三點，今天感到精疲力竭。" },
    { tag: "🎓 考前衝刺", en: "She stayed up till dawn last night finishing the final project, so she feels extremely sleepy now.", cn: "她昨晚為了完成期末專題熬夜到天亮，現在非常想睡。" },
    { tag: "🎮 休閒過度", en: "He stayed up till two last night playing online games with friends, so he feels sluggish this morning.", cn: "他昨晚和朋友打連線遊戲熬夜到兩點，今天早上整個人昏昏沉沉。" }
  ],
  31: [
    { tag: "💼 任務完成", en: "I've finished drafting the quarterly proposal today, so now I have nothing to worry about.", cn: "我今天已經寫好了季度提案草稿，現在沒什麼好操心的了。" },
    { tag: "🧹 家務整理", en: "She has finished cleaning all the guest bedrooms, so now she has nothing to clean.", cn: "她已經把所有客房都打掃乾淨了，現在手頭沒事可做。" },
    { tag: "📚 閱讀放鬆", en: "He has finished reviewing all the exam materials, so now he has nothing to stress over.", cn: "他已經複習完了所有考試資料，現在沒有任何壓力了。" }
  ],
  32: [
    { tag: "💼 故障復盤", en: "If you had backed up the database and tested the rollback plan, the outage would probably have ended in minutes.", cn: "如果你當時備份了資料庫並測試過回滾方案，系統中斷大概幾分鐘內就能結束。" },
    { tag: "✈️ 行程防範", en: "If we had reserved the hotel and hired a local guide, our trip would probably have gone much smoother.", cn: "如果我們當時預訂了飯店並聘請了在地嚮導，旅程大概會順利得多。" },
    { tag: "🩺 康復建議", en: "If you had followed the physiotherapist's advice and done the exercises, your shoulder would probably have healed in weeks.", cn: "如果你當時遵從物理治療師的建議做復健運動，肩膀大概幾週內就痊癒了。" }
  ],
  33: [
    { tag: "💼 安全避險", en: "The engineer says that we should pause deployment because if we proceeded now, we might trigger a system outage.", cn: "工程師說我們最好先暫停發布，因為如果現在繼續，可能會引發系統中斷。" },
    { tag: "🚗 交通出行", en: "The captain says that we should stay at the harbor because if we sailed now, we might encounter rough storms.", cn: "船長說我們最好留在港口，因為如果現在啟航，路上可能會遭遇巨浪暴風雨。" },
    { tag: "🏔️ 戶外探險", en: "The guide says that we should wait at the camp because if we climbed now, we might get lost in dense fog.", cn: "嚮導說我們最好在營地等待，因為如果現在攀登，路上可能會在大霧中迷失。" }
  ],
  34: [
    { tag: "💻 程式哲思", en: "Engineers wish software could run forever without any maintenance. However, if that were true, system innovation would stagnate.", cn: "工程師希望軟體永遠不需維護就能持續運行；然而若真如此，系統創新就會陷入停滯。" },
    { tag: "🏙️ 都會願景", en: "Citizens wish public transit were completely free for all. However, if that came true, municipal budgets would face severe strain.", cn: "市民希望大眾運輸完全免費；然而若真實現，市政預算將承受沉重負擔。" },
    { tag: "☕ 人生哲理", en: "People wish they never faced difficulties in life. However, if that wish came true, personal growth would be impossible.", cn: "人們總希望人生從不經歷挫折；然而如果真實現了，個人的心智成長將無從談起。" }
  ],
  35: [
    { tag: "💼 商業談判", en: "The executive looks very confident. The client must have approved the revised proposal.", cn: "主管看起來非常有信心，客戶必定已經核准了修改後的提案。" },
    { tag: "🎓 考試合格", en: "Mark looks thrilled. He must have passed the rigorous medical board exam.", cn: "馬克看起來欣喜若狂，他必定通過了嚴格的醫師執照考試。" },
    { tag: "🎉 驚喜活動", en: "Sarah looks surprised. Her friends must have prepared a secret birthday party for her.", cn: "莎拉看起來一臉驚喜，朋友們必定為她籌備了一場秘密生日派對。" }
  ],
  36: [
    { tag: "🏛️ 歷史人文", en: "If you have visited historic temples in Kyoto, you must have been impressed by their traditional craftsmanship.", cn: "只要你曾造訪過京都的歷史名剎，一定都會為那精湛的傳統工藝所震撼。" },
    { tag: "🏔️ 自然壯景", en: "If you have traveled to the Swiss Alps, you must have been captivated by the snow-covered peaks.", cn: "只要你曾去過瑞士阿爾卑斯山，一定都會被那皚皚白雪的雄偉山峰所迷醉。" },
    { tag: "🎨 藝術巡禮", en: "If you have walked through the Louvre Museum, you must have been moved by the masterpiece paintings.", cn: "只要你曾漫步於羅浮宮，一定都會被那些名垂青史的傳世畫作深深打動。" }
  ],
  37: [
    { tag: "💻 開源科技", en: "Without open-source software such as Linux and Git, the landscape of modern tech would have been completely different.", cn: "如果沒有 Linux 和 Git 等開源軟體，現代科技的版圖一定會截然不同。" },
    { tag: "⚡ 現代能源", en: "Without electricity and telecommunication networks, modern urban life would have been completely impossible.", cn: "如果沒有電力和電信網路，現代城市生活根本無法想像。" },
    { tag: "💉 醫療突破", en: "Without modern antibiotics such as penicillin, global life expectancy in the 20th century would have been much lower.", cn: "如果沒有青黴素等現代抗生素，二十世紀全球人類的平均壽命一定會低得多。" }
  ],
  38: [
    { tag: "💼 辦公禮儀", en: "Some new team members entering the quiet study zone act as if they are in an open market.", cn: "進到安靜自習區的某些新成員，舉止隨意得宛如置身於熱鬧市集。" },
    { tag: "✈️ 旅客素養", en: "Some passengers boarding the night flight act as if they are in their own living room.", cn: "登上夜間航班的某些乘客，舉止隨意得就像在自己家裡的客廳一樣。" },
    { tag: "☕ 社交場合", en: "He speaks loudly during the solemn ceremony as if he were at an informal barbecue.", cn: "他在莊嚴的典禮上大聲說話，彷彿置身於非正式的戶外烤肉聚會。" }
  ],
  39: [
    { tag: "💻 菜鳥心願", en: "When I was a junior developer, I often wished our legacy codebase were a little cleaner.", cn: "剛當菜鳥工程師時，我常希望我們這套祖傳代碼能更乾淨一點。" },
    { tag: "🎓 學生時代", en: "When I was in college, I often wished my monthly allowance were a little larger.", cn: "念大學時，我常希望每個月的零用錢能再充裕一點。" },
    { tag: "🏙️ 租屋時光", en: "When we rented our first studio apartment, we often wished the kitchen were a little wider.", cn: "租第一間套房時，我們常希望廚房空間能再寬敞一些。" }
  ],
  40: [
    { tag: "🌍 公益援助", en: "I'd like to work as a volunteer helping refugees of international conflicts, such as displaced families.", cn: "我想作為志願者參與救援活動，幫助難民家庭等受戰爭波及的弱勢群體。" },
    { tag: "🩺 醫療服務", en: "She wants to serve as a community nurse caring for elderly residents, such as solitary seniors.", cn: "她想擔任社區護理師，照顧獨居老人等需要關懷的長者。" },
    { tag: "🐾 動物保護", en: "They joined the rescue society helping stray animals in distress, such as abandoned dogs and cats.", cn: "他們加入了救援協會，幫助流浪貓狗等處於困境中的動物。" }
  ],
  41: [
    { tag: "💼 專利資產", en: "The lead designer has proprietary design templates, and he never lets anyone else modify them.", cn: "主設計師有一套獨家設計模板，他從不讓其他人去修改它們。" },
    { tag: "🚗 愛車如命", en: "My brother owns a rare vintage sports car, and he never lets anyone else drive it.", cn: "我哥擁有一輛罕見的古董跑車，他從不讓其他人開它。" },
    { tag: "☕ 烹飪器具", en: "The chef keeps expensive handmade kitchen knives, and he never lets anyone else sharpen them.", cn: "主廚收藏了昂貴的手工廚刀，他從不讓任何人去磨動它們。" }
  ],
  42: [
    { tag: "💼 決策領會", en: "At first, I thought the manager was overly strict, but later I realized she was protecting the team.", cn: "起初我以為經理過於嚴苛，但後來才意識到她是在保護整個團隊。" },
    { tag: "💻 缺陷排查", en: "At first, I thought the warning was harmless, but later I realized it caused memory leaks.", cn: "起初我以為這條警告無關痛癢，但後來才發現它造成了記憶體洩漏。" },
    { tag: "👥 朋友誤解", en: "At first, we thought he was unfriendly, but later we realized he was just shy.", cn: "起初我們以為他不近人情，但後來才發現他只是個性害羞。" }
  ],
  43: [
    { tag: "💼 技術嘗鮮", en: "Last week I tried developing a web application using Rust for the first time, and it was fast.", cn: "上週我生平第一次嘗試用 Rust 開發 Web 應用，性能極其迅速。" },
    { tag: "☕ 烹飪下廚", en: "Last weekend she tried baking French sourdough bread for the first time, and it turned out crispy.", cn: "上週末她第一次嘗試烘烤法式酸種麵包，結果外皮非常酥脆美味。" },
    { tag: "🏄 戶外挑戰", en: "Last summer he tried surfing on the Pacific coast for the first time, and it was exhilarating.", cn: "去年夏天他生平第一次在太平洋海岸挑戰衝浪，感覺非常過癮。" }
  ],
  44: [
    { tag: "💼 代碼重構", en: "Some programmers say that they hate refactoring because the architecture is so convoluted that they don't feel like touching it.", cn: "有些程式設計師討厭重構，因為架構太盤根錯節，以致於根本提不起勁去動它。" },
    { tag: "☕ 雨季心境", en: "Some people say that they dislike rainy days because it is so gloomy that they don't feel like going outside.", cn: "有人說他們討厭雨天，因為天氣太陰沉，以致於什麼地方都不想去。" },
    { tag: "❄️ 冬季日常", en: "Some travelers complain that winter in Hokkaido is too cold, but I love the snow because I can snowboard.", cn: "有些遊客抱怨北海道的冬天太冷，但我卻熱愛白雪，因為可以盡情滑雪板。" }
  ],
  45: [
    { tag: "💼 職涯抉擇", en: "David joined the overseas office not only because he wanted a higher salary, but also because he wanted international leadership experience.", cn: "戴維加入海外辦公室不僅是因為追求高薪，也因為渴望具備跨國管理經驗。" },
    { tag: "🎓 選校考量", en: "She selected that university not only because it had great research labs, but also because the tuition was affordable.", cn: "她選擇那所大學不僅是因為頂尖的實驗室，也因為學費親民合宜。" },
    { tag: "💻 架構選型", en: "The team adopted microservices not only because the system was expanding, but also because independent deployments were essential.", cn: "團隊採用微服務不僅是因為系統在擴展，也因為獨立部署至關重要。" }
  ],
  46: [
    { tag: "💼 流程規範", en: "I am against deploying features on Friday afternoons. That is because it could cause unmonitored production incidents over the weekend.", cn: "我反對週五下午上線新功能，因為這可能會導致週末期間發生無人監控的重大事故。" },
    { tag: "🌱 環境永續", en: "Environmentalists are against single-use plastic cups. That is because they cause severe pollution in marine ecosystems.", cn: "環保人士反對使用一次性塑膠杯，因為這會對海洋生態造成嚴重的塑料污染。" },
    { tag: "🔒 隱私安全", en: "Citizens are against facial recognition surveillance in public parks. That is because it could violate personal privacy rights.", cn: "市民反對在公共公園裝設人臉識別監控，因為這可能會侵犯個人隱私權益。" }
  ],
  47: [
    { tag: "💼 營運成本", en: "The financial report shows that cloud expenses have been surging since last quarter. This surge is partly because running GPU clusters costs a fortune.", cn: "財報顯示自上季度以來雲端開銷暴增，部分原因是運行 GPU 算力叢集耗資巨大。" },
    { tag: "🏙️ 住房負擔", en: "Surveys indicate that homeownership rates have been dropping among youth. This trend is partly because it costs so much to secure mortgages in cities.", cn: "調查指出青年購屋率持續下滑，部分原因是在大都會背房貸負擔太過沉重。" },
    { tag: "🎓 高教開支", en: "Statistics show that college debt has been accumulating over recent years. This increase is partly because textbooks and tuition cost excessive amounts.", cn: "統計顯示近年大學學貸不斷累積，部分原因是教科書與學費開銷過於高昂。" }
  ],
  48: [
    { tag: "💼 交付延遲", en: "The project manager apologized to stakeholders for the delayed delivery, but they didn't accept the explanation.", cn: "專案經理為進度延遲向利害關係人致歉，但對方並未接受該解釋。" },
    { tag: "🤝 商業糾紛", en: "The vendor apologized to our engineering lead for the server breakdown, but our company didn't renew their contract.", cn: "供應商為伺服器當機向我們的技術負責人道歉，但我們公司未再續約。" },
    { tag: "☕ 日常失約", en: "He apologized to Mary for missing her graduation ceremony, but she didn't talk to him for weeks.", cn: "他為錯過瑪麗的畢業典禮而向她道歉，但她好幾週都沒跟他說話。" }
  ],
  49: [
    { tag: "💼 簡報插曲", en: "During the client presentation, my laptop suddenly shut down, and the director reprimanded me. I regretted that I hadn't plugged in the charger.", cn: "客戶簡報時我的筆電突然關機被主管當場訓斥，我非常後悔事先沒插上充電線。" },
    { tag: "🚗 交通罰單", en: "During the highway trip, a traffic camera caught me speeding, and the police fined me. I regretted that I hadn't checked the speedometer.", cn: "在高速公路行駛時被測速相機拍到超速挨了罰單，我非常後悔當時沒留意時速表。" },
    { tag: "✈️ 行李超重", en: "During check-in at the airport, the airline charged me heavy excess fees. I regretted that I hadn't weighed my suitcase beforehand.", cn: "在機場辦登機時航空公司收了昂貴的超重費，我非常後悔出發前沒先秤行李。" }
  ],
  50: [
    { tag: "💼 繁忙工作", en: "I'm so busy responding to customer inquiries every day that I have no time to review long-term strategy.", cn: "我每天忙著回應用戶諮詢，以致於根本沒時間審視長期戰略。" },
    { tag: "🎓 備考衝刺", en: "Students are so busy doing homework assignments every evening that they have no time to get adequate sleep.", cn: "學生每天晚上忙於寫作業，以致於根本沒有時間獲得充足睡眠。" },
    { tag: "🏠 育兒生活", en: "New parents are so busy caring for their twin babies that they have no time to enjoy a quiet meal.", cn: "新手爸媽每天忙著照顧雙胞胎寶寶，以致於連安安靜靜吃頓飯的時間都沒有。" }
  ],
  51: [
    { tag: "💼 資料處理", en: "This raw video file is too massive for the team to upload over a standard mobile connection.", cn: "這份原始影片檔案太龐大了，團隊無法用一般行動網路直接上傳。" },
    { tag: "📦 物流搬運", en: "This industrial machine is too heavy for two technicians to move without hydraulic equipment.", cn: "這台工業機具太重了，兩名技師若沒有液壓設備根本搬不動。" },
    { tag: "🏠 居家生活", en: "This solid marble table is too clumsy for me to carry into the balcony alone.", cn: "這張實心大理石桌太笨重了，我一個人根本搬不上陽台。" }
  ],
  52: [
    { tag: "💼 展覽參訪", en: "While attending the global tech conference, I was surprised that wherever I walked, there were AI-powered autonomous robots.", cn: "在參加全球科技展覽期間，我很驚艷無論走到哪裡，都有 AI 驅動的自主機器人。" },
    { tag: "✈️ 海外旅遊", en: "While traveling through Tokyo, she was amazed that wherever she dined, the service was remarkably polite.", cn: "在東京遊歷期間，她非常讚嘆無論在哪裡用餐，服務品質都極其禮貌細膩。" },
    { tag: "🏙️ 城市景觀", en: "While strolling across European capitals, we noticed that wherever we went, historic architecture was preserved flawlessly.", cn: "漫步在歐洲各國首都時，我們注意到無論走到何處，歷史古蹟都保存得完好無損。" }
  ],
  53: [
    { tag: "💼 發表榮耀", en: "I was proud when I saw our junior engineers presenting the demo using the open-source library I had architected.", cn: "看到年輕工程師使用我所架構的開源套件進行產品展示，我感到無比自豪。" },
    { tag: "🎁 感恩心意", en: "She was overjoyed when she saw her father attending the dinner wearing the silk necktie she had bought him.", cn: "看到父親繫著自己買給他的絲質領帶出席晚宴，她感到格外開心。" },
    { tag: "☕ 溫暖瞬間", en: "I was delighted when I saw my grandmother listening to the wireless radio I had given her for her birthday.", cn: "看到祖母一邊聽著我送給她的生日收音機一邊微笑，我心裡感到十分溫暖。" }
  ],
  54: [
    { tag: "💼 代碼審查", en: "If you expect that code reviews are just for catching typos, then this proves that you don't understand what reviews are for.", cn: "如果你認為代碼審查只是為了挑錯字，這證明了你根本不理解代碼審查的核心目的。" },
    { tag: "🤝 團隊會議", en: "If you think weekly standups are merely for surveillance, then this proves that you don't understand what agile meetings are for.", cn: "如果你以為每週站會只是為了監督查勤，這證明了你根本不懂敏捷會議的價值何在。" },
    { tag: "🏥 健康檢查", en: "If you assume health checkups are only for elderly patients, then this proves that you don't understand what preventive care is for.", cn: "如果你以為體檢只是老年人的專利，這證明了你根本不明白預防醫學的意義。" }
  ],
  55: [
    { tag: "💼 創業者相", en: "Most startup founders spend most of their weekends working to succeed.", cn: "大多數新創公司的創辦人把大部分週末時光都投入在工作上以求成功。" },
    { tag: "🎨 藝術追求", en: "Independent musicians spend most of their early careers practicing to excel.", cn: "獨立音樂人在早期的職業生涯中，把絕大部分時間都花在刻苦練習以求出類拔萃。" },
    { tag: "🏙️ 現代生活", en: "Many urban professionals spend most of their active hours commuting and sitting to earn a living.", cn: "許多都會上班族把人生中最有活力的時光都花在通勤與久坐上以謀求生計。" }
  ],
  56: [
    { tag: "💼 郵件溝通", en: "Professionals usually phrase constructive criticism as diplomatically as possible so that they won't discourage junior peers.", cn: "專業人員通常盡可能委婉地提出建設性批評，以免打擊到初級同儕的信心。" },
    { tag: "🤝 跨文化協作", en: "Diplomats express reservations as politely as possible so that they won't damage bilateral relations.", cn: "外交官員通常盡可能禮貌客氣地表達保留意見，以免損害雙邊邦交關係。" },
    { tag: "☕ 社交日常", en: "He explained the decline of the party invitation as kindly as possible so that he won't hurt his friend's feelings.", cn: "他盡可能婉轉溫和地婉拒聚會邀請，以免傷到了朋友的感受。" }
  ],
  57: [
    { tag: "💼 軟體品質", en: "Whether an enterprise system is resilient depends not only on its code architecture. It also depends on how skilled its operations engineers are.", cn: "一套企業級系統是否穩健，不僅取決於其代碼架構，也取決於維運工程師的專業水平。" },
    { tag: "🏥 醫院水準", en: "Whether a medical clinic is trustworthy depends not only on advanced equipment. It also depends on how compassionate its medical staff are.", cn: "一家醫療診所是否值得信賴，不僅取決於先進設備，也取決於醫護人員是否有同理心。" },
    { tag: "📈 新創成敗", en: "Whether a venture succeeds depends not only on initial capital. It also depends on how agile the core team is.", cn: "一項創業能否成功不僅取決於初始資金多寡，更取決於核心團隊的敏捷應變力。" }
  ],
  58: [
    { tag: "💻 效能瓶頸", en: "The increase in network latency is closely connected with database connection exhaustion.", cn: "網路延遲的急劇增加，與資料庫連線池的耗盡有著密不可分的關聯。" },
    { tag: "🩺 慢性健康", en: "The steady increase in cardiovascular disease is closely connected with sedentary office lifestyles.", cn: "心血管疾病發病率的持續攀升，與現代久坐不動的辦公室生活型態息息相關。" },
    { tag: "📈 通貨膨脹", en: "The rise in consumer food prices is closely connected with international supply chain disruptions.", cn: "民生食品價格的普遍上揚，與國際供應鏈的中斷有著密不可分的關聯。" }
  ],
  59: [
    { tag: "💻 架構複雜", en: "The more complex the microservices architecture becomes, the longer we are forced to debug distributed traces, and the fewer deployments we complete.", cn: "微服務架構越複雜，我們就越被迫花更長時間追蹤除錯，完成的發布也就越少。" },
    { tag: "🏙️ 都市節奏", en: "The more competitive metropolitan life becomes, the harder people are forced to strive, and the less leisure time they enjoy.", cn: "大都市生活競爭越激烈，人們就越被迫辛苦打拼，能享受的閒暇時間也就越少。" },
    { tag: "📱 數位成癮", en: "The more notification alerts our smartphones deliver, the longer we are distracted at work, and the less deep focus we maintain.", cn: "智慧型手機推播的通知越多，我們上班時分心的時間就越長，維持深度專注的時間也就越少。" }
  ],
  60: [
    { tag: "💼 顧問與教練", en: "Executive coaches and therapists are alike in that both of them deal not with automated workflows but with human mindset.", cn: "高階主管教練與心理諮商師的相似之處在於，兩者面對的都不是自動化流程，而是人的心智思維。" },
    { tag: "🤝 律師與社工", en: "Lawyers and social workers are alike in that both of them deal not with cold statistics but with real lives.", cn: "律師與社工人員的相似之處在於，兩者面對的都不是冰冷的統計數字，而是活生生的人性與生活。" },
    { tag: "🎨 設計與建築", en: "User interface designers and interior architects are alike in that both of them focus not just on aesthetics but on user behavior.", cn: "介面設計師與室內建築師的相似之處在於，兩者著眼的不只是視覺美感，更是使用者的行為習慣。" }
  ],
  61: [
    { tag: "🎵 現場演唱", en: "A rock concert is far more exciting at an open-air stadium than through stereo headphones.", cn: "搖滾演唱會在露天體育場現場感受，比透過立體聲耳機聆聽要震撼刺激好幾倍。" },
    { tag: "🎭 劇場魅力", en: "A Broadway musical is far more captivating on stage than on home television screens.", cn: "百老匯音樂劇在舞台現場觀看，比在家裡的電視螢幕上看要引人入勝得多。" },
    { tag: "⚽ 足球狂熱", en: "The championship football match was far more intense in the packed arena than in online broadcasts.", cn: "那場足球冠軍爭霸賽在座無虛席的球場現場觀看，比線上直播要緊張激烈數倍。" }
  ],
  62: [
    { tag: "📱 數位產品", en: "This flagship smartphone is about twice as expensive in Europe as in Taiwan.", cn: "這款旗艦智慧型手機在歐洲的售價大約是在台灣的兩倍。" },
    { tag: "🚗 豪車關稅", en: "This imported electric SUV is about twice as expensive in Asia as in North America.", cn: "這輛進口電動休旅車在亞洲的售價大約是北美的兩倍。" },
    { tag: "📚 原文書籍", en: "This medical textbook is about three times as expensive in printed editions as in digital format.", cn: "這本醫學教科書的紙本精裝價格大約是電子版的整整三倍。" }
  ],
  63: [
    { tag: "💼 履歷迷思", en: "Just because an applicant has fewer years of coding experience, it doesn't always follow that they write worse code.", cn: "就算應徵者的寫代碼年資較淺，也並不代表他們寫出來的品質就一定比較差。" },
    { tag: "🎓 學歷偏見", en: "Just because someone didn't graduate from an Ivy League university, it doesn't always follow that they lack strategic capability.", cn: "就算某人並非頂尖名校畢業，也並不代表他們就缺乏宏觀的策略思維能力。" },
    { tag: "☕ 社交沉默", en: "Just because a quiet team member speaks less during meetings, it doesn't always follow that they have fewer insights.", cn: "就算沈默的成員在會議上發言較少，也並不代表他們心中的洞見就比較少。" }
  ],
  64: [
    { tag: "💻 系統遷移", en: "Frankly speaking, the cloud database migration we executed yesterday was far more difficult than the team had expected.", cn: "坦白說，我們昨天執行的雲端資料庫遷移比團隊原先預期的要艱鉅得多。" },
    { tag: "💼 創業起步", en: "Frankly speaking, landing our initial corporate enterprise client was far more challenging than our founders had anticipated.", cn: "坦白說，拿下我們第一家大企業客戶的過程比創辦人預想的要困難得多。" },
    { tag: "🏔️ 高山攻頂", en: "Frankly speaking, the high-altitude summit trek was far more exhausting than the mountaineers had imagined.", cn: "坦白說，這次高海拔攻頂跋涉的艱辛程度比登山隊員想像的要疲憊得多。" }
  ],
  65: [
    { tag: "💻 數據利用", en: "A lot of enterprises collect user analytics, but very few of them know how to utilize them strategically.", cn: "擁有用戶數據分析的企業很多，但知道如何發揮其策略價值的卻極少。" },
    { tag: "📷 專業相機", en: "A lot of amateur photographers buy high-end mirrorless cameras, but very few of them know how to operate manual exposure properly.", cn: "購買高端無反相機的業餘攝影玩家很多，但真正懂如何精準手動曝光的人卻極少。" },
    { tag: "💼 敏捷工具", en: "A lot of companies install project management tools, but very few of them know how to streamline sprints effectively.", cn: "引進專案管理軟體的公司很多，但懂得如何高效精簡衝刺流程的團隊卻極少。" }
  ],
  66: [
    { tag: "🏙️ 都會房租", en: "A lot of young professionals complain that apartment rents in downtown areas are too high.", cn: "許多年輕上班族抱怨市中心的公寓租金實在太高了。" },
    { tag: "🚗 燃油開銷", en: "A lot of long-distance commuters complain that gasoline prices are too high this season.", cn: "許多長途通勤的駕駛人抱怨這個季度的汽油價格實在太昂貴了。" },
    { tag: "✈️ 旺季機票", en: "A lot of holiday travelers complain that airline ticket prices are too high during summer vacations.", cn: "許多度假旅客抱怨暑假旺季期間的機票價格高得離譜。" }
  ],
  67: [
    { tag: "💼 科技過勞", en: "In some engineering departments teams suffer from extreme burnout, while in others workers struggle with layoffs.", cn: "在某些研發部門工程師面臨嚴重的過勞，而在另一些部門員工卻在為裁員風波所苦。" },
    { tag: "💧 水資源匱乏", en: "In some prosperous regions people waste clean drinking water, while in others thousands of villagers walk miles for a bucket.", cn: "在某些富裕地區人們浪費乾淨飲用水，而在另一些地方成千上萬的村民卻得走數英里挑一桶水。" },
    { tag: "🏥 醫療不均", en: "In some private clinics luxury medical care is abundant, while in rural hospitals basic antibiotics are critically scarce.", cn: "在某些高階私立診所奢華醫療資源過剩，而在偏鄉醫院基本抗生素卻極度匱乏。" }
  ],
  68: [
    { tag: "💻 代碼提交", en: "Don't forget to commit your code changes before leaving the office on Friday, or you'll lose your local progress.", cn: "週五下班前務必記得提交你的代碼修改，否則你可能會遺失本地進度。" },
    { tag: "🏠 出門防盜", en: "Don't forget to lock the balcony windows before you depart for vacation, or you'll risk burglaries.", cn: "出門度假前務必記得鎖上陽台窗戶，否則可能會有遭竊的風險。" },
    { tag: "🔋 充電提醒", en: "Don't forget to charge your laptop battery before the long train journey, or it will power off mid-meeting.", cn: "長途火車旅行前務必記得把筆電充飽電，否則開會到一半可能會斷電。" }
  ],
  69: [
    { tag: "💼 欲速不達", en: "There is a saying that haste makes waste in software architecture. Take care not to deploy unverified pull requests.", cn: "俗話說「欲速則不達」，在架構設計中要格外注意切勿發布未經測試驗證的代碼合併。" },
    { tag: "🩺 預防勝治療", en: "There is a saying that an ounce of prevention is worth a pound of cure. Take care not to neglect routine health checkups.", cn: "俗話說「預防勝於治療」，要格外注意切勿輕忽定期的常規身體健康檢查。" },
    { tag: "☕ 守時美德", en: "There is a saying that punctuality is the politeness of kings. Take care not to arrive late for client meetings.", cn: "俗話說「守時是君王的美德」，要格外留心拜訪客戶時千萬不可遲到。" }
  ],
  70: [
    { tag: "💻 開源協作", en: "In open-source software communities, you can collaborate on innovative codebases with developers worldwide, regardless of their background or timezone.", cn: "在開源軟體社群中，你可以跨越時區與背景的界線，與世界各地的工程師協作創新代碼。" },
    { tag: "🎨 藝術交流", en: "At modern art festivals, you can exchange creative inspirations with artists from around the globe, regardless of their nationality.", cn: "在當代藝術節中，你可以跨越國籍界線，與全球藝術家自由交流靈感。" },
    { tag: "🎓 線上教育", en: "On digital learning platforms, curious students can study advanced knowledge from top universities, regardless of their financial status.", cn: "在數位學習平台上，求知若渴的學生能跨越經濟門檻，自由汲取世界頂尖大學的深厚知識。" }
  ],
  71: [
    { tag: "💻 效能優化", en: "However much server memory you provision, the system won't respond faster unless you optimize database queries.", cn: "無論你配置多少伺服器記憶體，只要不最佳化資料庫查詢，系統就不可能跑得更快。" },
    { tag: "💼 銷售拓展", en: "However much advertising budget you spend, your brand won't convert customers unless you provide outstanding user experience.", cn: "無論你砸下多少廣告預算，只要不提供卓越的使用者體驗，品牌就無法轉換客戶。" },
    { tag: "🗣️ 口語流利", en: "However many grammar textbooks you study, you won't become fluent in conversation unless you practice speaking daily.", cn: "無論你精讀多少本文法教科書，只要不每天開口練習，你就永遠無法口說流利。" }
  ],
  72: [
    { tag: "💻 官方文檔", en: "Although you believe you understand the programming library, you may discover powerful features if you look it up in the official documentation.", cn: "即使你自認熟悉這套函式庫，若翻查官方文檔，往往還是能發現強大的進階功能。" },
    { tag: "📜 法律條款", en: "Although you believe you remember the contract conditions, you may avoid legal disputes if you review the fine print carefully.", cn: "即使你自認記得合約內容，若仔細審閱細項條款，往往能避免潛在的法律糾紛。" },
    { tag: "🗺️ 地理常識", en: "Although you believe you know your city well, you may discover charming alleys if you explore the historical map.", cn: "即使你自認對居住的城市瞭若指掌，若查閱歷史地圖，往往還是能發現迷人的隱密街巷。" }
  ],
  73: [
    { tag: "💻 資安素養", en: "Some junior system administrators lack security vigilance and store production credentials in public repositories.", cn: "有些初級系統管理員缺乏資安意識，竟然把生產環境憑證存放在公開的代碼庫中。" },
    { tag: "✈️ 行李安全", en: "Some overseas travelers lack situational awareness and leave their passports on cafe counters unattended.", cn: "有些海外遊客缺乏防範意識，竟然把護照隨意丟在咖啡店櫃檯無人看管。" },
    { tag: "🚗 駕駛常識", en: "Some reckless drivers lack road common sense and text on mobile phones while steering through intersections.", cn: "有些魯莽駕駛缺乏交通安全常識，竟然在穿越十字路口時一邊開車一邊低頭傳簡訊。" }
  ],
  74: [
    { tag: "💼 生產力維持", en: "In order to maintain peak mental focus at work, you should get adequate rest and take brief outdoor walks.", cn: "為了在工作中維持頂尖的專注力，你應當獲得充足休息並適時去戶外走走散心。" },
    { tag: "🏃 體能耐力", en: "In order to prepare for the trail marathon, you should build cardiovascular stamina and follow a structured training schedule.", cn: "為了準備越野馬拉松賽事，你應當建立心肺耐力並遵循有系統的訓練課表。" },
    { tag: "🩺 眼睛健康", en: "In order to prevent severe visual fatigue, you should take screen breaks every thirty minutes and practice eye relaxation.", cn: "為了防止嚴重的視力疲勞，你應當每三十分鐘讓眼睛離開螢幕並進行眼部放鬆。" }
  ],
  75: [
    { tag: "💼 第一線客服", en: "If you work in customer support for a month, you have a priceless opportunity to look at your product from a user's point of view.", cn: "如果你在客服第一線支援一個月，你將擁有千載難逢的機會從使用者的視角審視自己的產品。" },
    { tag: "✈️ 海外生活", en: "If you study abroad in a multilingual environment, you have an opportunity to look at your native culture from a broader perspective.", cn: "如果你在多語環境中留學生活，你就有大好機會從更寬廣的視角重新審視母國文化。" },
    { tag: "🤝 角色互換", en: "If you manage a business project from beginning to end, you have an opportunity to look at engineering constraints from a financial point of view.", cn: "如果你從頭到尾管理一個商業專案，你就有機會從財務角度審視技術研發的限制與取捨。" }
  ],
  76: [
    { tag: "💻 系統故障", en: "It is not until a production server suddenly crashes that you realize how critical reliable backups really are.", cn: "只有正式環境伺服器突然崩潰時，你才會深刻意識到可靠的備份有多麼關鍵。" },
    { tag: "🩺 身體健康", en: "It is not until you recover from a severe illness that you realize how precious daily physical health is.", cn: "只有當你從一場大病中康復時，你才會真切意識到日常的健康有多麼珍貴。" },
    { tag: "✈️ 異鄉遊子", en: "It is not until you reside in a foreign continent that you realize how deeply attached you are to your native culture.", cn: "只有遠居異國他鄉，你才會真切體會到自己對母國文化有著多麼深厚的眷戀。" }
  ],
  77: [
    { tag: "💼 新創迷思", en: "It is a pity that many startups mistakenly believe that they have only to build an app to achieve overnight success.", cn: "令人遺憾的是，許多新創公司誤以為只要做出一款 App 就能在一夜之間大獲成功。" },
    { tag: "🗣️ 學習誤區", en: "It is a pity that many students mistakenly believe that they have only to memorize vocabulary to master fluent English.", cn: "令人遺憾的是，許多學生誤以為只要狂背單字就能自然而然講出一口流利的英語。" },
    { tag: "📈 投資幻想", en: "It is a pity that many novice investors mistakenly believe that they have only to follow viral advice to earn fortunes.", cn: "令人遺憾的是，許多新手投資人誤以為只要盲跟網路炒作就能輕鬆賺進大筆財富。" }
  ],
  78: [
    { tag: "💼 技術面試", en: "It is reassuring that the lead interviewer didn't care about my accent as long as I could explain the algorithmic logic clearly.", cn: "令人欣慰的是，主考官並不在乎我的口音，只要我能把演算法邏輯清晰闡述即可。" },
    { tag: "✈️ 海外旅遊", en: "It is comforting that local shopkeepers don't care if your grammar is flawed as long as they can understand your intended meaning.", cn: "令人安心的是，當地店家並不在乎你的文法是否有瑕疵，只要能聽懂你想表達的意思即可。" },
    { tag: "🤝 國際會議", en: "It is inspiring that global conference attendees don't care about perfect wording as long as your research ideas are sound.", cn: "令人鼓舞的是，國際會議的與會者並不在乎詞藻是否完美，只要你的研究理念扎實即可。" }
  ],
  79: [
    { tag: "💻 資安防護", en: "The best things you can do to prevent data theft are to enable two-factor authentication and to encrypt all storage volumes.", cn: "為了防止資料遭竊我們能做的最好舉措，就是啟用雙重身分驗證並對所有硬碟進行加密。" },
    { tag: "🌿 節能減碳", en: "The best things you can do to conserve energy are to turn off idling electronics and to use efficient LED lighting.", cn: "為了節約能源我們能做的最好行動，就是隨手關閉閒置電器並改用高效率的 LED 燈具。" },
    { tag: "🏃 身心健康", en: "The best things you can do to maintain vitality are to drink adequate water and to practice consistent sleep schedules.", cn: "為了保持活力充沛我們能做的最好舉動，就是補充足夠水分並維持規律的生活作息。" }
  ],
  80: [
    { tag: "💻 遠距辦公", en: "Surveys indicate that eight out of ten remote software engineers don't believe in returning to rigid offices full-time.", cn: "調查顯示每十位遠距軟體工程師中就有八位不願意再回到硬性規定的實體辦公室全職打卡。" },
    { tag: "📱 數位習慣", en: "Reports show that nine out of ten teenagers don't believe in watching traditional scheduled television.", cn: "報告顯示每十位青少年中就有九位不習慣看傳統固定時段播出的電視節目。" },
    { tag: "🚗 永續出行", en: "Statistics reveal that six out of ten urban car buyers don't believe in purchasing fossil-fuel vehicles anymore.", cn: "統計揭示每十位城市購車族中就有六位不願意再購買傳統燃油車輛。" }
  ],
  81: [
    { tag: "💼 管理文化", en: "Styles of management vary from firm to firm. In agile tech startups, transparent standups are more common than formal reports.", cn: "管理風格因公司而異；在敏捷科技新創中，透明的站會溝通比繁文縟節的正式報告更為普遍。" },
    { tag: "☕ 用餐禮儀", en: "Dining customs vary from region to region. In Italy, drinking espresso after lunch is more common than sipping iced lattes.", cn: "用餐習俗各地不盡相同；在義大利，午餐後喝濃縮咖啡比喝冰拿鐵更為常見。" },
    { tag: "🎓 教學模式", en: "Instructional methods vary from school to school. In progressive academies, project-based workshops are more common than lecture exams.", cn: "教學方式因學校而異；在開明前衛的學院中，專案工作坊比單向講課考試更為普遍。" }
  ],
  82: [
    { tag: "🏙️ 地理景致", en: "Kyoto is located south of Lake Biwa, which is celebrated for its historic shrines and picturesque surrounding hills.", cn: "京都市位於琵琶湖以南，該湖周邊以歷史悠久的神社與秀麗連綿的山巒而聞名遐邇。" },
    { tag: "🏖️ 渡假勝地", en: "Nice is located east of Cannes, which is renowned worldwide for its sunlit beaches and glamorous film festivals.", cn: "尼斯位於坎城以東，坎城以陽光明媚的海灘與星光熠熠的國際影展享譽全球。" },
    { tag: "🗻 溫泉名鎮", en: "Hakone is located west of Mount Fuji, which is famous for its natural thermal springs and panoramic scenic views.", cn: "箱根位於富士山以西，該地以天然溫泉與全景壯麗風光著稱。" }
  ],
  83: [
    { tag: "💼 技術前輩", en: "Quite a few senior software architects look down on junior engineers, who cannot debug independently and ask too much of their mentors.", cn: "不少資深架構師看不慣無法獨立除錯且對導師過度依賴的初級工程師。" },
    { tag: "👥 職場合作", en: "Some high-performing project leaders look down on passive teammates, who cannot execute without constant supervision.", cn: "某些高績效專案負責人看不起消極被動的組員，因為他們在缺乏隨時監督下就毫無執行力。" },
    { tag: "🏫 師徒關係", en: "Senior research scientists look down on trainees, who cannot analyze raw lab results by themselves.", cn: "資深研究員瞧不起那些連原始實驗數據都無法獨立分析的學徒實習生。" }
  ],
  84: [
    { tag: "🏙️ 都會交通", en: "The convention exhibition center is about fifteen minutes' walk from here, but it takes only three minutes to get there by subway.", cn: "會展中心離這裡步行大約十五分鐘，但搭地鐵只要三分鐘即可抵達。" },
    { tag: "☕ 咖啡地圖", en: "The specialty coffee roastery is about twenty minutes' walk from the station, but it takes only five minutes to get there by bicycle.", cn: "那家精品自烘咖啡館離車站步行大約二十分鐘，但騎自行車五分鐘就能到達。" },
    { tag: "🏨 飯店接駁", en: "The resort hotel is about half an hour's walk from the ferry pier, but it takes only seven minutes to get there by shuttle.", cn: "渡假飯店離渡輪碼頭步行約半小時，但搭乘接駁專車只需七分鐘。" }
  ],
  85: [
    { tag: "📱 筆電維修", en: "It cost five hundred dollars to have the liquid-damaged laptop motherboard repaired by authorized technicians.", cn: "找原廠授權技師修理受潮損壞的筆電主機板花了我五百美元。" },
    { tag: "🚗 汽車保養", en: "It cost eight hundred dollars to have the car brake system overhauled before our cross-country trip.", cn: "在長途自駕旅行前徹底檢修汽車煞車系統花了我八百美元。" },
    { tag: "🏠 水管疏通", en: "It cost two hundred dollars to have the kitchen drainage pipe unclogged by an emergency plumber.", cn: "請緊急水電工疏通廚房排水管花了我兩百美元。" }
  ],
  86: [
    { tag: "💼 研發編制", en: "There are six core engineers in our product squad. Our development lab is on the seventh floor of this technology tower.", cn: "我們產品小組有六名核心工程師，研發實驗室位於這棟科技大樓的七樓。" },
    { tag: "🏠 家庭住宅", en: "There are three people in my family. Our cozy apartment is on the fourth floor of this residential building.", cn: "我們家有三口人，溫馨的公寓位於這棟住宅大樓的四樓。" },
    { tag: "🏢 新創進駐", en: "There are eight founders in the incubator cohort. Their shared studio is on the second floor of the innovation warehouse.", cn: "育成班有八位創辦人，他們的共享工作室位於創新孵化基地的二樓。" }
  ],
  87: [
    { tag: "📱 網路假訊息", en: "The tendency for internet users to believe unverified sensational headlines is nothing new.", cn: "網路使用者輕易盲信未經證實的聳動頭條之傾向，並非始於今日。" },
    { tag: "📈 股市跟風", en: "The tendency for novice retail investors to follow speculative hype is nothing new in financial history.", cn: "散戶投資新手在金融市場中盲目跟風炒作的傾向，在歷史上早已屢見不鮮。" },
    { tag: "🎓 盲目迷信", en: "The tendency for young graduates to chase prestigious company titles is nothing new in job markets.", cn: "年輕畢業生盲目追逐大公司光環頭銜的傾向，在就業市場上從來就不是新鮮事。" }
  ],
  88: [
    { tag: "💼 導師盛情", en: "When I was interning in Silicon Valley, a seasoned director bought me lunch at an upscale rooftop restaurant.", cn: "在矽谷實習期間，一位資深總監曾在一家高級頂樓景觀餐廳請我吃過午餐。" },
    { tag: "🎓 留學回憶", en: "When I was studying in Tokyo, a generous professor bought me dinner at a traditional sushi bar.", cn: "在東京留學期間，一位慷慨的教授曾在傳統壽司名店請我吃過晚飯。" },
    { tag: "✈️ 旅途款待", en: "When I was traveling across Melbourne, a hospitable local host bought me coffee at a famous heritage cafe.", cn: "在墨爾本旅行期間，熱情好客的當地房東曾在著名的歷史咖啡館請我喝過咖啡。" }
  ],
  89: [
    { tag: "💼 創業代價", en: "The startup achieved hypergrowth in corporate valuation, but at the expense of product stability and engineering morale.", cn: "這家新創公司實現了估值爆發式成長，但卻是以犧牲產品穩定度與工程士氣為代價。" },
    { tag: "🏆 榮譽犧牲", en: "The champion athlete secured the coveted gold medal, but at the expense of chronic joint injuries.", cn: "這位冠軍選手奪得了夢寐以求的奧運金牌，但卻是以長年慢性關節損傷為代價。" },
    { tag: "📈 業務拓展", en: "The enterprise dramatically reduced operational costs, but at the expense of customer service satisfaction.", cn: "這家企業大幅削減了營運成本，但代價是客戶服務滿意度的急劇下滑。" }
  ],
  90: [
    { tag: "💼 腦力重壓", en: "If continuous high-pressure coding sprints give you mental exhaustion, it is best to hike in forests in order to relieve them.", cn: "如果連續高壓的代碼衝刺帶來了精神疲憊，最好的方式是去森林健行以舒緩身心。" },
    { tag: "🏙️ 都市焦慮", en: "If crowded subway commutes and tight deadlines give you anxiety, it is best to practice meditation in quiet parks in order to relieve them.", cn: "如果擁擠的通勤和緊湊的交期讓你焦慮，最好的放鬆方式是到寧靜的公園冥想以緩解壓力。" },
    { tag: "🏋️ 肌肉緊繃", en: "If prolonged desk work gives you neck stiffness and back fatigue, it is best to soak in hot springs in order to relieve them.", cn: "如果長時間伏案工作造成脖子僵硬與背部疲憊，最好的方式是泡溫泉以舒緩肌肉。" }
  ],
  91: [
    { tag: "💻 科技斷層", en: "In fast-evolving tech industries, software developers have difficulty keeping up with framework revisions after taking long career leaves.", cn: "在快速演進的科技領域中，軟體工程師中斷職涯數年之後往往很難跟上前端框架的更新。" },
    { tag: "💼 轉職障礙", en: "In legacy corporate structures, mid-career professionals have difficulty transitioning into executive leadership without elite credentials.", cn: "在傳統企業組織中，資深中階人員若無名校文憑往往很難被晉升到高階核心層。" },
    { tag: "🎓 學術復出", en: "In competitive university labs, researchers have difficulty securing multi-year grants after stepping away from publications.", cn: "在競爭激烈的大學實驗室中，學者若長期未發表頂級論文，往往很難申請到多年的研究基金。" }
  ],
  92: [
    { tag: "💼 導師指引", en: "Senior engineering mentors guide junior developers through pull requests until they are confident enough to deploy independently.", cn: "資深工程導師密切指導初級開發者的代碼審查，直到他們累積足夠信心能獨立上線為止。" },
    { tag: "✈️ 飛行學徒", en: "Flight instructors oversee apprentice aviators in dual-control cockpits until they are experienced enough to fly solo.", cn: "飛行教官在雙控駕駛艙中密切監督飛行學徒，直到他們具備足夠經驗能獨自單飛。" },
    { tag: "🎨 設計培訓", en: "Creative art directors supervise trainee graphic illustrators until they are proficient enough to pitch brand concepts to clients directly.", cn: "藝術總監全程督導學徒插畫師，直到他們技能足夠純熟能直接向客戶提案品牌概念。" }
  ],
  93: [
    { tag: "🏢 科技園區", en: "\"Excuse me. Could you tell me how to get to the main auditorium?\" \"Go straight past the reception desk, then take the elevator. You'll find it on your left.\"", cn: "「不好意思，請問主大禮堂怎麼走？」「直走過接待櫃檯後搭電梯，它就在你的左手邊。」" },
    { tag: "✈️ 機場指路", en: "\"Excuse me. Could you tell me how to get to baggage claim?\" \"Follow the overhead directional signs, then walk down the escalator. You'll see it on your right.\"", cn: "「不好意思，請問行李領取處怎麼走？」「跟著頭頂的指示標誌直走，然後下電扶梯，它就在你的右側。」" },
    { tag: "🏙️ 市區問路", en: "\"Excuse me. Could you tell me how to get to the central library?\" \"Walk two blocks down this avenue, then turn right at the traffic lights. You'll find it on your left.\"", cn: "「請問市立圖書館怎麼走？」「沿著這條大道走過兩個街區，在紅綠燈處右轉，它就在你的左邊。」" }
  ],
  94: [
    { tag: "💻 簡約介面", en: "\"What do you think of this minimalist developer UI?\" \"There is something about its typography and responsive spacing that really attracts me.\"", cn: "「你覺得這個極簡開發者介面怎麼樣？」「它的字型排版與響應式間距有一種非常吸引我的優雅特質。」" },
    { tag: "🏢 新進領導", en: "\"What do you think of our new technical director?\" \"There is something about her calm problem-solving approach that genuinely inspires the team.\"", cn: "「你覺得我們的新技術總監怎麼樣？」「她那冷靜沉著的解題風格有一種深深激勵團隊的特質。」" },
    { tag: "🎨 建築美感", en: "\"What do you think of this modern glass library?\" \"There is something about the natural illumination that captivates every visitor.\"", cn: "「你覺得這座現代玻璃圖書館如何？」「它充足的自然採光有一種讓每位訪客流連忘返的魅力。」" }
  ],
  95: [
    { tag: "💼 辦公自私", en: "Coworkers who don't feel guilty about dumping unmaintained legacy code on junior developers really make me angry.", cn: "把無人維護的爛代碼丟給新人收拾還毫無愧疚感的同事，真的很讓人惱火。" },
    { tag: "🚗 交通惡習", en: "Drivers who don't feel guilty about blocking pedestrian walkways while answering phone calls really make me irritated.", cn: "一邊講電話一邊霸占斑馬線還一副理所當然樣子的駕駛，真的很讓人惱火。" },
    { tag: "☕ 公共環境", en: "Patrons who don't feel guilty about speaking on speakerphones in quiet library lounges really make other readers furious.", cn: "在安靜的圖書館閱覽室開擴音講話還毫不自覺的人，真的會讓周遭讀者十分憤怒。" }
  ],
  96: [
    { tag: "💻 程式潛能", en: "Every software engineer is born with creative problem-solving potential. The question is whether team culture can nurture it or not.", cn: "每位軟體工程師天生都帶有創新的解題潛力，關鍵在於團隊文化能否用心培育它。" },
    { tag: "🎨 藝術天賦", en: "Every child is born with an innate imagination. The question is whether traditional educational systems cultivate it or not.", cn: "每個孩子天生都擁有豐富的想像力，關鍵在於傳統教育體制能否去啟發它。" },
    { tag: "💼 領導特質", en: "Many ambitious professionals are born with natural charisma. The question is whether they can direct it toward collaborative goals or not.", cn: "許多充滿抱負的專業人士天生自帶領袖魅力，關鍵在於他們能否將其引導至團隊的共同目標上。" }
  ],
  97: [
    { tag: "💼 業界偶遇", en: "When I attended the annual developer conference, I ran into a former colleague from my first startup.", cn: "當我參加年度開發者大會時，碰巧遇見了第一家新創公司的老同事。" },
    { tag: "✈️ 機場重逢", en: "When I checked in for the transatlantic flight, I ran into an old college roommate after seven years.", cn: "辦理跨洋航班登機手續時，我碰巧遇見了相隔七年沒見的大學室友。" },
    { tag: "☕ 街角巧遇", en: "When I stopped by the downtown bookstore on Sunday, I ran into my high school literature teacher.", cn: "週日我順道逛市中心的書店時，碰巧遇見了高中的國文老師。" }
  ],
  98: [
    { tag: "💻 經典演講", en: "This keynote presentation on software architecture is worth watching over and over again. I strongly recommend it to all engineers.", cn: "這場關於軟體架構的主題演講值得反覆觀看，我強烈推薦給所有工程師。" },
    { tag: "📚 經典名著", en: "This masterpiece novel on human nature is worth reading over and over again. I recommend it without reservation.", cn: "這部探討人性的傳世小說值得一讀再讀，我毫無保留地向你強烈推薦。" },
    { tag: "🎬 深刻電影", en: "This award-winning documentary on ocean ecosystems is worth sharing with your entire family.", cn: "這部榮獲大獎的海洋生態紀錄片值得推薦給全家人一同觀賞。" }
  ],
  99: [
    { tag: "💻 自動化測試", en: "Automated test suites play an important part in software reliability. If you want to deploy safely, you should run integration tests continuously.", cn: "自動化測試套件對軟體系統可靠性起著關鍵作用。如果想安全部署，就應當持續執行整合測試。" },
    { tag: "🏃 規律作息", en: "Deep restorative sleep plays an important part in cognitive performance. If you want to remain sharp, you should sleep eight hours nightly.", cn: "深層睡眠對認知思維表現至關重要。如果想保持頭腦敏銳，每晚就應睡足八小時。" },
    { tag: "🤝 誠信透明", en: "Honest communication plays an important part in long-term customer relationships. If you want to build trust, you should disclose incidents openly.", cn: "誠實透明在長期客戶關係中發揮著重要作用。如果想建立深厚信任，發生事故時就應當公開坦率地說明。" }
  ],
  100: [
    { tag: "💻 終身學習", en: "Bear in mind that if you maintain discipline, curiosity, and persistence, you can master any programming paradigm.", cn: "請牢記在心：只要你能保持自律、好奇心與毅力，掌握任何程式架構典範都能無往不利。" },
    { tag: "💼 創業初心", en: "Bear in mind that if you focus relentlessly on user value, you can build an enduring company in any competitive market.", cn: "請牢記在心：只要你能毫不妥協地專注於用戶價值，在任何競爭激烈的市場中都能打造出基業長青的企業。" },
    { tag: "🌱 人生格言", en: "Bear in mind that if you have genuine passion for what you do, you can overcome any obstacle along the journey.", cn: "請牢記在心：只要你對所從事的事物懷抱發自內心的真摯熱情，人生旅途上的任何艱難險阻你都能一一克服。" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DRAGON_100_EXAMPLES;
}
