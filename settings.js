
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['962775158080'] //ur owner number
global.ownername = "Yahiko" //ur owner name
global.ytname = "YT: Yahiko" //ur yt chanel name
global.socialm = "GitHub: Yahiko" //ur github or insta name
global.location = "Africa, Egypt, Cairo" //ur location

//bot bomdy 
global.ownernomer = "+962775158080" //ur number
global.premium = ['962775158080'] //ur premium number
global.botname = '𝑹𝒐𝒏𝒊𝒏' //ur bot name
global.linkz = "" //your theme url which will be displayed on whatsapp
global.websitex = "" //ur website to be displayed
global.botscript = '' //script link
global.themeemoji = "☕" //ur theme emoji
global.packname = "⍣ياهيكو الامبراطور⍣" //ur sticker watermark packname
global.author = "⍣01098906252⍣" //ur sticker watermark author
global.wm = "Ronin" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'تم ✨',
    admin: '『 الامر ذا للرتب بس 』',
    botAdmin: '『 خلي البوت مشرف  』',
    premime: '『 همممممم  』',
    owner: '『 الميزه هاي للمطور بس! 』',
    group: '『 الميزه هاي للقروبات بس! 』',
    private: '『 الميزه هاي في الخاص بس! 』',
    bot: '『 الميزه هاي للبوت بس! 』',
    wait: '『 استنا ي معلم  』',
    linkm: '『 وين الرابط? 』',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
    nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
}


//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '✴️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '☕',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '🩵',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
