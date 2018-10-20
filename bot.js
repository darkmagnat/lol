const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "&";
/////////////////////////
////////////////////////

const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "*"
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("Alpha")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
 
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content.startsWith(prefix + 'ايموجي')) { 
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./emoje/emoje.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **لم يقم أحد بكتابة الايموجي بالوقت المناسب**`);
                console.log(`[Game] ماحد قال الاجابه`);
                    })
            })
    }
    });

//==================== JSON

[
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/72/twitter/134/face-with-look-of-triumph_1f624.png",
        "answers": ["ًںک¤"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/baby_1f476.png",
        "answers": ["ًں‘¶"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/japanese-goblin_1f47a.png",
        "answers": ["ًں‘؛"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/see-no-evil-monkey_1f648.png",
        "answers": ["ًں™ˆ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/flag-for-yemen_1f1fe-1f1ea.png",
        "answers": ["ًں‡¾ًں‡ھ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/comet_2604.png",
        "answers": ["âک„ï¸ڈ"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/trident-emblem_1f531.png",
        "answers": ["ًں”±"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/fleur-de-lis_269c.png",
        "answers": ["âڑœï¸ڈ"]
    }
    
]

var RAW1 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var RAW2 = ["ًں“™__60%__  **|**  ًں“ک__40%__","ًں“™__63%__  **|**  ًں“ک__37%__","ًں“™__89%__  **|**  ًں“ک__11%__","ًں“™__97%__  **|**  ًں“ک__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="!";
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(RAW1[Math.floor(Math.random() * RAW2.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('ًں“ک').then( r => {
        msg.react('ًں“™')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === 'ًں“ک' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === 'ًں“™' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(RAW2[Math.floor(Math.random() * RAW2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

client.on("message", function(message) {
	var prefix = "!";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","ًں‡·",true)
    .addField("Paper","ًں‡µ",true)
    .addField("Scissors","ًں‡¸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ًں‡·')
        msg.react("ًں‡¸")
        msg.react("ًں‡µ")
.then(() => msg.react('ًں‡·'))
.then(() =>msg.react('ًں‡¸'))
.then(() => msg.react('ًں‡µ'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ًں‡·' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ًں‡¸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ًں‡µ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});
 
client.on('message', message => {
if(message.content === prefix + 'quran' || message.content === prefix + 'قرآن') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png')
	.setImage(pages[page-1])
	
// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {
		
		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))
			
			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
			
			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
			
			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
			
			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
			
			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
			
			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
			
			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; 
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});

 
const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('$pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});



client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثاني�� لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | Legend GaMerZ Bot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); 

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});

//============================ الجيسون

[
    {
        "type": "العراق",
        "answers": ["بغداد"]
    },
    {
        "type": "مصر",
        "answers": ["القاهرة"]
    },
    {
        "type": "سوريا",
        "answers": ["دمشق"]
    },
    {
        "type": "السعودية",
        "answers": ["الرياض"]
    },
    {
        "type": "اليمن",
        "answers": ["صنعاء"]
    },
    {
        "type": "السودان",
        "answers": ["الخرطوم"]
    },
    {
        "type": "الاردن",
        "answers": ["عمان"]
    },
    {
        "type": "ليبيا",
        "answers": ["طرابلس"]
    },
    {
        "type": "البحرين",
        "answers": ["المنامة"]
    }
]

client.on('message', message => {
    if (message.content == "!امثال") {
        var x = ["أذا ذل رويال فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
"أكرم نفسك عن كل",
"العز في نواصي",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        "دنيء",
        "الخيل",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

  const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
	  	var prefix = "*"
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("Legend GaMerZ .")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  
client.on('message', message => {
 if(message.content.startsWith(prefix + 'pat')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467186871290822657/pat-B1SOzCV0W.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466954354927337472/26d886c039e5f438d36c22964f1e79d0.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952080750280724/tenor.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951974726664192/1506871682_tumblr_o925gmua611uhpv9wo1_540.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951961439109130/pets.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951936873201664/tenor-1.gif",
        "https://media2.giphy.com/media/109ltuoSQT212w/giphy.gif",
        "https://media3.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
        "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://media2.giphy.com/media/aPOuFhSOoeoAo/giphy.gif",
        "https://media0.giphy.com/media/L2z7dnOduqEow/giphy.gif",
        "https://media0.giphy.com/media/X9MUeQelKifU4/giphy.gif",
        "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
        "https://media1.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
        "https://78.media.tumblr.com/6d55745d63a3829693ce68a71ddbd218/tumblr_ox5dckEwTQ1rupogao1_500.gif",
        "https://78.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been patted by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});

    client.on('message', message => {
var prefix = "#";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const emojiToCol = new Map();
emojiToCol.set('\u0031\u20E3',0);
emojiToCol.set('\u0032\u20E3',1);
emojiToCol.set('\u0033\u20E3',2); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0034\u20E3',3); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0035\u20E3',4); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0036\u20E3',5); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0037\u20E3',6); //NOURELDIEN ALPHACODES
let theMsgWeWorkWith;

const createDisplayGrid = (grid) => {
    let theCurrentGrid = grid.getGridForDisplay();
    let msgTxt = "";
    for(let row of theCurrentGrid){   
        msgTxt += row.join('')
        .replace(/0/g,':white_large_square: ')
        .replace(/Y/g,':red_circle: ')
        .replace(/R/g,':large_blue_circle: ');
        msgTxt+='\n'; //NOURELDIEN ALPHACODES
    }
    return msgTxt;
}
 //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
const createMessageAndCollector = (message) => {
    message.channel.send(createDisplayGrid(runningGames.get(message.author.id)))
    .then(function(msg){
        theMsgWeWorkWith = msg;
        msg.react('\u0031\u20E3').then(() => { //NOURELDIEN ALPHACODES
            msg.react('\u0032\u20E3').then(() => {
                msg.react('\u0033\u20E3').then(() => {
                    msg.react('\u0034\u20E3').then(() => {
                        msg.react('\u0035\u20E3').then(() => {
                            msg.react('\u0036\u20E3').then(() => {
                                msg.react('\u0037\u20E3');
                            })
                        })
                    })
                })
            }) //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
        });
        let filter = function(reaction, user){
            return user.id != bot.user.id && user.id == message.author.id;
        };
        let collector = msg.createReactionCollector(filter, { time: 60000 });
        collector.on('collect', function(reaction){
            console.log(theMsgWeWorkWith);
            if(emojiToCol.has(reaction.emoji.name)){
                let g = runningGames.get(message.author.id);
                g.play('R', emojiToCol.get(reaction.emoji.name));
                g.IA_cleanSmartPlay('Y');
                if(g.isWon()||g.isDraw()){
                    theMsgWeWorkWith.delete()
                    .then(()=>{
                        collector.stop();
                        message.channel.send(createDisplayGrid(g));
                        if(g.isDraw())
                            message.channel.send(`Match nul`);
                        if(g.isWon())
                            message.channel.send(`:tada: | **Congratulations ${((g._winner == 'Y')?':red_circle:':':large_blue_circle:')} won the game !`);
                        runningGames.delete(message.author.id);
                    })
                    .catch(console.log("Cannot delete"));
                }
                else{
                    theMsgWeWorkWith.delete()
                    .then(()=>{ //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
                        collector.stop();
                        createMessageAndCollector(message);
                    })
                    .catch(console.log("Cannot delete"));
                }
                console.log(g);
            }
        });
        collector.on('end', function(collected, reason){
      
        });
    });
}; //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES

// Initialize Discord Bot
const bot = new Discord.Client();

/* Bot stuff, creating ready event*/
bot.on('ready', (evt) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
});

bot.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `prefix`
    let prefix = "=";
    if(message.author.id == bot.user.id)
        return;
    if (message.content.substring(0, 1) == prefix) {   
        let args = message.content.substring(prefix.length).split(' ');
        let cmd = args[0];
        args = args.splice(1);
        switch(cmd) { //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
            case 'c4':
                message.channel.send(`:fire: **${message.author}** VS **NourBot** :fire:`)
                playTheGame(message);
                createMessageAndCollector(message);
                ///////////////////////////////////////////
               /* 
                theMsgWeWorkWith = message.channel.send('Play')
                .then(function(msg){
                    msg.react('\u0031\u20E3').then(() => {
                        msg.react('\u0032\u20E3').then(() => {
                            msg.react('\u0033\u20E3').then(() => {
                                msg.react('\u0034\u20E3').then(() => {
                                    msg.react('\u0035\u20E3').then(() => {
                                        msg.react('\u0036\u20E3').then(() => {
                                            msg.react('\u0037\u20E3');
                                        })
                                    })
                                })
                            })
                        })
                    });
                    var filter = function(reaction, user){
                        return user.id != bot.user.id;
                    };
                    const collector = msg.createReactionCollector(filter, { time: 60000 });
                    collector.on('collect', function(reaction){
                        if(emojiToCol.has(reaction.emoji.name)){
                            let g = runningGames.get(message.author.id);
                            g.play('R', emojiToCol.get(reaction.emoji.name));
                            g.IA_cleanSmartPlay('Y');
                            if(g.isWon())
                                message.channel.send("PArtie terminée");
                            console.log(g);
                        }
                    });
                    collector.on('end', function(collected, reason){
                  
                    });
                });*/
                ////////////////////////////////////////
            break; //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
            case 'c4play':
                console.log(runningGames.get(message.author.id));
            break;
         }
     }
}); //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES

client.on("message", message => {
    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Sea World`,"http://twitch.tv/S-F")
client.user.setStatus("online")

}); 
	    
client.login(process.env.BOT_TOKEN);
