const speed = global.Ft['speed']
const os = global.Ft['os']
const fetch = require('node-fetch')

module.exports = {
name: ["stats", "runtime", "speed", "runtime"],
type: ['default'],
description: "👁️ • Melihat Kecepatan Respon BOTz",
utilisation: global.userbot.prefix+ "speed",

async execute(m) {
let { conn } = data
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
*› Mode :*${global.Public == true ? 'SELF/SENDIRI' : '' || global.Public == false ? 'PUBLIK' : ''}

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

`
conn.sendButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWisuGQ2p4DQFvXa1eWhUhfu9lcyRxHXa1OQ&usqp=CAU')).buffer(),  stats, userbot.packname, '📔 • ALL-MENU', 'menu', m)


}
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

