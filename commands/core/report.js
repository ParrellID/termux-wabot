module.exports = {
name: ["report"],
type: ["default"],
useLimit: true,
description: "📢 • Report Featured of Other to Owner",
utilisation: userbot.prefix + "report (text)",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply(`[📢] jika Anda menemukan ERROR, BUG dsb,\nGunakan *${userbot.prefix}report selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>*`)
    if (text.length < 10) return m.reply(`[❗] Laporan Terlalu Pendek, Minimal 10 Karakter!`)
    if (text.length > 1000) return m.reply(`[❗] Laporan Terlalu Panjang, Maksimal 1000 Karakter!`)
    let teks = `*${command.toUpperCase()}!*\n\ndari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(userbot.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_✅ SUCCESFULLY-SEND ✅_\nPesan Berhasil Terkirim Kepemilik BOTz, jika ${command.toLowerCase()} hanya Main-main Tidak Akan Ditanggapi._`)
}
}
