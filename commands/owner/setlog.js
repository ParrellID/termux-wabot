const changelog = require('../../changelog.json')

module.exports = {
name: ["setlog"],
type: ["owner"],
owner: true,
description: "📝 • Setting ChangeLogs",
utilisation: userbot.prefix + "setlog",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('📋 | Masukkan Teks ChangeLogs yang Baru!')

changelog.changelog += "\n\n" + text + "\n"

m.reply('✅ | Succesfully Adding New ChangeLogs')
}
}
