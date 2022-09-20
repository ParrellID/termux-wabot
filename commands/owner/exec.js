const { exec } = require('child_process')

module.exports = {
name: ["$"],
description: "❓ | Description Not Found!",
custom: true,
owner: true,
utilisation: userbot.prefix + "exec <code>",
type: ["owner"],
execute(m) {
let message = m.text
text = message.slice(2)
exec(text, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
}