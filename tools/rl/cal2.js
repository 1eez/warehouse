/*****************************************************************************
              超级年历    制作:佛山谭剑泉  year2000@21cn.com
*****************************************************************************/
/*****************************************************************************
                                   日期资料1900-2050
*****************************************************************************/
var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan=new Array("\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678");
var Zhi=new Array("\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5");
var Animals=new Array("<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[\u8096\u9F20]&nbsp;\u4E2A\u6027\uFF1A\u5BCC\u5E7D\u9ED8\u611F\u53CA\u654F\u9510\u7684\u89C2\u5BDF\u529B\uFF0C\u884C\u4E8B\u79EF\u6781\uFF0C\u5BF9\u5DE5\u4F5C\u6216\u5F02\u6027\u8BBE\u60F3\u5468\u5230\u4E14\u7EC6\u817B\uFF0C\u5176\u521B\u89C1\u5E38\u4EE4\u4EBA\u6FC0\u8D4F\uFF0C\u5177\u654F\u9510\u7684\u89C2\u5BDF\u529B\u3002\u7279\u5F81\uFF1A\u5E74\u5E7C\u65F6,\u52B3\u788C\u5954\u6CE2\u4E2D\u8D8A\u80FD\u53D1\u6325\u5176\u7075\u654F\u7684\u667A\u80FD\u4E0E\u8010\u6027;\u5728\u5BBD\u88D5\u7684\u73AF\u5883\u4E2D\u751F\u957F,\u6CA1\u6709\u5931\u4E1A\u70E6\u607C,\u7136\u6613\u89C1\u5F02\u601D\u8FC1\u6362\u5DE5\u4F5C,\u4E2D\u5E74\u9047\u5931\u8D25\u5F8C,\u4F1A\u4E00\u5207\u987A\u5229,\u5C24\u5176\u80FD\u4EAB\u53D7\u665A\u5E74\u8D22\u8FD0,\u987B\u6CE8\u610F\u7F79\u60A3\u80BE\u810F\u7CFB\u7EDF\u75BE\u75C5\u3002') href='#'>\u9F20",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖牛]&nbsp;个性：富幽默感及敏锐的观察力，行事积极，对工作或异性设想周到且细腻，其创见常令人激赏，具敏锐的观察力。特征：年轻时，在变化多端的环境中，度过操劳的日子，但有坚忍的独立性，年轻时，会为自己的前途散布辛劳的根源．进入中年期，会分为成功大道与沈没于逆境两条路。到四十五、六岁有第二个开拓良好机运的机会，如能抑制唯我独尊的性情，到晚年便能平安。') href='#'>牛",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖虎]&nbsp;个性：意志坚强且活跃，为领导人物，但因这些性格遇到困难会受打击而身败名裂。特征：胆大，做事果决，年轻时就会出人头地，中年时若能把握年轻时机运则会成功，若不能把握机运，则会在人际关系中衰败下来，不再成功．寅年出生的人，担任公教人员为宜，且要自爱，不要有贪念与争功的歪念．注意呼吸系统，消化系统的疾病。') href='#'>虎",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖兔]&nbsp;个性：做事从容且具幽默感，为受欢迎的社交家．然而，却有急性及见异思迁的缺点.特征：不管任何场合，都能受上司赏识．中年时若投机会埋灭一生，切注意要踏实做事，才能安稳生活。') href='#'>兔",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖龙]&nbsp;个性：明朗、活跃的社交家，对事情容易发生兴趣，其缺点是容易热衷也易失去兴趣。特征：大部分与亲人之感情为薄，然在社会上却受欢迎．早年就能发挥潜力，进入中年期需注意无谓的野心，恐怕会身败名裂．若能克服野心，按部就班地照计划完成各项事情，必有最佳回报。最适合的职业为从事教育工作，须注意循环系统的疾病。') href='#'>龙",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖蛇]&nbsp;个性：大部分有自我主张，不容易为外人左右．另外，会盲目信赖他人，也是疑心重的人。特征：年轻时，生活在温暖的环境，长大後较懒，所以常换工作，对异性不能专情．中年时，应收敛惰性，立定志向，奋发努力．适宜从事刺激性的工作。') href='#'>蛇",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖马]&nbsp;个性：大部分头脑转得快，行动轻敏，有开朗的个性，尊重师长，双亲，性情活泼但又不乏沉稳。特征：是标准的行动派，订立了目标，便努力迈进，年轻时就会露头角，中年若能维持不变，养成耐性才能有所成就，适宜在艺术，教育职位方面求发展．注意心脏系统的疾病。') href='#'>马",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖羊]&nbsp;个性：大部分为深思熟虑，研究心强．因此，有神经质且胆怯，做事拖泥带水。特征：虽然年轻时生活安稳，但恐十年代时，会患大疾．中年时是大展鸿图的好机会，因研究心强，若努力研究，能获高的地位，也能致富．特别注意消化器系统的疾病。') href='#'>羊",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖猴]&nbsp;个性：才华洋溢，富辩才，进取心强，待人亲切，富同情心。特征：有灵敏的心思，有待人的素养，年少即受人注目，口才灵巧，反应快，年轻时便得好职位．但因有机心，恐会失去良好地位，特别注意一点，较适宜从事推销工作．注意关节方面的疾病。') href='#'>猴",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖鸡]&nbsp;个性：大部为规规矩矩且热心工作，并注重穿着，广交朋友。特征：年轻时，不愿受束缚，喜欢过自由自在的生活方式，因此在工作上无法定心，常换工作，三十岁以後，才会稍微收心．四十至五十岁为黄金时代，应把握时机，好好发挥才能．从事业务方面工作较合适，注意由偏食引起的疾病.') href='#'>鸡",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖狗]&nbsp;个性：大都尽责且保守．因此，较固执，不易接受他人的意见.特征：虽然能够成为团体中的干部，然而，常为了工作上的问题，与上司争议，而丢弃辛苦得来的工作.') href='#'>狗",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[肖猪]&nbsp;个性：大部分为坚定意志者，有爱心及人情味，然而做事有时缺乏考虑。特征：年轻时，对家庭不满，但心里却仍敬爱双亲，性格诚实，自视甚高，常吃亏．亥年出生的晚年都很幸福，中年以後能慢慢发挥才能．需注意呼吸及消化系统的疾病。') href='#'>猪");
var Animals2=new Array("s","n","h","t","l","se","m","y","ho","j","g","z");
var solarTerm = new Array("\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u60CA\u86F0","\u6625\u5206","\u6E05\u660E","\u8C37\u96E8","\u7ACB\u590F","\u5C0F\u6EE1","\u8292\u79CD","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u5904\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA","\u51AC\u81F3[\u51AC\u8282]")
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十')
var nStr2 = new Array('初','十','廿','卅','　')
var monthName = new Array("<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'12月22日-1月20日&nbsp;★山羊座(摩羯座)★&nbsp;山羊座出生的人&nbsp;优点：做事脚踏实地，意志力强，有家庭观念，对人谦逊，处处谨慎....&nbsp;&nbsp;缺点：固执,不够乐观,个人利己主义,缺乏浪漫情趣,太专注於个人的目标。1月22日-2月21日&nbsp;★水瓶座★&nbsp;请看下月...') href='#'>JAN",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'1月22日-2月21日&nbsp;★水瓶座★&nbsp;水瓶座出生的人&nbsp;优点：崇尚自由，兴趣广泛，创意十足，有理性的智慧，感情忠实&nbsp;缺点：缺乏热情，过於强调生活的自主权，太过理智情趣不足，多管闲事.2月22日-3月21日&nbsp;★双鱼座★&nbsp;请看下月...') href='#'>FEB",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'2月22日-3月21日&nbsp;★双鱼座★&nbsp;双鱼座出生的人&nbsp;优点：感情丰富，心地仁慈，舍己为人，不自私，懂得包容，温和且浪漫&nbsp;缺点：不够实际，太情绪化，多愁善感，不善理财，感情用事。3月22日-4月20日&nbsp;★白羊座★&nbsp;请看下月...') href='#'>MAR",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'3月22日-4月20日&nbsp;★白羊座★&nbsp;白羊座出生的人&nbsp;优点：做事积极，热情有活力，有明快的决断力，坦白率真，重情讲义气&nbsp;缺点：自我中心太强，粗心大意，容易脑羞成怒，缺乏时间观念缺乏耐性。4月21日-5月21日&nbsp;★金牛座★&nbsp;请看下月...') href='#'>APR",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'4月21日-5月21日&nbsp;★金牛座★&nbsp;金牛座出生的人&nbsp;优点：耐性十足，脚踏实地，一往情深，有艺术天份，做事有计划有规律&nbsp;缺点：占有欲太强，善妒，缺乏幽默感，不知变通，缺乏求新求变的勇气。5月22日-6月21日&nbsp;★双子座★&nbsp;请看下月...') href='#'>MAY",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'5月22日-6月21日&nbsp;★双子座★&nbsp;双子座出生的人&nbsp;优点：有高人一等的幽默感，有天生的语言才华，反应较快，学习能力强&nbsp;缺点：付出少却要得多，喜欢批评别人而不检讨自己，做任何事都欠耐心。6月22日-7月21日&nbsp;★巨蟹座★&nbsp;请看下月...') href='#'>JUN",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'6月22日-7月21日&nbsp;★巨蟹座★&nbsp;巨蟹座出生的人&nbsp;优点：情感真挚深切，想像力丰富，念旧重情，懂得体贴关怀，善解人意&nbsp;缺点：提不起放不下，说话拐弯抹角，不直接，不知适可而止，缺乏理性。7月22日-8月21日&nbsp;★狮子座★&nbsp;请看下月...') href='#'>JUL",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'7月22日-8月21日&nbsp;★狮子座★&nbsp;狮子座出生的人&nbsp;优点：一言九鼎有信用，乐观，心胸宽大，懂得宽恕具有激励人心的气质&nbsp;缺点：死爱面子活受罪，缺乏节俭的美德，刚愎自用，自以为是缺乏耐性。8月22日-9月21日&nbsp;★处女座★&nbsp;请看下月...') href='#'>AUG",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'8月22日-9月21日&nbsp;★处女座★&nbsp;处女座出生的人&nbsp;优点：追求完美谦逊不夸大，有精确的观察力，对爱情忠实守本份有耐性&nbsp;缺点：太过吹毛求疵，有洁癖顷向，不够浪漫不尊重他人的梦想，欠远见。9月22日-10月21日&nbsp;★天秤座★&nbsp;请看下月...') href='#'>SEP",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'9月22日-10月21日&nbsp;★天秤座★&nbsp;天秤座出生的人&nbsp;优点：公平客观，天生的优雅风采，浪漫的恋爱高手，能屈能伸适应力强&nbsp;缺点：优柔寡断，犹豫不决，总是自愿其说，藉囗太多，爱享受好逸恶劳。10月22日-11月21日&nbsp;★天蝎座★&nbsp;请看下月...') href='#'>OCT",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'10月22日-11月21日&nbsp;★天蝎座★&nbsp;天蝎座出生的人&nbsp;优点：对朋友讲义气，天生的性感魅力，对人生有潜在的热情，恩怨分明&nbsp;缺点：占有欲过高，爱吃醋，得理不饶人，囗是心非，城府太深报复心强。11月22日-12月21日&nbsp;★人马座（射手座）★&nbsp;请看下月...') href='#'>NOV",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'11月22日-12月21日&nbsp;★人马座（射手座）★&nbsp;人马座出生的人&nbsp;优点：天生乐观，正直坦率，有救世救人的热情，待人友善，经得起打击&nbsp;缺点：心直囗快，容易得罪人，不信邪，不听劝告，冲动，不懂三思而行。12月22日-1月20日&nbsp;★山羊座(摩羯座)★&nbsp;请看1月...') href='#'>DEC");
var month2=new Array("元月&nbsp;&nbsp;&nbsp;近代史上的元月：《1789年1月..美国第一次大选,华盛顿当选为第一任总统》《1912年1月1日..中华民国成立，孙中山任临时大总统，同期国民党成立》《1924年1月..第一次国共合作》《1932年1月28日..日本在上海发动“一.二八”事变》《1933年1月..德国希特拉上台》《1949年1月..淮海战役、平津战役解放军取得最后胜利》《1976年1月8日..周恩来逝世》",
"2月&nbsp;&nbsp;&nbsp;近代史上的2月：《1848年2月..“共产党宣言”在欧洲发表》《1848年2月..法国“二月革命”爆发》《1923年2月..京汉铁路工人大罢工》《1972年2月21日..尼克松到访中国》",
"3月&nbsp;&nbsp;&nbsp;近代史上的3月：《1925年3月12日..孙中山逝世》《1932年3月..日本扶植清朝废帝溥仪，在东北建立伪“满洲国”》《2000年3月..小谭的工作单位改为私有制,包括小谭在内全体员工无一幸免宣布失业...时称：“下岗”？》",
"4月&nbsp;&nbsp;&nbsp;近代史上的4月：《1861年4月..美国南北战争爆发》《1911年4月..广州黄花冈起义》《1949年4月23日..解放军解放南京,民国结束》《1970年4月24日..中国成功发射第一颗人造卫星》《1976年4月7日..华国锋任中共第一副主席》《1984年4月6日..中国对外开放14个沿海城市》",
"5月&nbsp;&nbsp;&nbsp;近代史上的5月：《1841年5月29日..广州三元里民众抵抗英军入侵》《1919年5月4日..“五四”运动爆发》《1945年5月8日..德国签订无条件投降书》",
"6月&nbsp;&nbsp;&nbsp;近代史上的6月：《1840年6月..第一次鸦片战争爆发》《1898年6月..“百日维新”开始》《1913年6月..国民二次革命开始》《1914年6月28日..萨拉热窝事件--第一次世界大战爆发》《1944年6月6日..英美盟军登陆诺曼底》《1950年6月25日..朝鲜战争爆发》",
"7月&nbsp;&nbsp;&nbsp;近代史上的7月：《1776年7月4日..《独立宣言》发表，美国成立》《1921年7月..中国共产党成立》《1937年7月7日..日本发动芦沟桥事变》《1946年7月..中国爆发全面内战》《1953年7月26日..朝鲜战争结束，形成南北对峙局面》《1976年7月6日..朱德逝世》《1997年7月..中国收回香港主权》",
"8月&nbsp;&nbsp;&nbsp;近代史上的8月：《1789年8月..法国《人权宣言》发布》《1842年8月..清政府割让香港》《1894年8月1日..清政府对日宣战，甲午战争爆发》《1905年8月..中国同盟会成立》《1927年8月1日..“八一”南昌起义》《1945年8月6日、9日..美国在日本广岛、长崎第一次使用原子弹》《1945年8月14日..日本宣布无条件投降》《1966年8月18日..毛泽东在天安门接见红卫兵》",
"9月&nbsp;&nbsp;&nbsp;近代史上的9月：《1909年9月..中国第一条自行设计的“京张”铁路开通》《1915年9月..中国新文化运动开始》《1922年9月..安源路矿工人大罢工》《1931年9月18日..日本在沈阳发动“九.一八”事变》《1939年9月3日第二次世界大战全面爆发》《1945年9月2日..日本签订无条件投降书》《1976年9月9日..毛泽东逝世》《1984年9月26日..中英发表关于香港问题的联合声明》",
"10月&nbsp;&nbsp;&nbsp;近代史上的10月：《1856年10月..英法联军火烧圆明园；同月清政府割让九龙半岛》《1911年10月10日..武昌起义，辛亥革命开始》《1934年10月..红军开始二万五千里长征》《1949年10月1日..中华人民共和国成立》《1950年10月25日..中国人民志愿军入朝参加抗美战争》《1951年10月26日..解放军进藏，西藏和平解放》《1957年10月4日..前苏联将世界上第一颗人造卫星送上太空》《1976年10月6日..“四人帮”受审》",
"11月&nbsp;&nbsp;&nbsp;近代史上的11月：《1798年11月9日..法国拿破伦发动“雾月政变”，拿破伦时代开始》《1917年11月7日..“十月革命”胜利苏联成立》《1943年11月..苏、美、英三大巨头举行德克兰会议》《1948年11月..辽沈战役结束,淮海战役开始》《1969年11月12日..刘少奇在开封逝世》",
"12月&nbsp;&nbsp;&nbsp;近代史上的12月：《1936年12月12日..西安事变》《1941年12月8日..太平洋战争爆发》");

