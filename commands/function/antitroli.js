module.exports = { 
name: "antitroli",  
async functions(m) { 
if (m.message && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('❗ANTITROLI-DETECTED❗\n\n🗒️ Desc: Use Troli Bugs\n🚧 Punishmen: Kick from Groups!\n' + require('util').format(m.key))
}
}
}
