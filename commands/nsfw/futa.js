const f = require("node-fetch")
module.exports = {

name: ["futa"],

type: ["nsfw"],
useLimit: true,
description: "๐ โข Asupan Pekob",
utilisation: userbot.prefix + "futa",

async execute(m) {
 let { conn } = data

let r = await f('https://hardianto.xyz/api/anime/random?nsfw=futanari&apikey=hardianto')

m.reply('โ | Succesfully')
conn.sendButImg(m.chat, r, '๐นโข FarrellID-Developments','๐ค โข FID-BOTz','Ok','ok', m)

  }
}
