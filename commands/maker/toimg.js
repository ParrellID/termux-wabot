let { webp2png } = require('../../Lib/webp2mp4')

module.exports = {

name: ["toimg"],

type: ["maker"],
useLimit: true,
description: "🆙 • sticker to image",
utilisation: userbot.prefix + "toimg (reply)",

async execute(m) {
 let { conn } = data

if (!m.quoted) throw `❗| Balas Stiker dengan Perintah *${userbot.prefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `❗| Balas Stiker dengan Perintah *${userbot.prefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', 'FarrellID Development', m, false, { thumbnail: out })
}
}
