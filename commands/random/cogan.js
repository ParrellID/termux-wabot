let scrap = require("../../Lib/scrape")

module.exports = {
name: ["cogan"],
type: ["random"],
description: "📸 • Random Image Cowo Ganteng",
utilisation: userbot.prefix + "cogan",

async execute(m){
let { conn } = data
 scrap.pinterest("cogan").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"✅ | Succesfully",m))
   }
}
