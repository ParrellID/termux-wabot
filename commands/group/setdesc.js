const fetch = require('node-fetch')

module.exports = {
name: ["setdesc"],
type: ['group'],
description: "📝 • Setting Desc Group",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "setdesc",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply('[❓] where text to edits desc group')
await conn.groupUpdateDescription(m.chat, `${args[0]}`);
  m.reply('[✅] sukses mengganti deskripsi group')
}
}
