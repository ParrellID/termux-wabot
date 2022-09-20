const { tiktokmusic } = require("../../Lib/scrape.js")
module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "⬇️ • Download Video from Tiktok with URL",
utilisation: userbot.prefix + "tiktok <url>",

async execute(m) {
let { args } = data
let url = m.quoted.text || args[0]
if (!url) return m.reply("[❓] please input url")
try {
let ttdata = await tiktokmusic(url)
let teks = `*Nickname :* ${ttdata.meta.author.nickname}\n*Desc :* ${ttdata.meta.desc}\n*Duration* : ${ttdata.meta.video.duration}\n\n_Pilih Type Dibawah Ini_  ${m.mention}`
conn.send2ButtonImg(m.chat, teks, await Ft.getBuffer(ttdata.meta.video.cover), userbot.packname, "🎧 • DOWNLOAD-MP3","tmusic "+url, "📼 • DOWNLOAD-MP4", "tnowm "+url, {contextInfo:{"mentionedJid": conn.parseMention(teks)}})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
//Uhahahah
}
