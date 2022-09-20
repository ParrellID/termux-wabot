module.exports = {
 name: ['attp'],
 type: ['sticker'],
 description: "🆙 • untuk membuat sticker teks bergerak",
 utilsation: userbot.prefix + "attp",
 
async execute(m) {
 let { text, conn } = data
 if (!text) return m.reply("❓| teks??")
 let media = await Ft.getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`)

conn.sendMessage(m.chat, media, 'stickerMessage', {quoted: m})
}
}
