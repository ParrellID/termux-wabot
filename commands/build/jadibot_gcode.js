module.exports = {
name: ["getcode"],
type: ["session"],
description: "🆙 • Get Code",
utilisation: "#getcode",
async execute(m) {
let { conn } = data
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '[❗] CMD ini hanya untuk yang ingin Menjadi BOTz Sementara!', m)
  else global.conn.reply(conn.user.jid, `${userbot.prefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
}
