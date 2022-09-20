const fs = require ('fs') 
const crypto = require('crypto')
const request = require('request')
const fetch = require('node-fetch')

module.exports = { // By @arifirazzaq2001
name: ["daftar"],
type: ["Petualangan"], 
description: "➕ • Registry Your Account to Playing On games",
utilisation: userbot.prefix+"daftar",

async execute(m) {
let { conn, args } = data
        const addPlayerUser = (userid, sender, serials) => {
            const obj = { id: userid, name: m.sender, serial: serials }
            m._player.push(obj)
            fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(m._player))
        }
        const kodePinPlayer = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const buatCekPlayernya = (sender) => {
            let status = false
            Object.keys(m._player).forEach((i) => {
                if (m._player[i].id === m.sender) {
                    status = true
                }
            })
            return status
        }
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const iscekplayer = buatCekPlayernya(m.sender)
let setPin = kodePinPlayer(6)

if (m._player.includes(m.sender)) {
if (iscekplayer) return m.reply('[❗] Anda telah Mendaftarkan Diri Sebelumnya!') 

m._player.push(m.sender)
fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(m._player))
fs.writeFileSync('./tmp/adventureDB/pin.json', JSON.stringify(setPin))
addPlayerUser(m.sender, kodePinPlayer)
let teks = `

╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 PENDAFTARAN PLAYER 」*
┕────────────┈ ⳹
*Nama:* ${m.pushname}
*APi:* wa.me/${m.sender.split('@')[0]}
*PIN:* ${setPin}
*Total Player:* ${m._player.length}

「 FID-BOTz 」*
`
m.reply(teks)
console.log(`[SUCCES-LOG] ${m.pushname} Berhasil membuat JSON Player Games`)
} 
} 
}

function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