var sFtv = new Array(
"0101*\u5143\u65E6",
"0214 \u60C5\u4EBA\u8282",
"0308 \u5987\u5973\u8282",
"0312 \u690D\u6811\u8282",
"0315 \u6D88\u8D39\u8005\u6743\u76CA\u65E5",
"0401 \u611A\u4EBA\u8282",
"0501 \u52B3\u52A8\u8282",
"0504 \u9752\u5E74\u8282",
"0512 \u62A4\u58EB\u8282",
"0601 \u513F\u7AE5\u8282",
"0701 \u5EFA\u515A\u8282 \u9999\u6E2F\u56DE\u5F52\u7EAA\u5FF5\u65E5",
"0801 \u5EFA\u519B\u8282",
"0808 \u7236\u4EB2\u8282",
"0909 \u6BDB\u6CFD\u4E1C\u901D\u4E16\u7EAA\u5FF5\u65E5",
"0910 \u6559\u5E08\u8282",
"1001*\u56FD\u5E86\u8282",
"1112 \u5B59\u4E2D\u5C71\u8BDE\u8FB0\u7EAA\u5FF5\u65E5",
"1220 \u6FB3\u95E8\u56DE\u5F52\u7EAA\u5FF5\u65E5",
"1224*\u5723\u8BDE\u8282",
"1225*\u5E73\u5B89\u591C",
"1226 \u6BDB\u6CFD\u4E1C\u8BDE\u8FB0\u7EAA\u5FF5\u65E5")
var lFtv = new Array(
"0101*\u6625\u8282",
"0115*\u5143\u5BB5\u8282",
"0505*\u7AEF\u5348\u8282",
"0815*\u4E2D\u79CB\u8282",
"0100*\u9664\u5915")
var wFtv = new Array(
"0231 \u603B\u7EDF\u65E5",
"0340 \u590D\u6D3B\u8282",
"0520 \u6BCD\u4EB2\u8282",
"0531 \u80DC\u5229\u65E5",
"0716 \u5408\u4F5C\u8282",
"0730 \u88AB\u5974\u5F79\u56FD\u5BB6\u5468",
"0911 \u897F\u65B9\u52B3\u52A8\u8282",
"1011 \u4E16\u754C\u4F4F\u623F\u65E5",
"1021 \u7F8E\u56FD\u54E5\u4F26\u5E03\u7EAA\u5FF5\u65E5",
"1144 \u611F\u6069\u8282")
function lYearDays(y) {
   var i, sum = 348
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
   return(sum+leapDays(y))
}

