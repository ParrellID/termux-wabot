let scrap = require("../../Lib/scrape")
module.exports = {
name: ["ghstalk"],
type: ["searching"],
description: "โ| Search username from Github",
utilisation: userbot.prefix+"ghstalk",

async execute(m){
let { conn, text } = data
if (!text) return m.reply("โ| username?")

const { login, id, avatar_url, url, html_url, followers_url, following_url, subscriptions_url, repos_url, type, site_admin, location, email, bio, public_repos, public_gists, following, followers, created_at, updated_at } = await scrap.ghstalk(text)
conn.sendFile(m.chat, avatar_url, null,`
๐ฐ *GITHUB-STALK* ๐ฐ\n
โน๏ธ | Username: ${login}
๐ซ | ID: ${id}
๐ | URL: ${html_url}
๐๏ธ | User_URL: ${url}
๐งพ | Type: ${type}
๐ | Admin: ${site_admin ? "ya" : "tidak"}
๐ | Location: ${location}
๐ค | Email: ${email}
๐ | Repo: ${public_repos}
โ | Gists: ${public_gists}
๐ฅ | Followers: ${followers}
๐ซ | Following: ${following}
๐ฐ | Create: ${created_at}
๐ | Update: ${updated_at}
`,m)

}
}
//SANZ KONTOL SETENGAH SETENGAH
