let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");

module.exports = {
name: ["buatgc"],
type: ["owner"],
owner: true,
description: "ā ā¢ Create Group Chat",
utilisation: userbot.prefix + "buatgc",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('_š | Masukkan Nama Grup!_')
   try{
         await m.reply('ā³| wait for moments...')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('ā CREATING-GROUPS ā\nš | GroupID:' + group.gid + '\nš | GroupName: ' + text + '\n\nFarrellID'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('*_ā SUCCESFULLY-CREATING ā_*\nš | GroupName: ' + text + '*_\n*š | GroupID:* ' + group.gid + '\n*š | Links:* ' + url + '\n\n*@FarrellID*')
       } catch (e) {
    m.reply('```ā| ERROR```')
    console.log (e)
  }
}
}
