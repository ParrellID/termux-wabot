module.exports = { 
name: "antilinkinstagram", //By @arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) {
let { conn } = data
const botNumber = conn.user.jid
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const groupMembers = m.isGroup ? gMdata.participants : ''
const groupAdmins = m.isGroup ? getGroupAdmin(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(m.sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber)
let Sholawat = "https://instagram.com/";
let bismillah = "https://www.instagram.com/";

 if (m.text.includes(Sholawat) && m.text.includes(bismillah)) {
 if (m.sender === conn.user.jid) return
 if (m.sender === isAdmin) return
 if (isGroupAdmins) return
 if (!isBotGroupAdmins) return
m.reply(`❗ANTILINK-DETECTED❗\n\n👤 User: @${m.sender.split("@")[0]}\n🗒️ Desc: Send Links Instagrams\n🚧 Punishmen: Kick from Groups!`)
await conn.groupRemove(m.chat, [m.sender])
}
}
}

function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
} // Full Fix Cok Jangan Di Edit Lagi! By @arifirazzaq2001
