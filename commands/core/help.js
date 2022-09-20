const { readdirSync } = require("fs")
module.exports = {
    name: ['help'],
    type: ['default'],
    description: "❓ • Mengetahui Deskripsi Commands Lain",
    utilisation: userbot.prefix +'help',
 
execute(m) {
	let { args } = data
try {
if (!args[0]) return m.reply("[❓] Where Command to Search Function")
let { description, utilisation } = global.Events[args[0]]
m.reply(`🗒️Description: ${description}\n✅Use: ${utilisation}`)
} catch {
m.reply(`Not Such ("${args[0]}") Command!`)   
}
}
}
