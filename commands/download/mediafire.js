const fs = Ft.fs
const Mf = require("../../Lib/mediafire").mediafireDl

module.exports = {
name: ["mediafire"],
type: ["download"],
description: "⬇️ • Download File from Mediafire with URL",
utilisation: userbot.prefix + "mediafire <link>",

async execute(m) {
let { conn, text } = data
const isUrl = (url) =>  url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
try {
if (!text) return m.reply("url ?")
if(!isUrl(text) && !text.includes('mediafire')) return m.reply("[❗] Anda memasukkan URL yang Salah!")
m.reply("⏳ | await")
teks = text
res = await Mf(teks)
result = `
*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

`
m.reply(Ft.util.format(result))
conn.sendFile(m.chat, res[0].link, res[0].nama, null, m)
} catch (e) {
console.log(e)
}
}
}
