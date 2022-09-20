module.exports = {
name: ["mulaiabsen"],
type: ["group"],
description: "absen",
utilisation: "#mulaiabsen",
async execute(m) {
let { conn, text } = data
conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `_*💮 ABSEN-FEATURES 💮*_\n\nERROR! Tidak ada Absen saat ini\n\nKetik *${userbot.prefix}mulaiabsen* untuk Memulai Absen!`, userbot.packname, '🆙 • START-ABSEN', 'absenm', {quoted: m})
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `[✅] Absen Succesfully Started!!!`, userbot.prefix, '📃 • CHECK-ABSEN', 'absenc', { quoted: m} ),
        [],
        text
    ]
}
}
