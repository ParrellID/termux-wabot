const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

module.exports = {
name: ["tr"],
type: ["searching"],
description: "❓ • Translate Text",
utilisation: userbot.prefix + "tr reply",

async execute(m) {
let { conn, args } = data

let err = `
ℹ️ *EXAMPLES-SEARCH* ℹ️
${userbot.prefix}tr <lang> [text]
${userbot.prefix}tr id your messages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        return m.reply(err)
    } finally {
        m.reply(result[0])
    }
}
}
