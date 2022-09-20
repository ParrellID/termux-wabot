let scrap = require("../../Lib/scrape")
module.exports = {
name: ["ghstalk"],
type: ["searching"],
description: "❓| Search username from Github",
utilisation: userbot.prefix+"ghstalk",

async execute(m){
let { conn, text } = data
if (!text) return m.reply("❓| username?")

const { login, id, avatar_url, url, html_url, followers_url, following_url, subscriptions_url, repos_url, type, site_admin, location, email, bio, public_repos, public_gists, following, followers, created_at, updated_at } = await scrap.ghstalk(text)
conn.sendFile(m.chat, avatar_url, null,`
📰 *GITHUB-STALK* 📰\n
ℹ️ | Username: ${login}
🎫 | ID: ${id}
📎 | URL: ${html_url}
🖇️ | User_URL: ${url}
🧾 | Type: ${type}
👑 | Admin: ${site_admin ? "ya" : "tidak"}
📌 | Location: ${location}
👤 | Email: ${email}
📂 | Repo: ${public_repos}
❓ | Gists: ${public_gists}
👥 | Followers: ${followers}
🫂 | Following: ${following}
📰 | Create: ${created_at}
🆙 | Update: ${updated_at}
`,m)

}
}
//SANZ KONTOL SETENGAH SETENGAH
