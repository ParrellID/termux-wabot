const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["bcgc"],
type: ["owner"],
owner: true,
description: "📢 • Broadcast ke Group dan ini Bersifat hanya digunakan oleh Owner",
utilisation: userbot.prefix + "bcgc <args>",
  async execute(m) {
 let { conn, text } = data

  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  
  let teks = text ? text : cc.text
  
  m.reply(`*MESSAGES-SEND*\n📨 | sedang mengirim Pesan ${chats.length}\n⏱️ | Estimasi Selesai *${chats.length * 1.5} detik*`)
  
 for ( let id of chats) {
   await delay(1500)
   await conn.send2ButtonLoc(id, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehmvfp6ihYGHY7tFh1JK_i0VaOjmvoaCkBA&usqp=CAU')).buffer(), `${teks}\n\n[ FID-BOTz ]`, userbot.packname, `📔 • ALL-MENU`, `menu`, `👑 • NUMBER-CREATOR`, `creator`, m)
    }
    m.reply('✅ | Succesfully Send Broadcast')
  }
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
