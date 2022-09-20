const tesseract = require("node-tesseract-ocr")

module.exports = {
 name: ['ocr'],
 type: ['default'],
 description: "📢 • Memindahkan Text dari Image ke dalam Bentuk Teks",
 utilsation: userbot.prefix + "ocr",
 
async execute(m) {
 let { text, conn } = data

let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || ""
  if (!mime) throw `[❗] Reply Video dengan Caption *${usedPrefix + command}*`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `[❗] Mime ${mime} tidak Didukung!`
  let img = await q.download();
  //let url = await uploadImage(img)
  tesseract
    .recognize(img, {})
    .then((text) => {
      //console.log("Result:", text)
      m.reply(text);
    })
    .catch((error) => {
      console.log(error.message);
      throw eror
    })
}
}
