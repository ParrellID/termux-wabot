let fetch = require('node-fetch')

module.exports = {
name: ["asupan"],
type: ["random"],
useLimit: true,
description: "📼 • Asupan Video",
utilisation: userbot.prefix + "asupan",

async execute(m) {
let { conn } = data

let res = await fetch('https://raw.githubusercontent.com/VideFrelan/words/main/ptl.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'asupan.mp4', '✅ | Succesfully', m ) 
}
}
