const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["waifunsfw"],

type: ["nsfw"],
useLimit: true,
description: "🔞 • NSFW Waifu Pics",
utilisation: userbot.prefix + "waifunsfw",

async execute(m) {
let { conn, args } = data

let res = await fetch(`https://api.waifu.pics/nsfw/` + ["waifu", "neko", "trap", "blowjob"][Math.floor(Math.random() * ["waifu", "neko", "trap", "blowjob"].length)])
if (!res.ok) return m.reply('❗| Maaf, System terjadi Kesalahan')
let json = await res.json()

  m.reply('⏳| sedang di proses')
  conn.sendFile(m.chat, json.url, 'o.jpg', `💌 | Masturbate kok Sama Qartun Agwgwg`, null, m)
}
}
