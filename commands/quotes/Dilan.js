const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["dilan"],

type: ["quotes"],
useLimit: true,
description: "📃 • Quotes Kata Kata Dilan",
utilisation: userbot.prefix + "dilan",

async execute(m) {
 let { conn, text } = data

let cuk = await kntl('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/dilan.json')
let dot = await cuk.json()
    let json = dot[Math.floor(Math.random() * dot.length)]

m.reply(json)
}
}
