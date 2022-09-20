const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker')
const WSF = require('wa-sticker-formatter')

module.exports = {
name: ["sticker"],
type: ["create"],
description: "➕ • Create Sticker with WAF",
utilisation: "#sticker (reply)",
async execute(m) {
let { conn } = data

let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) return m.reply(`[🆙] Balas Sticker dengan Perintah ${userbot.prefix}s`)
      wsf = new WSF.Sticker(img, {
        pack: userbot.packname,
        author: userbot.author,
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) return m.reply(`[🆙] Balas Image dengan Perintah ${userbot.prefix}s`)
      wsf = new WSF.Sticker(img, {
        pack: userbot.packname,
        author: userbot.author,
        crop: false,
      })
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('[❗] Maksimal 10 detik!')
      let img = await q.download()
      if (!img) return m.reply(`[🆙] Balas Video dengan Perintah ${userbot.prefix}s`)
       wsf = new WSF.Sticker(img, {
        pack: userbot.packname,
        author: userbot.author,
        crop: true,
      })
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], userbot.packname, userbot.author)
      else return m.reply('[❗] URL tidak valid!')
    }
  } catch (e) {
    throw e
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
      if (sticBuffer) await conn.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
        quoted: m,
        mimetype: 'image/webp'
      })
    }
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
