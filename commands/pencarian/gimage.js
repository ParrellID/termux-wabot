let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

module.exports = {
name: ["gimage"],
type: ["searching"],
useLimit: true,
description: "📸 • Google Image",
utilisation: userbot.prefix + "gimage teks",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('❓| Cari Apa?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❗| 404 Not Found'
  conn.sendFile(m.chat, url, 'gimage.jpg', `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)

}
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
