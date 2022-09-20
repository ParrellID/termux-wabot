const fs = require("fs")

global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  kotzyy: 'https://api.kotzyy.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://api.kotzyy.xyz': 'KotzKey', //Free Register Apikey https://kotzyy.xyz/users/register
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}


userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner:  [ "6285746181151"],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "[⏳] Mohon tunggu beberapa saat, Kami sedang memproses Permintaan Anda...",
   api: "[❗] Maaf Terjadi Kesalahan.", 
   success: "[✅] Berhasil!",
   SudahAktif: "[❗] CMD tersebut telah digunakan Sebelumnya.",
   SudahNonaktif: "[❗] CMD tersebut telah dinonaktifkan Sebelumnya.",
   KhususGrup: "[❗] CMD ini hanya bisa digunakan di Grup!",
   KhususPribadi: "[❗] CMD ini hanya bisa digunakan di Private Message",
   GrupAdmin: "[❗] CMD ini hanya bisa digunakan oleh Admin Group",
   BotAdmin: "[❗] ERROR! BOTz Wajib menjadi Admin agar bisa menggunakan CMD ini! ",
   KhususOwner: "[❗] CMD ini hanya dapat digunakan oleh Owner BOTz!       ~FarrellID",
   KhususPremium: "[❗] CMD ini khusus Member Premium"
   },
   error: {
   Iv: "[❗] Link yang Anda berikan Tidak Valid",
   tombol: "[❗] FYI! Silahkan Masukkan Parameter *on/off*",
   forget: "[❗] Silahkan Masukkan Teks Anda."
   },
   simple: {
   expiredQr: "[!] Please Scan the QR code Above, The Above QR code Expires in 30 seconds",
   credentials: "[!] credentials updated!",
   opendocs: "[!] open docs is complete!", 
   readBaileys: "[!] Berhasil Login ke dalam Baileys",
   connecting: "[!] Menghubungkan",
   refresh: "[!] Succesfully Refresh Connection\n"
   },
   prefix: ["."],
   gexp: 50,
   limit: 100,
   eror: "[💌] sepertinya terjadi masalah pada system, *FarrellID* akan Segera Memperbaikinya!",
   waits: "[⏳] permintaan Anda sedang BOTz proses, harap tunggu beberapa Saat...",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU',
   packname: "Powered by ❤️ ",
   author: 'FarrellID',
    setting: {
    admin: "[❗] Only Admin",
    group: "[❗] Only Group",
    owner: "[❗] Owner Only Pack",
    jadibot: "[❗] Jadibot Only",
    botadmin: "[❗] BOTz harus menjadi Admin",
    nsfw: "[❗] ERROR! Fitur ini belum Diaktifkan!"
    }
}

module.exports = userbot
