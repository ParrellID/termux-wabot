const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["bc"],
type: ["owner"],
owner: true,
description: "š¢ ā¢ Broadcast ke User atau Pengguna dan ini Bersifat hanya digunakan oleh Owner",
utilisation: userbot.prefix + "bc <args>",
  async execute(m) {
 let { conn, text } = data

  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  
  let teks = text ? text : cc.text
  
  m.reply(`*MESSAGES-SEND*\nšØ | sedang mengirim Pesan ${chats.length}\nā±ļø | Estimasi Selesai *${chats.length * 1.5} detik*`)
  
 for ( let id of chats) {
   await delay(1500)
   await conn.send2ButtonLoc(id, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehmvfp6ihYGHY7tFh1JK_i0VaOjmvoaCkBA&usqp=CAU')).buffer(), `${teks}\n\n[ FID-BOTz ]`, userbot.packname, `š ā¢ ALL-MENU`, `menu`, `š ā¢ NUMBER-CREATOR`, `creator`, m)
    }
    m.reply('ā | Succesfully Send Broadcast')
  }
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
