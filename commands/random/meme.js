let fetch = require('node-fetch')

module.exports = {
name: ["meme"],
type: ["random"],
useLimit: true,
description: "📝 • Meme from Redit",
utilisation: userbot.prefix + "meme",

async execute(m) {
let { conn } = data
try {
    let res = await fetch('https://meme-api.herokuapp.com/gimme')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
© Reddit
Author: ${json.author} Subreddit: ${json.subreddit}
${json.postLink}
`.trim()
    conn.sendFile(m.chat, json.url, 'test.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*ERROR*_'
    }
}
}