function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
   else return(0)
}


function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf)
}


function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
}

function Lunar(objDate) {

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31)
   var offset   = (objDate - baseDate)/86400000

   this.dayCyl = offset + 40
   this.monCyl = 14

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i)
      offset -= temp
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = leapMonth(i) 
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {

      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }


      if(this.isLeap==true && i==(leap+1)) this.isLeap = false

      offset -= temp
      if(this.isLeap == false) this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i
   this.day = offset + 1
}


function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
   else
      return(solarMonth[m])
}

function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12])
}


function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;

      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;

      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;

      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = '';
      this.solarTerms    = ''; 
      this.solarTerms    = ''; 
      this.solarFestival = ''; 
      this.lunarFestival = ''; 

}

function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
   return(offDate.getUTCDate())
}

function calendar(y,m) {

   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   var lDPOS = new Array(3)
   var n = 0
   var firstLM = 0

   sDObj = new Date(y,m,1)           

   this.length    = solarDays(y,m)    
   this.firstWeek = sDObj.getDay()   


   for(var i=0;i<this.length;i++) {

      if(lD>lX) {
         sDObj = new Date(y,m,i+1)   
         lDObj = new Lunar(sDObj)    
         lY    = lDObj.year          
         lM    = lDObj.month         
         lD    = lDObj.day          
         lL    = lDObj.isLeap        
         lX    = lL? leapDays(lY): monthDays(lY,lM) 

         if(n==0) firstLM = lM
         lDPOS[n++] = i-lD+1
      }

      this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )


      if((i+this.firstWeek)%7==0)   this[i].color = 'red'  
      if((i+this.firstWeek)%14==13) this[i].color = 'red'  
   }

   tmp1=sTerm(y,m*2  )-1
   tmp2=sTerm(y,m*2+1)-1
   this[tmp1].solarTerms = solarTerm[m*2]
   this[tmp2].solarTerms = solarTerm[m*2+1]
   if(m==3) this[tmp1].color = '#CC4AF7' 
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' '
            if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = '#BC02D7'
         }

   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2)
            tmp2=Number(RegExp.$3)
            this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' '
         }

   for(i in lFtv)
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         tmp1=Number(RegExp.$1)-firstLM
         if(tmp1==-11) tmp1=1
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = '#FF00FF'
            }
         }
      }


   if((this.firstWeek+12)%7==5)
      this[12].solarFestival += '\u9ED1\u8272\u661F\u671F\u4E94 '
   if(y==tY && m==tM) 
      this[tD-1].solarTerms +='\u4ECA\u5929^@^'


   if(y==tY && m==tM) this[tD-1].isToday = true;

}

