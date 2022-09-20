const f = require("node-fetch")
module.exports = {

name: ["futa"],

type: ["nsfw"],
useLimit: true,
description: "🔞 • Asupan Pekob",
utilisation: userbot.prefix + "futa",

async execute(m) {
 let { conn } = data

let r = await f('https://hardianto.xyz/api/anime/random?nsfw=futanari&apikey=hardianto')

m.reply('✅ | Succesfully')
conn.sendButImg(m.chat, r, '🌹• FarrellID-Developments','🤖 • FID-BOTz','Ok','ok', m)

  }
}
