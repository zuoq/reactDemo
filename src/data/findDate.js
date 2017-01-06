let findItem = [
    {'title':'热门','id':'RM','isActive':'active'},
    {'title':'时事热闻','id':'SSRW'},
    {'title':'小说精选','id':'XSJX'},
    {'title':'摄影游记','id':'SYYJ'},
    {'title':'漫画手绘','id':'MHSY'},
    {'title':'签约作者','id':'QYZZ'},
    {'title':'新上榜','id':'XSB'},
    {'title':'七日热门','id':'QRRM'},
    {'title':'三十日热门','id':'SSRRM'},
    {'title':'日报','id':'RB'},
    {'title':'专题精选','id':'ZTJX'},
    {'title':'有奖活动','id':'YJHD'},
    {'title':'简书出版','id':'JSCB'},
    {'title':'简书博客','id':'JSBK'},
];


//lists datas
let RM = [
    {
        'author_name':'Lu安然',
        'time':'大约16小时之前',
        'title':'我是如何从丑逼逆袭成女神的',
        'read_num':6636,
        'comment':90,
        'like_num':179,
        'img_src':'http://upload-images.jianshu.io/upload_images/2363382-75775be9825faad1.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'简书日报 ',
        'time':'大约4小时之前',
        'title':'简书早报161004——《怎样写一手漂亮的好字》',
        'read_num':12420,
        'comment':11,
        'like_num':245,
        'img_src':'http://upload-images.jianshu.io/upload_images/568470-afc038101d4d8ecb.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'Josie乔 ·',
        'time':'大约6小时之前',
        'title':'过了20岁，你应该知道的几件事',
        'read_num':5970,
        'comment':46,
        'like_num':246,
        'img_src':'http://upload-images.jianshu.io/upload_images/1297994-6c0082cf631297c0.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'简书活动精选',
        'time':'5天之前',
        'title':'Heresay | 继续忍不住篇：味道（更新获奖名单）',
        'read_num':4648,
        'comment':196,
        'like_num':39
    },
    {
        'author_name':'子牟 ',
        'time':'大约7小时之前',
        'title':'50块钱能买到哪些超棒的洗面奶？',
        'read_num':5153,
        'comment':44,
        'like_num':260,
        'img_src':'http://upload-images.jianshu.io/upload_images/2850538-b65a82da70bd2b93.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'沐儿 ',
        'time':'5天之前',
        'title':'做一个被自己喜欢的姑娘',
        'read_num':2500,
        'comment':44,
        'like_num':260,
        'img_src':'http://upload-images.jianshu.io/upload_images/967456-7e8b4c907988f7d3.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'简书日报 ',
        'time':'大约3小时之前',
        'title':'简书晚报161004——《只有放弃你，我才能爱你——得不到而永骚动的<纯真年代>》',
        'read_num':3828 ,
        'comment':7,
        'like_num':66,
        'img_src':'http://upload-images.jianshu.io/upload_images/568470-9468af91e9f4d32e.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'用时间酿酒 ',
        'time':'大约8小时之前',
        'title':'你真的会阅读吗？读书从学会买书开始（附书单）',
        'read_num':3378,
        'comment':50,
        'like_num':168,
        'img_src':'http://upload-images.jianshu.io/upload_images/1073105-7c3fe351fd9280eb.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'巴塞电影',
        'time':'4天之前',
        'title':'只有放弃你，我才能爱你——得不到而永骚动的《纯真年代》',
        'read_num':1041,
        'comment':4,
        'like_num':41,
        'img_src':'http://upload-images.jianshu.io/upload_images/2146558-4d979803d76628c8.jpeg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'梁子要做生活家',
        'time':'1天之前',
        'title':'用我的亲身经历，给即将毕业的你9个建议',
        'read_num':963,
        'comment':19,
        'like_num':54,
        'img_src':'http://upload-images.jianshu.io/upload_images/1499885-fa93fc3fdb8e743d.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
];


let SSRW = [
    {
        'author_name':'归晚向阳 ',
        'time':'大约4小时之前',
        'title':'从你的全世界路过，我在终点等不到你',
        'read_num':826,
        'comment':9,
        'like_num':29,
        'img_src':'http://upload-images.jianshu.io/upload_images/2331654-4cab82bdbcc12de0.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'彼岸沙 · ',
        'time':'3天之前',
        'title':'南加州十一期间收到地震预警？如果我告诉你危险已经暂时解除了呢',
        'read_num':252,
        'comment':0,
        'like_num':1,
        'img_src':'http://upload-images.jianshu.io/upload_images/2344503-cd4fe814f001353d.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'杨宝宝漫谈',
        'time':'大约7小时之前',
        'title':'“新歌声”教我们这样谈恋爱',
        'read_num':430,
        'comment':4,
        'like_num':19,
        'img_src':'http://upload-images.jianshu.io/upload_images/2453238-90a15a115e15ba84.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'宋了然 ',
        'time':'大约8小时之前',
        'title':'说实话，你们知道吗，祖国真心不容易！',
        'read_num':497,
        'comment':14,
        'like_num':15
    },
    {
        'author_name':'田Tacy ',
        'time':'大约12小时之前',
        'title':'想成为新西兰的设计师？一条简信，就够了。',
        'read_num':75,
        'comment':0,
        'like_num':1,
        'img_src':'http://upload-images.jianshu.io/upload_images/3201173-336ba709932a2b72.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'田Tacy ',
        'time':'大约4小时之前',
        'title':'新西兰的设计师们，一言不合就加工资， 买房纸! 虐哭国内加班狗',
        'read_num':660,
        'comment':6,
        'like_num':8,
        'img_src':'http://upload-images.jianshu.io/upload_images/3201173-37780596076d304a?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'艾翎雪 ',
        'time':'1天之前',
        'title':'对不起，我不能把车借给你',
        'read_num':1077,
        'comment':16,
        'like_num':16,
        'img_src':'http://upload-images.jianshu.io/upload_images/2744057-20470306851b492f.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'八段锦 ',
        'time':'大约24小时之前',
        'title':'中国人为什么痴迷旅行和手机？',
        'read_num':4092,
        'comment':41,
        'like_num':58,
        'img_src':'http://upload-images.jianshu.io/upload_images/2526743-4c82a7132a7d5472.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'莫小南  ',
        'time':'大约24小时之前',
        'title':'大三女生新疆徒步失联近十天，祈愿她平安归来（内附给喜欢户外极限运动的美眉和汉子们的一些建议）',
        'read_num':628,
        'comment':19,
        'like_num':13,
        'img_src':'http://upload-images.jianshu.io/upload_images/2499352-d2cb6f17e21573d0.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'三三就是三三 ',
        'time':'3天之前',
        'title':'听说懂得这几招的人，在长假的车流人流里依然嗨爆',
        'read_num':470,
        'comment':7,
        'like_num':9,
        'img_src':'http://upload-images.jianshu.io/upload_images/635646-8ea4bf0ab249c4cd.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },


];


let XSJX = [
    {
        'author_name':'柒琪绮契',
        'time':'2天之前',
        'title':'【连载】一见倾心 再见情深16',
        'read_num':169,
        'comment':3,
        'like_num':7,
        'img_src':'http://upload-images.jianshu.io/upload_images/1066258-ff6d37914f5d884e.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'原一一',
        'time':'2天之前',
        'title':'洞山温泉迷案（第一章）龟云城',
        'read_num':48,
        'comment':6,
        'like_num':8,
    },
    {
        'author_name':'桢木',
        'time':'2天之前',
        'title':'【连载】麝熏微度绣芙蓉--第二十七章 相认，诅咒',
        'read_num':83,
        'comment':11,
        'like_num':3,
        'img_src':'http://upload-images.jianshu.io/upload_images/2793571-6872da2cf81b97ff.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'或告之曰 ',
        'time':'2天之前',
        'title':'《仙隐传奇之神魔乱》第四章有缘人（1）',
        'read_num':41,
        'comment':4,
        'like_num':6,
    },
    {
        'author_name':'freecrazy',
        'time':'3天之前',
        'title':'阴阳五行记-第八章',
        'read_num':322,
        'comment':0,
        'like_num':3,
        'img_src':'http://upload-images.jianshu.io/upload_images/2301799-c7b4e3f5d8175486.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'青年太白',
        'time':'3天之前',
        'title':'《灰延》第三十六章·说道',
        'read_num':24,
        'comment':0,
        'like_num':4,
        'img_src':'http://upload-images.jianshu.io/upload_images/1221010-178c6d7e96a2efe9.jpeg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'子酉 ',
        'time':'1天之前',
        'title':'声名狼藉（一）',
        'read_num':94,
        'comment':1,
        'like_num':3,
        'img_src':'http://upload-images.jianshu.io/upload_images/1937185-c3670d164bbc58f5.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'老猫枕咸鱼',
        'time':'2天之前',
        'title':'《清欢》下部 第23章 恶鬼',
        'read_num':74,
        'comment':21,
        'like_num':13,
        'img_src':'http://upload-images.jianshu.io/upload_images/2061523-26039c790c5cbe94.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'星小鬼 ',
        'time':'4天之前',
        'title':'接龙客栈【109】林米2',
        'read_num':59,
        'comment':14,
        'like_num':14,
        'img_src':'http://upload-images.jianshu.io/upload_images/2883711-b4c5f33f9e9d63fa.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'曹明新',
        'time':'2天之前',
        'title':'九月棉花开110花开九月天，成仙棉花埠大结局',
        'read_num':72,
        'comment':10,
        'like_num':12,
        'img_src':'http://upload-images.jianshu.io/upload_images/2622408-d31bfd898dc1876f.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
    },
    {
        'author_name':'小k飞耳',
        'time':'8天之前',
        'title':'【连载】有一种默契叫做第一眼就心有灵犀（十）',
        'read_num':90,
        'comment':3,
        'like_num':2
    }
];


export {findItem,RM,SSRW,XSJX};