function cDay(d){
   var s;

   switch (d) {
      case 10:
         s = '初十'; break;
      case 20:
         s = '二十'; break;
         break;
      case 30:
         s = '三十'; break;
         break;
      default :
         s = nStr2[Math.floor(d/10)];
         s += nStr1[d%10];
   }
   return(s);
}


var cld;

function drawCld(SY,SM) {
   var i,sD,s,size;
   cld = new calendar(SY,SM);

   if(SY>1874 && SY<1909) yDisplay = '\u5149\u7EEA&nbsp;' + (((SY-1874)==1)?'\u5143':SY-1874)
   if(SY>1908 && SY<1912) yDisplay = '\u5BA3\u7EDF&nbsp;' + (((SY-1908)==1)?'\u5143':SY-1908)
   if(SY>1911 && SY<1949) yDisplay = '\u6C11\u56FD&nbsp;' + (((SY-1911)==1)?'\u5143':SY-1911)
   if(SY>1948 && SY<1950) yDisplay = '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD' + (((SY-1948)==1)?'\u6210\u7ACB':SY-1948)  
   if(SY>1949) yDisplay = '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB' + (((SY-1949)==1)?'\u5143':SY-1949)

   GZ.innerHTML = '<table border=0 cellpadding=0 cellspacing=0 width=374  style="FONT-SIZE: 9pt"><tr><td align=right width=85% valign=bottom><font color=#FFCC00>●</font><font color=#FFFFFF>&nbsp;<a  onmouseout="hidetip2()" onmouseover=showtip2(this,event,"'+'\u73B0\u5728\u662F\u516C\u5143'+SY+'\u5E74'+month2[SM]+'") href="#">'+ yDisplay+'\u5E74'+'</a>&nbsp;&nbsp;&nbsp;<font color=#FFCC00>●</font>&nbsp;'+Animals[(SY-4)%12]+'\u5E74[\u519C\u5386' + cyclical(SY-1900+36)+'\u5E74]' +"</td></td><td align=center  width=15%><img src='" +Animals2[(SY-4)%12]+".gif'></td>" + '</tr></table>' ;

   YMBG.innerHTML =monthName[SM]+"&nbsp;" +SY+"</a>"  ;


   for(i=0;i<42;i++) {

      sObj=eval('SD'+ i);
      lObj=eval('LD'+ i);

      sObj.className = '';

      sD = i - cld.firstWeek;

      if(sD>-1 && sD<cld.length) { 
         sObj.innerHTML = sD+1;

         if(cld[sD].isToday) sObj.className = 'todyaColor'; 

         sObj.style.color = cld[sD].color; 

         if(cld[sD].lDay==1) 
            lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + cld[sD].lMonth + '月' + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</b>';
         else 
            lObj.innerHTML = cDay(cld[sD].lDay);

         s=cld[sD].lunarFestival;
         if(s.length>0) { 
            if(s.length>6) s = s.substr(0, 4)+'…';
            s = s.fontcolor('#C49402');
         }
         else { 
            s=cld[sD].solarFestival;
            if(s.length>0) {
               size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
               if(s.length>size+2) s = s.substr(0, size)+'…';
               s = s.fontcolor('#FF8000');
            }
            else { 
               s=cld[sD].solarTerms;
               if(s.length>0) s = s.fontcolor('#309F00');
            }
         }
         if(s.length>0) lObj.innerHTML = s;

      }
      else { 
         sObj.innerHTML = '';
         lObj.innerHTML = '';
      }
   }
}


