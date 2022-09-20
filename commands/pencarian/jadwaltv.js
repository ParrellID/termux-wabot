let fetch = require("node-fetch")

module.exports = {
name: ["jadwaltv"],
type: ["searching"],
useLimit: true,
description: "📰 • Jadwal TV",
utilisation: userbot.prefix + "jadwaltv [channel]",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply("📢 | Example:" + userbot.prefix + "jadwaltv rcti")

let res = await fetch(`https://api.zeks.me/api/jadwaltv?apikey=wuKyUYOZemCnEwu7d6olyc9uA3e&channel=${text}`)
let json = await res.json()

m.reply(`${json.result}`)
}
}

