let scrap = require("../../Lib/scrape")

module.exports = {
name: ["aesthetic"],
type: ["random"],
description: "📸 • Random Image Aesthetic",
utilisation: userbot.prefix + "aesthetic",

async execute(m){
let { conn } = data
 scrap.pinterest("aesthetic").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"✅ | Succesfully",m))
   }
}
