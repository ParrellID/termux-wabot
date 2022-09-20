
module.exports = {
name: ["tagall"],
type: ["group"],
description: "🆙 • TAG ALL",
utilisation: "#tagall",
async execute(m) {
let { conn, text } = data

if (!text) return m.reply('[❓] where text')
conn.fetchGroupMetadataFromWA(m.chat).then(({ participants }) => {
let a = "\n\n"
for (i of participants){
a += `-. @${i.jid.split("@")[0]}\n`
}
m.reply(`*🌹 TAGALL-FEATURES: 🌹*\n\n📋 Info: ${text}\n\n${a}`)
})
}
}
