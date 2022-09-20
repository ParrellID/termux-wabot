const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["rgb"],
type: ["audio"],
useLimit: true,
description: "🔄 • Convert Video  Normal to rgb",
utilisation: userbot.prefix + "rgb reply",

async execute(m) {
let { conn, args } = data
try {
        let mime = m.quoted.mtype
        if (/videoMessags/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(await m.quoted.download())
            let ran = getRandom('.jpg')
            exec(`ffmpeg -i ${media} -vf extractplanes=r -c:v libx264rgb -pix_fmt rgb24 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*ERROR!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m)
                fs.unlinkSync(ran)
            })
        } else m.reply(`[❗] Reply / Balas Video dengan Caption *${userbot.prefix}rgb*`)
    } catch (e) {
        m.reply(e)
    }
}
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
