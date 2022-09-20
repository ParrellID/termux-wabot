let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");

module.exports = {
name: ["buatgc"],
type: ["owner"],
owner: true,
description: "➕ • Create Group Chat",
utilisation: userbot.prefix + "buatgc",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('_📝 | Masukkan Nama Grup!_')
   try{
         await m.reply('⏳| wait for moments...')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('➕ CREATING-GROUPS ➕\n📝 | GroupID:' + group.gid + '\n📃 | GroupName: ' + text + '\n\nFarrellID'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('*_✅ SUCCESFULLY-CREATING ✅_*\n📃 | GroupName: ' + text + '*_\n*📝 | GroupID:* ' + group.gid + '\n*📎 | Links:* ' + url + '\n\n*@FarrellID*')
       } catch (e) {
    m.reply('```❗| ERROR```')
    console.log (e)
  }
}
}
