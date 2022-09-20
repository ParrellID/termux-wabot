module.exports = {
name: ["stop"],
type: ["session"],
description: "🛑 • Stop Jadi Bot",
utilisation: "#stop",
async execute(m) {
let { conn, text } = data
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '[❓] Kamu tidak ingin Melanjutkan Jadi BOTz?', m)
  else {
    await conn.reply(m.chat, 'Goodbye BOTz :\')', m)
    conn.close()
  }
}
}
