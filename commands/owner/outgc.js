module.exports = {
name: ["out"],
type: ["owner"],
description: " • Out from Group",
utilisation: userbot.prefix + "out",

async execute(m) {
let { conn, args } = data
let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let i = 0; i < chat.length; i++) { // For loops
            await m.reply('‘ | Thank You to All of These BOTz Users, BOTz will Leave These Groups in a Few Moments', chat[i].jid)
            await conn.groupLeave(chat[i].jid)
            await delay(i * 2000) // Delaynya
        }
        await m.reply(' | Succesfully Out from Groups!')
    } else if (args[0] || args.length > 0) {
        let ada = chat.find(bot => bot.jid == args[0]) // Apakah botnya ada disitu
        if (!ada) throw '| 404, BOTz tidak berada dalam Group Itu!'
        await m.reply('| sesaat lagi BOTz akan keluar dari Groups', args[0])
        await conn.groupLeave(args[0])
        await m.reply(' | Succesfully Out from Groups')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('‘ | Thank You to All of These BOTz Users, BOTz will Leave These Groups in a Few Moments', m.chat) // WKWKW pesannya sama semua. gk kreatif :v
        await conn.groupLeave(m.chat)
    }
}
}
