// Dragon English 100 完整資料庫
// 依據《Dragon English 100 基本英文句型對照表》與竹岡廣信教學法精編

const DRAGON_100_DATA = [
  {
    id: 1,
    cn: "一天喝光兩瓶威士忌還開車是極其危險的。",
    simplified_cn: "如果喝了兩瓶威士忌又開車，那會非常危險。",
    en: "It would be dangerous to drink two bottles of whiskey and drive a car.",
    category: "形式主詞與假設語氣",
    grammar: "虛擬語氣 / 形式主詞：用 It would be... 表設想情況而非既成事實；It 為形式主詞，真主詞為後面的不定詞片語 to drink... and drive...。",
    skeleton: "It would be [Adj] to [Action 1] and [Action 2].",
    pitfall: "很多人直覺寫 It is dangerous...，但此處並非陳述某人正在做這件事的既成事實，而是對假定情境的推想，用 would 語氣更精準委婉。",
    slot_example: {
      original_pattern: "It would be [dangerous] to [drink two bottles of whiskey] and [drive a car].",
      custom_demo: "It would be unwise to deploy the code and leave the office immediately.",
      custom_cn: "發布代碼後立刻離開辦公室是極不明智的。"
    }
  },
  {
    id: 2,
    cn: "在紅綠燈轉綠之前穿越車流繁雜的街道非常危險。",
    simplified_cn: "在交通號誌變綠前穿過車多的馬路，是很危險的。",
    en: "It is very dangerous to cross a busy street before the light turns green.",
    category: "時態與副詞子句",
    grammar: "時間副詞子句與時態：before 引導的時間副詞子句中，須用現在式 turns 代替未來式。",
    skeleton: "It is [Adj] to [Action] before [Subject] [turns/changes].",
    pitfall: "切忌在 before/when/if 引導的副詞子句中使用 will turn。時間副詞子句中一律以現在式代表未來。",
    slot_example: {
      original_pattern: "It is very dangerous to cross a busy street before [the light turns green].",
      custom_demo: "It is essential to review the contract before the client signs it.",
      custom_cn: "在客戶簽署合約之前進行審查是至關重要的。"
    }
  },
  {
    id: 3,
    cn: "清晨一邊聽著鳥鳴一邊散步，真的讓人心曠神怡。",
    simplified_cn: "大清早散步，同時聽著小鳥唱歌，令人心情舒暢。",
    en: "It is really pleasant to take a walk early in the morning, listening to birds sing.",
    category: "分詞構句與感官動詞",
    grammar: "分詞構句與感官動詞：listening... 為表伴隨狀態的分詞構句；感官動詞 listen to + O + 原形動詞 (sing)。",
    skeleton: "It is [pleasant] to [Action], listening to [Object] [sing/play].",
    pitfall: "伴隨動作的分詞構句需用 -ing 形式；注意感官動詞 listen to 後接受詞補語用原形動詞強調全程動作。",
    slot_example: {
      original_pattern: "It is really pleasant to [take a walk early], listening to [birds sing].",
      custom_demo: "It is really relaxing to drink coffee on the balcony, watching the rain fall.",
      custom_cn: "坐在陽台上喝咖啡、看著雨滴落下，真的很放鬆。"
    }
  },
  {
    id: 4,
    cn: "日本大部分高中生都會去補習班，為大學入學考試做準備。",
    simplified_cn: "大多數日本高中生去補習班，目的是準備大學考試。",
    en: "Most Japanese high school students go to a cram school to prepare for college entrance exams.",
    category: "不定詞與數量詞",
    grammar: "不定詞表目的：to prepare for... 表目的；注意 most + 名詞 與 most of the + 名詞 的用法區隔。",
    skeleton: "Most [Group] [Action] to prepare for [Event].",
    pitfall: "泛指「大部分的某群體」時用 most + 複數名詞；只有在指特定群體時才用 most of the...",
    slot_example: {
      original_pattern: "Most [Japanese high school students] go to a cram school to [prepare for exams].",
      custom_demo: "Most software engineers take online courses to prepare for technical interviews.",
      custom_cn: "大多數軟體工程師都會上線上課程來準備技術面試。"
    }
  },
  {
    id: 5,
    cn: "等電梯或等紅綠燈時，大多數日本人只要等三十秒就會開始感到煩躁。",
    simplified_cn: "當等電梯或號誌時，很多日本人僅等30秒就會不耐煩。",
    en: "When waiting for the elevator to come or the traffic light to change, most Japanese people become irritated in only thirty seconds.",
    category: "分詞構句與時間介系詞",
    grammar: "分詞構句省略主詞：When waiting... 原為 When they wait...；in thirty seconds 的 in 表「在……時間之內/之後」。",
    skeleton: "When waiting for [A] to [Action], [Subject] become [Emotion] in [Time].",
    pitfall: "介系詞 in 用在時間前表示「過多久之後」或「在多短的時間內即發生」，勿誤用 after 或 within。",
    slot_example: {
      original_pattern: "When waiting for [the train to arrive], commuters become restless in [just two minutes].",
      custom_demo: "When waiting for the web page to load, modern users become impatient in only three seconds.",
      custom_cn: "等網頁載入時，現代用戶只要等三秒就會感到不耐煩。"
    }
  },
  {
    id: 6,
    cn: "在火車上坐在我旁邊的老奶奶問我要去哪裡。",
    simplified_cn: "火車上坐我隔壁的老奶奶問我的目的地是哪裡。",
    en: "An elderly woman sitting next to me on the train asked me where I was going.",
    category: "分詞後位修飾與間接問句",
    grammar: "現在分詞後位修飾與間接問句：sitting... 修飾先行詞 woman；名詞子句 where I was going 採陳述句語序且注意時態一致。",
    skeleton: "[Person] sitting [Location] asked me where I was [Action-ing].",
    pitfall: "間接問句切忌用疑問句語序！不可寫 where was I going，必須是陳述語序 where I was going。",
    slot_example: {
      original_pattern: "An elderly woman [sitting next to me] asked me [where I was going].",
      custom_demo: "A young developer sitting across from me asked me what framework I was using.",
      custom_cn: "坐在我對面的年輕工程師問我正在使用什麼框架。"
    }
  },
  {
    id: 7,
    cn: "湯姆說大眾運輸不方便，建議我們租車在市區到處逛逛。",
    simplified_cn: "湯姆告訴我們大眾交通不便，所以我們該租車遊覽市區。",
    en: "Tom told us that we should rent a car to get around the city because public transportation was inconvenient.",
    category: "間接引述與時態一致",
    grammar: "間接引述與時態一致：主要子句為過去式 told，引述子句時態退後為過去式 was；get around 表四處走動/遊覽。",
    skeleton: "[Person] told us that we should [Action] to get around because [Condition] was inconvenient.",
    pitfall: "主要子句是 told (過去式)，後方的 because public transportation is inconvenient 需配合時態退一格改為 was。",
    slot_example: {
      original_pattern: "Tom told us that we should [rent a car] to [get around the city] because [public transportation was inconvenient].",
      custom_demo: "The guide told us that we should buy a subway pass to get around Tokyo because taxis were expensive.",
      custom_cn: "導遊告訴我們應該買地鐵周遊券遊覽東京，因為計程車很貴。"
    }
  },
  {
    id: 8,
    cn: "何時結婚、生不生小孩，都應該由個人自由決定。",
    simplified_cn: "每個人都應自由決定什麼時候結婚以及是否要生孩子。",
    en: "Everyone should be free to decide when to get married and whether to have children.",
    category: "名詞片語與平行結構",
    grammar: "疑問詞/whether + 不定詞：when to get married 與 whether to have children 作 decide 的受詞，文法結構對稱。",
    skeleton: "Everyone should be free to decide [when to V] and [whether to V].",
    pitfall: "decide 後面的受詞必須保持結構平衡，when to... 與 whether to... 兩者對稱並列。",
    slot_example: {
      original_pattern: "Everyone should be free to decide [when to get married] and [whether to have children].",
      custom_demo: "Employees should be free to decide when to take leave and whether to work remotely.",
      custom_cn: "員工應該有自由決定何時休假以及是否遠距辦公。"
    }
  },
  {
    id: 9,
    cn: "大地震何時何地會發生是無法預測的。",
    simplified_cn: "我們無法預測大地震會在何時何地發生。",
    en: "It is impossible to predict where and when there will be a major earthquake.",
    category: "形式主詞與間接問句",
    grammar: "形式主詞與間接問句：predict 後接 where and when... 間接問句；注意未來發生用 there will be。",
    skeleton: "It is impossible to predict [where and when] there will be [Event].",
    pitfall: "predict 後接間接問句，不可倒裝成 will there be，必須是陳述語序 there will be。",
    slot_example: {
      original_pattern: "It is impossible to predict where and when there will be [a major earthquake].",
      custom_demo: "It is difficult to predict when and how the stock market will crash.",
      custom_cn: "很難預測股市會在何時以及以何種方式崩盤。"
    }
  },
  {
    id: 10,
    cn: "湯姆堅稱一切都會沒事，但我還是忍不住感到擔憂。",
    simplified_cn: "雖然湯姆堅稱沒問題，我依舊忍不住擔心。",
    en: "Tom insisted that everything would be all right, but I couldn't help feeling worried.",
    category: "慣用語與語氣",
    grammar: "慣用語用法：cannot help + V-ing 表「忍不住/不得不……」；insist that... 在此陳述個人堅信看法時使用直說法過去式 would be。",
    skeleton: "[Person] insisted that [Clause], but I couldn't help feeling [Emotion].",
    pitfall: "cannot help + V-ing 是常見考點與寫作核心片語，注意接動名詞 feeling，不可寫成 feel。",
    slot_example: {
      original_pattern: "Tom insisted that [everything would be all right], but I couldn't help feeling [worried].",
      custom_demo: "The manager insisted that the server was stable, but I couldn't help feeling nervous.",
      custom_cn: "經理堅稱伺服器很穩定，但我還是忍不住感到緊張。"
    }
  },
  {
    id: 11,
    cn: "我從沒想到自己的話語可能會傷到她的感情。",
    simplified_cn: "我壓根沒料到我的話會傷害到她。",
    en: "It never occurred to me that my remark might hurt her feelings.",
    category: "無生物主詞慣用句",
    grammar: "無生物主詞慣用句：It occurs to sb that... 表「某人突然想到……」，否定句 It never occurred to me... 表壓根沒料到。",
    skeleton: "It never occurred to me that [Subject] might [Action].",
    pitfall: "不要用中文直譯 I didn't think...；地道英文用 It never occurred to me that... 表現事物自發湧上心頭的語感。",
    slot_example: {
      original_pattern: "It never occurred to me that [my remark might hurt her feelings].",
      custom_demo: "It never occurred to me that the password could be guessed so easily.",
      custom_cn: "我從沒想到密碼竟然會這麼容易被猜出來。"
    }
  },
  {
    id: 12,
    cn: "「湯姆，吃晚飯囉！」「好的媽媽，我馬上來。」",
    simplified_cn: "媽媽喊吃晚餐，湯姆回答他正在朝那邊走去。",
    en: "\"Tom, dinner is ready.\" \"OK, Mom. I'm coming.\"",
    category: "進行式與位移動詞",
    grammar: "進行式表即將發生的位移動作：英文中朝向對方的動作慣用 I'm coming（不可用 I'm going）。",
    skeleton: "\"[Name], [Event] is ready.\" \"OK, [Name]. I'm coming.\"",
    pitfall: "中文說「我馬上來/我馬上過去」，初學者容易受中文影響說 I'm going，但朝向對方的移動必須用 come！",
    slot_example: {
      original_pattern: "\"Tom, dinner is ready.\" \"OK, Mom. I'm coming.\"",
      custom_demo: "\"The meeting is about to start.\" \"OK, I'm coming.\"",
      custom_cn: "「會議快開始了！」「好的，我馬上到。」"
    }
  },
  {
    id: 13,
    cn: "我一抵達成田機場就會打電話給你。",
    simplified_cn: "當我到達機場時，我會打電話給你。",
    en: "I'll call you when I get to Narita Airport.",
    category: "副詞子句與時態",
    grammar: "副詞子句代未來式：條件/時間副詞子句（when 子句）以現在式 get 代替未來式。",
    skeleton: "I'll [Action] when I get to [Place].",
    pitfall: "when 子句中不可用 will get，主要子句用 I'll call，從屬時間子句用現在式 get。",
    slot_example: {
      original_pattern: "I'll call you when I get to [Narita Airport].",
      custom_demo: "I'll message you when I arrive at the hotel.",
      custom_cn: "我一到飯店就會傳訊息給你。"
    }
  },
  {
    id: 14,
    cn: "如果從這裡搭電車去東京迪士尼樂園，你得轉三次車。",
    simplified_cn: "搭電車去迪士尼的話，你必須轉乘三次。",
    en: "If you take the train to Tokyo Disneyland from here, you have to change three times.",
    category: "日常動詞與條件句",
    grammar: "換車表達：轉乘電車直接用動詞 change 或 transfer；If 條件子句用現在式。",
    skeleton: "If you take the train to [Destination] from here, you have to change [Number] times.",
    pitfall: "「轉車」不需要複雜片語，英文口語最自然直接的就是 change 或 transfer。",
    slot_example: {
      original_pattern: "If you take the train to [Tokyo Disneyland] from here, you have to change [three times].",
      custom_demo: "If you take the subway to the airport from here, you have to transfer twice.",
      custom_cn: "如果從這裡搭地鐵去機場，你必須轉兩次車。"
    }
  },
  {
    id: 15,
    cn: "我已經決定大學畢業後要在國外找工作。",
    simplified_cn: "我已下定決心畢業後在海外求職。",
    en: "I've decided to look for a job abroad when I graduate from college.",
    category: "現在完成式與副詞",
    grammar: "現在完成式表決策現狀：I've decided 強調目前已下定決心；abroad 為副詞，前面不加介系詞。",
    skeleton: "I've decided to [Action] abroad when I graduate from [School].",
    pitfall: "abroad 本身就是副詞（在國外），切忌在前面加 in 或 to（如 in abroad 是典型中式錯誤）。",
    slot_example: {
      original_pattern: "I've decided to look for a job abroad when I graduate from college.",
      custom_demo: "I've decided to pursue a master's degree abroad when I finish my internship.",
      custom_cn: "我已經決定實習結束後出國攻讀碩士學位。"
    }
  },
  {
    id: 16,
    cn: "這台吹風機不會動了，好像壞掉了。",
    simplified_cn: "吹風機不運轉了，它有些問題。",
    en: "This dryer doesn't work. Something seems to be wrong with it.",
    category: "機器狀態與慣用句",
    grammar: "日常動詞與慣用語：機器故障用 not work；Something seems to be wrong with... 為故障常見句型。",
    skeleton: "This [Device] doesn't work. Something seems to be wrong with it.",
    pitfall: "不要看到壞掉就直覺想 broken，機械或電器不運轉最道地的說法就是 doesn't work。",
    slot_example: {
      original_pattern: "This [dryer] doesn't work. Something seems to be wrong with it.",
      custom_demo: "This projector doesn't work. Something seems to be wrong with the cable.",
      custom_cn: "這台投影機動不了，線材好像出了問題。"
    }
  },
  {
    id: 17,
    cn: "在美國寄宿家庭最棒的事，就是寄宿父母把我當成親生女兒一樣對待。",
    simplified_cn: "寄宿期間最好的一點是，他們像對待親生骨肉一樣照顧我。",
    en: "The best thing about my stay with an American family was that the parents treated me just like their daughter.",
    category: "名詞子句與補語",
    grammar: "名詞子句作主詞補語：that 引導的名詞子句置於連綴動詞 was 後作為補語說明內容。",
    skeleton: "The best thing about [Experience] was that [Clause].",
    pitfall: "The best thing about... was that 子句中，that 是名詞子句連接詞，後面接完整子句，不能省略。",
    slot_example: {
      original_pattern: "The best thing about [my stay with an American family] was that [the parents treated me just like their daughter].",
      custom_demo: "The best thing about my internship at the company was that the senior engineers mentored me patiently.",
      custom_cn: "在這家公司實習最棒的事，就是資深工程師非常有耐心地指導我。"
    }
  },
  {
    id: 18,
    cn: "我十幾歲時曾因為父親工作的關係在加拿大住過三年。",
    simplified_cn: "我十多歲在加拿大住了三年，因為我父親被調派到那裡。",
    en: "I lived in Canada for three years when I was in my teens because my father was transferred there.",
    category: "過去式與被動態",
    grammar: "過去簡單式與被動語態：敘述過去已結束的狀態用過去簡單式；職務調動用被動態 was transferred。",
    skeleton: "I lived in [Place] for [Time] when I was [Age] because [Subject] was transferred there.",
    pitfall: "公司調職並非父親個人主動行為，在英文習慣用被動態 was transferred 表派駐調動。",
    slot_example: {
      original_pattern: "I lived in [Canada] for three years when I was [in my teens] because [my father was transferred there].",
      custom_demo: "I lived in London for two years when I was in college because I was awarded an exchange scholarship.",
      custom_cn: "我大學時曾在倫敦住過兩年，因為我獲得了交換獎學金。"
    }
  },
  {
    id: 19,
    cn: "隨著網路的普及，過去幾年個人電腦的銷量迅速增長。",
    simplified_cn: "網路普及使得過去幾年電腦銷售持續大增。",
    en: "The internet is widely used, so sales of personal computers have been rapidly increasing over the last few years.",
    category: "完成進行式與趨勢",
    grammar: "現在完成進行式：over the last few years 常搭配現在完成（進行）式 have been rapidly increasing，強調持續至今的趨勢。",
    skeleton: "[Fact], so [Subject] have been [rapidly increasing] over the last few years.",
    pitfall: "「過去幾年以來」over the last few years 帶有從過去延續到現在的時間跨度，動詞必須用現在完成式。",
    slot_example: {
      original_pattern: "The internet is widely used, so [sales of personal computers] have been rapidly increasing over the last few years.",
      custom_demo: "Remote work is widely adopted, so subscriptions to cloud services have been steadily rising over the last few years.",
      custom_cn: "遠距工作被廣泛採納，因此過去幾年雲端服務的訂閱量持續穩步上升。"
    }
  },
  {
    id: 20,
    cn: "我常聽湯姆自誇游泳很厲害，但從沒親眼看過他游。",
    simplified_cn: "常聽他吹噓游泳好，但我從未真正見過他游。",
    en: "I've often heard Tom boast that he is very good at swimming, but I've never actually seen him swim.",
    category: "感官動詞與完成式",
    grammar: "感官動詞受詞補語：hear + O + 原形動詞 (boast)；see + O + 原形動詞 (swim) 強調完整動作歷程。",
    skeleton: "I've often heard [Person] boast that [Clause], but I've never actually seen [Person] [Verb].",
    pitfall: "感官動詞 see/hear 後接原形動詞 swim，強調「看過這項動作」；用 swimming 則偏向強調「看到進行中的瞬間」。",
    slot_example: {
      original_pattern: "I've often heard Tom boast that he is very good at swimming, but I've never actually seen him swim.",
      custom_demo: "I've often heard him claim that he can speak five languages, but I've never actually heard him speak French.",
      custom_cn: "我常聽他宣稱自己會說五種語言，但我從沒真正聽過他說法語。"
    }
  },
  {
    id: 21,
    cn: "雖然才剛在便利商店打工一週，但我已經完全適應這份工作了。",
    simplified_cn: "我到超商打工才一週，但我已經適應了。",
    en: "It has been only a week since I began a part-time job at a convenience store, but I'm already used to it.",
    category: "時間長度與習慣片語",
    grammar: "時間長度句型與慣用片語：It has been [時間] since + 過去式；be used to + N/V-ing 表習慣某事。",
    skeleton: "It has been only [Time] since [Event], but I'm already used to it.",
    pitfall: "be used to + 名詞/動名詞 表示「習慣於」；不要與 used to + 原形動詞（過去常常）混淆！",
    slot_example: {
      original_pattern: "It has been only a week since I began a part-time job at a convenience store, but I'm already used to it.",
      custom_demo: "It has been only three days since I moved to Tokyo, but I'm already used to the pace.",
      custom_cn: "雖然我搬到東京才三天，但我已經完全適應這種節奏了。"
    }
  },
  {
    id: 22,
    cn: "今天早上搭電車時，我找不到空位。",
    simplified_cn: "今早上電車後，我沒發現空的座位。",
    en: "When I got on the train this morning, I couldn't find an empty seat.",
    category: "大眾運輸動詞",
    grammar: "動詞搭用：搭乘大眾交通工具用 get on；空位慣用 empty seat。",
    skeleton: "When I got on the [Vehicle] this morning, I couldn't find an empty seat.",
    pitfall: "「空位」英語用 empty seat 或 vacant seat，不要直譯成 free seat（會被誤會為免費座位）。",
    slot_example: {
      original_pattern: "When I got on the train this morning, I couldn't find an empty seat.",
      custom_demo: "When I boarded the flight, I was lucky to find an empty row.",
      custom_cn: "當我登機時，我很幸運地發現了一整排空位。"
    }
  },
  {
    id: 23,
    cn: "我現在沒戴眼鏡，所以看不清楚那個路標寫了什麼。",
    simplified_cn: "我現在沒戴眼鏡，辨認不出標誌上的字。",
    en: "I'm not wearing glasses now, so I can't make out what the sign says.",
    category: "動詞片語與擬人表達",
    grammar: "動詞片語與擬人化用法：make out 表辨識/看清楚；告示、牌子寫了什麼內容習慣用 the sign says...。",
    skeleton: "I'm not [Action] now, so I can't make out what [Object] says.",
    pitfall: "路標或信件上「寫著什麼」不要用 write，英語母語最常用的擬人動詞是 say（the sign says...）。",
    slot_example: {
      original_pattern: "I'm not wearing glasses now, so I can't make out what the sign says.",
      custom_demo: "The handwriting is so messy that I can't make out what the doctor wrote.",
      custom_cn: "筆跡太潦草了，我看不清楚醫生寫了什麼。"
    }
  },
  {
    id: 24,
    cn: "回到家鄉不到二十四小時，我不自覺地就開始說起當地方言。",
    simplified_cn: "回鄉不到一天，我不知不覺就講起家鄉話。",
    en: "Less than twenty-four hours after I return to my hometown, without realizing it, I start to talk in the local dialect.",
    category: "時間副詞與慣用語",
    grammar: "時間修飾與介系詞片語：Less than + 時間 放句首；without realizing it 慣用表「不知不覺中」。",
    skeleton: "Less than [Time] after [Event], without realizing it, I start to [Action].",
    pitfall: "「不知不覺」最地道道地的表達是 without realizing it，簡潔精確，避免繁複的句式。",
    slot_example: {
      original_pattern: "Less than twenty-four hours after I return to my hometown, without realizing it, I start to talk in the local dialect.",
      custom_demo: "Less than a week after joining the company, without realizing it, I started using their tech jargon.",
      custom_cn: "進公司不到一週，不知不覺中我就開始用他們的技術術語了。"
    }
  },
  {
    id: 25,
    cn: "人類在五到六歲左右，便學會表達自己心中的想法。",
    simplified_cn: "人在五六歲時，就學會表達自己的想法。",
    en: "Humans learn to express what they think by the age of five or six.",
    category: "關係代名詞與介系詞",
    grammar: "關係代名詞與介系詞：what they think（所想的事情）作受詞；by the age of... 的 by 表「在……歲之前/左右」。",
    skeleton: "[Subject] learn to express what they think by the age of [Number].",
    pitfall: "what they think 包含先行詞（= the things which they think），表達心中的所思所想極為自然。",
    slot_example: {
      original_pattern: "Humans learn to express what they think by the age of five or six.",
      custom_demo: "Children learn to navigate smartphone apps by the age of three or four.",
      custom_cn: "孩童在三到四歲左右就學會操作智慧型手機應用程式。"
    }
  },
  {
    id: 26,
    cn: "多虧你前幾天替我畫的地圖，我才能順利到達這裡而沒迷路。",
    simplified_cn: "感謝你畫的地圖，我順利到達且沒迷路。",
    en: "Thanks to the map you drew me the other day, I managed to get here without getting lost.",
    category: "片語動詞與成功達成",
    grammar: "片語動詞精準度：manage to V 表克服困難、成功做到某事；get lost 表迷路。",
    skeleton: "Thanks to [Help], I managed to [Achieve] without [Trouble].",
    pitfall: "manage to V 強調「費了番周折或克服潛在困難後順利做到」，比單純的 I could arrive 語義更深刻豐富。",
    slot_example: {
      original_pattern: "Thanks to the map you drew me the other day, I managed to get here without getting lost.",
      custom_demo: "Thanks to the detailed instructions you wrote, I managed to assemble the server without making any mistakes.",
      custom_cn: "多虧你寫的詳細指引，我才能順利組裝伺服器而沒出任何差錯。"
    }
  },
  {
    id: 27,
    cn: "去年夏天我請了兩週假，和妻子一起去歐洲旅行。",
    simplified_cn: "去年夏天我休了兩週假，與妻子赴歐洲遊玩。",
    en: "Last summer I took two weeks off, and went on a trip to Europe with my wife.",
    category: "日常慣用語與旅行",
    grammar: "休假表達：請假慣用 take [時間] off；去某處旅行用 go on a trip to...。",
    skeleton: "Last summer I took [Duration] off, and went on a trip to [Destination] with [Person].",
    pitfall: "請假是 take [時間] off，不要用中式直譯 ask for vacation ；旅行用 go on a trip to。",
    slot_example: {
      original_pattern: "Last summer I took two weeks off, and went on a trip to Europe with my wife.",
      custom_demo: "Last month I took three days off, and went on a hiking trip in Hokkaido with my brother.",
      custom_cn: "上個月我請了三天假，和我哥哥一起去北海道徒步旅行。"
    }
  },
  {
    id: 28,
    cn: "鮑伯變化實在太大了，前陣子同學會見到他時我都沒認出他來。",
    simplified_cn: "鮑伯變了許多，所以同學會見到他時我沒認出他。",
    en: "Bob had changed a lot, so when I saw him at a class reunion, I didn't recognize him.",
    category: "過去完成式與辨認",
    grammar: "過去完成式：had changed 發生在過去見面（saw）之前，需用過去完成式表先後順序；recognize 表認出人臉。",
    skeleton: "[Person] had changed a lot, so when I saw him at [Event], I didn't recognize him.",
    pitfall: "見面是 saw (過去式)，而變化的過程發生在見面之前，必須用過去完成式 had changed 體現時態縱深。",
    slot_example: {
      original_pattern: "Bob had changed a lot, so when I saw him at a class reunion, I didn't recognize him.",
      custom_demo: "The city had expanded so much that when I returned after a decade, I didn't recognize the downtown.",
      custom_cn: "這座城市擴展得太厲害了，十年後我回來時根本認不出市中心了。"
    }
  },
  {
    id: 29,
    cn: "相隔二十年再次重訪故鄉，發現它已經面目全非，不再是過去的模樣。",
    simplified_cn: "二十年後首次返鄉，發現它不再是以前的樣子了。",
    en: "When I visited my hometown for the first time in twenty years, I found that it was no longer what it used to be.",
    category: "慣用語與昔日狀態",
    grammar: "常用慣用語：for the first time in [時間] 表相隔多久第一次；what it used to be 慣指「昔日的樣貌」。",
    skeleton: "When I visited [Place] for the first time in [Time], I found that it was no longer what it used to be.",
    pitfall: "what it used to be 是竹岡廣信特別推薦的高頻名言句型，精確表達「當年的樣貌」。",
    slot_example: {
      original_pattern: "When I visited my hometown for the first time in twenty years, I found that it was no longer what it used to be.",
      custom_demo: "When I returned to my old school for the first time in ten years, I found that it was no longer what it used to be.",
      custom_cn: "相隔十年再次回到母校，發現它已經不再是當年的模樣了。"
    }
  },
  {
    id: 30,
    cn: "昨晚因為趕著預習數學熬夜到四點，現在非常想睡。",
    simplified_cn: "昨晚熬夜到四點準備數學，所以我現在很睏。",
    en: "I stayed up till four last night preparing for the math lesson, so I feel very sleepy.",
    category: "分詞構句與伴隨狀態",
    grammar: "分詞構句表原因/伴隨：stay up till...（熬夜到……）；preparing... 為現在分詞片語，修飾熬夜時在做的事。",
    skeleton: "I stayed up till [Time] last night [Action-ing], so I feel [Feeling].",
    pitfall: "「熬夜」用 stay up；後方直接用現在分詞 preparing 接續伴隨狀態，句構極為輕盈俐落。",
    slot_example: {
      original_pattern: "I stayed up till four last night preparing for the math lesson, so I feel very sleepy.",
      custom_demo: "I stayed up till three last night debugging the production server, so I feel completely exhausted.",
      custom_cn: "昨晚為了修復正式機伺服器的錯誤熬夜到三點，現在感到筋疲力竭。"
    }
  },
  {
    id: 31,
    cn: "我已經讀完了昨天從圖書館借來的小說，現在無事可做。",
    simplified_cn: "我已讀完昨天借的小說，目前無所事事。",
    en: "I've finished reading the novel I borrowed from the library yesterday, so now I have nothing to do.",
    category: "動名詞受詞與不定詞",
    grammar: "動名詞受詞與不定詞後位修飾：finish + V-ing；nothing to do 不定詞作形容詞修飾代名詞 nothing。",
    skeleton: "I've finished [Action-ing] the [Noun] I [Verb-ed] yesterday, so now I have nothing to do.",
    pitfall: "finish 後面必須接動名詞 reading，不可接不定詞 to read。",
    slot_example: {
      original_pattern: "I've finished reading the novel I borrowed from the library yesterday, so now I have nothing to do.",
      custom_demo: "I've finished writing the report I started yesterday, so now I have nothing to worry about.",
      custom_cn: "我已經寫完了昨天開始寫的報告，現在沒什麼好擔心的了。"
    }
  },
  {
    id: 32,
    cn: "如果你當時吃了這藥並躺在床上好好休息，大概兩三天就會痊癒了。",
    simplified_cn: "若你那時服了藥並臥床休息，大概兩三天就能好。",
    en: "If you had taken this medicine and stayed in bed, you would probably have got well in two or three days.",
    category: "過去虛擬語氣",
    grammar: "與過去事實相反的虛擬語氣：If + S + had p.p., S + would have p.p.；注意兩動詞 taken 與 stayed 保持平行。",
    skeleton: "If you had [p.p. 1] and [p.p. 2], you would probably have [p.p. Result] in [Time].",
    pitfall: "與過去事實相反的假設：條件句用 had + p.p.，主句用 would have + p.p.。注意 stayed 也是過去分詞。",
    slot_example: {
      original_pattern: "If you had taken this medicine and stayed in bed, you would probably have got well in two or three days.",
      custom_demo: "If you had backed up the database and tested the migration, you would not have lost any customer data.",
      custom_cn: "如果你當時備份了資料庫並測試了遷移，就不會遺失任何客戶資料了。"
    }
  },
  {
    id: 33,
    cn: "老師說我們最好在這裡等一會兒，因為現在出發路上可能遭遇雷雨。",
    simplified_cn: "老師說我們該等等，因為現在走的話半路可能遇到雷雨。",
    en: "The teacher says that we should wait here for a while because if we left now, we might get caught in a thunderstorm on the way.",
    category: "現在虛擬語氣與退格",
    grammar: "與現在事實相反的假設：雖然主要子句是現在式，但 if we left now, we might... 是對當前情況的假設退一格時態。",
    skeleton: "[Subject] says that we should [Action] because if we [left now], we might [Risk] on the way.",
    pitfall: "「現在如果出發」用 if we left now（過去式動詞 left 表假設），搭配 might get caught。",
    slot_example: {
      original_pattern: "The teacher says that we should wait here for a while because if we left now, we might get caught in a thunderstorm on the way.",
      custom_demo: "The captain says that we should stay in the shelter because if we went out now, we might get injured by falling debris.",
      custom_cn: "隊長說我們最好留在掩體中，因為如果現在出去，我們可能會被掉落的碎片擊傷。"
    }
  },
  {
    id: 34,
    cn: "人們總渴望長生不老，但如果真實現了，地球將會人滿為患。",
    simplified_cn: "人類希望長生不死，但若願望成真，地球人會太多。",
    en: "People wish they could live forever and never become older. However, if this wish came true, there would be too many people on the earth.",
    category: "願望與條件虛擬",
    grammar: "wish 與條件句假設法：wish + S + 過去式動詞 (could live) 表不可能實現的願望；後句條件句搭配 came true / would be。",
    skeleton: "People wish they could [Desire]. However, if this came true, there would be [Consequence].",
    pitfall: "wish 後面接不可能實現或與現狀相反的願望，必須用過去式 could live；後句 if 條件句同樣用 came true 和 would be。",
    slot_example: {
      original_pattern: "People wish they could live forever and never become older. However, if this wish came true, there would be too many people on the earth.",
      custom_demo: "Developers wish they could write code without any bugs. However, if that were possible, testing tools would become obsolete.",
      custom_cn: "開發者希望自己寫代碼永遠沒 bug；然而如果真能如此，測試工具就都淘汰了。"
    }
  },
  {
    id: 35,
    cn: "安看起來很開心，她一定是遇到了什麼好事。",
    simplified_cn: "安顯得很愉快，她剛才一定碰上好事情了。",
    en: "Ann looks happy. Something good must have happened to her.",
    category: "過去推測助動詞",
    grammar: "對過去推測的助動詞：must have + p.p. 表對過去發生的事有高度肯定的推斷（必定曾……）。",
    skeleton: "[Person] looks [Emotion]. Something [Adj] must have happened to [Person].",
    pitfall: "對「過去事情」的有把握推測用 must have + p.p.，不要只寫 must happen（那是對現在的推論）。",
    slot_example: {
      original_pattern: "Ann looks happy. Something good must have happened to her.",
      custom_demo: "The client looks satisfied. The project team must have delivered exceptional results.",
      custom_cn: "客戶看起來很滿意，專案團隊一定交付了極其優異的成果。"
    }
  },
  {
    id: 36,
    cn: "只要去過歐洲古城的人，一定都會被那些美麗的街道所感動。",
    simplified_cn: "若你去過歐洲老城，必定會為美麗街道所震撼。",
    en: "If you have been to old European cities, you must have been impressed by the beautiful streets.",
    category: "完成式條件句與推斷",
    grammar: "現在完成式條件句與推斷：If you have been to... 表經驗；be impressed by...（對……留下深刻印象）。",
    skeleton: "If you have been to [Place], you must have been impressed by [Feature].",
    pitfall: "have been to 表「去過某地（現已回來）」的經驗；be impressed by 是表達被打動、留下好印象的精準詞彙。",
    slot_example: {
      original_pattern: "If you have been to old European cities, you must have been impressed by the beautiful streets.",
      custom_demo: "If you have visited Kyoto during autumn, you must have been captivated by the vibrant maple leaves.",
      custom_cn: "只要你在秋天造訪過京都，一定都會被斑斕的楓葉所迷醉。"
    }
  },
  {
    id: 37,
    cn: "如果沒有石油和煤炭等化石燃料，二十世紀的歷史一定會截然不同。",
    simplified_cn: "若無石油與煤炭，20世紀的歷史將完全不同。",
    en: "Without fossil fuels such as oil and coal, the history of the 20th century would have been completely different.",
    category: "without 虛擬語氣",
    grammar: "介系詞 without 取代 if 條件句：Without + N 等同於 If it had not been for + N，後接 would have + p.p. 表對過去的虛擬。",
    skeleton: "Without [Resources] such as [A and B], [Subject] would have been completely [Adj].",
    pitfall: "Without + 名詞 可以簡潔替代繁複的 If it had not been for...，但主要子句仍必須維持 would have + p.p.。",
    slot_example: {
      original_pattern: "Without fossil fuels such as oil and coal, the history of the 20th century would have been completely different.",
      custom_demo: "Without open source tools such as Linux and Git, modern software development would have been much harder.",
      custom_cn: "如果沒有 Linux 和 Git 等開源工具，現代軟體開發將會艱難得多。"
    }
  },
  {
    id: 38,
    cn: "來圖書館的學生中，有些人舉止隨意得宛如置身於咖啡館。",
    simplified_cn: "來館部分學生行為放鬆，像是在咖啡廳一樣。",
    en: "Some students coming to the library act as if they are in a coffee shop.",
    category: "as if 子句與分詞",
    grammar: "as if 子句語氣：as if... 後若認為極可能屬實或描述眼前狀態，口語中常用直說法現在式 are。",
    skeleton: "Some [People] coming to [Place] act as if they are in [Place 2].",
    pitfall: "as if 後方如果是描寫眼前的真實行為表現，現代英文直說法 are 非常普遍自然。",
    slot_example: {
      original_pattern: "Some students coming to the library act as if they are in a coffee shop.",
      custom_demo: "Some attendees entering the conference room act as if they are in an open market.",
      custom_cn: "進到會議室的某些與會者，舉止隨意得彷彿置身於露天市場。"
    }
  },
  {
    id: 39,
    cn: "小時候，我常希望家裡的房子能再大一點。",
    simplified_cn: "我童年時常期望自己的房子能更大一些。",
    en: "When I was a child, I often wished my house were a little larger.",
    category: "過去願望虛擬語氣",
    grammar: "過去情境下的願望：wished 後面接假設語氣 were，表示當時無法實現的願望。",
    skeleton: "When I was [Period], I often wished [Subject] were a little [Comparative].",
    pitfall: "主要子句動詞是 wished (過去式)，子句中的虛擬語氣用 were 表述當時未能成真的心願。",
    slot_example: {
      original_pattern: "When I was a child, I often wished my house were a little larger.",
      custom_demo: "When I was a junior developer, I often wished our codebase were a little simpler.",
      custom_cn: "剛當菜鳥工程師時，我常希望我們的代碼庫能更簡潔一點。"
    }
  },
  {
    id: 40,
    cn: "我想作為志工參與救援活動，幫助遭遇水災或地震等自然災害的受害者。",
    simplified_cn: "我想當志工，去幫助水災地震的受災者。",
    en: "I'd like to work as a volunteer helping victims of natural disasters, such as floods or earthquakes.",
    category: "分詞後位修飾與舉例",
    grammar: "現在分詞後位修飾：helping... 為分詞片語修飾前面的名詞 volunteer；舉例用 such as。",
    skeleton: "I'd like to work as a [Role] helping [Targets], such as [Example 1] or [Example 2].",
    pitfall: "helping 是現在分詞作後位修飾，等於 who helps...；舉例用 such as，不可誤用 like 代替正式書寫。",
    slot_example: {
      original_pattern: "I'd like to work as a volunteer helping victims of natural disasters, such as floods or earthquakes.",
      custom_demo: "I'd like to work as a mentor helping students from underrepresented groups, such as rural youths.",
      custom_cn: "我想擔任導師，幫助偏鄉青年等弱勢學生群體。"
    }
  },
  {
    id: 41,
    cn: "湯姆有一套很棒的爵士鼓，但他從不讓其他人碰。",
    simplified_cn: "湯姆的鼓很讚，但他絕不允許任何人打它。",
    en: "Tom has nice drums, and he never lets anyone else play them.",
    category: "使役動詞用法",
    grammar: "使役動詞用法：let + 受詞 + 原形動詞 (play)；樂器前若已指明該套特定鼓，代名詞用 them。",
    skeleton: "[Person] has nice [Items], and he never lets anyone else [Verb] them.",
    pitfall: "使役動詞 let 後受詞接「原形動詞」play，絕不能加 to (to play 是嚴重錯誤)。",
    slot_example: {
      original_pattern: "Tom has nice drums, and he never lets anyone else play them.",
      custom_demo: "The lead designer has specialized software tools, and he never lets anyone else configure them.",
      custom_cn: "主設計師有一套專用軟體工具，他從不讓其他人去配置它們。"
    }
  },
  {
    id: 42,
    cn: "起初我以為湯姆在開玩笑，但後來發現他是認真的。",
    simplified_cn: "開始時我以為他在玩笑，後來才意識到他是認真的。",
    en: "At first, I thought Tom was joking, but later I realized he was serious.",
    category: "動詞時態與思維轉換",
    grammar: "動詞時態與思維轉換：thought 表過去的以為（後來證實不是）；realize 表領悟或發覺真相。",
    skeleton: "At first, I thought [Clause 1], but later I realized [Clause 2].",
    pitfall: "I thought... 在英語中隱含「我原先以為（實際上並非如此）」的思維習慣，不必加上 mistakenly 就具此涵義。",
    slot_example: {
      original_pattern: "At first, I thought Tom was joking, but later I realized he was serious.",
      custom_demo: "At first, I thought the error was minor, but later I realized it broke the authentication system.",
      custom_cn: "起初我以為這只是小錯誤，後來才發現它搞垮了驗證系統。"
    }
  },
  {
    id: 43,
    cn: "上個星期天我生平第一次挑戰做義大利料理，結果非常美味。",
    simplified_cn: "上週日我首度試做義式料理，味道極好。",
    en: "Last Sunday I tried making some Italian food for the first time, and it was delicious.",
    category: "try 用法與初次體驗",
    grammar: "try 的受詞用法：try + V-ing 表嘗試做做看某事（若為 try to V 則強調努力去達成）。",
    skeleton: "Last [Day] I tried [Action-ing] for the first time, and it was [Result].",
    pitfall: "try + V-ing 是「抱著試試看的心態動手做」；try + to V 是「設法克服困難去做」，此處下廚料理用 making 最自然。",
    slot_example: {
      original_pattern: "Last Sunday I tried making some Italian food for the first time, and it was delicious.",
      custom_demo: "Last weekend I tried assembling a mechanical keyboard for the first time, and it was fun.",
      custom_cn: "上週末我第一次嘗試組裝機械鍵盤，非常好玩。"
    }
  },
  {
    id: 44,
    cn: "有人說夏天太熱、什麼事都不想做所以討厭夏天；然而我卻很喜歡夏天的炎熱，因為可以在海裡游泳。",
    simplified_cn: "有人嫌夏天熱無動力，但我愛炎熱，因為能在海中游水。",
    en: "Some people say that they don't like summer because it is so hot that they don't feel like doing anything. However, I like the heat of summer because I can swim in the sea.",
    category: "結果句型與慣用片語",
    grammar: "so... that 結果句型與慣用片語：so + 形容詞 + that 子句；feel like + V-ing 表「想要做某事」。",
    skeleton: "Some people say that [Clause 1] because it is so [Adj] that they don't feel like [Action-ing]. However, I like [Noun] because [Reason].",
    pitfall: "feel like + V-ing 是口語與寫作常用表達「提不起勁/想做某事」；so hot that... 是因果結果句典型骨架。",
    slot_example: {
      original_pattern: "Some people say that they don't like summer because it is so hot that they don't feel like doing anything.",
      custom_demo: "Some engineers say that they dislike refactoring because the code is so legacy that they don't feel like touching it.",
      custom_cn: "有些工程師說他們討厭重構，因為代碼太陳舊，以致於根本提不起勁去動它。"
    }
  },
  {
    id: 45,
    cn: "詹姆斯八年前來到日本，不僅僅是因為想參訪寺廟，也因為他交了一位日本女友。",
    simplified_cn: "詹姆斯八年前來日，既為了參訪寺廟，也因為有日本女友。",
    en: "James came to Japan eight years ago not only because he wanted to visit temples, but also because he had a Japanese girlfriend.",
    category: "對稱連接詞結構",
    grammar: "對稱連接詞：not only because... but also because...，引導的兩個原因副詞子句結構需嚴格對稱。",
    skeleton: "[Subject] [Verb] [Time] ago not only because [Reason 1], but also because [Reason 2].",
    pitfall: "not only 後接 because 子句，but also 後面也必須接 because 子句，兩端詞性與子句結構必須嚴密平行對稱。",
    slot_example: {
      original_pattern: "James came to Japan eight years ago not only because he wanted to visit temples, but also because he had a Japanese girlfriend.",
      custom_demo: "Sarah switched to TypeScript not only because she wanted type safety, but also because her team demanded clean architecture.",
      custom_cn: "莎拉轉向 TypeScript 不僅是因為想要型別安全，也因為團隊要求乾淨的架構。"
    }
  },
  {
    id: 46,
    cn: "我反對複製人技術，因為這可能會導致獨裁者自我複製。",
    simplified_cn: "我反對人類複製，那是因為它可能造成獨裁者複製自己。",
    en: "I am against human cloning. That is because it could cause duplication of dictators.",
    category: "立場與因果表達",
    grammar: "立場與因果表達：be against + N 表反對；That is because... 引導造成前述主張的原因。",
    skeleton: "I am against [Proposal]. That is because it could cause [Negative Consequence].",
    pitfall: "That is because 後接「原因」（因為……）；不要與 That is why（後接結果）混淆！",
    slot_example: {
      original_pattern: "I am against human cloning. That is because it could cause duplication of dictators.",
      custom_demo: "I am against removing all automated tests. That is because it could cause regressions in production.",
      custom_cn: "我反對刪除所有自動化測試，因為這可能會導致正式環境出現功能倒退。"
    }
  },
  {
    id: 47,
    cn: "圖表顯示日本出生率自 1985 年起持續下降，部分原因是撫養小孩需要花很多錢。",
    simplified_cn: "圖表顯示1985年後日本出生率下滑，養小孩花錢是部分原因。",
    en: "The graph shows that in Japan the birth rate has been decreasing since 1985. This decrease is partly because it costs a lot of money to raise children.",
    category: "圖表論述與花費句型",
    grammar: "現在完成進行式與虛主詞 cost：has been decreasing since... 強調未中斷的趨勢；花費金錢用 It costs + 金錢 + to V。",
    skeleton: "The graph shows that [Subject] has been decreasing since [Year]. This is partly because it costs [Amount] to [Action].",
    pitfall: "表示「做某事花費金錢」慣用虛主詞句型 It costs + 錢 + to V；不要用人當 cost 的主詞。",
    slot_example: {
      original_pattern: "The graph shows that the birth rate has been decreasing. This decrease is partly because it costs a lot of money to raise children.",
      custom_demo: "The report shows that cloud expenses have been rising since last quarter. This increase is partly because it costs a lot to run GPU clusters.",
      custom_cn: "報告顯示自上季度以來雲端開銷持續上升，部分原因是運行 GPU 叢集耗資巨大。"
    }
  },
  {
    id: 48,
    cn: "我向安為遲到道歉，但她沒有原諒我。",
    simplified_cn: "我因遲到向安致歉，但她並未原諒我。",
    en: "I apologized to Ann for being late, but she didn't forgive me.",
    category: "動詞介系詞搭配",
    grammar: "動詞介系詞搭配：道歉慣用 apologize to sb for sth/doing sth；原諒用 forgive sb。",
    skeleton: "I apologized to [Person] for [Action-ing], but [Person] didn't forgive me.",
    pitfall: "道歉的介系詞搭配是 to 某人 for 某事；不可寫 apologize sb，一定要有介系詞 to。",
    slot_example: {
      original_pattern: "I apologized to Ann for being late, but she didn't forgive me.",
      custom_demo: "The vendor apologized to the client for the delayed delivery, but the client didn't accept the explanation.",
      custom_cn: "廠商為延遲交貨向客戶道歉，但客戶並未接受該解釋。"
    }
  },
  {
    id: 49,
    cn: "數學課上手機響起被老師狠狠痛罵了一頓，我非常後悔當時沒把手機關掉。",
    simplified_cn: "數學課手機響被老師痛罵，我很後悔沒先關機。",
    en: "During the math class, my cell phone began to ring, and the teacher severely scolded me. I regretted that I hadn't turned it off.",
    category: "過去完成式與後悔",
    grammar: "時態先後關係：scolded 為過去式，後悔沒關手機 hadn't turned it off 發生在被罵之前，須用過去完成式。",
    skeleton: "During [Event], [Incident], and [Person] scolded me. I regretted that I hadn't [p.p.].",
    pitfall: "後悔是 regretted (過去式)，而「沒關手機」是在此之前就該做而沒做的動作，必須用過去完成式 hadn't turned it off。",
    slot_example: {
      original_pattern: "During the math class, my cell phone began to ring... I regretted that I hadn't turned it off.",
      custom_demo: "During the demo, the application crashed, and the VP scolded the team. The lead regretted that he hadn't merged the fix earlier.",
      custom_cn: "展示期間應用程式崩潰，副總痛批了團隊。負責人很後悔沒有提早合併修復程式碼。"
    }
  },
  {
    id: 50,
    cn: "每天忙著做家事，根本沒有時間去看電影。",
    simplified_cn: "我每天做家事太忙，以致沒時間欣賞電影。",
    en: "I'm so busy doing the housework every day that I have no time to see a movie.",
    category: "程度結果句型",
    grammar: "忙碌句型與結果子句：be busy + V-ing 表忙於做某事；搭配 so... that 結構引導結果。",
    skeleton: "I'm so busy [Action-ing] every day that I have no time to [Action].",
    pitfall: "be busy 後面直接接動名詞 doing，不需要介系詞 in 或 with；so busy... that... 表程度極高導致的結果。",
    slot_example: {
      original_pattern: "I'm so busy doing the housework every day that I have no time to see a movie.",
      custom_demo: "I'm so busy answering client inquiries every day that I have no time to write documentation.",
      custom_cn: "我每天忙著回覆客戶諮詢，以致於根本沒時間寫文件。"
    }
  },
  {
    id: 51,
    cn: "這張木桌太重了，我一個人搬不上二樓。",
    simplified_cn: "這桌子太重，無法讓我單獨扛上二樓。",
    en: "This wooden desk is too heavy for me to carry upstairs alone.",
    category: "too... to 句型",
    grammar: "too... to 句型：too + 形容詞 + for sb + to V 表太……以致於不能……；注意受詞 carry 後不重複加 it。",
    skeleton: "This [Noun] is too [Adj] for me to [Verb] [Location] alone.",
    pitfall: "主詞 This wooden desk 已經是 carry 的邏輯受詞，在 to carry upstairs alone 後面絕對不可以再加 it！",
    slot_example: {
      original_pattern: "This wooden desk is too heavy for me to carry upstairs alone.",
      custom_demo: "This dataset is too large for the local server to process efficiently.",
      custom_cn: "這個資料集太大了，本地伺服器無法高效率處理。"
    }
  },
  {
    id: 52,
    cn: "在歐洲旅行期間，無論去哪個國家都會碰上大批日本遊客，真令人厭煩。",
    simplified_cn: "遊歐期間無論走訪哪國都有很多日本觀光客，令人煩心。",
    en: "While traveling in Europe, I was disappointed that wherever I went, there were many Japanese tourists.",
    category: "分詞構句與讓步副詞",
    grammar: "分詞構句與複合關係副詞：While traveling... 為省略主詞的時間片語；wherever 引導讓步子句（無論去哪裡）。",
    skeleton: "While traveling in [Place], I was disappointed that wherever I went, there were many [Group].",
    pitfall: "wherever I went 表示 no matter where I went；前面 While traveling 是省略了主詞 I was 的簡約分詞構句。",
    slot_example: {
      original_pattern: "While traveling in Europe, I was disappointed that wherever I went, there were many Japanese tourists.",
      custom_demo: "While attending the conference, I was surprised that wherever I looked, there were AI-generated posters.",
      custom_cn: "在參加研討會期間，我很訝異無論望向哪裡，全都是 AI 生成的海報。"
    }
  },
  {
    id: 53,
    cn: "看到母親戴著我送她的耳環去上班，我感到非常開心。",
    simplified_cn: "見媽媽戴我送的耳環上班，我非常高興。",
    en: "I was very happy when I saw my mother going to work wearing the earrings I had bought her.",
    category: "感官動詞與分詞修飾",
    grammar: "感官動詞受詞補語與分詞修飾：saw + O + going（看到進行中狀態）；wearing... 為附帶動作的分詞。",
    skeleton: "I was very [Emotion] when I saw [Person] [Action-ing] wearing [Gift] I had bought.",
    pitfall: "saw 後接 going 強調眼見正在發生的生動過程；wearing 是現在分詞修飾動作狀態；bought 發生在更早用過去完成式。",
    slot_example: {
      original_pattern: "I was very happy when I saw my mother going to work wearing the earrings I had bought her.",
      custom_demo: "I was proud when I saw my team presenting the demo using the library I had designed.",
      custom_cn: "看到團隊使用我設計的套件進行展示報告，我感到非常自豪。"
    }
  },
  {
    id: 54,
    cn: "如果你認為學校只負責教授課業，這證明了你根本不了解學校存在的意義。",
    simplified_cn: "若你以為學校只教書本知識，那說明你不懂學校的宗旨。",
    en: "If you expect that schools only teach academic subjects, then this proves that you don't understand what schools are for.",
    category: "名詞子句與介系詞末置",
    grammar: "名詞子句與介系詞末置：what schools are for（學校的目的為何），for 不能省略。",
    skeleton: "If you expect that [Subject] only [Action], then this proves that you don't understand what [Subject] are for.",
    pitfall: "「……的目的/功用為何」最經典地道表達就是 what ... is/are for。句末的 for 絕對不能漏掉！",
    slot_example: {
      original_pattern: "If you expect that schools only teach academic subjects, then this proves that you don't understand what schools are for.",
      custom_demo: "If you believe that code reviews are just for finding typos, then this proves that you don't understand what reviews are for.",
      custom_cn: "如果你認為代碼審查只是為了找錯字，這證明了你根本不理解代碼審查的真正目的。"
    }
  },
  {
    id: 55,
    cn: "大多數日本人一生中大部分的時間都在為生活而工作。",
    simplified_cn: "多數日本人把人生多數時間花在工作討生活上。",
    en: "Most Japanese people spend most of their time working to live.",
    category: "spend 句型與目的不定詞",
    grammar: "spend 時間句型：spend + 時間 + V-ing (working)；不定詞 to live 表工作目的。",
    skeleton: "Most [People] spend most of their time [Action-ing] to live.",
    pitfall: "spend + 時間 + V-ing；「為生活而工作」英語簡潔說成 working to live，避免冗長的中式說法。",
    slot_example: {
      original_pattern: "Most Japanese people spend most of their time working to live.",
      custom_demo: "Most startup founders spend most of their weekends working to succeed.",
      custom_cn: "大多數創業家把大部分週末時間都花在工作上以求成功。"
    }
  },
  {
    id: 56,
    cn: "日本人通常盡可能委婉地表達情感，以免冒犯到他人。",
    simplified_cn: "日本人常盡可能間接傳達感受，目的是不冒犯他人。",
    en: "Japanese people usually express their feelings as indirectly as possible so that they won't offend others.",
    category: "原級副詞與目的子句",
    grammar: "原級副詞與目的子句：as + 副詞 + as possible；so that + S + won't... 表目的（以便/免得）。",
    skeleton: "[Group] usually express [Noun] as [Adv] as possible so that they won't [Verb] others.",
    pitfall: "修飾動詞 express 必須用副詞 indirectly（as indirectly as possible）；so that they won't 表目的「以免」。",
    slot_example: {
      original_pattern: "Japanese people usually express their feelings as indirectly as possible so that they won't offend others.",
      custom_demo: "Engineers should write error messages as clearly as possible so that users won't get confused.",
      custom_cn: "工程師應盡可能清楚地編寫錯誤提示，以免使用者感到困惑。"
    }
  },
  {
    id: 57,
    cn: "大學的優劣不僅取決於圖書館的館藏質量，也取決於師生的資質與能力。",
    simplified_cn: "大學好壞不僅看藏書多寡，更取決於師生的素質。",
    en: "Whether a college is good or bad depends not only on how many books its library has and how good they are. It also depends on how intelligent its teachers and students are.",
    category: "主詞子句與 depend on",
    grammar: "主詞子句與 depend on：Whether... or not 引導名詞子句當主詞（視為單數動詞 depends）；接續疑問詞引導的名詞子句。",
    skeleton: "Whether [A] is good or bad depends not only on [Factor 1]. It also depends on [Factor 2].",
    pitfall: "Whether 引導的整個名詞子句當主詞時視為單數，因此動詞用 depends 加 s；depend on 接名詞子句。",
    slot_example: {
      original_pattern: "Whether a college is good or bad depends not only on how many books... It also depends on how intelligent its teachers are.",
      custom_demo: "Whether a software platform succeeds depends not only on how many features it has. It also depends on how reliable the services are.",
      custom_cn: "軟體平台的成功與否不僅取決於擁有多少功能，也取決於服務有多可靠。"
    }
  },
  {
    id: 58,
    cn: "大氣中二氧化碳濃度的增加與全球暖化有著密不可分的關聯。",
    simplified_cn: "空氣中二氧化碳增加，與全球暖化緊密相連。",
    en: "The increase in the amount of CO2 in the atmosphere is closely connected with global warming.",
    category: "抽象名詞主詞與動詞一致",
    grammar: "抽象名詞作主詞：主詞為 The increase，動詞用單數 is；片語 be closely connected with...（與……密切相關）。",
    skeleton: "The increase in [Factor] is closely connected with [Phenomenon].",
    pitfall: "主要主詞是 The increase（單數），中間雖然夾帶 CO2 和 atmosphere 等名詞，動詞仍必須用單數 is。",
    slot_example: {
      original_pattern: "The increase in the amount of CO2 in the atmosphere is closely connected with global warming.",
      custom_demo: "The surge in server latency during peak hours is closely connected with memory leaks.",
      custom_cn: "尖峰時段伺服器延遲的暴增，與記憶體洩漏有著密不可分的關聯。"
    }
  },
  {
    id: 59,
    cn: "現代文明越發達，人們就越被迫熬夜，睡眠時間也就越少。",
    simplified_cn: "文明越進步，人們被迫熬夜越久，睡得就越少。",
    en: "The more modern civilization advances, the longer we are forced to stay up at night, and the less sleep we get.",
    category: "the + 比較級對稱句型",
    grammar: "the + 比較級對比結構：The + 比較級..., the + 比較級... 表「越……就越……」，三子句並列。",
    skeleton: "The more [Subject] advances, the longer [Clause 1], and the less [Noun] we get.",
    pitfall: "竹岡名句精華：三組 the + 比較級對稱並列，節奏感極強，注意 the less 後接不可數名詞 sleep。",
    slot_example: {
      original_pattern: "The more modern civilization advances, the longer we are forced to stay up, and the less sleep we get.",
      custom_demo: "The more complex the project becomes, the harder it is to maintain, and the more bugs we uncover.",
      custom_cn: "專案越複雜，維護起來就越困難，我們發現的錯誤也就越多。"
    }
  },
  {
    id: 60,
    cn: "醫師與教師的相似之處在於，兩者面對的對象都不是物品，而是人。",
    simplified_cn: "醫生與老師的共同點在於，兩者打交道的是人而非物。",
    en: "Doctors and teachers are alike in that both of them deal not with things but with people.",
    category: "in that 與 not A but B",
    grammar: "介系詞 in that 用法：in that... 是少數能接 that 的介系詞片語，表「在於/因為……」；搭配 not A but B。",
    skeleton: "[A] and [B] are alike in that both of them deal not with [X] but with [Y].",
    pitfall: "in that 意為「在於這點上/因為」；搭配 not with things but with people 嚴格保持介系詞 with 的平行。",
    slot_example: {
      original_pattern: "Doctors and teachers are alike in that both of them deal not with things but with people.",
      custom_demo: "Designers and architects are alike in that both of them focus not just on aesthetics but on user experience.",
      custom_cn: "設計師與建築師的相似之處在於，兩者專注的不僅是美感，更是使用者體驗。"
    }
  },
  {
    id: 61,
    cn: "職棒比賽在球場現場觀看比在電視上看要刺激好幾倍。",
    simplified_cn: "在球場看職棒比在電視上看刺激得多。",
    en: "Professional baseball is far more exciting at a stadium than on TV.",
    category: "比較級修飾副詞",
    grammar: "比較級修飾副詞：使用 far / much / a lot 修飾比較級 more exciting（不可用 very）。",
    skeleton: "[Event] is far more [Adj] [Location 1] than [Location 2].",
    pitfall: "修飾比較級不可用 very（嚴禁 very more exciting），必須用 far, much 或 a lot 來修飾比較級。",
    slot_example: {
      original_pattern: "Professional baseball is far more exciting at a stadium than on TV.",
      custom_demo: "Live music is far more immersive in a concert hall than on headphones.",
      custom_cn: "現場音樂在音樂廳聆聽比用耳機聽要震撼身歷其境得多。"
    }
  },
  {
    id: 62,
    cn: "這輛重型機車在英國的售價大約是日本的兩倍。",
    simplified_cn: "這台摩托車在英國賣得比日本貴大約一倍。",
    en: "This motorbike is about twice as expensive in the U.K. as in Japan.",
    category: "倍數比較句型",
    grammar: "倍數句型：倍數詞 (twice) + as + 原級形容詞 + as；地點對比結構 in the U.K. 對應 in Japan。",
    skeleton: "This [Item] is about twice as [Adj] in [Place 1] as in [Place 2].",
    pitfall: "倍數句型公式：倍數詞 + as + 原級 + as；兩端地點對比 in the U.K. as in Japan 介系詞不可遺漏。",
    slot_example: {
      original_pattern: "This motorbike is about twice as expensive in the U.K. as in Japan.",
      custom_demo: "This textbook is about three times as expensive in America as in Taiwan.",
      custom_cn: "這本教科書在美國的售價大約是在台灣的三倍。"
    }
  },
  {
    id: 63,
    cn: "就算現在的年輕人閱讀量減少，也並不代表他們的求知慾就降低了。",
    simplified_cn: "年輕人讀書少，不必然表示他們不想學習。",
    en: "Just because young people today read less than they used to, it doesn't always follow that they are less eager to learn.",
    category: "邏輯推論否定句",
    grammar: "邏輯推論否定句：Just because... it doesn't (always) follow that... 為常見寫作論述句型（不能因為……就必然推斷出……）。",
    skeleton: "Just because [Condition], it doesn't always follow that [Consequence].",
    pitfall: "寫作神句！It doesn't follow that... 表示「不代表必然如此」，邏輯批判性寫作不可或缺。",
    slot_example: {
      original_pattern: "Just because young people today read less..., it doesn't always follow that they are less eager to learn.",
      custom_demo: "Just because an applicant has fewer years of experience, it doesn't always follow that they write worse code.",
      custom_cn: "就算應徵者的資歷年限較少，也並不代表他們寫的代碼就比較差。"
    }
  },
  {
    id: 64,
    cn: "坦白說，我昨天參加的入學考試比我想像的要難得多。",
    simplified_cn: "老實講，昨天的入學考比我原先預期的難上許多。",
    en: "Frankly speaking, the entrance exams I took yesterday were far more difficult than I had expected.",
    category: "獨立分詞與完成預期",
    grammar: "獨立分詞構句：Frankly speaking 為固定片語作插入語；had expected 過去完成式表考試前心中的預期。",
    skeleton: "Frankly speaking, [Subject] were far more [Adj] than I had expected.",
    pitfall: "「心裡的預期」發生在考試之前，所以用過去完成式 had expected；比想像中難得多用 far more difficult。",
    slot_example: {
      original_pattern: "Frankly speaking, the entrance exams I took yesterday were far more difficult than I had expected.",
      custom_demo: "Frankly speaking, the migration to Kubernetes was far more challenging than the team had expected.",
      custom_cn: "坦白說，遷移到 Kubernetes 的過程比團隊預期的要艱鉅得多。"
    }
  },
  {
    id: 65,
    cn: "擁有個人電腦的人很多，但知道如何充分發揮其功效的人卻極少。",
    simplified_cn: "有電腦的人眾多，但懂有效利用它的人很少。",
    en: "A lot of people have personal computers, but very few of them know how to use them effectively.",
    category: "否定代名詞與動詞一致",
    grammar: "否定意味代名詞：very few of them（極少數人），自帶否定意味，後接複數動詞 know；how to + V 表方式。",
    skeleton: "A lot of people have [Tools], but very few of them know how to use them [Adv].",
    pitfall: "few 本身就帶有「幾乎沒有」的否定含義，因此不需要再加 not；主詞 few 是複數，動詞用 know。",
    slot_example: {
      original_pattern: "A lot of people have personal computers, but very few of them know how to use them effectively.",
      custom_demo: "A lot of companies collect user data, but very few of them know how to utilize it ethically.",
      custom_cn: "很多公司收集用戶數據，但知道如何合乎倫理利用它的人卻極少。"
    }
  },
  {
    id: 66,
    cn: "許多家庭主婦抱怨物價實在太高了。",
    simplified_cn: "很多家庭主婦埋怨東西太貴了。",
    en: "A lot of housewives complain that prices are too high.",
    category: "形容詞精準搭配",
    grammar: "價格形容詞精準度：英文中物價高低用 prices are high/low，不可用 expensive 形容 prices。",
    skeleton: "A lot of [People] complain that prices are too [high/low].",
    pitfall: "重大文法思維！物品很貴用 goods are expensive，但主詞是 prices (物價/價格) 時只能用 high 或 low，切忌 prices are expensive！",
    slot_example: {
      original_pattern: "A lot of housewives complain that prices are too high.",
      custom_demo: "Many young renters complain that housing prices are too high in metropolitan areas.",
      custom_cn: "許多青年租屋族抱怨大都市的房價實在太高了。"
    }
  },
  {
    id: 67,
    cn: "世界上有些國家的糧食過剩，而在另一些國家卻有成千上萬的兒童死於飢餓。",
    simplified_cn: "有些國家食物過剩，另一些國家卻有無數兒童挨餓而死。",
    en: "In some countries people have too much food, while in others tens of thousands of children are starving.",
    category: "對比連接詞 while",
    grammar: "對比連接詞：while 表兩者鮮明對比；tens of thousands of... 表數以萬計的……。",
    skeleton: "In some [Places] [Condition 1], while in others [Condition 2].",
    pitfall: "while 連接兩項鮮明對立的情境；「成千上萬」英文固定搭配為 tens of thousands of。",
    slot_example: {
      original_pattern: "In some countries people have too much food, while in others tens of thousands of children are starving.",
      custom_demo: "In some tech sectors engineers face severe burnout, while in others workers struggle with layoffs.",
      custom_cn: "在某些科技領域工程師面臨嚴重的過勞，而在另一些領域從業人員卻在為裁員所苦。"
    }
  },
  {
    id: 68,
    cn: "睡前務必記得關掉冷氣，否則你可能會感冒。",
    simplified_cn: "睡覺前切記關冷氣，不然會著涼感冒。",
    en: "Don't forget to turn off the air conditioner before you go to bed, or you'll catch a cold.",
    category: "祈使句 + or 警告句型",
    grammar: "祈使句 + or：祈使句, or + S + will... 結構表示「請做……，否則就會……」；forget to V 表忘記去做。",
    skeleton: "Don't forget to [Action] before [Event], or you'll [Bad Outcome].",
    pitfall: "祈使句後面的 or 解釋為「否則」；forget to do 是記得去做某事（forget doing 是忘了曾做過）。",
    slot_example: {
      original_pattern: "Don't forget to turn off the air conditioner before you go to bed, or you'll catch a cold.",
      custom_demo: "Don't forget to commit your code before leaving for the weekend, or you'll lose your progress.",
      custom_cn: "週末下班前務必記得提交代碼，否則你可能會遺失進度。"
    }
  },
  {
    id: 69,
    cn: "俗話說「感冒乃百病之源」，要格外注意別著涼感冒了。",
    simplified_cn: "俗語說感冒引發百病，要特別小心別感冒。",
    en: "There is a saying that a cold can cause a variety of diseases. Take care not to catch a cold.",
    category: "同位語與否定不定詞",
    grammar: "同位語 that 子句與否定不定詞：saying that... 引導同位語子句；take care not to + V 叮嚀注意不要……。",
    skeleton: "There is a saying that [Clause]. Take care not to [Action].",
    pitfall: "saying that 引導同位語子句說明俗話內容；否定叮嚀使用 take care not to do，not 放在 to 前面。",
    slot_example: {
      original_pattern: "There is a saying that a cold can cause a variety of diseases. Take care not to catch a cold.",
      custom_demo: "There is a saying that haste makes waste. Take care not to rush into production without QA.",
      custom_cn: "俗話說「欲速則不達」，要格外注意未經品保驗證切勿急於上線。"
    }
  },
  {
    id: 70,
    cn: "在網際網路上，你可以跨越年齡、性別與國籍的界線，與世界各地的人交流想法。",
    simplified_cn: "在網絡上，你能無視年齡性別國籍，與全球人交流思想。",
    en: "On the Internet, you can exchange thoughts and ideas with people all over the world, regardless of their age, sex, or nationality.",
    category: "介系詞與 regardless of",
    grammar: "介系詞片語：網路前面介系詞用 on；regardless of + N 表「不管/不論……」。",
    skeleton: "On the Internet, you can [Action] with [Target], regardless of [Attributes].",
    pitfall: "在網路上用 on the Internet（大寫 I，介系詞用 on）；「不論/不管……」用片語 regardless of。",
    slot_example: {
      original_pattern: "On the Internet, you can exchange thoughts and ideas with people all over the world, regardless of their age, sex, or nationality.",
      custom_demo: "In open source communities, developers can collaborate on projects, regardless of their background or location.",
      custom_cn: "在開源社群中，開發者可以共同協作專案，無論其背景或地理位置為何。"
    }
  },
  {
    id: 71,
    cn: "無論你做多少運動，只要不計算卡路里，你就減不了重。",
    simplified_cn: "任憑你運動再多，若不算熱量，也瘦不下來。",
    en: "However much exercise you get, you won't lose weight unless you count your calories.",
    category: "讓步副詞 However 與 unless",
    grammar: "讓步副詞子句與條件句：However + much + N + S + V 表無論多麼……；unless 表「除非……（否則不……）」。",
    skeleton: "However much [Noun] you [Verb], you won't [Goal] unless you [Condition].",
    pitfall: "However 在此相當於 No matter how much，後接名詞 exercise；unless 意為 if not（除非）。",
    slot_example: {
      original_pattern: "However much exercise you get, you won't lose weight unless you count your calories.",
      custom_demo: "However much RAM you add, the system won't run faster unless you optimize the database queries.",
      custom_cn: "無論你增加多少記憶體，只要不最佳化資料庫查詢，系統就不可能跑得更快。"
    }
  },
  {
    id: 72,
    cn: "即使是你自認熟悉的單字，若查查字典，往往還是能有新發現。",
    simplified_cn: "哪怕是你以為懂的字，翻翻字典通常會有新收穫。",
    en: "Although you believe you know a word, you may learn something new if you look it up in the dictionary.",
    category: "後位修飾與可分動詞片語",
    grammar: "複合代名詞修飾與可分動詞片語：something new（形容詞後位修飾）；代名詞作 look up 的受詞必須放在中間（look it up）。",
    skeleton: "Although you believe you know [Item], you may learn something new if you look it up in [Source].",
    pitfall: "代名詞當片語受詞時必須放中間：look it up（不可寫 look up it）；something 的修飾語放後方 (something new)。",
    slot_example: {
      original_pattern: "Although you believe you know a word, you may learn something new if you look it up in the dictionary.",
      custom_demo: "Although you believe you understand the API, you may discover useful options if you read the official docs.",
      custom_cn: "即使你自認了解這套 API，若讀讀官方文件，往往還是能發現實用的參數選項。"
    }
  },
  {
    id: 73,
    cn: "有些日本遊客缺乏常識，竟然把大量現金放在長褲後口袋帶著走。",
    simplified_cn: "某些日本遊客少根筋，把大把現金塞後口袋帶著走。",
    en: "Some Japanese tourists lack common sense and carry a lot of cash in their back pockets.",
    category: "不可數名詞與動詞搭用",
    grammar: "不可數名詞與動詞用法：common sense（常識）與 cash（現金）皆為不可數名詞。",
    skeleton: "Some [People] lack common sense and [Action] in [Location].",
    pitfall: "lack 是及物動詞，直接接受詞 lack common sense（不可加 of）；common sense 和 cash 皆不可數，不可加 s。",
    slot_example: {
      original_pattern: "Some Japanese tourists lack common sense and carry a lot of cash in their back pockets.",
      custom_demo: "Some junior admins lack security awareness and keep root passwords in plain text files.",
      custom_cn: "有些菜鳥管理員缺乏資安意識，竟然把 root 密碼直接存放在明文純文字檔案中。"
    }
  },
  {
    id: 74,
    cn: "保持健康的秘訣是維持均衡飲食並規律運動。",
    simplified_cn: "若要維持健康，你該有均衡飲食並經常運動。",
    en: "In order to stay healthy, you should have a balanced diet and get regular exercise.",
    category: "目的不定詞與健康搭配詞",
    grammar: "不定詞表目的與慣用搭配：In order to stay healthy；飲食習慣搭配動詞 have a balanced diet。",
    skeleton: "In order to stay [State], you should have [Habit 1] and get [Habit 2].",
    pitfall: "「飲食均衡」固定用 have a balanced diet；運動用 get regular exercise 或 take regular exercise。",
    slot_example: {
      original_pattern: "In order to stay healthy, you should have a balanced diet and get regular exercise.",
      custom_demo: "In order to maintain high productivity, you should get adequate sleep and take short breaks.",
      custom_cn: "為了保持高生產力，你應當獲得充足的睡眠並適時小憩。"
    }
  },
  {
    id: 75,
    cn: "在開發中國家生活一陣子，是從不同視角重新審視日本的大好機會。",
    simplified_cn: "如果在開發中國家住一段時間，你就有機會從別的角度看日本。",
    en: "If you live in a developing country for a while, you have an opportunity to look at Japan from a different point of view.",
    category: "觀點視角與名詞補語",
    grammar: "觀點視角表達：from a different point of view（從不同觀點/視角）；opportunity to V 後接不定詞補充說明。",
    skeleton: "If you [Experience], you have an opportunity to look at [Target] from a different point of view.",
    pitfall: "「從不同角度看」固定片語為 from a different point of view；「機會」opportunity 後接不定詞 to look at。",
    slot_example: {
      original_pattern: "If you live in a developing country for a while, you have an opportunity to look at Japan from a different point of view.",
      custom_demo: "If you work in customer support for a month, you have an opportunity to look at your product from a different point of view.",
      custom_cn: "如果你在客服團隊工作一個月，就有大好機會從全然不同的視角審視自己的產品。"
    }
  },
  {
    id: 76,
    cn: "只有到過國外，你才會意識到日本大城市的霓虹燈有多麼繁密。",
    simplified_cn: "直到你出國之後，才會發覺日本大都市霓虹燈多驚人。",
    en: "It is not until you go abroad that you realize how many neon lights there are in big Japanese cities.",
    category: "分裂句 It is not until... that...",
    grammar: "分裂句（強調句型）：It is not until... that... 強調「直到……才……」；that 後接間接問句 how many... there are。",
    skeleton: "It is not until you [Experience] that you realize how many [Noun] there are in [Place].",
    pitfall: "超級名師句構：It is not until A that B（直到 A 發生了，才發覺 B）。that 後面維持正常陳述句語序。",
    slot_example: {
      original_pattern: "It is not until you go abroad that you realize how many neon lights there are in big Japanese cities.",
      custom_demo: "It is not until a server fails that you realize how critical reliable backups really are.",
      custom_cn: "只有伺服器故障時，你才會深刻意識到可靠的備份有多麼關鍵。"
    }
  },
  {
    id: 77,
    cn: "令人遺憾的是，許多日本人誤以為只要能說英語就具備國際視野。",
    simplified_cn: "真可惜，很多日本人誤認只要會英語就算具備國際觀。",
    en: "It is a pity that many Japanese people mistakenly believe that they have only to speak English to be internationally-minded.",
    category: "虛主詞 It is a pity 與 have only to",
    grammar: "虛主詞與慣用語：It is a pity that... 表真可惜；have only to V 表「只要……即可」（等同於 only need to）。",
    skeleton: "It is a pity that many [People] mistakenly believe that they have only to [Action] to [Goal].",
    pitfall: "have only to V 是經典高分句型（只需做……即可）；internationally-minded 意指具國際胸懷與視野。",
    slot_example: {
      original_pattern: "It is a pity that many Japanese people mistakenly believe that they have only to speak English to be internationally-minded.",
      custom_demo: "It is a pity that many startups mistakenly believe that they have only to launch an app to achieve explosive growth.",
      custom_cn: "令人遺憾的是，許多新創公司誤以為只要發布一款 App 就能迎來爆發性成長。"
    }
  },
  {
    id: 78,
    cn: "令人驚訝的是，許多美國人只要能聽懂你的意思，並不在乎你的英語發音好壞。",
    simplified_cn: "令人意外的是，只要能懂意思，很多美國人並不管你發音好壞。",
    en: "It is surprising that many Americans don't care how you pronounce English as long as they can understand what you are trying to say.",
    category: "條件連接詞 as long as",
    grammar: "條件連接詞：as long as... 表「只要……」；don't care + 間接問句 (how you pronounce...)。",
    skeleton: "It is surprising that many [Group] don't care [How-clause] as long as [Condition].",
    pitfall: "as long as 引導條件子句「只要……」；care 後面接間接問句 how you pronounce English。",
    slot_example: {
      original_pattern: "It is surprising that many Americans don't care how you pronounce English as long as they can understand what you are trying to say.",
      custom_demo: "It is reassuring that the interviewer didn't care about my accent as long as I could explain my algorithms clearly.",
      custom_cn: "令人欣慰的是，面試官並不在乎我的口音，只要我能把演算法邏輯解釋清楚即可。"
    }
  },
  {
    id: 79,
    cn: "為了保護自然環境我們能做的，頂多就是減少垃圾量並盡量使用環保產品。",
    simplified_cn: "我們保護環境能做的最好舉動，就是少製造垃圾並用環保品。",
    en: "The best things you can do to protect nature are to reduce garbage and to use environmentally friendly products.",
    category: "平行結構與動詞補語",
    grammar: "平行結構：主詞為複數 things，Be 動詞用 are；後方補語用不定詞對稱 to reduce... and to use...。",
    skeleton: "The best things you can do to [Goal] are to [Action 1] and to [Action 2].",
    pitfall: "主詞是 The best things (複數)，Be 動詞必須用 are；後面的不定詞補語 to reduce 與 to use 必須嚴格平行對稱。",
    slot_example: {
      original_pattern: "The best things you can do to protect nature are to reduce garbage and to use environmentally friendly products.",
      custom_demo: "The best things you can do to prevent data loss are to schedule daily backups and to encrypt all storage drives.",
      custom_cn: "為了防止資料遺失我們能做的最好舉措，就是安排每日自動備份並為所有硬碟加密。"
    }
  },
  {
    id: 80,
    cn: "據說每十個日本年輕人中就有七個沒有任何宗教信仰。",
    simplified_cn: "據傳十個年輕日本人中，就有七位沒有信仰宗教。",
    en: "It is said that seven out of ten young Japanese people don't believe in religion.",
    category: "比例表達與信仰動詞",
    grammar: "比例表達與信仰動詞：seven out of ten 表十分之七；信仰某宗教/神明須搭配介系詞 believe in。",
    skeleton: "It is said that [Number] out of [Total] [Group] don't believe in [Noun].",
    pitfall: "「十分之七」英文用 seven out of ten；信仰宗教必須用 believe in（若只寫 believe 意思會變成「相信某人說話屬實」）。",
    slot_example: {
      original_pattern: "It is said that seven out of ten young Japanese people don't believe in religion.",
      custom_demo: "Surveys indicate that eight out of ten remote workers prefer a flexible working schedule.",
      custom_cn: "調查顯示每十名遠距工作者中就有八名更偏好彈性工時。"
    }
  },
  {
    id: 81,
    cn: "各國打招呼的方式不盡相同；在日本，鞠躬比握手更為普遍。",
    simplified_cn: "各國問候方式各異，在日本鞠躬比握手常見。",
    en: "Ways of greeting vary from country to country. In Japan, bowing is more common than shaking hands.",
    category: "動詞用法與動名詞對稱",
    grammar: "動詞用法與動名詞平行：vary from... to... 表彼此有所不同；比較級兩端名詞性質對稱（bowing 對照 shaking hands）。",
    skeleton: "Ways of [Action-ing] vary from country to country. In [Place], [Gerund 1] is more common than [Gerund 2].",
    pitfall: "比較級兩端性質需對稱：bowing (動名詞) 對應 shaking hands (動名詞)，不可混用原形與動名詞。",
    slot_example: {
      original_pattern: "Ways of greeting vary from country to country. In Japan, bowing is more common than shaking hands.",
      custom_demo: "Styles of management vary from firm to firm. In agile teams, daily standups are more common than formal reports.",
      custom_cn: "管理風格因公司而異；在敏捷團隊中，每日站會比正式報告更為普遍。"
    }
  },
  {
    id: 82,
    cn: "濱松市位於以美景和美味魚產聞名的濱名湖以東。",
    simplified_cn: "濱松在濱名湖東邊，那裡以美景與美味鮮魚聞名。",
    en: "Hamamatsu is located east of Lake Hamana, which is famous for its beautiful scenery and delicious fish.",
    category: "非限定關代與方位表達",
    grammar: "非限定關係代名詞子句：逗號後加 which 補充說明先行詞；方位副詞 east of...（在……以東）。",
    skeleton: "[City] is located east of [Location], which is famous for [Features].",
    pitfall: "「在……以東」用 east of...，不需要加 in the；逗號後面的 which 是非限定關係代名詞，補充說明先行詞湖泊。",
    slot_example: {
      original_pattern: "Hamamatsu is located east of Lake Hamana, which is famous for its beautiful scenery and delicious fish.",
      custom_demo: "Kyoto is located south of Lake Biwa, which is celebrated for its historic shrines and picturesque mountains.",
      custom_cn: "京都市位於琵琶湖以南，該湖以歷史悠久的神社與秀麗山巒而聞名。"
    }
  },
  {
    id: 83,
    cn: "不少年長的女性看不起自己的丈夫，因為他們獨自一人什麼都做不了，對妻子過度依賴。",
    simplified_cn: "不少年長妻子輕視先生，因為先生生活無法自理又太過依賴。",
    en: "Quite a few elderly women look down on their husbands, who cannot do anything by themselves and ask too much of them.",
    category: "片語動詞與非限定子句",
    grammar: "動詞片語與非限定補充：Quite a few（相當多）；look down on（輕視）；ask too much of sb（對某人要求過多/過度依賴）。",
    skeleton: "Quite a few [Group] look down on [Target], who cannot [Action] and ask too much of them.",
    pitfall: "Quite a few 表示「相當多」；look down on 表示「瞧不起/輕視」；ask too much of sb 表示對某人索求無度。",
    slot_example: {
      original_pattern: "Quite a few elderly women look down on their husbands, who cannot do anything by themselves...",
      custom_demo: "Quite a few senior architects criticize junior programmers who cannot debug by themselves and ask too much of their mentors.",
      custom_cn: "不少資深架構師看不慣無法獨立除錯且對導師過度依賴的初級程式設計師。"
    }
  },
  {
    id: 84,
    cn: "從這裡步行到那家電影院大約需要二十分鐘，但搭地鐵只要五分鐘就能到達。",
    simplified_cn: "走去電影院約20分鐘，但坐地鐵僅需5分鐘。",
    en: "The movie theater is about twenty minutes' walk from here, but it takes only five minutes to get there by subway.",
    category: "時間距離與花費動詞",
    grammar: "時間距離名詞與花費動詞：[時間]'s walk（步行路程）；搭乘交通工具花費時間用 it takes [時間] to V。",
    skeleton: "[Place] is about [Time]'s walk from here, but it takes only [Time] to get there by [Transit].",
    pitfall: "「步行……分鐘的路程」慣用語是 twenty minutes' walk（注意所有格撇號的位置）；花費時間用 it takes... to get there。",
    slot_example: {
      original_pattern: "The movie theater is about twenty minutes' walk from here, but it takes only five minutes to get there by subway.",
      custom_demo: "The convention center is about fifteen minutes' walk from the station, but it takes only three minutes to get there by taxi.",
      custom_cn: "會議中心離車站步行約十五分鐘，但搭計程車只要三分鐘即可抵達。"
    }
  },
  {
    id: 85,
    cn: "送修這輛自行車花了我一萬日圓。",
    simplified_cn: "我花了一萬日幣找人修好這台腳踏車。",
    en: "It cost ten thousand yen to have this bike repaired.",
    category: "使役被動式與 cost",
    grammar: "使役受詞被動式：have + 受詞 + p.p. (repaired) 表花錢請他人修理某物。",
    skeleton: "It cost [Amount] to have [Item] [p.p.].",
    pitfall: "自行車是被修理的，使用 have this bike repaired（have + O + p.p.）；花費金錢用 It cost [金錢] to V。",
    slot_example: {
      original_pattern: "It cost ten thousand yen to have this bike repaired.",
      custom_demo: "It cost five hundred dollars to have the laptop screen replaced.",
      custom_cn: "更換這台筆電的螢幕花了我五百美元。"
    }
  },
  {
    id: 86,
    cn: "我們家有四口人，住處在這棟公寓大樓的五樓。",
    simplified_cn: "我家有四人，公寓位於這棟樓的五樓。",
    en: "There are four people in my family. Our apartment is on the fifth floor of this building.",
    category: "存在句與樓層介系詞",
    grammar: "存在句與樓層介系詞：家庭成員數量習慣用 There are... in my family；在幾樓介系詞用 on the ... floor。",
    skeleton: "There are [Number] people in my family. Our apartment is on the [Ordinal] floor of this building.",
    pitfall: "在某個樓層介系詞必須用 on（on the fifth floor），不可用 in 或 at。",
    slot_example: {
      original_pattern: "There are four people in my family. Our apartment is on the fifth floor of this building.",
      custom_demo: "There are six engineers in our squad. Our engineering room is on the third floor of headquarters.",
      custom_cn: "我們小組有六名工程師，工程研發室位於總部大樓三樓。"
    }
  },
  {
    id: 87,
    cn: "年輕人對印刷成書的文字深信不疑的傾向，並非始於今日。",
    simplified_cn: "年輕人迷信書本文字的傾向，由來已久。",
    en: "The tendency for young people to believe everything that is printed is nothing new.",
    category: "不定詞邏輯主詞與慣用語",
    grammar: "不定詞邏輯主詞：for + 對象 + to V 表不定詞的主體；is nothing new 慣指「不足為奇/非新鮮事」。",
    skeleton: "The tendency for [Group] to believe [Thing] is nothing new.",
    pitfall: "The tendency for sb to do... 結構中，for sb 是不定詞的邏輯主詞；is nothing new 是極道地的固定片語。",
    slot_example: {
      original_pattern: "The tendency for young people to believe everything that is printed is nothing new.",
      custom_demo: "The tendency for internet users to trust unverified viral headlines is nothing new.",
      custom_cn: "網路用戶盲信未經證實的爆紅標題之傾向，並非始於今日。"
    }
  },
  {
    id: 88,
    cn: "在巴黎留學期間，曾有一位著名畫家在高級餐廳請我吃過飯。",
    simplified_cn: "在巴黎念書時，有名畫家在高級餐館請過我用餐。",
    en: "When I was studying in Paris, a famous painter bought me a meal at a first-class restaurant.",
    category: "雙賓動詞與請客",
    grammar: "雙賓動詞用法：buy + sb (間接受詞) + sth (直接受詞) 表買東西給某人或請客。",
    skeleton: "When I was [Action-ing] in [City], [Person] bought me a meal at [Location].",
    pitfall: "請某人吃飯不需要 treat 這種生硬字眼，英語最自然說法就是 buy someone a meal。",
    slot_example: {
      original_pattern: "When I was studying in Paris, a famous painter bought me a meal at a first-class restaurant.",
      custom_demo: "When I was interning in New York, a senior director bought me lunch at a rooftop cafe.",
      custom_cn: "在紐約實習期間，一位資深總監曾在頂樓咖啡廳請我吃過午餐。"
    }
  },
  {
    id: 89,
    cn: "湯姆終於實現了成為太空人的夢想，但卻是以犧牲許多事物為代價。",
    simplified_cn: "湯姆實現了太空人夢想，但也犧牲了許多事物。",
    en: "Tom finally realized his dream of becoming an astronaut, but at the expense of many other things.",
    category: "同位語與代價介系詞",
    grammar: "慣用介系詞片語：at the expense of... 表「以……為代價/犧牲……為前提」；同位語 dream of V-ing。",
    skeleton: "[Person] finally realized [his/her] dream of [Action-ing], but at the expense of [Sacrifice].",
    pitfall: "at the expense of... 意為「以……為代價」，是高分論述與成熟英文的核心片語。",
    slot_example: {
      original_pattern: "Tom finally realized his dream of becoming an astronaut, but at the expense of many other things.",
      custom_demo: "The startup achieved hypergrowth in revenue, but at the expense of product quality and employee well-being.",
      custom_cn: "這家新創公司實現了營收爆發式成長，但卻是以犧牲產品品質與員工身心健康為代價。"
    }
  },
  {
    id: 90,
    cn: "如果都市生活帶給你壓力和疲憊，最好的放鬆方式是到山中或海灘讓身心舒緩。",
    simplified_cn: "若城市生活讓你緊繃疲倦，去山裡或海邊是最佳放鬆之道。",
    en: "If city life gives you stress and fatigue, it is best to relax in the mountains or on beaches in order to relieve them.",
    category: "代名詞一致與舒緩表達",
    grammar: "代名詞單複數一致：最後的 them 指代前方的不可數與可數抽象名詞組合 stress and fatigue。",
    skeleton: "If [Source] gives you [Problems], it is best to relax in [Places] in order to relieve them.",
    pitfall: "句末的 them 同時代替前方 stress and fatigue 兩項概念；relieve 表「減輕/緩解」。",
    slot_example: {
      original_pattern: "If city life gives you stress and fatigue, it is best to relax in the mountains... in order to relieve them.",
      custom_demo: "If marathon coding sessions cause physical stiffness and mental strain, it is best to take outdoor walks to relieve them.",
      custom_cn: "如果馬拉松式的編程讓你身體僵硬精神緊繃，最好的方式是去戶外散步以舒緩它們。"
    }
  },
  {
    id: 91,
    cn: "在日本，女性在懷孕生子和撫育孩子之後，在重返職場或升遷上往往處於劣勢。",
    simplified_cn: "日本女性生養小孩後，回職或升遷常遇到很多困難。",
    en: "In Japan, women have difficulty getting promoted or returning to their jobs after giving birth and raising their children.",
    category: "困難度慣用語與被動動名詞",
    grammar: "困難度慣用語：have difficulty / trouble + V-ing 表做某事有困難；被升遷用被動 getting promoted。",
    skeleton: "In [Place], [Group] have difficulty [Action-ing 1] or [Action-ing 2] after [Event].",
    pitfall: "have difficulty 後接動名詞 (getting promoted)；升遷是「被晉升」，需用被動態 getting promoted。",
    slot_example: {
      original_pattern: "In Japan, women have difficulty getting promoted or returning to their jobs after giving birth and raising their children.",
      custom_demo: "In rapid tech sectors, professionals have difficulty staying relevant after taking multi-year career breaks.",
      custom_cn: "在快速變革的科技領域中，專業人員中斷職涯數年之後往往很難保持競爭力。"
    }
  },
  {
    id: 92,
    cn: "在美國，孩子在達到能開車的法定年齡前，去任何地方都需要父母開車接送。",
    simplified_cn: "在美國，小孩到合法開車年齡前，去哪都要父母載。",
    en: "In the U.S., parents drive their children everywhere until they are old enough to get a driver's license.",
    category: "接送動詞與 enough to 結構",
    grammar: "接送動詞與形容詞 enough：接送某人直接用動詞 drive sb；形容詞 + enough to V（足夠成熟以至於能……）。",
    skeleton: "Parents drive [Group] everywhere until they are [Adj] enough to [Action].",
    pitfall: "開車接送某人直接用 drive sb 即可；enough 修飾形容詞時必須後置：old enough to get...。",
    slot_example: {
      original_pattern: "In the U.S., parents drive their children everywhere until they are old enough to get a driver's license.",
      custom_demo: "Tutors guide apprentice developers closely until they are experienced enough to manage architecture independently.",
      custom_cn: "導師密切指導學徒工程師，直到他們累積足夠經驗能獨立管理系統架構為止。"
    }
  },
  {
    id: 93,
    cn: "「不好意思，請問郵局怎麼走？」「直走過兩個街區後左轉，它就在你的右側。」",
    simplified_cn: "請問去郵局怎麼走？直走兩街區左拐，郵局在右邊。",
    en: "\"Excuse me. Could you tell me how to get to the post office?\" \"Go straight for two blocks, then turn left. You'll find it on your right.\"",
    category: "問路指路禮貌用語",
    grammar: "問路與指路禮貌用語：Could you tell me how to get to...；方位副詞片語 on your right（在你的右手邊）。",
    skeleton: "\"Excuse me. Could you tell me how to get to [Place]?\" \"Go straight for [Distance], then turn [Direction]. You'll find it on your [Side].\"",
    pitfall: "問路禮貌句型用 Could you tell me how to get to...；在右手邊介系詞用 on your right。",
    slot_example: {
      original_pattern: "\"Excuse me. Could you tell me how to get to the post office?\" \"Go straight for two blocks, then turn left. You'll find it on your right.\"",
      custom_demo: "\"Excuse me. Could you tell me how to get to the seminar room?\" \"Take the elevator to the fourth floor, then turn right. You'll see it on your left.\"",
      custom_cn: "「不好意思，請問研討室怎麼走？」「搭電梯到四樓然後右轉，它就在你的左手邊。」"
    }
  },
  {
    id: 94,
    cn: "「你覺得我們的新老師怎麼樣？」「她身上有一種吸引人的特質。」",
    simplified_cn: "你覺得新老師如何？她身上有某種吸引我的地方。",
    en: "\"What do you think of our new teacher?\" \"There is something about her that attracts me.\"",
    category: "詢問評價與關係代名詞",
    grammar: "評價詢問與關係代名詞：詢問看法用 What do you think of...?；There is something about sb that... 表「某人身上有種……特質」。",
    skeleton: "\"What do you think of [Target]?\" \"There is something about [Target] that attracts me.\"",
    pitfall: "詢問「你覺得某人如何」要用 What do you think of...（不要用 How do you think of）；There is something about her that... 是稱讚他人魅力的極佳說法。",
    slot_example: {
      original_pattern: "\"What do you think of our new teacher?\" \"There is something about her that attracts me.\"",
      custom_demo: "\"What do you think of this minimalist UI?\" \"There is something about its typography that truly pleases me.\"",
      custom_cn: "「你覺得這個極簡介面如何？」「它的字型排版有一種非常吸引我的特質。」"
    }
  },
  {
    id: 95,
    cn: "看到有人在擁擠的電車上一人霸占兩個位子還一副理所當然的樣子，真的很讓人惱火。",
    simplified_cn: "擠電車時有人一人佔兩位還若無其事，真叫人火大。",
    en: "People who don't feel guilty about occupying two seats on a crowded train really make me angry.",
    category: "關係代名詞與使役 make",
    grammar: "關係代名詞與使役用法：先行詞 People 搭配關係代名詞 who 引導長修飾句；主要動詞 make + 受詞 + 形容詞 (angry)。",
    skeleton: "People who don't feel guilty about [Selfish Act] really make me [Emotion].",
    pitfall: "主詞是 People，被 who don't feel guilty about occupying... 修飾；主要動詞是複數 make me angry。",
    slot_example: {
      original_pattern: "People who don't feel guilty about occupying two seats on a crowded train really make me angry.",
      custom_demo: "Coworkers who don't feel guilty about leaving dirty mugs in the shared kitchen really make me annoyed.",
      custom_cn: "把髒杯子留在公共廚房還毫無愧疚感的同事，真的很讓人惱火。"
    }
  },
  {
    id: 96,
    cn: "每個人天生都帶有某種天賦，關鍵在於自己能否找得到它。",
    simplified_cn: "每人皆有天賦，問題是自己能否發現它。",
    en: "Everyone is born with a talent. The question is whether they can find it or not.",
    category: "被動慣用語與補語子句",
    grammar: "被動慣用語與主詞補語子句：be born with...（天生擁有……）；whether... or not 引導名詞子句當連綴動詞 is 的主詞補語。",
    skeleton: "Everyone is born with [Asset]. The question is whether they can [Action] it or not.",
    pitfall: "be born with 表「生來具備」；The question is whether... 表「問題的關鍵在於是否……」。",
    slot_example: {
      original_pattern: "Everyone is born with a talent. The question is whether they can find it or not.",
      custom_demo: "Every engineer possesses creative potential. The question is whether the team environment can foster it or not.",
      custom_cn: "每位工程師都蘊藏創造潛力，關鍵在於團隊環境能否激發它。"
    }
  },
  {
    id: 97,
    cn: "走出辦公室去吃午餐時，我碰巧遇見了一位高中老朋友。",
    simplified_cn: "我步出辦公室去吃飯時，偶然碰到了高中老同學。",
    en: "When I left the office for lunch, I ran into an old friend from high school.",
    category: "巧遇動詞片語",
    grammar: "巧遇動詞片語：run into sb 表非預期地巧遇或碰見某人（同義於 bump into sb）。",
    skeleton: "When I [Action], I ran into [Person] from [Place/Time].",
    pitfall: "「不期而遇/碰見」用 run into 或 bump into；留心 left the office for lunch 的介系詞 for 表目的。",
    slot_example: {
      original_pattern: "When I left the office for lunch, I ran into an old friend from high school.",
      custom_demo: "When I visited the exhibition hall, I ran into a former colleague from my first startup.",
      custom_cn: "當我參觀展覽館時，我碰巧遇見了第一家新創公司的老同事。"
    }
  },
  {
    id: 98,
    cn: "這首音樂值得一聽再聽，我強烈推薦你聽聽看。",
    simplified_cn: "這音樂值得反覆聆聽，我強力推薦給你。",
    en: "This music is worth listening to over and over again. I recommend it.",
    category: "worth 形容詞與介系詞保留",
    grammar: "worth 形容詞用法：be worth + V-ing 中，原動詞受詞移至主詞位置，故需保留介系詞 to（listen to music → music is worth listening to）。",
    skeleton: "This [Noun] is worth [Action-ing] to over and over again. I recommend it.",
    pitfall: "文法重中之重！listen 後面必須保留介系詞 to（因為原句是 listen to this music）；worth 後面接動名詞。",
    slot_example: {
      original_pattern: "This music is worth listening to over and over again. I recommend it.",
      custom_demo: "This technical keynote is worth listening to over and over again. I recommend it to all architects.",
      custom_cn: "這場技術演講值得一聽再聽，我強烈推薦給所有架構師。"
    }
  },
  {
    id: 99,
    cn: "牙齒對人體健康起著重要作用。如果想保持健康，餐後就應當勤刷牙。",
    simplified_cn: "牙齒關乎健康，想健康的話每餐後都該刷牙。",
    en: "Teeth play an important part in your health. If you want to stay healthy, you should brush your teeth after every meal.",
    category: "重要角色片語與名詞複數",
    grammar: "片語搭配與單複數：play an important part/role in... 表在……中扮演重要角色；單數 tooth、複數 teeth。",
    skeleton: "[Subject] play an important part in [Aspect]. If you want to [Goal], you should [Habit].",
    pitfall: "全口牙齒用複數 teeth；「對……發揮重要作用」固定片語為 play an important part/role in...",
    slot_example: {
      original_pattern: "Teeth play an important part in your health. If you want to stay healthy, you should brush your teeth after every meal.",
      custom_demo: "Automated tests play an important part in software reliability. If you want to deploy safely, you should run test suites on every pull request.",
      custom_cn: "自動化測試對軟體可靠性起著關鍵作用。如果想安全部署，就應當在每個 PR 都執行測試套件。"
    }
  },
  {
    id: 100,
    cn: "請牢記在心：只要你有熱情，無論做什麼事都能獲得成功。",
    simplified_cn: "請記住：懷抱熱情，做任何事都能成。",
    en: "Bear in mind that if you have enthusiasm, you can succeed in anything.",
    category: "心智動詞與 succeed in",
    grammar: "心智動詞慣用語：Bear in mind that...（牢記……，等同於 Keep in mind that...）；在某領域成功搭配 succeed in + N。",
    skeleton: "Bear in mind that if you have [Quality], you can succeed in [Goal].",
    pitfall: "竹岡廣信第 100 句經典壓軸！Bear in mind that... 表牢記在心；在某事上成功必須搭配介系詞 in（succeed in anything）。",
    slot_example: {
      original_pattern: "Bear in mind that if you have enthusiasm, you can succeed in anything.",
      custom_demo: "Bear in mind that if you maintain discipline and curiosity, you can master any programming language.",
      custom_cn: "請牢記在心：只要你能保持自律與好奇心，掌握任何程式語言都能無往不利。"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DRAGON_100_DATA;
}
