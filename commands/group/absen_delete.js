module.exports = {
name: ["dabsen"],
type: ["group"],
description: "delete absen",
utilisation: "#dabsen",
async execute(m) {
let { conn, text } = data

let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await m.reply(`_*💮 ABSEN-FEATURES 💮*_\n\nERROR! Tidak ada Absen saat ini\n\nKetik *${userbot.prefix}mulaiabsen* untuk Memulai Absen`)
        throw false
    }
    delete conn.absen[id]
    m.reply(`[🛑] Absen Succesfully Deleted`)
}
}
