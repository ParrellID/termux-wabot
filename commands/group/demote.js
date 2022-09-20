module.exports = {
name: ["demote"],
type: ['setting'],
admin: true,
botAdmin: true,
description: "🆙 • Memberi Jabatan Warga ke Admin Groups (hanya boleh dilakukan ketika anda menjadi admin)",
utilisation: global.userbot.prefix+ "demote tag/reply",

async execute(conn, m) {
if (m.quoted && m.quoted.sender) {
per = await conn.groupMakeAdmin(m.chat, [m.quoted.sender])
teks = `[✅] Users @${m.quoted.sender.split('@')[0]} Succes di Demote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[m.quoted.sender]}})
} else {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('[❗] TAG atau m.reply Target yang ingin di Jadikan Admin!')
ment = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
per = await conn.groupMakeAdmin(m.chat, [ment])
teks = `[✅] Users @${ment.split('@')[0]} Succes Demote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[ment]}})
}
}
}
