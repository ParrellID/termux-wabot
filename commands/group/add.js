const fetch = require('node-fetch')

module.exports = {
name: ["add"],
type: ['setting'],
description: "➕ • Add Nomor ke Group (hanya boleh dilakukan ketika anda menjadi admin)",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "add",

async execute(m) {
let { conn, text, participants } = data

if (!text) throw `[❓] uhm.. Nomornya mana?\nExample: \n\n${usedPrefix + command + ' ' + global.owner[0]}`
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.isOnWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.groupAdd(m.chat, users)
  if (response[users] == 408) throw `_[❗] ACCES-DENIED!_\n\n🗒️ Desc: User tersebut baru keluar Baru" ini\n📝 Suggest: Jika ingin Masuk, harap menggunakan Link Group!`
  let pp = await conn.getProfilePicture(m.chat).catch(_ => false)
  let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
  for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `[➕] Inviting @${jid.split`@`[0]} using Invite...\n\n@FarrellID`
    m.reply(teks, null, {
      contextInfo: {
        mentionedJid: conn.parseMention(teks)
      }
    })
    await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, 'Invitation to Join My WhatsApp Group', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
}
}
