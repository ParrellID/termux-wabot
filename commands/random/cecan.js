let scrap = require("../../Lib/scrape")

module.exports = {
name: ["cecan"],
type: ["random"],
description: "📸 • Random Image cecan",
utilisation: userbot.prefix + "cecan",

async execute(m){
let { conn } = data
 scrap.pinterest("cecan").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"✅ | Succesfully",m))
   }
}
