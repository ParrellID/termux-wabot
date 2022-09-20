const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker-formatter')
module.exports = {
    name: ["stc"],
type: ["create"],
description: "➕ • Create Sticker with Simple Module",
utilisation: "#stc (reply)",
async execute(m) {
        let { conn } = data
        let stiker = false
        let q = m.quoted ? m.quoted : m
          let img = await q.download()
          if (!img) return m.reply(`[🆙] Balas Stiker dengan Perintah ${userbot.prefix}stc`)
           stiker = await sticker(img, null, { name: userbot.packname, author: userbot.author, crop: true })
          if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
            quoted: m
          })
        }
      }
