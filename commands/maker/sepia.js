module.exports = {
  name: ["sepia"],
  type: ["image"],
  description: "🆙 • make sepia images",
  utilisation: userbot.prefix+"sepia",
  
  async execute(m){
    var input = "a.png"
    var output = "b.png"
    Ft.fs.writeFileSync(input,await m.quoted.download())
    var jInpt = Ft.Jimp.read(input)

Promise.all([jInpt]).then(function(images){
  const a = images[0];
  a
  .sepia()
  .quality(60)
  .background(0)
  .resize(256, Ft.Jimp.AUTO)
  .write(output, (err)=>{
    if(err){
     	console.log(err)
    } else {
      conn.sendFile(m.chat,Ft.fs.readFileSync(output), output,"y")
    }
  })
}).catch((e) => console.log(e) && client.reply("ERROR!"))
  }
}
