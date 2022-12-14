const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["vocal"],
type: ["audio"],
useLimit: true,
description: "✂️ • Delete Singer's Voice to Vocal Audio",
utilisation: userbot.prefix + "vocal",

async execute(m) {
let { conn, args } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af pan="stereo|c0=c0|c1=-1*c1" -ac 1 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*ERROR!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`[❗] Reply / Balas VN dengan Caption *${userbot.prefix}cut*`)
    } catch (e) {
        throw e
    }
}
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
