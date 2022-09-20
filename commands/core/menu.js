const fetch = require('node-fetch')
      speed = global.Ft['speed']
      os = global.Ft['os']
      fs = Ft.fs,
      moment = require('moment-timezone')

module.exports = {
name: ["menu"],
type: ["default"],
useLimit: true,
description: "📔 • List Menu Button",
utilisation: userbot.prefix + "menu",

async execute(m) {
let { conn, text } = data

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
    let name = conn.getName(m.sender)
    let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
    let privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
    let ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    uptime = process.uptime();
    timestamp = speed();
    totalChat = await conn.chats.all()
    latensi = speed() - timestamp
    let total = Math.floor(`${groups.length}*${privat.length}`)

    let me = conn.user.name
let capt = `
Hello ${name} ${ucapan()}

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

*_❓Have Questions? ❓_*
*› ${userbot.prefix}report text*`

m.reply('[⏳] Wait for a Moment...')
conn.send2ButtonLoc( m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7EnNkFf8-jer8k6eT_gd9butzTdl-s91uPaEhL-ggw3-h8T90x-h8Z66&s=10')).buffer(), capt, userbot.packname, `📔 MENU-BOTz`, `menu`, `📋 S&K`, `rules`, m)

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

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Morning 🌠"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time > 10) {
    res = "Good Afternoon 🏞️"
  }
  if (time >= 15) {
    res = "Good Afternoon 🏜️"
  }
  if (time >= 18) {
    res = "Good Evening 🌌"
  }
  return res
}
