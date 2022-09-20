module.exports = {
  name: ["semoji"],
  type: ["maker"],
  description: "🆙 • make stickers from emoji",
  utilisation: userbot.prefix+"semoji",
  async execute(m){
    let { conn, args } = data;
    if(!args[0]) return m.reply("❗| Masukan Parameter Emoji")
    if(!args[1]) return m.reply(`
🗒️ *LIST YANG TERSEDIA* 🗒️
- apple
- google
- microsoft
- whatsapp
- twitter
- facebook
- jooxpixle
- openemoji
- emojindex
- messanger
- lg
- htc
- mozilla
- softbank
- docomo
- kddi
`)
    await scrap.emoji(args[0])
     .then(res => res[args[1]].toLowerCase())
       .then(url => require("../../Lib/converter").stickUrl(url))
          .then(({ path }) => conn.sendFile(m.chat,Ft.fs.readFileSync(path),"stickerMessage",m)).catch(console.error)
  }
}
