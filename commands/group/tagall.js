
module.exports = {
name: ["tagall"],
type: ["group"],
description: "š ā¢ TAG ALL",
utilisation: "#tagall",
async execute(m) {
let { conn, text } = data

if (!text) return m.reply('[ā] where text')
conn.fetchGroupMetadataFromWA(m.chat).then(({ participants }) => {
let a = "\n\n"
for (i of participants){
a += `-. @${i.jid.split("@")[0]}\n`
}
m.reply(`*š¹ TAGALL-FEATURES: š¹*\n\nš Info: ${text}\n\n${a}`)
})
}
}
