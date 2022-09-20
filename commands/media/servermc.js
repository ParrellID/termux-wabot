
module.exports = {
name: ["servermc"],
type: ["information"],
description: "🆙 • server in minecraft",
utilisation: userbot.prefix + "servermc",

async execute(m) {
mc = await require("../../Lib/scrape.js").servermc()
txt = `LIST SERVER YANG TERSEDIA\n\n`
for (let i of mc) {
txt += `IP: ${i.ip}\n`
txt += `PORT: ${i.port}\n`
txt += `VERSI: ${i.versi}\n`
txt += `PLAYER: ${i.player}\n\n`
}
m.reply(txt.trim())
}
}