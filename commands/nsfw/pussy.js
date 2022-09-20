const f = require("node-fetch")
module.exports = {

name: ["pussy"],

type: ["nsfw"],
useLimit: true,
description: "🔞 • Anime Genitals",
utilisation: userbot.prefix + "pussy",

async execute(m) {
 let { conn } = data
let r = await f('https://hardianto.xyz/api/anime/random?nsfw=pussy&apikey=hardianto')

conn.sendButImg(m.chat, r, '🌹• FarrellID-Developments', '🤖 • FID-BOTz', '➡️ • CONTINUED-PUSSY', '#pussy', m)

}
}
