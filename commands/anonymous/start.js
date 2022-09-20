module.exports = {
name: ["start"], 
type: ['anonymous chat'],
description: "❓ • Anonymous Chat Like Telegram",
utilisation: global.userbot.prefix+ "start",

async execute(m) {
//snsn
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '❓ ANONYMOUS-FEATURES ❓\n\nKetik ${userbot.prefix}leave untuk Berhenti\natau Menekan Button Dibawah Ini', userbot.author, '📤 • STOP-CHAT', `${userbot.prefix}leave`, m)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.send2Button(room.a, '❓ PARTNER-FOUND ❓\n\nGunakan ${userbot.prefix}next : untuk Mengganti Partner\nGunakan ${userbot.prefix}leave : untuk Berhenti Chat bersama Partner', userbot.author, '🆙 • SEARCH-CHAT', `${userbot.prefix}next`, '📤 • STOP-CHAT', `${userbot.prefix}leave`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.send2Button(room.a, '❓ PARTNER-FOUND ❓\n\nGunakan ${userbot.prefix}next : untuk Mengganti Partner\nGunakan ${userbot.prefix}leave : untuk Berhenti Chat bersama Partner', userbot.author, '🆙 • SEARCH-CHAT', `${userbot.prefix}next`, '📤 STOP-CHAT', `${userbot.prefix}leave`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '❓ PARTNER-SEARCH ❓\n\nKetik ${userbot.prefix}leave untuk Berhenti\natau Menekan Button Dibawah Ini', userbot.author, '📤 • STOP-CHAT', `${userbot.prefix}leave`, m)
            }
        }
    }
