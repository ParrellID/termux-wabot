module.exports = {
name: ["listgrup"],
type: ["default"],
description: "📔 • Show The Group The BOTz has Entered",
utilisation: userbot.prefix + "listgrup",

async execute(m) {
let { conn, text } = data

let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, '*🌹GROUP-LIST: 🌹*\n' + txt, m)
}
}