function changeCld() {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex;
   drawCld(y,m);
}

function pushBtm(K) {
   switch (K){
      case 'YU' :
         if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         break;
      case 'YD' :
         if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         break;
      case 'MU' :
         if(CLD.SM.selectedIndex>0) {
            CLD.SM.selectedIndex--;
         }
         else {
            CLD.SM.selectedIndex=11;
            if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         }
         break;
      case 'MD' :
         if(CLD.SM.selectedIndex<11) {
            CLD.SM.selectedIndex++;
         }
         else {
            CLD.SM.selectedIndex=0;
            if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         }
         break;
      default :
         CLD.SY.selectedIndex=tY-1900;
         CLD.SM.selectedIndex=tM;
   }
   changeCld();
}



var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();


var width = "130";
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;

var dStyle;
document.onmousemove = mEvn;
function mOvr(v) {
   var s,festival;
   var sObj=eval('SD'+ v);
   var d=sObj.innerHTML-1;
  if(sObj.innerHTML!='') {

      sObj.style.cursor = 'help';

      if(cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '')
         festival = '';
      else
         festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#00B700"><TR><TD ALIGN="center">'+
         '<FONT COLOR="#ffffff" STYLE="font-size:9pt;">是日:'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</FONT></TD>'+
         '</TR></TABLE>';

      s= '<table border="3" width="180" bordercolor="#00B700" bgcolor="#FFFBE8" cellpadding="0" cellspacing="0"><TR><td>' +
         '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="center"><FONT COLOR="#000000" STYLE="font-size:9pt;"><br>&nbsp;'+
         cld[d].sYear+'年'+cld[d].sMonth+'月'+cld[d].sDay+'日&nbsp;&nbsp;星期'+cld[d].week+'<br>'+
         '<font color="#FF8000">农历'+cld[d].cYear+'年'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+'月'+cld[d].lDay+'日</font><br>'+
         '<font color="#800080">'+cld[d].cMonth+'月 '+cld[d].cDay + '日</font><br>&nbsp;'+
         '</FONT></TD></TR></TABLE>'+ festival +'</TD></TR></TABLE>';


      document.all["detail"].innerHTML = s;

   	if (snow == 0) {
         dStyle.left = x+offsetx-(width/2);
         dStyle.top = y+offsety;
   		dStyle.visibility = "visible";
   		snow = 1;
   	}
	}
}

