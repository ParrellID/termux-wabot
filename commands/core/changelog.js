const package = require('../../package.json')
      fetch = require('node-fetch')
      changelog = require('../../changelog.json')

module.exports = {
name: ["changelog"],
type: ["default"],
description: "📄 • ChangeLogs BOTz",
utilisation: userbot.prefix + "changelog",

async execute(m) {
let { conn, text } = data

let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
let name = conn.getName(conn.user.jid)
let caption = `Changelog 
tanggal: ${date}
versi saat ini *${package.version}*

${changelog.changelog == '' ? 'Changelogs Not Found!' : '' || changelog.changelog }

`

conn.send3ButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuEathu2vH-ihguVxa6Qj4U70x6gcw0Nc8g&usqp=CAU')).buffer(),
caption, userbot.packname, '📑 • DASHBOARD', 'dashboard', '♻️ • STATUS-BOTz', 'stats', '💠 MENU-BOTz', 'menu', m)
}
}
