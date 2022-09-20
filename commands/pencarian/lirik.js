const fetch = require("node-fetch")
module.exports = {
name: ["lirik"],
type: ["searching"],
description: "❓• Mencari Lirik Lagu",
utilisation: userbot.prefix + "lirik teks",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('❓| Mana Judul Lagu?')
let res = await fetch(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${text}&apikey=Ikyy69`)

let json = await res.json()

m.reply(json.result)
}
}
