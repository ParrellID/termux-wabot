const fetch = require('node-fetch')

module.exports = {
 name: ['fflogo'],
 type: ['random'],
 description: "📸 • Membuat Logo Free Fire",
 utilsation: userbot.prefix + "fflogo",
 
async execute(m) {
 let { text, conn, args } = data

	response = args.join(' ')
	if (!args) throw '❗| Masukkan Parameter'
	m.reply('*[⏳] wait,tunggu bentar kak sedang dalam proses...*')
	conn.sendFile(m.chat, `https://api.zeks.xyz/api/epep?text=${response}&apikey=MIMINGANZ`, 'epep.jpg', `✅ | Succesfully`, m)
}
}
