module.exports = {
name: ["cekabsen"],
type: ["group"],
description: "cek absen",
utilisation: "#cekabsen",
async execute(m) {
let { conn } = data
let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `_*💮 ABSEN-FEATURES 💮*_\n\nERROR! Tidak ada Absen saat ini\n\nKetik *${userbot.prefix}mulaiabsen* untuk Memulai Absen`, userbot.packname, '🆙 • START-ABSEN', 'absenm', {quoted: m})
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
	let list = absen.map((v, i) => `► ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
${conn.absen[id][2]}
〔 DAFTAR-ABSEN 〕
${list}
● TOTAL-ABSEN: ${absen.length}
`.trim()
    await conn.sendButton(m.chat, caption, userbot.prefix, '🛑 • DELETE-ABSEN', 'absend', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(caption)}} )
 
}
}
