module.exports = {
name: ["save"],
type: ["create"],
description: "➕ • Membuat Contact",
utilisation: "#save @mention teks",
async execute(m) {
let { conn, text } = data
if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '[❓] Tag Nomor yang ingin di Save!'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
 }
}
