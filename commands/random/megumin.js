let scrap = require("../../Lib/scrape")

module.exports = {
name: ["megumin"],
type: ["random"],
description: "📸 • Random Image Megumin",
utilisation: userbot.prefix + "megumin",

async execute(m){
let { conn } = data
 scrap.pinterest("megumin").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"✅ | Succesfully",m))
   }
}
