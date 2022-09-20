module.exports = {
name: ["absen"],
type: ["group"],
description: "absen",
utilisation: "#absen",
async execute(m) {
let { conn, text } = data
let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await m.reply(`_*💮 ABSEN-FEATURES 💮*_\n\nERROR! Tidak ada Absen saat ini\n\nKetik *${userbot.prefix}mulaiabsen* untuk Memulai Absen`)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) return m.reply('*[✅] Kamu Sudah Absen!*')
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    list = absen.map((v, i) => `► ${i + 1}. @${v.split`@`[0]}`).join('\n')
     caption = `
${conn.absen[id][2]}
〔 DAFTAR-ABSEN 〕
${list}
● TOTAL-ABSEN: ${absen.length}

@FarrellID
`.trim()
    await m.reply(caption)

}
}
