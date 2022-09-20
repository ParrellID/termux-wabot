const fs = Ft.fs
let fetch = require('node-fetch')
const { servers, ytv } = require('../../Lib/y2mate')
let limit = 30

module.exports = {
name: ["ytmp4"],
type: ["download"],
description: "⬇️ • Download Video from Youtube URL",
utilisation: userbot.prefix + "ytmp4 <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply("[❓] url nya om?")
if (!args[0].includes("youtu")) return m.reply("[❓] url nya salah om")

let server = (args[1] || servers[0]).toLowerCase()


    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (limit) * 1024 < filesize
    m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'Compressing Data' )

conn.sendButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*ＹＴＭＰ4 Ｄｏｗｎｌｏａｄ*
*title:* ${title}
*Size:* ${filesizeF}
`, userbot.packname, '📔 • ALL-MENU', 'menu', m)

if (!isLimit) conn.sendFile(m.chat, dl_link, title + ".mp4", null, m)

}
}