function mOut() {
	if ( cnt >= 1 ) { sw = 0 }
	if ( sw == 0 ) { snow = 0;	dStyle.visibility = "hidden";}
	else cnt++;
}
function mEvn() {
   x=event.x;
   y=event.y;
	if (document.body.scrollLeft)
	   {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (snow){
      dStyle.left = x+offsetx-(width/2)
      dStyle.top = y+offsety
	}
}

function killErrors() {
return true;
}
window.onerror = killErrors;
function noright(e){

return true;}
document.onmousedown=noright;

function changeTZ() {
   CITY.innerHTML = CLD.TZ.value.substr(6)
   setCookie("TZ",CLD.TZ.selectedIndex)
}

function tick() {
   var today
   today = new Date()
   Clock.innerHTML = today.toLocaleString().replace(/(年|月)/g, "/").replace(/日/, "");
   Clock2.innerHTML = TimeAdd(today.toGMTString(), CLD.TZ.value)
   window.setTimeout("tick()", 1000);
}

function setCookie(name, value) {
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else return ""
   }
}
function initial() {
   dStyle = detail.style;
   CLD.SY.selectedIndex=tY-1900;
   CLD.SM.selectedIndex=tM;
   drawCld(tY,tM);

   CLD.TZ.selectedIndex=getCookie("TZ");
   changeTZ();
   tick();
}






