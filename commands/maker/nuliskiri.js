const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["nuliskiri"],

type: ["maker"],
useLimit: true,
description: "🆙 • menulis dengan text",
utilisation: userbot.prefix + "nuliskiri teks",

async execute(m) {
 let { conn, text } = data
//if (text[1]) return m.reply('teksnya?')

let res = await fetch(`https://hardianto.xyz/api/nuliskiri?text=${text}&apikey=hardianto`)

conn.sendButImg(m.chat, res, 'DONE', 'FarrellID Development','OK','OK', m)
   }
}
