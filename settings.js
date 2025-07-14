/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6285850539404'
global.versi = version
global.namaOwner = "storeriss"
global.packname = 'Bot WhatsApp'
global.botname = 'Simple Bot cpanel'
global.botname2 = 'Simple Bot'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6285850539404"
global.linkGrup = "-"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VaybYhxJuyAGHsDqiF1D"
global.idSaluran = "120363356263269857@newsletter"
global.namaSaluran = "Store Owner"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = ""
global.apiOrderKuota = ""
global.qrisOrderKuota = ""

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "apikey1"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "6285850539404"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/qwp5qd.jpg", 
reply: "https://files.catbox.moe/qwp5qd.jpg", 
logo: "https://files.catbox.moe/qwp5qd.jpg", 
qris: "https://files.catbox.moe/qwp5qd.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://jarotr.id.kenz-host.my.id"
global.apikey = "ptla_IcVxBloGotBjt2BfLjjs3zbm4AwLtr7N5NAO6BZBu8G" //ptla
global.capikey = "ptlc_phKKSVJ9PlXhqgw8fxHEK27WtHWuxrT89N9pPIrC7Iy" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://jarotr.id.kenz-host.my.id"
global.apikeyV2 = "ptla_lfucQxgxJ2q9YARtJmIBMqE0nbAP0DqgULZV4XyTepP" //ptla
global.capikeyV2 = "ptlc_6HPcjlup1PXA1U7AxMq5dA5s2D612xs7j93Pqd743rK" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"kenz-host.my.id": {
"zone": "df24766ae8eeb04b330b71b5facde5f4", 
"apitoken": "fyaxLxD0jNONtMWK3AmnaiLkkWi5Wg3Y9h8nqJh6"
},
"panelkishop.web.id": {
"zone": "8f4812b3c78ca478b5d162b6cb35d1b3", 
"apitoken": "3Y0cW3cVVIhyeWHytqFEbGDrdWaAC-k8twOEeFP2"
},
"tokopanelkishop.biz.id": {
"zone": "d87d4f320d9902f31fbbcc5ee23fafe8", 
"apitoken": "D00akOLxF3qzBzpYBp5SbpaLTmwYeybNsyAcDfiB"
},
"panelprivate.web.id": {
"zone": "61bcd80ff1ec9c3a5812f74d6ec24535", 
"apitoken": "VnjVDtbb-fSTFIn-3Hckd_E_eseqyHH7u1TTAHMN"
},
"rikionline.shop": {
"zone": "082ec80d7367d6d4f7c52600034ac635", 
"apitoken": "r3XUyNYtxNQYwZtGUIAChRqe0uTzwV4eVO7JpJ_l"
},
"market-panel.site": {
"zone": "d06bf5450ae51612a400bab1c4450283", 
"apitoken": "kmb6AkpJ6XvHMzw2m0KbYKZOycIURNYMPA7Wm0BE"
}, 
"admin-panel.tech": {
"zone": "305d4757160a88486d3780785c7c9887", 
"apitoken": "UH-aDtxu5Mm9oU8khMd5ZVg22f7nhnSkCORBn8zP"
}, 
"nabzxganteng.my.id": {
"zone": "d3aac5354f988960c7280401ec3ef601", 
"apitoken": "wO9i3UGSNCW7Q4PpAXfXwGUIFVxGONuIdDOGSl0b"
}, 
"buyer-vps.site": {
"zone": "354e1c784bed5a8d93f458ec1ff86f35", 
"apitoken": "rzOLIO1c-Me1X0owStLFUZ0ggfs_cxHDab2A7krF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
},
"tokopanel.software": {
"zone": "cc9638d4c289130ba070484625e6aefa", 
"apitoken": "bcAP5z3gHvmQTlQ59qNB9BWmf0JiGt0C99FU6SXs"
},
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
},
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})