
const { fbdl } = require('../../Lib/fbdl')

module.exports = {
name: ["fb"],
type: ["download"],
useLimit: true,
description: "⬇️ • Download Video from Facebook URL",
utilisation: userbot.prefix + "fb (url)",

async execute(m) {
let { conn, args } = data

try {
if (!args[0]) return m.reply('[❓] URLnya mana')
if (!args[0].includes("facebook")) return m.reply('[❗] URL is Wrong')
 const v = await fbdl(args[0])
 conn.sendFile(m.chat, v.hasil.link_high, 'fb.mp4', `\n*SUCCESFULLY-CLAIM*\n\n⬇️ *Post by:* ${v.hasil.author}\n📖 *Desk:* ${v.hasil.title}`, m)
} catch (e) {
console.log('[ERROR-LOG] Error Banh')
}
}
}
