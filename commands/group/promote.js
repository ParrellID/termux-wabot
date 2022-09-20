module.exports = {
name: ["promote"],
type: ['setting'],
description: "[🆙] Memberi Jabatan Admin ke Member (hanya boleh dilakukan ketika anda menjadi admin)",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "promote",

async execute(conn, m) {
if (m.quoted && m.quoted.sender) {
per = await conn.groupMakeAdmin(m.chat, [m.quoted.sender])
teks = `[✅] Users @${m.quoted.sender.split('@')[0]} Succes Promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[m.quoted.sender]}})
return per
} else {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('[❗] Tag atau m.reply Target yang ingin dijadikan Admin!')
ment = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
per = await conn.groupMakeAdmin(m.chat, [ment])
teks = `[✅] Users @${ment.split('@')[0]} Succes Promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[ment]}})
return per
}
}
}