let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')


module.exports = {
name: ["jadibot"],
type: ["session"],
description: "🖥️ • Menjadi BOTz",
utilisation: "#jadibot or #jadibot <session>",
async execute(m) {
const { conn, command, args } = data
const usedPrefix = userbot.prefix
if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new global.conn.constructor()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR Code Above!', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.message = global.conn.message.bind(conn)
    conn.on('chat-update', conn.message)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({ user }) => {
      parent.reply(m.chat, '💮 QUICK-CONNECT 💮\n\nSuccesfully Connected with Your WhatsApp Number!\n*NOTE: Anda hanya Numpang!*\n' + JSON.stringify(user, null, 2), m)
      if (auth) return
      await parent.sendMessage(user.jid, `[📢] Anda bisa Login tanpa menggunakan QR Code, Gunakan CMD *${usedPrefix}getcode* untuk Mendapatkan Code yang Akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `[❗] Connection Rejected.`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else m.reply('📢 ANNOUNCEMENT 📢\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot')
}
}