var navData = {
    list:[
        //最近使用
        {
            title: "最近使用",
            icon: "history",
            nav: []
        },
        //实用工具
        {
            title: "实用工具",
            icon: "cog",
            child: [
                //图文编辑
                {
                    
                    title:"图文编辑",
                    nav:[
                        {
                            title:"百度脑图",
                            desc:"百度出品免费在线制作思维导图",
                            url:"https://naotu.baidu.com/",
                            image:"naotu.png"
                        }, 
                        {
                            title:"百度图说",
                            desc:"可视化制作图表(不需要会编程)",
                            url:"https://tushuo.baidu.com/",
                            image:"tushuo.png"
                        }, 
                        {
                            title:"ZhiMap",
                            desc:"可多人同时编辑的免费在线思维导图",
                            url:"https://zhimap.com",
                            image:"zhimap.png"
                        }, 
                        {
                            title:"Diagrams",
                            desc:"【推荐】流程图免费制作",
                            url:"https://app.diagrams.net/",
                            image:"diagrams.png"
                        }, 
                        {
                            title:"石墨文档",
                            desc:"多人实时协办文档office",
                            url:"https://shimo.im",
                            image:"shimo.png"
                        },
                        {
                            title:"腾讯文档",
                            desc:"多人协办在线文档",
                            url:"https://docs.qq.com/",
                            image:"docsqq.png"
                        },
                        {
                            title:"Cmd Markdown",
                            desc:"在线Markdown写作",
                            url:"https://www.zybuluo.com/mdeditor",
                            image:"mdeditor.png"
                        },
                    ]
                },
                //在线设计
                {
                    title:"在线设计",
                    nav:[
                        {
                            title:"创客贴",
                            desc:"在线制图1",
                            url:"https://www.chuangkit.com/designtools/startdesign",
                        },
                        {
                            title:"稿定设计",
                            desc:"在线制图2",
                            url:"https://www.gaoding.com/",
                        },
                        {
                            title:"Wordart",
                            desc:"制作文字图案(不fq会很卡)",
                            url:"https://wordart.com/",
                            image:"wordart.png"
                        },
                        {
                            title:"Cool Background",
                            desc:"在线生成背景图或代码",
                            url:"https://coolbackgrounds.io/",
                            image:"coolbackground.png"
                        },
                        {
                            title:"Shapefactory",
                            desc:"在线设计LOGO、渐变图等",
                            url:"https://shapefactory.co/",
                        },
                        {
                            title:"Uigradients",
                            desc:"在线生成渐变色1",
                            url:"https://uigradients.com/",
                        },
                        {
                            title:"Webgradients",
                            desc:"在线生成渐变色2",
                            url:"https://webgradients.com/",
                        },
                        {
                            title:"Colorhunt",
                            desc:"在线配色1",
                            url:"https://colorhunt.co/",
                            image:"colorhunt.png"
                        },
                        {
                            title:"Colordrop",
                            desc:"在线配色2",
                            url:"https://colordrop.io/",
                            image:"colordrop.png"
                        },
                        {
                            title:"Photomosh",
                            desc:"在线生成故障艺术图",
                            url:"https://photomosh.com/",
                            image:"photomosh.png"
                        },
                        {
                            title:"Pixelmap",
                            desc:"在线可视化地图图表生成",
                            url:"https://pixelmap.amcharts.com/",
                            image:"pixelmap.png"
                        },
                        {
                            title:"FLAT SURFACE SHADER",
                            desc:"在线制作lowpoly背景",
                            url:"http://matthew.wagerfield.com/flat-surface-shader/",
                            image:"matthew.png"
                        },
                        {
                            title:"Blobmaker",
                            desc:"在线生成异形图",
                            url:"https://www.blobmaker.app/",
                            image:"blobmaker.png"
                        },
                        {
                            title:"Getwaves",
                            desc:"在线生成波形背景图",
                            url:"https://getwaves.io/",
                            image:"getwaves.png"
                        },
                        {
                            title:"Wangyasai",
                            desc:"放射性图片生成",
                            url:"https://wangyasai.github.io/Stars-Emmision/",
                            image:"wangyasai.png"
                        },
                        {
                            title:"Gif之家",
                            desc:"在线生成gif动态表情包",
                            url:"https://www.gifhome.com/",
                            image:"gifhome.png"
                        },
                        {
                            title:"我爱斗图",
                            desc:"表情包搜索|表情包制作",
                            url:"https://www.52doutu.cn/",
                            image:"52doutu.png"
                        },
                        {
                            title:"BrowserFrame",
                            desc:"在线截图网站全页面(多浏览器可选)",
                            url:"https://browserframe.com/",
                            image:"browserframe.png"
                        },
                        {
                            title:"Screenguru",
                            desc:"在线截图网站全页面(比上一个好看)",
                            url:"https://screen.guru/",
                            image:"screenguru.png"
                        },
                        {
                            title:"Svgbackgrounds",
                            desc:"在线生成SVG背景图",
                            url:"https://www.svgbackgrounds.com/",
                            image:"svgbackgrounds.png"
                        },
                        {
                            title:"Logoly",
                            desc:"在线制作pornhub风格LOGO",
                            url:"https://logoly.pro/",
                            image:"logoly.png"
                        },
                        {
                            title:"Loading.io",
                            desc:"在线设计loading动图",
                            url:"https://loading.io/",
                            image:"loading.png"
                        },
                        {
                            title:"remove.bg",
                            desc:"在线一键抠图",
                            url:"https://www.remove.bg/zh",
                            image:"removebg.png"
                        },
                    ]
                },
                //文件处理
                {
                    title:"文件处理",
                    nav: [
                        {
                            title:"TinyPng",
                            desc:"在线压缩png,jpg图片",
                            url:"https://tinypng.com/",
                            image:"tinypng.png"
                        }, 
                        {
                            title:"Squoosh",
                            desc:"谷歌大佬出品的在线图片压缩",
                            url:"https://squoosh.app/",
                            image:"squoosh.png"
                        }, 
                        {
                            title:"Convertio",
                            desc:"万能的文件格式转化",
                            url:"https://convertio.co/zh/",
                            image:"convertio.png"
                        },
                        {
                            title:"PDF.IO",
                            desc:"PDF在线转化",
                            url:"https://pdf.io/",
                            image:"pdfio.png"
                        },
                        {
                            title:"Smallpdf",
                            desc:"多功能PDF转化器",
                            url:"https://smallpdf.com/",
                            image:"smallpdf.png"
                        },
                        {
                            title:"Iloveimg",
                            desc:"在线批量编辑图片",
                            url:"https://www.iloveimg.com/zh-cn",
                            image:"iloveimg.png"
                        },
                        {
                            title:"蜜蜂剪辑",
                            desc:"在线视频剪辑|视频转GIF",
                            url:"https://beecut.cn/",
                            image:"beecut.png"
                        },
                    ]
                },
                //临时网盘
                {
                    title: "临时网盘",
                    nav:[
                        {
                            title:"牛奶快传",
                            desc:"即用即走的在线大文件传输服务",
                            url:"https://cowtransfer.com/",
                            image:"cowtransfer.png"
                        }, 
                        {
                            title:"文叔叔",
                            desc:"不限速分享大文件在线网盘",
                            url:"https://www.wenshushu.cn/",
                            image:"wenshushu.png"
                        }, 
                        {
                            title:"蓝奏云",
                            desc:"小文件分享不限速网盘",
                            url:"https://www.lanzou.com/",
                            image:"lanzou.png"
                        }, 
                    ]
                },
                //下载工具
                {
                    title:"下载工具",
                    nav: [
                        {
                            title:"唧唧",
                            desc:"下载b站视频|bilibili",
                            url:"https://www.jijidown.com/",
                        },
                        {
                            title:"海盗湾",
                            desc:"BT搜索资源站",
                            url:"http://thepiratebay.se.net/",
                        },
                        {
                            title:"超高无损音乐",
                            desc:"无损音乐免费下载",
                            url:"https://www.sq688.com/",
                            image: "sq688.png"
                        },
                        {
                            title:"QQ音乐解析",
                            desc:"无损音乐解析",
                            url:"http://www.douqq.com/qqmusic/",
                            image: "qqmusic.png"
                        },
                    ]
                },
                //其他工具
                {
                    title: "其他工具",
                    nav: [
                        {
                            title:"懒猴文字识别网页版",
                            desc:"在线ORC(修改localStorage可无限次识别)",
                            url:"https://h5cssjs.com/ocr",
                            image:"h5cssjs.png"
                        },
                        {
                            title:"云短信",
                            desc:"在线免费短信接收|验证码短信",
                            url:"https://www.materialtools.com/",
                        },
                        {
                            title:"隐私短信",
                            desc:"免费在线短信验证码接收码平台",
                            url:"https://www.yinsiduanxin.com/",
                            image:"yinsiduanxin.png"
                        },
                        {
                            title:"Nicetool",
                            desc:"在线小工具大全",
                            url:"http://www.nicetool.net/",
                            image:"nicetool.png"
                        },
                        {
                            title:"工资计算器",
                            desc:"在线计算税后工资",
                            url:"https://hizdm.cn",
                            image:"hizdm.png"
                        },
                    ]
                }
            ]
        },
        //休闲娱乐
        {
            title: "休闲娱乐",
            icon: "gamepad",
            child: [
                //有点意思
                {
                    title: "有点意思",
                    nav:[
                        {
                            title:"自由钢琴",
                            desc:"在线弹钢琴，内置很多简谱",
                            url:"https://www.autopiano.cn/",
                            image:"autopiano.png"
                        }, 
                        {
                            title:"在线开车",
                            desc:"一款精致的网页小游戏，低配电脑请勿打开",
                            url:"https://bruno-simon.com/",
                            image:"bruno-simon.png"
                        }, 
                        {
                            title:"Minecraft",
                            desc:"在线版我的世界",
                            url:"https://classic.minecraft.net/",
                            image:"minecraft.png"
                        }, 
                        {
                            title:"小霸王",
                            desc:"找回童年的快乐",
                            url:"https://www.yikm.net/",
                            image:"yikm.png"
                        }, 
                        {
                            title:"Windows93",
                            desc:"在线体验Windows93系统",
                            url:"http://www.windows93.net/",
                            image:"windows93.png"
                        },
                        {
                            title:"magickeyboard",
                            desc:"魔法键盘，让你输入的内容飞起来",
                            url:"http://magickeyboard.io/",
                            image:"magickeyboard.png"
                        }, 
                        {
                            title:"worlds-highest-website",
                            desc:"世界上最高的网站",
                            url:"https://worlds-highest-website.com/",
                        },
                        {
                            title:"100,000 Stars",
                            desc:"银河系十万颗星",
                            url:"http://stars.chromeexperiments.com/",
                        }, 
                        {
                            title:"Penint",
                            desc:"【慎点】画雕专家，随便一画就变成...",
                            url:"https://seoi.net/penint/",
                        }, 
                        {
                            title:"Zty.pe",
                            desc:"炫酷的在线打字游戏",
                            url:"https://zty.pe/",
                            image: "ztype.png"
                        }, 
                    ]
                },
                //影视平台
                {
                    title: "影视平台",
                    nav: [
                        {
                            title:"Bilibili",
                            desc:"在线学习平台",
                            url:"https://www.bilibili.com/",
                            image: "bilibili.png"
                        }, 
                        {
                            title:"爱奇艺",
                            desc:"在线视频网站",
                            url:"https://www.iqiyi.com/",
                            image: "iqiyi.png"
                        }, 
                        {
                            title:"虎牙直播",
                            desc:"弹幕式互动直播平台",
                            url:"https://www.huya.com/",
                            image: "huya.png"
                        }, 
                        {
                            title:"牛巴巴vip解析",
                            desc:"vip视频在线解析",
                            url:"http://mv.688ing.com/",
                        }, 
                        {
                            title:"爱爱客电影网",
                            desc:"在线免费看电影",
                            url:"http://www.aiaiaike.com/",
                        }, 
                        {
                            title:"在线之家",
                            desc:"免费在线观看电影|电视剧",
                            url:"https://www.zxzj.me/",
                        }, 
                        {
                            title:"JR看",
                            desc:"体育赛事在线直播|纬来体育|NBA",
                            url:"http://jrkan.com/",
                        }, 
                        {
                            title:"球吧网",
                            desc:"体育赛事在线直播|足球|NBA",
                            url:"https://www.ballbar.cc/",
                            image: "ballbar.png"
                        }, 
                    ]
                },
                //资讯平台
                {
                    title: "资讯平台",
                    nav: [
                        {
                            title:"鱼塘热榜",
                            desc:"在线摸鱼平台|整合全网资源内容",
                            url:"https://mo.fish/main/home/hot",
                            image:"mofish.png"
                        }, 
                        {
                            title:"虎扑",
                            desc:"综合论坛|NBA交流|篮球论坛",
                            url:"https://hupu.com",
                            image:"hupu.png"
                        }, 
                    ]
                },
            ]
        },
        //编程人生
        {
            title: "编程人生",
            icon: "book",
            child: [
                //学习平台
                {
                    title: "学习平台",
                    nav: [
                        {
                            title:"慕课网",
                            desc:"程序员的梦工厂",
                            url:"https://www.imooc.com/",
                            image: "imooc.png"
                        },
                        {
                            title:"极客学院",
                            desc:"IT在线教育平台",
                            url:"https://www.jikexueyuan.com/",
                        },
                        {
                            title:"Doyoudo",
                            desc:"设计类学习平台",
                            url:"https://www.doyoudo.com/",
                            image: "doyoudo.png"
                        },
                        {
                            title:"Oeasy",
                            desc:"完全免费的视频学习平台",
                            url:"http://oeasy.org/",
                            image: "oeasy.png"
                        },
                        {
                            title:"crash course中文版",
                            desc:"综合学习资源网站",
                            url:"https://crashcourse.club/category/",
                            image: "crashcourse.png"
                        },
                    ]
                },
                //交流社区
                {
                    title: "交流社区",
                    nav:[
                        {
                            title:"Github",
                            desc:"全球最大的同性交友网站",
                            url:"https://github.im/",
                            image: "github.png"
                        },
                        {
                            title:"掘金",
                            desc:"优质学习内容分享社区",
                            url:"https://juejin.im/",
                            image: "juejin.png"
                        },
                        {
                            title:"吾爱破解",
                            desc:"优质破解软件分享社区",
                            url:"https://www.52pojie.cn/",
                        },
                        {
                            title:"v2ex",
                            desc:"创意工作者的社区",
                            url:"https://www.v2ex.com/",
                            image: "v2ex.png"
                        },
                        {
                            title:"牛客网",
                            desc:"互联网求职学习平台",
                            url:"https://www.nowcoder.com/",
                            image: "niuke.png"
                        },
                        {
                            title:"LeetCode",
                            desc:"刷题学习平台",
                            url:"https://leetcode-cn.com/problemset/all/",
                            image: "leetcode.png"
                        },
                    ]
                },
                //开发工具
                {
                    title:"开发工具",
                    nav:[
                        {
                            title:"Carbon",
                            desc:"在线生成精美的代码片段图片",
                            url:"https://carbon.now.sh/",
                            image: "carbon.png"
                        },
                    ]
                }
            ]
        },
        //网络资源
        {
            title:"网络资源",
            icon: "cloud",
            child:[
                //软件资源
                {
                    title: "软件资源",
                    nav: [
                        {
                            title:"MSDN",
                            desc:"纯净操作系统下载资源",
                            url:"https://msdn.itellyou.cn/",
                        },
                        {
                            title:"ZD423",
                            desc:"非盈利性的软件下载博客|绿色软件|破解软件",
                            url:"https://www.zdfans.com/",
                        },
                        {
                            title:"小众软件",
                            desc:"小众却实用的软件|软件下载",
                            url:"https://love.appinn.com/",
                        },
                        {
                            title:"风刑软件站",
                            desc:"优秀软件分享下载平台",
                            url:"http://www.wsf1234.com/",
                        },
                        {
                            title:"睿派克论坛",
                            desc:"去广告软件|破解软件交流平台",
                            url:"https://www.repaik.com/",
                        },
                    ]
                },
                //多媒体素材
                {
                    title: "多媒体素材",
                    nav: [
                        {
                            title:"摩声",
                            desc:"在线搜索各平台音乐",
                            url:"https://moresound.tk/music/",
                        },
                        {
                            title:"Fugue",
                            desc:"免费背景音乐的素材库",
                            url:"https://icons8.com/music",
                            image: "fugue.png"
                        },
                        {
                            title:"新CG儿",
                            desc:"AE模板|视频素材免费瞎子啊",
                            url:"https://www.newcger.com/",
                            image: "newcger.png"
                        },
                        {
                            title:"爱给网",
                            desc:"音频|视频|AE模板|3D模型免费下载",
                            url:"http://www.aigei.com/",
                            image: "aigei.png"
                        },
                        {
                            title:"Mixkit",
                            desc:"高清视频素材免费下载",
                            url:"https://mixkit.co/",
                            image: "mixkit.png"
                        },
                    ]
                }
            ]
        },
        //设计资源
        {
            title: "设计资源",
            icon: "send",
            child: [
                //素材资源
                {
                    title: "素材资源",
                    nav:[
                        {
                            title:"Iconfont",
                            desc:"阿里巴巴矢量图标库",
                            url:"https://www.iconfont.cn",
                            image:"iconfont.png"
                        },
                        {
                            title:"觅元素",
                            desc:"免扣素材免费下载",
                            url:"http://www.51yuansu.com/",
                        },
                        {
                            title:"PngTree",
                            desc:"png素材下载，每天免费下载两次",
                            url:"https://pngtree.com/",
                        },
                        {
                            title:"Pixabay",
                            desc:"无版权图片免费下载",
                            url:"https://pixabay.com/illustrations/search/",
                        },
                        {
                            title:"IRA Design",
                            desc:"扁平化素材png/svg免费下载",
                            url:"https://iradesign.io/",
                            image:"ira-logo-lg.png"
                        },
                        {
                            title:"unDraw",
                            desc:"开源的扁平化矢量素材",
                            url:"https://undraw.co/illustrations",
                            image:"undraw.png"
                        },
                        {
                            title:"Drawkit",
                            desc:"扁平化插画矢量素材部分免费",
                            url:"https://www.drawkit.io/free",
                            image:"drawkit.png"
                        },
                        {
                            title:"humaaans",
                            desc:"DIY人物扁平化插画",
                            url:"https://www.humaaans.com/",
                            image:"humaaans.png"
                        },
                        {
                            title:"Manypixels",
                            desc:"扁平化的插画免费下载",
                            url:"https://www.manypixels.co/gallery/",
                            image:"manypixels.png"
                        },
                        {
                            title:"云端",
                            desc:"部分免费psd文件下载",
                            url:"https://www.yrucd.com/category/designresources",
                            image:"yrucd.png"
                        },
                        {
                            title:"Visual Hunt",
                            desc:"无版权图片素材免费下载",
                            url:"https://visualhunt.com/",
                        },
                        {
                            title:"Isorepublic",
                            desc:"无版权图片素材免费下载",
                            url:"https://isorepublic.com/",
                        },
                        {
                            title:"美图集",
                            desc:"精美图片免费下载",
                            url:"https://isorepublic.com/",
                        },
                        {
                            title:"Foodiesfeed",
                            desc:"高清美食图片免费下载",
                            url:"https://www.foodiesfeed.com/",
                            image:"foodiesfeed.png"
                        },
                        {
                            title:"故宫壁纸",
                            desc:"故宫壁纸免费下载",
                            url:"https://www.dpm.org.cn/lights/royal.html",
                            image:"dpm.png"
                        },
                        {
                            title:"Pxhere",
                            desc:"免费高清商业图片素材下载",
                            url:"https://pxhere.com/",
                            image:"pxhere.png"
                        },
                        {
                            title:"Gratisography",
                            desc:"免费高清商业图片素材下载",
                            url:"https://gratisography.com/",
                            image:"gratisography.png"
                        },
                        {
                            title:"Logosc",
                            desc:"免费高清商业图片素材下载",
                            url:"https://www.logosc.cn/so/",
                            image:"logosc.png"
                        },
                        {
                            title:"100font",
                            desc:"专门收集免费商用字体的网站",
                            url:"https://www.100font.com/",
                            image:"100font.png"
                        },
                        {
                            title:"fontspace",
                            desc:"免费字体，65000+款免费字体",
                            url:"https://www.fontspace.com/",
                            image:"fontspace.png"
                        },
                    ]
                },
                //UI 设计
                {
                    title:"UI 设计",
                    nav:[
                        {
                            title:"dribbble",
                            desc:"UI设计分享平台",
                            url:"https://dribbble.com/",
                            image:"dribbble.png"
                        },
                        {
                            title:"freebiesupply",
                            desc:"UI设计分享平台",
                            url:"https://freebiesupply.com/",
                            image:"freebiesupply.png"
                        },
                        {
                            title:"sketchchina",
                            desc:"sketch素材免费下载",
                            url:"http://sucai.sketchchina.com/",
                            image:"sketchchina.png"
                        },
                        {
                            title:"墨刀",
                            desc:"在线设计原型图",
                            url:"https://org.modao.cc/",
                            image:"modao.png"
                        },
                    ]
                },
                //Mockup
                {
                    title:"Mockup",
                    nav:[
                        {
                            title:"DimmyClub",
                            desc:"在线生成苹果安卓设备mockup",
                            url:"https://dimmy.club/",
                            image:"dimmy.png"
                        },
                        {
                            title:"Dunnnk",
                            desc:"在线生成带环境设备mockup",
                            url:"http://dunnnk.com/",
                            image:"dunnnk.png"
                        },
                        {
                            title:"Mockup.zone",
                            desc:"各行业mockup素材免费下载",
                            url:"https://mockup.zone/",
                        },
                        {
                            title:"graphberry",
                            desc:"mockup素材免费下载",
                            url:"https://www.graphberry.com",
                            image:"graphberry.png"
                        },
                        {
                            title:"Smartmockups",
                            desc:"惊艳的产品模型(有点卡)",
                            url:"https://smartmockups.com/",
                            image:"smartmockups.png"
                        },
                    ]
                },
            ]
        },
        //购物平台
        {
            title: "购物平台",
            icon: "shopping-cart",
            nav:[
                {
                    title:"什么值得买",
                    desc:"张大妈你值得拥有",
                    url:"https://www.smzdm.com/",
                    image:"smzdm.png"
                },
                {
                    title:"逛丢",
                    desc:"实时同步全网折扣",
                    url:"https://guangdiu.com/",
                    image:"guangdiu.png"
                },
                {
                    title:"京东商城",
                    desc:"支持东哥",
                    url:"https://jd.com",
                    image:"jd.png"
                },
                {
                    title:"淘宝",
                    desc:"不解释",
                    url:"https://taobao.com",
                    image:"taobao.png"
                },
                {
                    title:"京东联盟",
                    desc:"京东返利网站",
                    url:"https://union.jd.com/",
                    image:"jd.png"
                },
                {
                    title:"阿里妈妈",
                    desc:"淘宝返利网站",
                    url:"https://www.alimama.com/",
                    image:"alimama.png"
                },
            ]
        },
    ]
}