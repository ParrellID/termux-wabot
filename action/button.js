const { MessageType }= require('@adiwajshing/baileys'),
      { contactsArray } = MessageType,
      fs = Ft.fs,
      { servers, yta, ytv } = require("../Lib/y2mate.js"),
      fetch = require('node-fetch'),
      tags = {},
      speed = global.Ft['speed'],
      os = global.Ft['os'],
      { tiktok } = require("../../Lib/scrape.js"),
      { tiktokmusic } = require("../../Lib/scrape")
      package = require('../../package.json')
      changelog = require('../../changelog.json')

module.exports = {
async execute(m, {button, args, text }) {
let { conn } = data

try {
switch (button.split(" ")[0].toLowerCase()) {
   case "cekprefix":
m.reply("Prefix FIDBOTz saat ini: " + userbot.prefix )
   break;

   case "changelog":
let kanjut = new Date
    let tanggal = kanjut.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
let nume = conn.getName(conn.user.jid)
let caption = `Changelog ${nume}
tanggal: ${tanggal}
versi saat ini *${package.version}*
${changelog.changelog == '' ? '[❗] ChangeLogs Not Found!' : '' || changelog.changelog }
`
conn.send3ButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuEathu2vH-ihguVxa6Qj4U70x6gcw0Nc8g&usqp=CAU')).buffer(),
caption, userbot.packname, '📑 • DASHBOARD', 'dashboard', '♻️ • STATUS BOTz', 'stats', '💠 • MENU', 'menu', m)

   break;

   case "stats":
m.quoted.delete();
   let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
let privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
let ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await conn.chats.all()
latensi = speed() - timestamp
let total = Math.floor(`${groups.length}*${privat.length}`)
stats = `
*_🌹 DEVELOPER-BOTz 🌹_*
*› Nama: Farrell Athar Ramadhan*
*› Umur: 15thn*
*› Kelas: IX*
*› More? Open Web Bellow*
*-. farrellatharr.netlify.app*
*-. farrellid.netlify.app*

*_🌺 STATUS-BOTz 🌺_*
*› Group Chats :* ${groups.length}
*› Private Chats :* ${privat.length}
*› Total Chats :* ${totalChat.length}
*› Speed :* ${latensi.toFixed(4)} ms
*› Runtime :* ${count(uptime)}

*_📱 PHONE-STATUS 📱_*
*› Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Ｃｈａｒｇｉｎｇ' : '⚡ Discharging' }` : '_♻️ Mengambil Data_'}
*› Penggunaan RAM :* ${ram2}
*› Platform :* ${os.platform()}
*› Hostname :* ${os.hostname()}
*› Uptime :* ${count(os.uptime())}
*› Wa Version:* ${conn.user.phone.wa_version}
*› Os Version:* ${conn.user.phone.os_version}
*› Device Model:* ${conn.user.phone.device_model}
`
conn.sendButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWisuGQ2p4DQFvXa1eWhUhfu9lcyRxHXa1OQ&usqp=CAU')).buffer(),  stats, userbot.packname, 'Menu', 'menu', m)
   break;

   case "dashboard":
   let ndak = `[🌸] Total Commands ${Object.keys(Events).length}\n\n`
for (i in db.data) {
ndak += `-${i}: ${db.data[i]}\n`
}
m.reply(ndak.trim())
   break;

   case "absenm":
   conn.absen = conn.absen ? conn.absen : {}
    id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `💮 *ABSEN-FEATURES* 💮\n\n[❓] Ketik: *${usedPrefix}hapusabsen* untuk Menghapus Absen`.trim(), userbot.packname, '🛑 • DELETE-ABSEN', `absend`, conn.absen[id][0])
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, '💮 *ABSEN-STARTED* 💮', userbot.prefix, '📄 • CHECK-ABSEN', 'absenc', { quoted: m } ),
        [],
        text
    ]
   break;

   case "absen":
    id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `💮 *ABSEN-ERROR* 💮\nERROR! Absen Not Found`, userbot.packname, '📢 • START-ABSEN', 'absenm', {quoted: m})
        throw false
    }

    absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) return m.reply('*[❗] Anda sudah Absen!*')
    absen.push(m.sender)
     
    list = absen.map((v, i) => `► ${i + 1}. @${v.split`@`[0]}`).join('\n')
     caption = `
${conn.absen[id][2]}
〔 DAFTAR-ABSEN 〕
${list}
● TOTAL-ABSEN: ${absen.length}
`.trim()
    await conn.sendButton(m.chat, caption, userbot.prefix, '📄 CHECK-ABSEN', 'absenc', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(caption)}} )
   break;

   case "absend":
   id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `💮 *ABSEN-ERROR* 💮\nERROR! Absen Not Found`, userbot.packname, '📢 START-ABSEN', 'absenm', {quoted: m})
        throw false
    }
    delete conn.absen[id]
    m.reply(`[🛑] Absen Succesfully Deleted!    ~FarrellID`)
   break;

   case "absenc":
    id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `💮 *ABSEN-ERROR* 💮\nERROR! Absen Not Found`, userbot.packname, '📢 START-ABSEN', 'absenm', {quoted: m})
        throw false
    }

    absen = conn.absen[id][1]
   list = absen.map((v, i) => `► ${i + 1}. @${v.split`@`[0]}`).join('\n')
     caption = `
${conn.absen[id][2]}
〔 DAFTAR-ABSEN 〕
${list}
● TOTAL-ABSEN: ${absen.length}
`.trim()
    await conn.send2Button(m.chat, caption, userbot.packname, '🛑 • DELETE-ABSEN', 'absend', '📝 • LOGIN-ABSEN', 'absen', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(caption)}} )
   break;

   case "twm":
   m.reply('[⏳] sedang memproses...')
   download = await tiktok(button.split(" ")[1])
   conn.sendMessage(m.chat, await (await Ft.fetch(download.result.wm)).buffer(),"videoMessage",{quoted:m})
   break;
   case "tnowm":
   m.reply('[⏳] sedang memproses...')
   download = await tiktok(button.split(" ")[1])
   conn.sendMessage(m.chat, await (await Ft.fetch(download.result.nowm)).buffer(),"videoMessage",{quoted:m})
   break;
   case "tmusic":
   m.reply('[⏳] sedang memproses...')
   let p = await tiktokmusic(button.split(" ")[1])
   conn.sendFile(m.chat, p.meta.music.playUrl, null, null, m)
   break;

   case "thd":
   m.reply('[⏳] sedang memproses...')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.HD, null, json.result.desc, m)
   break;
   case "tsd":
   m.reply('[⏳] sedang memproses...')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.SD, null, json.result.desc, m)
   break;
   case "taudio":
   m.reply('[⏳] sedang memproses...')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.audio, 'o.mp3', null, m)
   break;

   case "menu":
const me = conn.user.name
uptime = process.uptime();
timestamp = speed();
const name = conn.getName(m.sender)

let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

const rawwr = Object.keys(global.Events)
const menu = {

before: `
*_🌹 DEVELOPER-BOTz 🌹_*
*› Nama: Farrell Athar Ramadhan*
*› Umur: 15thn*
*› Kelas: IX*
*› GitHub: github.com/ParrellID
*› More? Open Web Bellow*
*-. farrellatharr.netlify.app*
*-. farrellid.netlify.app*

*_🌺 STATUS-BOTz 🌺_*
*› Group Chats :* ${groups.length}
*› Private Chats :* ${privat.length}
*› Total Chats :* ${totalChat.length}
*› Speed :* ${latensi.toFixed(4)} ms
*› Runtime :* ${count(uptime)}
*› Total Fitur:* *${Object.keys(Events).length}* Fitur

*_📱 PHONE-STATUS 📱_*
*› Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Ｃｈａｒｇｉｎｇ' : '⚡ Discharging' }` : '_♻️ Mengambil Data_'}
*› Penggunaan RAM :* ${ram2}
*› Platform :* ${os.platform()}
*› Hostname :* ${os.hostname()}
*› Uptime :* ${count(os.uptime())}
*› Wa Version:* ${conn.user.phone.wa_version}
*› Os Version:* ${conn.user.phone.os_version}
*› Device Model:* ${conn.user.phone.device_model}


*_⏱️ CLOCK & DATE ⏱️_*
*› Jam:* ${time}
*› Kalender Islam:* ${dateIslamic}
*› Kalender Java:* ${week} ${weton} ${date}
`.trimStart(),
type: "*.type*\n",
after: "\n"
}

let raw = Object.values(global.Events).map(v => {
return {
help: Array.isArray(v.type) ? v.name : [v.name],
type: Array.isArray(v.type) ? v.type : [v.type],
}
})
for (let p of raw)
if (p && 'type' in p)
for (let i of p.type)
if (!(i in tags) && i) tags[i] = i
let before = menu.before
let type = menu.type
let after = menu.after
let l = 1
text = [
before,
...Object.keys(tags).map(v => {
return type.replace(/#type/g, tags[v]).toUpperCase() + ("\n") + [
...raw.filter(menu => menu.type && menu.type.includes(v) && menu.help).map(menu => {
return `${l++}. ` + userbot.prefix + menu.help
})].join("\n")
}),
after
].join("\n\n")

conn.send3ButtonLoc(m.chat, await (await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF6fyFoGCHmsmOXWjFxIXh-467D1nRhA4mQ&usqp=CAU')).buffer(), text, userbot.packname, `📑 • DASHBOARD`, `dashboard`, `📋 • S&K`, `rules`, `📃 • CHANGELOGS-BOTz`, `changelog`, m)
break;

   case "rules":
capt = `
*_📋 SYARAT & KETENTUAN 📋_*
1. Use Appropriately
2. Dont Use this BOTz Like Idiots
3. Respect Everyone, Especially Parents
4. Value Someones Opinion
5. Use Polite Words & Sentences
6. Stay Patient and Enjoy the Process

› Have Questions? Use CMD below
${userbot.prefix}report <apa yg di laporkan>
`
conn.sendButton(m.chat, capt, userbot.packname, '📔 • LIST-MENU', 'menu', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(capt)}} )
break;

   case "audio":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`[🖥️] Server ${server} ERROR! ${servers.length >= i + 1 ? '' : '\n🔄 • Trying to Find Another Server...'}`)
    }
  }
if (yt === false) throw '[🛑] Failed to Enter All Available Servers'
conn.sendFile(m.chat,yt.dl_link,"m.mp3",null,m)
} catch (e) {
throw e
}
break;

   case "video":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await ytv(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`[🖥️] Server ${server} ERROR! ${servers.length >= i + 1 ? '' : '\n🔄 • Trying to Find Another Server...'}`)
    }
  }
if (yt === false) throw '[🛑] Failed to Enter All Available Servers'
conn.sendFile(m.chat,yt.dl_link,"m.mp4",null,m)
} catch (e) {
throw e
}
break;

   case "creator":
conarray = []
ownerContact = ['6285746181151','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'Farrell Athar Ramadhan',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Founder & Developer;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, '📢 • this is The Makers Number of this BOTz, Please Respect',MessageType.text, { quoted: m} )
console.log(a)
break;
default:
throw new Error(`[❗] Command ${button} tidak Tersedia`) //biar tau soalny kesusahan di buat button audio asw
}
} catch (e) {
console.log(e)
}
}
}

function random(ext) {
return ext[Math.floor(Math.random () * ext.length)]
}

function count(seconds){

if (typeof seconds !== "number") throw "connError: Unexpected Param " + typeof seconds

let hours = Math.floor(seconds / (60*60));
let minutes = Math.floor(seconds % (60*60) / 60);
let second = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(second)} Detik`
}
function pad(s) {
return (s < 10 ? '0' : '') + s;
}
