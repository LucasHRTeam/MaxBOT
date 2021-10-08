/*
* Bot feito por Lucas Hora sobre MhankBar.
* Reprodução proibida.

* Agradecimentos:
* ~> @adiwajshing/baileys (API WHATSAPP WEB)
* ~> Sr Edition
* ~> MhankBarBar (Base)
*/
const {
    Mimetype,
    WAMessageProto,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    WAConnection,
    GroupSettingChange,
    WAConnectionOptions,
    WA_DEFAULT_EPHEMERAL,
    ChatModification,
    WebMessageInfo
} = require('@adiwajshing/baileys');
const ownerNumber = ["559284928452@s.whatsapp.net","559183423570@s.whatsapp.net"] // Aqui é o número do dono
const mod = ["5516981844328@s.whatsapp.net"]
const adminbotnumber = ["559284928452@s..net"] //pessoas de confiança pra ser adm do bot
const frendsowner = ["5519982765873@s.whatsapp.net"]//amigos do bot
const { color, bgcolor } = require('./lib/color')
const { linguagens } = require('./src/linguagens.js')
const { modapk } = require('./src/modapk')
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:Meu criador ^~^\n'
+ 'ORG:Lucas Hora;\n'
+ 'TEL;type=CELL;type=VOICE;waid=559284928452:+55 92 8492-8452\n'
+ 'END:VCARD'

var prefix = '#'
nome_bot = 'MAX BOT'
blocked = []
var chr = []
cr = '*All Black Max*'
totalcmd = '208';
linkchat = 'https://chat.whatsapp.com/HCgJgeBcP4K8jRPb2TiR8B'

let uptime = process.uptime();
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

// clase new Date pra pegar hora/semana/mes
var day = new Date();

var semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta' ,'Sábado'];

var week = day.getDay();
week = semana[week]

var dia = day.getDate();
/******** ARQUIVOS SRC E LIB ********/
const { prefixo } = require('./lib/prefix')
const { ytv, yta } = require('./lib/y2mate')
const { y2mateV, y2mateA} = require('./lib/y2mate4')
const {
  msgFilter,
isUrl } = require('./spam/index.js')
const { informs } = require('./src/info')
const { pack } = require('./src/pack')
const { chentai } = require('./src/chentai')
const { daftarvip } = require('./src/daftarvip')
const { xvideos } = require('./src/xvideos')
const { help } = require('./src/help')
const { maker } = require('./src/maker.js');
const { ativos } = require('./src/ativos')
const { wppim } = require('./src/wppim')
const { database } = require('./src/database')
const { travas } = require('./travas/trava1')
const { destrava } = require('./src/destrava')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const Exif = require('./lib/exif');
const exif = new Exif();

//*********** MÓDULOS NPM ***********
const chalk = require('chalk');
const translate = require('@vitalets/google-translate-api');
const { gotopts } =  require('@vitalets/google-translate-api');
const fs = require('fs')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const googleImage = require('g-i-s')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const yts = require('yt-search');
const { google } = require('google-search-results-nodejs')
const im = require('imagemagick');
const ytdl = require('ytdl-core')
//const lolis = require('lolis.life')
//const loli = new lolis()

// ********* ARQUIVOS JSON *********
const anuncios = JSON.parse(fs.readFileSync('./database/json/anuncios.json'));
const hentaiPesado = JSON.parse(fs.readFileSync('./database/json/hentai.json'))
const bateria = JSON.parse(fs.readFileSync('./database/json/bateria.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'))
const walpaperanime = JSON.parse(fs.readFileSync('./database/json/walpaper.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/settings.json'))
const onlytag = JSON.parse(fs.readFileSync('./database/json/onlytag.json'))
const AutoStick = JSON.parse(fs.readFileSync('./database/json/autostick.json'))
const antichat = JSON.parse(fs.readFileSync('./database/json/antichat.json'))
const groupList = JSON.parse(fs.readFileSync('./database/json/grupos.json'))
const grupoTotal = JSON.parse(fs.readFileSync('./database/json/grupoTotal.json'))
const antictt = JSON.parse(fs.readFileSync('./database/json/antictt.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'))
const antidoc = JSON.parse(fs.readFileSync('./database/json/antidoc.json'))
const antilocation = JSON.parse(fs.readFileSync('./database/json/antilocation.json'))
const blockcmd = JSON.parse(fs.readFileSync('./database/json/blockcmd.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))
const antikwai = JSON.parse(fs.readFileSync('./database/json/antikwai.json'))
const antiyoutube = JSON.parse(fs.readFileSync('./database/json/antiyoutube.json'))
const antitiktok = JSON.parse(fs.readFileSync('./database/json/antitiktok.json'))
const antiface = JSON.parse(fs.readFileSync('./database/json/antiface.json'))
const antiinsta = JSON.parse(fs.readFileSync('./database/json/antiinsta.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const perfil = JSON.parse(fs.readFileSync('./database/json/perfil.json'))
const nova_palavra = JSON.parse(fs.readFileSync('./database/json/palavraAna.json'))
const banned = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const antipalavra = JSON.parse(fs.readFileSync('./database/json/antipalavra.json'))
const antipv = JSON.parse(fs.readFileSync('./database/json/antipv.json'))
const InfinityBlock = JSON.parse(fs.readFileSync('./database/json/infinityblock.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
let palavrasANA = JSON.parse(fs.readFileSync('./database/json/palavraAna.json'))
// ******* FUNCTION PERFIL ********

//Mensagens Automáticas
var time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
var date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

const getPerfil = (userId) => {
 let position = false
            Object.keys(perfil).forEach((i) => {
                if (perfil[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return perfil[position].reg
            }
}

// PUXAR NOME
const getNome = (userId) => {
 let position = false
            Object.keys(perfil).forEach((i) => {
                if (perfil[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return perfil[position].nickname
            }
}
// PUXAR IDADE
const getIdade = (userId) => {
 let position = false
            Object.keys(perfil).forEach((i) => {
                if (perfil[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return perfil[position].idade
            }
}

//********* FUNCTION LEVEL ************
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level, null, '\t'))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level, null, '\t'))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level, null, '\t'))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

//********* FUNCTION DO TEMPO *********
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
 let h = `${pad(hours)} Horas`
 let m = `${pad(minutes)} Minutos`
 let s = `${pad(seconds)} Segundos`
 
  let q = ((hours <= 0) && minutes <= 0) ? s : (hours <= 0) ? `${m} e ${s}` : `${h} ${m} e ${s}`
  return q
}
                            
//********* CONTAGEM DIAS PREMIUM *******
const getExpiredMute = (sender) => {
     let position = null
		    Object.keys(banned).forEach((i) => {
		        if (banned[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return banned[position].expired
		    }
		} 

  const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(premium).forEach((i) => {
		        if (premium[i].jid === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return premium[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(premium).forEach((i) => {
		            if (Date.now() >= premium[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${premium[position].id}`)
		            premium.splice(position, 1)
		            fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
		        }
		    }, 1000)
		} 

//********* API WHATSAPP WEB **********
async function starts() {
	const conn = new WAConnection()
	conn.logger.level = 'warn'
	console.log(banner.string)
	conn.on('qr', () => {
		console.log('\x1b[36mAGRADEÇO A PREFERÊNCIA PELO MAX BOT\x1b')
		console.log(color('AGORA SO LER O QR CODE.', 'gold'))
	})

	fs.existsSync('./MaxBot.json') && conn.loadAuthInfo('./MaxBot.json')
	conn.on('connecting', () => {
		start('2', color('Conectando', 'aqua'))
	})
	conn.on('open', () => {
		success('2', 'Conectado')
	})
	await conn.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./MaxBot.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
conn.connectOptions.maxRetries = 99999999
    conn.autoReconnect = 2
    
    conn.on('close', async () => {
      conn.DisconnectReason = 'connecting',
      isReconnecting = true
    })
    
conn.on('chats-received', async ({ hasNewChats }) => {
  const unread = await conn.loadAllUnreadMessages();
  
const NewChats = `Você tem ${conn.chats.length} chats\n${unread.length} mensagens não lidas.`
conn.sendMessage('559284928452@s.whatsapp.net', NewChats, MessageType.text);
  console.log(color(`${NewChats}\n`, 'aqua'));
})
                      
  //*********** ANTI-FAKE **********
	conn.on('group-participants-update', async (anu) => {
	  num = anu.participants[0]
	 const mdata = await conn.groupMetadata(anu.jid)
	  	if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				if(!num.split('@')[0].startsWith(55) && !num.split('@')[0].startsWith(351) && !num.split('@')[0].startsWith(1)) {
						conn.groupRemove(mdata.id, [num])
			    }
			}
		}
	
	if (anu.action == 'promote') {
  conn.sendMessage(mdata.id, `O membro @${num.split('@')[0]} ganhou adm neste grupo`, MessageType.text, {contextInfo: {"mentionedJid": [num]}});
  console.log(anu)
} else if (anu.action == 'demote') {
  conn.sendMessage(mdata.id, `O membro @${num.split('@')[0]} perdeu adm neste grupo`, MessageType.text, {contextInfo: {"mentionedJid": [num]}});
  console.log(anu)
}
// Group update para welcome
	if (!welkom.includes(anu.jid)) return
		try {
		 fer = await conn.getProfilePicture(num)
		} catch {
		  fer = fs.readFileSync('./img/sem_foto.jpeg');
		  }
		  wp = await getBuffer(fer)
		  console.log(anu)
			if (anu.action == 'add') {
			  if (anu.participants.length > 5) return
				if (!num.startsWith(55)) return 
				tar = `Oi @${num.split('@')[0]}\nBem vindo ao grupo\n${mdata.subject} 🔮`
				conn.sendMessage(mdata.id, wp, MessageType.image, {caption: tar, thumbnail: null, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			  if (anu.participants.length > 5) return
				if (!num.startsWith(55)) return
				tar = `Menos 1 No puteiro😔... @${num.split('@')[0]} 👋*
_Volte Nunca Mais Seu merdinha👋😏_`
				conn.sendMessage(mdata.id, wp, MessageType.image, {caption: tar, thumbnail: null, contextInfo: {"mentionedJid": [num]}})
			}
	})


	/*conn.on('chat-new', async (anu) => {
 async function deletar() {
   let chat = await conn.chats.all();
	    if (chat.length > 25) {
	 for (let _ of chat) {
	   await conn.modifyChat(_.jid, ChatModification.delete)
	 }
	 warn = `O limite de chats foi excedido.\nLimite: 25\nTotal deletado: ${chat.length}`
	 
	 conn.sendMessage("559284928452@s.whatsapp.net", warn, MessageType.text);
	 
	 console.log(color(warn, 'aqua'))
	                             }
                 }
  setTimeout( async () => {deletar();}, 10000);
});
*/

// Mensagens automáticas
setInterval( async() => {
 horario = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
 grp = await conn.chats.all().filter(a => a.jid.endsWith('@g.us'))
 // 1 caso
 if (horario == '19:00:00' || horario == '08:00:00' || horario == '16:00:00' || horario == '01:00:00') {
   for (let i = 0; i < grp.length; i++) {
  hr = fs.readFileSync('./meme/chines.opus')
  conn.sendMessage(grp[i].jid, 'Iae cambada de puta 🐦', MessageType.text);
  conn.sendMessage(grp[i].jid, hr, MessageType.audio, {mimetype: "audio/mp4", ptt: true});
   }
 } else if (horario == '14:30:00' || horario == '23:18:00') {
   cox = fs.readFileSync('./meme/coxinha.webp')
   coxi = fs.readFileSync('./meme/coxinha.opus')
   for (let i = 0; i < grp.length; i++) {
     conn.sendMessage(grp[i].jid, cox, MessageType.sticker);
     conn.sendMessage(grp[i].jid, coxi, MessageType.audio, {mimetype: "audio/mp4", ptt: true})
   }
 } else if (horario == '16:30:00' || horario == '18:30:00' || horario == '22:30:00' || horario == '10:30:00' || horario == '20:41:00') {
   maco = fs.readFileSync('./meme/macacoadm.webp');
   hrcer = fs.readFileSync('./meme/horacerta.opus')
   for (let i = 0; i < grp.length; i++) {
     conn.sendMessage(grp[i].jid, maco, MessageType.sticker);
     conn.sendMessage(grp[i].jid, hrcer, MessageType.audio, {mimetype: "audio/mp4", ptt: true});
   }
 }
 
//horarios dos anuncios
if (horario == '13:30:00' || horario == '15:30:00' || horario == '17:30:00' || horario == '19:30:00') {
  for (let p of grp) {
    conn.sendMessage(p.jid, anuncios[Math.floor(Math.random() * anuncios.length)], MessageType.text, {contextInfo: {forwardingScore: 50000, isForwarded: true}});
  }
}
}, 1000);

conn.on('group-update', async(anu) => {
  try {
  conn.sendMessage(anu.jid, `A descrição foi alterada neste grupo.\n\n📍 autor: @${anu.descOwner.split('@')[0]}\n\nNova desc:\n${anu.desc}`, MessageType.text, { quoted: {
    "key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "557499510904-1612660268@g.us",
			"inviteCode": "NgsCIU2xis8wuwhheush3VHJT",
			"caption": `Convite para grupo do Whatsapp\nComandos: ${totalcmd}`
		}
	}
}
 , contextInfo: { mentionedJid: [anu.descOwner.split('@')[0]+'@s.whatsapp.net']}});
  } catch (e) {
    console.log(e)
  }
});
  
//ANTI-CALL 
conn.on('CB:action,,call', async (php) => {
  nur = php[2][0][1].from
await conn.sendMessage(nur, 'Liga pra tua mãe aquela puta', MessageType.text);
await conn.blockUser(nur, "add");
console.log(chalk.hex('#32CD32').bold('[ANTI-CALL]') + ' DE ' + chalk.hex('#FF0000').bold(`${nur.split('@')[0]}`))
})

//********** EVENTO DA BATERIA **********
conn.on('CB:action,,battery', async (json) => {
	if (bateria.length > 100) 
		bateria.splice('ta');
		fs.writeFileSync('./database/json/bateria.json', JSON.stringify(bateria))
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		if (json[2][0][1].live == 'true') { carregando = 'sim'
		chr.push(carregando)
		}
		if (json[2][0][1].live == 'false') {
		  carregando = 'não'
		  chr.push(carregando)
		}
		console.log(color(`Sua bateria está em: ${global.batteryLevelStr}%`, 'green'));
		bateria.push(global.batteryLevelStr);
		fs.writeFileSync('./database/json/bateria.json', JSON.stringify(bateria))
});


	conn.on('chat-update', async (ack) => {
		try {
      if (!ack.hasNewMessage) return
       ack = ack.messages.all()[0]
			if (!ack.message) return
			if (ack.key && ack.key.remoteJid == 'status@broadcast') return
			//if (ack.key.fromMe) return
			ack.message = (Object.keys(ack.message)[0] === 'ephemeralMessage') ? ack.message.ephemeralMessage.message : ack.message
			global.blocked
			const content = JSON.stringify(ack.message)
			const from = ack.key.remoteJid
			const type = Object.keys(ack.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const deviceType = ack.key.id.length > 21 ? "Android" : ack.key.id.substring(0,2) == "3A" ? "iOS" : "WhatsApp WEB"
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
			var body = (type === 'conversation' && ack.message.conversation.startsWith(prefix)) ? ack.message.conversation : (type == 'imageMessage') && ack.message.imageMessage.caption.startsWith(prefix) ? ack.message.imageMessage.caption : (type == 'videoMessage') && ack.message.videoMessage.caption.startsWith(prefix) ? ack.message.videoMessage.caption : (type == 'extendedTextMessage') && ack.message.extendedTextMessage.text.startsWith(prefix) ? ack.message.extendedTextMessage.text : /*aqui começa do botao e a lista*/(ack.message.listResponseMessage && ack.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && ack.message.listResponseMessage.singleSelectReply.selectedRowId) ? ack.message.listResponseMessage.singleSelectReply.selectedRowId:  (ack.message.buttonsResponseMessage && ack.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && ack.message.buttonsResponseMessage.selectedButtonId) ? ack.message.buttonsResponseMessage.selectedButtonId: (type == 'documentMessage' && (ack.message.documentMessage.fileName.startsWith(prefix))) ? ack.message.documentMessage.fileName : (type == 'requestPaymentMessage' && (ack.message.requestPaymentMessage.noteMessage.extendedTextMessage.text.startsWith(prefix))) ? ack.message.requestPaymentMessage.noteMessage.extendedTextMessage.text : ((type == 'contactMessage') && ack.message.contactMessage.displayName.startsWith(prefix)) ? ack.message.contactMessage.displayName : ((type == 'productMessage') && ack.message.productMessage.product.title.startsWith(prefix)) ? ack.message.productMessage.product.title : ((type == 'locationMessage') && ack.message.locationMessage.name.startsWith(prefix)) ? ack.message.locationMessage.name : ((type == 'orderMessage') && ack.message.orderMessage.message.startsWith(prefix)) ? ack.message.orderMessage.message : (type == 'viewOnceMessage' && (ack.message.viewOnceMessage.message.imageMessage.caption.startsWith(prefix) || ack.message.viewOnceMessage.videoMessage.caption.startsWith(prefix))) ? ack.message.viewOnceMessage.message.imageMessage.caption || ack.message.viewOnceMessage.videoMessage.caption: ''
			
			budy = (type === 'conversation') ? ack.message.conversation : (type === 'extendedTextMessage') ? ack.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && ack.message.conversation) ? ack.message.conversation : (type == 'imageMessage') && ack.message.imageMessage.caption ? ack.message.imageMessage.caption : (type == 'videoMessage') && ack.message.videoMessage.caption ? ack.message.videoMessage.caption : (type == 'extendedTextMessage') && ack.message.extendedTextMessage.text ? ack.message.extendedTextMessage.text : ''
            
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const messagesC2 = pes.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

//********** DEFINIÇÕES DO REPLY *********
			msg = {
			  levelnoton: '*Os leveis precisam estar ativos neste grupo*',
			  levelon: '*DONE*\nSistema level ativado',
			  leveloff: '*DONE*\nSistema level desativado.',
			  levelnol: 'Teu level é 0 carai',
				wait: '⌛Por favor aguarde...⌛',
			  success: '️❬ ✔ ❭ Sucesso',
				error: {
				  play: 'Título não encontrado, tente novamente',
					stick: `❌ Erro ao converter imagens em stickers. Se usou ${prefix}sticker, tente ${prefix}fsticker. e vice versa ❌`,
					again: 'Deu erro, caralho. tente novamente :/',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group:'*_Comando exclusivo para grupos._*',
					nsfw: 'O modo nsfw precisa estar ativado para usar este comando',
					ownerG:'*_Comando não permitido para macacos._*',
					ownerB:'Comando não permitido para macacos.',
					admin:'Você é fraco, lhe falta adm',
					Badmin:'Como eu vou fazer isso sem adm?',
					Premium:'❌ Você não é usuário premium! ❌                    Para adquirir acesso entre em contato com meu proprietário. digite !owner',
					banned: '😜 Você está proibido de usar os comandos do bot 😜',
					Nao_Registrado: `∘ 𝗦𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗘 𝗣𝗥𝗜𝗠𝗘𝗜𝗥𝗢\n∘ ${prefix}registrar nome|idade `,
				}
			}
			const me = conn.user
			const botNumber = conn.user.jid
			const isGroup = from.endsWith('@g.us')
			const isGrupoTotal = grupoTotal.includes(from)
			const isPv = from.endsWith('@s.whatsapp.net')
			const sender = (ack.key.fromMe) ? me.jid : isGroup ? ack.participant : ack.key.remoteJid
			const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupDesc = isGroup ? groupMetadata.description : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const vipMembers = isGroup ? 
			premium.jid : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = ack.key.fromMe ? me.jid : groupAdmins.includes(sender) || false
			const isGroupMember = groupMembers.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = (ack.key.fromMe) ? me.jid : ownerNumber.includes(sender)
			const isMod = mod.includes(sender)
			const isBanned = banned.includes(sender)
			const totalchat = await conn.chats.all()
			 const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const userLevel = getLevelingLevel(sender)
			const userPerfil = getPerfil(sender)
			const userNome = getNome(sender)
			const userIdade = getIdade(sender)
			const userXp = getLevelingXp(sender)
			const UserMute = getExpiredMute(sender)
			const usuariot = `${user.length}`
			const chatst = `${totalchat.length}`
			const namek = `@${sender.split("@s.whatsapp.net")[0]}`
			const numero = `${sender.split("@s.whatsapp.net")[0]}`
			const isBlockCmd = command.includes(blockcmd)
			const isantichat = isGroup ? antichat.includes(from) : false
			const isAntiCtt = isGroup ? antictt.includes(from) : false
			const isAntiCatalogo = isGroup ? anticatalogo.includes(from) : false
			const isAntiDoc = isGroup ? antidoc.includes(from) : false
			const isAntiLocation = isGroup ? antilocation.includes(from) : false
			const isAutoStick = isGroup ? AutoStick.includes(from) : false
			const isOnlytag = isGroup ? onlytag.includes(from) : false
			const isantilink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isantifake = isGroup ? antifake.includes(from) : false
			const isantikwai = isGroup ? antikwai.includes(from) : false
			const isantiyoutube = isGroup ? antiyoutube.includes(from) : false
			const isantitiktok = isGroup ? antitiktok.includes(from) : false
			const isantiface = isGroup ? antiface.includes(from) : false
			const isantiinsta = isGroup ? antiinsta.includes(from) : false
			const isPremium = (ack.key.fromMe) ? me.jid : (isOwner) ? sender : premium.includes(sender)
			const isAntiPv = antipv.includes("Ativado")
			const isInfinityBlock = InfinityBlock.includes("Ativado")
			const isAntiPalavra = isGroup ? antipalavra.includes(from) : false
			const isUser = user.includes(sender)
		 const {
		   wa_version,
		   mcc,
		   mnc,
		   os_version,
		   device_manufacturer,
		   device_model } = conn.user.phone
			var {owner, creation, participants, desc } = groupMetadata;
			
			function reply(teks) {
				conn.sendMessage(from, teks, text, {quoted:ack})
			}
			
			function sendMess(hehe, teks) {
				conn.sendMessage(hehe, teks, text)
			}
			
			function mentions(teks, memberr, id) {
				(id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : conn.sendMessage(from, teks.trim(), extendedText, {quoted: ack, contextInfo: {"mentionedJid": memberr}})
			}
			
			function sendImage(hehe, teks) {
			   conn.sendMessage(from, hehe, MessageType.image, {quoted: ack, thumbnail: hehe, caption: teks});
			 }
	

		//JOGO DO ANAGRAMA
			if(isGroup && isUser && fs.existsSync(`./database/json/anagrama-${from}.json`)){
				let dataAnagrama = JSON.parse(fs.readFileSync(`./database/json/anagrama-${from}.json`))
			   if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
		
				if(budy.toUpperCase() == dataAnagrama.original && (isUser)) { conn.sendMessage(from, `Parabéns @${sender.replace('@s.whatsapp.net', '')} 🥳\nVocê ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {quoted: ack}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/json/anagrama-${from}.json`)
		setTimeout(async() => {
		  await  fs.writeFileSync(`./database/json/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
			let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/json/anagrama-${from}.json`))
	  conn.sendMessage(from, `
		 🎓 ANAGRAMA 🎓
 ╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
 │ ➣ Jogador: ${namek}
 │ ➣ Anagrama: ${dataAnagrama2.embaralhada}
 │ ➣ Dica: ${dataAnagrama2.dica}
 ╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸ 
				  `,  MessageType.text, {quoted: ack})
		}, 5000)
			}}

      const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), "gold"), color('Renomeando sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					conn.sendMessage(to, media, sticker,zits)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			colors = ['blue','white','black','red','yellow','green', 'cian', 'magenta', 'orange', 'gold', 'aqua']
			ciano = '\x1b[46m'
			
			//**** DEFINIÇÕES DE VARIÁVEIS *****
			let pushname = (ack.key.fromMe) ? me.name : conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify: 'User MaxBOT'
			let authorname = conn.contacts[from] != undefined ? conn.contacts[from].vname || conn.contacts[from].notify : undefined	
			let fps = (args.length < 1) ? '15' : `${args[0]}`
			
		var role = 'Bronze I'
				if (userLevel <= 2) {	role = 'Bronze I 🥉'} else if (userLevel <= 3) {	role = 'Bronze II 🥉'} else if (userLevel <= 4) {	role = 'Bronze III 🥉'} else if (userLevel <= 6) {	role = 'Bronze IV 🥉'} else if (userLevel <= 8) {	role = 'Bronze V 🥉'} else if (userLevel <= 10) {	role = 'Prata I 🥈'} else if (userLevel <= 12) {	role = 'Prata II 🥈'} else if (userLevel <= 14) {	role = 'Prata III 🥈'} else if (userLevel <= 16) {	role = 'Prata IV 🥈'} else if (userLevel <= 18) {	role = 'Prata V 🥈️️️'} else if (userLevel <= 20) {	role = 'Ouro I 🥇'} else if (userLevel <= 22) {	role = 'Ouro II️ 🥇'} else if (userLevel <= 24) {	role = 'Ouro III 🥇'} else if (userLevel <= 26) {	role = 'Ouro IV 🥇'} else if (userLevel <= 28) {	role = 'Ouro V 🥇'} else if (userLevel <= 30) {	role = 'Platina I'} else if (userLevel <= 32) {	role = 'Platina II'} else if (userLevel <= 34) {	role = 'Platina III'} else if (userLevel <= 36) {	role = 'Platina IV'} else if (userLevel <= 38) {	role = 'Platina V'} else if (userLevel <= 40) {	role = 'Diamante I'} else if (userLevel <= 42) {	role = 'Diamante II'} else if (userLevel <= 44) {	role = 'Diamante III'} else if (userLevel <= 46) {	role = 'Diamante IV'} else if (userLevel <= 48) {	role = 'Diamante V'} else if (userLevel <= 50) {	role = 'Coroa I'} else if (userLevel <= 52) {	role = 'Coroa II'} else if (userLevel <= 54) {	role = 'Coroa III'} else if (userLevel <= 56) {	role = 'Coroa IV'} else if (userLevel <= 58) {	role = 'Coroa V'} else if (userLevel <= 60) {	role = 'CRAQUE 1 🔥'} else if (userLevel > 60) {	role = 'CONQUISTADOR 1 ⚡'
				}
				
	        //******** FUNCTION LEVEL ******
            if (isGroup && isLevelingOn && isUser) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━
           𝙇𝙀𝙑𝙀𝙇 𝙐𝙋🪅 ✨
 
 ╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
 │ ➣ Nick : ${pushname}
 │ ➣ Level : ${getLevel} -> ${getLevelingLevel(sender)}
 │ ➣ Xp : 152🔮
 │ ➣ Número : ${namek}
 │ ➣ Patente : ${role}
 ╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸ 
 ❖ Obtenha mais XP conversando
   ou Usando Comandos 🪅 ✨
            𝙇𝙀𝙑𝙀𝙇 𝙐𝙋🪅 ✨
━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━`)
                }
            } catch (err) {
                console.error(err)
            }
        }
			
			//****** TIPOS DE MÍDIA ******
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const viewOnceMessage = type === 'extendedTextMessage' && content.includes('viewOnceMessage')
			
			
			let UserPremium = isOwner ? chalk.hex('#00FFFF').bold('OWNER') : isPremium ? chalk.hex('#32CD32').bold('PREMIUM') : chalk.hex('#FF0000').bold('NoPremium')
			
			let login = isUser ? chalk.hex('#20B2AA').bold('REGISTRADO') : chalk.hex('#FF00PP').bold('NÃO REGISTRADO');
			
		let typeMsg = (type ==  'imageMessage') ? chalk.hex('#FF0000').bold('IMAGEM') : (type == 'videoMessage') ? chalk.hex('#FF0000').bold('VIDEO') : (type == 'conversation') ? chalk.hex('#FF0000').bold('MENSAGEM') : (type == 'audioMessage') ? chalk.hex('#FF0000').bold('AUDIO') : (type == 'stickerMessage') ? chalk.hex('#FF0000').bold('STICKER') : (type == 'extendedTextMessage') ? chalk.hex('#FF0000').bold('MARCANDO') : (type == 'documentMessage') ? chalk.hex('#FF0000').bold('DOCUMENTO') : (type == 'buttonsMessage') ? chalk.hex('#FF0000').bold('BOTÃO') : type
			
			//******* COMANDO NO PRIVADO *******
			if (!isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> ${chalk.bgHex('#006400').underline('[CMD]')} ${color('PRIVADO', 'gold')} · ${color(command)} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			//******* MENSAGEM NO PRIVADO ******
		if (!isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> ${chalk.bgHex('#FF2800').underline('[RECV]')} ${color('PRIVADO', 'gold')} · ${typeMsg} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			//******** COMANDO NO GRUPO *******
			if (isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> ${chalk.bgHex('#006400').underline('[CMD]')} ${color(groupName, 'gold')} · ${color(command)} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			
			//******** MENSAGEM NO GRUPO *******
		  if (isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> ${chalk.bgHex('#FF2800').underline('[RECV]')} ${color(groupName, 'gold')} · ${typeMsg} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
		  
			
//******* USUÁRIO BANIDO BY ME ********
		if (isCmd && isBanned) {
reply(`Você foi mutado pelo proprietário`)
return console.log(color('[BAN] Ignorando comando', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))
		  
		}

// Não registrados
if (!isUser && command && command != 'login') {
  const logar = async() => {
    log = [
    {
    buttonId: `${prefix}login`,
    buttonText: { displayText: 'Fazer login' }, type: 1 },
    {
      buttonId: `${prefix}user`,
      buttonText: { displayText: 'Total registrados' }, type: 1
    }
 ]
        
  const botonLog = { contentText: `Você ainda não\nestá registrado em minha\nbase de dados.\nClique no botão\nabaixo para se registrar`, footerText: `caso prefira envie ${prefix}login`, buttons: log, headerType: 1 }
  const botonLogin = await conn.sendMessage(from, botonLog, MessageType.buttonsMessage, {quoted: ack});
  conn.relayWAMessage(botonLogin, {waitForAck: true});
  }
  return logar();
}

// View once
if (type == 'viewOnceMessage') {
  reply('View once detectado.')
const encws = viewOnceMessage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
	const sav = await conn.downloadAndSaveMediaMessage(encws)
	conn.sendMessage(from, sav, MessageType.image, {quoted: ack})
}

//******* COMANDO BLOQUEADO *********
if (isCmd && !isOwner && isUser && blockcmd.includes(messagesC2)) {
  reply('Comando bloqueado pelo proprietário.')
  return console.log(color('[ COMANDO BLOQUEADO ]', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))
}

/******* ANTICTT BY LUCAS HORA *****/
if (isGroup && isBotGroupAdmins && isAntiCtt && ((type == 'contactsArrayMessage') || type == 'contactMessage')) {
  if (isGroupAdmins) return
reply('Contatos são proibidos aqui')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

/******* ANTICATÁLOGO BY LUCAS HORA *****/
if (isGroup && isBotGroupAdmins && isAntiCatalogo && (type == 'productMessage')) {
  if (isGroupAdmins) return
reply('Catálogos são proibidos aqui')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

//ANTI LOCALIZAÇÃO BY LUCAS HORA
if (isGroup && isBotGroupAdmins && isAntiLocation && (type == 'locationMessage' || type == 'liveLocationMessage')) {
  if (isGroupAdmins) return
reply('Eca membro comum')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

//ANTI DOCUMENTO BY LUCAS HORA
if (isGroup && isBotGroupAdmins && isAntiDoc && (type == document)) {
  if (isGroupAdmins) return
  reply('Eca membro comum')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
    conn.groupRemove(from, [kik])
  },2000)
}

/******* ANTI-PV BY LUCAS HORA *******/
if (isCmd && isPv && !isOwner && !isPremium && isAntiPv) {
  reply('⛔ *PV BLOQUEADO* ⛔') 
  conn.blockUser (from, "add") 
  await conn.modifyChat(from, 'delete')
  return console.log(color('[ANTI-PV] USUÁRIO BLOQUEADO', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))}
  
  /****** ANTI SPAM BY ITALUH *******/
if (isCmd && msgFilter.isFiltered(from)) {
conn.sendMessage(from, `Sem flood @${sender.split('@')[0]}...\n\nAguarde 5 segundos antes de usar outro comando✅`, text, {quoted: ack, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

//********* TAG OBRIGATÓRIA ************
if (isCmd && !isGroupAdmins && isOnlytag && !pushname.includes('᳡') && !pushname.includes('ꪶ') && !isOwner) {
reply(`Oi ${pushname}\nPor favor coloque a tag para ser reconhecido.\nExemplo: ᳡${pushname}\nCaso queira apenas a tag escreva "tag".\n2 tags disponíveis.\n\nSe já estiver usando a tag, peça o comando novamente`)
  return console.log(color('[TAG] USUÁRIO SEM TAG', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))}

async function escr() {
  aq = []
  aq.push('sim')
}

			//******** SÍMBOLO BATERIA ********
			let charging = chr[chr.length - 1]
			let charg = charging ? charging : 'não'
		let batanu = bateria[bateria.length - 1]
		function nv() {
			let nv = (batanu <= 10) ? `${'░'.repeat(9)}` : (batanu <= 20) ? '█▒' + `${'░'.repeat(7)}` : (batanu <= 30) ? `${'█'.repeat(2) + '▒' + '░'.repeat(6)}` : (batanu <= 40) ? `${'█'.repeat(3) + '▒' + '░'.repeat(5)}` : (batanu <= 50) ? `${'█'.repeat(4) + '▒' + '░'.repeat(4)}` : (batanu <= 60) ? `${'█'.repeat(5) + '▒' + '░'.repeat(3)}` : (batanu <= 70) ? `${'█'.repeat(6) + '▒' + '░'.repeat(2)}` : (batanu <= 80) ? `${'█'.repeat(7) + '▒░'}` : (batanu <= 90) ? `${'█'.repeat(8) + '░'}` : (batanu <= 100) ? `${'█'.repeat(9)}` : ''
			return `[█${nv}] ${batanu}%`
		}
			
//verificado de documentos
const doc = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ... {}}, message: {
 "documentMessage": {
   "fileName": "Nome do arquivo",
   "jpegThumbnail": fs.readFileSync('./img/botlogo.png')
 }
              }
      }
		
//Verificado de localização
const loc = { key: { fromMe: false, participant: `551133350237@s.whatsapp.net`, ... {}},
message: {
  "locationMessage": {
     "mimetype": "image/jpeg",
     "name": "nome da localização"
      }
   }
}
       
const replyGp = { key: { fromMe: false, participant: `${me.jid}`,...(from ? { remoteJid: `${from}` } : {})},
message: {
  conversation: 'Sexo bucetal'
  },
  mentionedJid: [`${me.jid}`]
}

        
//verificado roxo + 'Status'
const verify = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "extendedTextMessage": { "text": `Bateria: ${nv()}\nCarregando: ${charg}`}
}}

//verificado nome do grupo + vcard
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }}}
        
//verificado falso freply (fromMe true)
const freply2 = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }}}
        
//verificado marca a pessoa + bateria
const ping = { key: {id: `${ack.key.id}`, fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: `${me.jid}`} : {})}, message: { extendedTextMessage: { text: `Bateria: ${nv()}\nCarregando: ${charg}`}}}

//verificado de catalogo com nome do grupo
const catag = { key: { fromMe: true, participant: `${sender}`, ...(from ? {remoteJid: "6282287486762-1613049930@g.us" } : {})},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg"
					},
					"title": `${nome_bot}`,
					"description": "PODE KIBAR XEREQUINHA KKKKKKKK", 
					"currencyCode": "BRL",
					"priceAmount1000": "2000",
					"retailerId": "ECA KIBADOR",
					"productImageCount": 1
				},
				    "businessOwnerJid": `${ownerNumber[0]}`
		}
	}
}

//verificado de video (preto + 'Grupo')
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6282287486762-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":`${pushname}`,
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': `kkkkkkk`
                        }
                       }
	                  }
	                  
//verificado falso de video + 'Grupo'
const fvideo2 = {
	 key: { 
          fromMe: true,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6282287486762-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":`${pushname}`,
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': `kkkkkkk`
                        }
                       }
	                  }
	                  
//Verificado fromMe true + 'Grupo'
const fromGp = {
	 key: { 
          fromMe: true,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6282287486762-1613049930@g.us" } : {}) 
                },
    message : {
      extendedTextMessage: {
        text: `Bateria: ${nv()}\nCarregando: ${charg}`
      }
    }
}
	                  
//verificado (nome do grupo + mimetype de link de convite)
const fmenu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "557499510904-1612660268@g.us",
			"inviteCode": "NgsCIU2xis8wuwhheush3VHJT",
"caption": `${pushname}`
		}
	}
}

//verificado (nome do grupo sem mimetype)
   const ftext = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: `${me.jid}` } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`kkkk`,
                 "title": `Hmm`
                        }
	                  } 
                     }
                     
//verificado falso com mimetype (marca sender + 'Status')
const fstatus = { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `Bateria: ${nv()}\nCarregando: ${charg}`}}}

//verificado falso (marca ele msm + 'Status')
const fstatus2 = { key: { fromMe: true, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": ``}}}

//verificado status falso sem mimetype
const fstatus3 = { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "extendedTextMessage": { "text" : `Bateria: ${nv()}\nCarregando: ${charg}`}}}


//verificado de resposta em particulare
const fstatus4 = { key: { fromMe: false, participant: `${sender}`, ...(from ? { remoteJid: "557499510904-1612660268@g.us"} : {}) }, message: { "extendedTextMessage": { "text" : `Bateria: ${nv()}\nCarregando: ${charg}`}}}

//verificado de mensagem falsa de sender
const sfake = { key: { 
        participant: `${sender}`, mentionedJid: `${sender}`, ...(from ?
	 { remoteJid: `${from}` } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`Bateria: ${nv()}\nCarregando: ${charg}`
                        }
	                  } 
                     }

//verificado preto + mimetype de foto
const stk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝗕𝗔𝗧𝗘𝗥𝗜𝗔: ${nv()}\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${conn.user.phone.wa_version}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}

//verificado (bot marca ele mesmo)
const qtd = { key: {fromMe: true, participant: '0@s.whatsapp.net', ...{}}, message: {extendedTextMessage: {text: `Bateria: ${nv()}\nCarregando: ${charg}`}}}

//function que eu criei pra mandar botões
async function ativarButton(cond, comando, mess) {
  // cond = condicional de valor booleano (ex: isWelkom)
  // mess = mensagem grande de texto do botão
  // comando = nome do comado que o botão vai chamar (aquele com _)
  let ctt = cond ? `Desativar ${comando}` : `Ativar ${comando}`
  let actionctt = cond ? 'desativar' : 'ativar'
		
    const CttBut = [
          {
            buttonId: `${prefix}${comando}_`, buttonText: { displayText: `${ctt}` 
          }, type: 1 }, {
            buttonId: `${prefix}ativos`, buttonText: { displayText: 'Mostrar ativos' }, type: 1 
          }
          ]
        
        let messCttBut = { contentText: `${mess} ${actionctt}?`, footerText: 'Somente admins podem decidir', buttons: CttBut, headerType: 1 }
        
  const sendantictt =  await conn.sendMessage(from, messCttBut, MessageType.buttonsMessage, {quoted: fstatus4});
  
   conn.relayWAMessage(sendantictt, {waitForAck: true});
}

// function que retorna o array de citação
async function cita() {
		let gp = await conn.groupMetadata(from)
					let membe = gp['participants']
					let man = []
					membe.map( async adm => {
					man.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					return man
}

	function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
						fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
				
				//**** CONTAGEM DIAS PREMIUM ****
				const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(premium).forEach((i) => {
		        if (premium[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return premium[position].expired
		    }
		} 
						const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(premium).forEach((i) => {
		            if (Date.now() >= premium[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`premium expired: ${premium[position].id}`)
		            premium.splice(position, 1)
		            fs.writeFileSync('./database/bot/premium.json', JSON.stringify(premium))
		        }
		    }, 1000)
		} 

			switch(command) {
			  case 'login':
			    try {
					conn.updatePresence(from, Presence.recording)
					if (isUser) return reply('Você já está registrado')
						user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						rg = `*_Registro feito com sucesso_*:\n\n*_Nick_*: ${pushname}\n@${sender.split("@s.whatsapp.net")[0]}\n*_Data_*: ${date}\n*_Hora_*: ${time}\n*_Seu aparelho_*: ${deviceType}\n*_Seu ID_*: ${generateMessageID()}\n\n \n${prefix}menu para ver todos os comandos bot.\n\n𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨: ${user.length}\n𝙎𝙚 𝙛𝙡𝙤𝙙𝙖𝙧 𝙡𝙚𝙫𝙖 𝙗𝙖𝙣/𝙗𝙡𝙤𝙘𝙠\n\n•────•──────────•────•\n║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

☣︎︎ Copyright ® 𝙈𝙖𝙭 𝘽𝙤𝙩 2021 ☣︎︎
`
conn.sendMessage(from, rg, text, {quoted: fstatus3, contextInfo: {mentionedJid: [sender]}}) } catch (erro) {
  reply('Erro, tente novamente :/')
  console.log(erro)
}
      break
				case 'help':
				case 'menu':
				  
				  conn.updatePresence(from, Presence.recording)
				  uptime = process.uptime();
				  if (args.length < 1) {
	 conn.sendMessage(from, help(kyun, uptime, chatst, usuariot, prefix, nv, totalcmd), text, {quoted: fstatus4})
	  } else if (args[0] == 'maker') {
        conn.sendMessage(from, maker(prefix), MessageType.text, {quoted: fstatus4});
            } else {
              reply('Esse menu ainda não existe.\nAs opções são:\noptions here...')
            }
            break
					case 'gay':
					
					if (!isGroup) return reply(msg.only.group)
					  reply('⌛ Calculando, aguarde... ⌛')
					 const gay = `${Math.floor(Math.random() * 100)}`
					 if (gay < 10) {baitl = `Homofóbico`} else if (gay <= 20) {baitl = `Nem tanto`} else if (gay <= 30) {baitl = `Acima da média`} else if (gay <= 40) {baitl = `Só toma cerveja no Toba's Bar`} else if (gay <= 50) {baitl = `Gosta de far uns pega no amigo`} else if (gay <= 60) {baitl = `Mais gay que a maioria das drags`} else if (gay <= 70) {baitl = `Tão gay que sai de casa so pra dar o cu`} else if (gay <= 80) {baitl = `Saiu da casa dos pais pra morar com um negão`} else if (gay <= 90) {baitl = `Pablo Vittar tem inveja`} else if (gay > 90) {baitl = `Se mata mano na moral kkjjk`}
if (args.length < 1) {gayzao = namek} else (gayzao = args[0])
nivel = `Quanto o ${gayzao} é gay:\n *${gay}%*\n\n${baitl}`
fotogay = fs.readFileSync('./img/fotogay.jpeg')
conn.sendMessage(from, fotogay, image, {quoted: ack, caption: nivel, thumbnail: fotogay})
break
case 'gostoso':
  case 'gostosa':

					  reply(`⌛ Calculando, aguarde... ⌛` )
					 const gostosa = `${Math.floor(Math.random() * 100)}`
					 
				if (gostosa < 20) {gata = 'Bixo feio kakkakkakk'} else if (gostosa < 50) {gata = 'Ta na media'} else if (gostosa < 70) {gata = 'Oi totosa'} else if (gostosa < 90) {gata = 'Deliciosa'} else if (gostosa <= 100) {gata = 'Vem aqui em casa pra gente fuder kkk'}
				
fotogata = fs.readFileSync('./img/gostosa.jpeg')
conn.sendMessage(from, fotogata, image, {quoted: ack, caption: `Quanto o(a) ${pushname} é gostoso(a):\n *${gostosa}%*\n${gata}`, thumbnail: fotogata})
break
	case 'gado':
	  case 'gada':
	
	if (!isGroup) return reply(msg.only.group)
	reply('⌛ Calculando, aguarde... ⌛')
const gado = `${Math.floor(Math.random() * 100)}`
if (gado <= 10) {dcgd = `Frio e calculista`} else if (gado <= 20) {dcgd = `Entra em grupo de amizade no zap`} else if (gado <= 30) {dcgd = `Cringe`} else if (gado <= 40) {dcgd = `Joga FF só pra falar em call com as mina`} else if (gado <= 50) {dcgd = `Deixa de sair com os parça pra falar com uma mina que nunca a vai comer`} else if (gado <= 60) {dcgd = `Moderador tira esse mlk do grupo agora!!!!`} else if (gado <= 70) {dcgd = `Boi boi boi, boi da cara preta, pega esse random que gadeia até o capeta`} else if (gado <= 80) {dcgd = `Esse aqui sabe até onde a mina mora kkkkj`} else if (gado <= 90) {dcgd = `Vive no pasto`} else if (gado > 90) {dcgd = `Se morasse aqui perto eu te quebrava na porrada`}
gadice = fs.readFileSync('./img/fotogado.jpeg')
conn.sendMessage(from, gadice, image, {quoted: ack, caption: `*O quanto ${pushname} é gado:* ${gado}%\n\n*${dcgd}*`, thumbnail: gadice})
break
case 'corno':
	case 'corna':

					  reply('⌛ Calculando, aguarde... ⌛')
					  let usercorno = conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify: undefined
const corno = `${Math.floor(Math.random() * 100)}`
cornice = fs.readFileSync('./img/fotogado.jpeg');
conn.sendMessage(from, cornice, image, {quoted: ack, caption: `*O quanto @${usercorno} é corno(a): *${corno}%`, thumbnail: cornice});
chifre = fs.readFileSync('./src/chifre.opus');
conn.sendMessage(from, chifre, MessageType.audio, {quoted: ack, mimetype: 'audio/mp4', ptt:true})
break
case 'hidemarcar':

					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					var value = `${body.slice(12)}`
					var group = await conn.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: ack
					}
					conn.sendMessage(from, options, text)
					break
					case 'join':
				
				if (!isOwner) return reply(msg.only.ownerB)
				if (args.length < 1) return reply('You are burro?')
conn.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]}).catch((e) => {reply('Erro, try again')})
reply('Já estou la.')
break
					case 'wppim':
				
					  conn.sendMessage(from, wppim(prefix), text, { quoted: ack })
                    break
                    case 'db':
                    
                      conn.sendMessage(from, database(prefix), text, { quoted: ack})
                      break
                      case 'wiki':
                      
                        if (args.length < 1) return reply('Cadê a pesquisa tio')
					tekss = body.slice(5)
					reply(msg.wait)
					anu = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${tekss}&apikey=estreia `)
					bufferz = await getBuffer(anu.result.result)
					conn.sendMessage(from, bufferz, text, {quoted: ack})
					break
							case 'infogc':
							  case 'infogp':
							    case 'infogroup':
							
				conn.updatePresence(from, Presence.recording)
				if (!isGroup) return reply(msg.only.group)
					try {
					ppimg = await conn.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
				  suprem = from.split('-')[0];
					let buf = await getBuffer(ppimg)
					inform = (args.length > 1) ? body.slice(8).trim() : ''
					inform += `*Nome do grupo:* \n${groupName}\n*Criador do grupo:*\nwa.me/${suprem}\n*Número de Administradores:*\n${groupAdmins.length}\n*Número de membros:*\n${participants.length}\n\n*Descriçao:*\n${desc}`
					conn.sendMessage(from, buf, image, {quoted: ack, caption: inform, thumbnail: buf})
					break
					case 'block':
					  
				  conn.updatePresence(from, Presence.recording)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return reply('Quem é você?')
if (args.length < 1) return reply('marque o random')
conn.blockUser (`${body.slice(7)}@c.us`, "add")
conn.sendMessage(from, `Membro bloqueado`, text, {
quoted: ack
})
break
					case 'unblock':
					  
				  conn.updatePresence(from, Presence.recording)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return reply('Quem é você?')
if (args.length < 1) return reply('marque o random')
conn.blockUser (`${body.slice(9)}@c.us`, "remove")
reply('Membro desbloqueado')
break
				   case 'playstore':
				     
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  conn.sendMessage(from, store, MessageType.text, {quoted: ack})
                  break
					case 'wa.me':
					case 'wame':
					
                  conn.updatePresence(from, Presence.recording) 
                  options = {
                  text: `━━━━━━━━━❮◆❯━━━━━━━━━\n「 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n━───────⊹⊱✙⊰⊹───────━\n\n║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

☣︎︎ Copyright © 𝙈𝙖𝙭 𝘽𝙤𝙩 2021 ☣︎︎
`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
			      case 'futebol':
			      
				if (args.length < 1) return reply(`Parâmetro incorreto.\n${prefix}futebol texto1|texto2`)
				reply(msg.wait) 
				ct = body.slice(9)
				zha1 = ct.split("|")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=kingsboybot&text1=${zha1}&text2=${zha2}`)
				conn.sendMessage(from, zhain, image, { quoted: ack, caption: ct })
                    break
			      case 'flaming':
			      
			      if (args.length < 1) return reply('Cadê a poha do texto?')
			      reply(msg.wait)
cum = body.slice(9)
pqp = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${cum}`)
conn.sendMessage(from, pqp, image, {quoted: ack, caption: cum})
break
   case 'pornhub':
     
     if (!isNsfw && isGroup) return reply(msg.only.nsfw)
          if (args.length < 1) return reply('Cadê o texto, mano?')
          reply('🔎 Pesquisando, aguarde...')
          try {
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    porno = `===============\n`
                    for (let bokep of anu.result) {
                    porno += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    conn.sendMessage(from, porno, MessageType.text, {quoted: ack})
          } catch (erro) {
            reply(msg.error.again)
            console.log(erro)
          }
			     	break  
			      case 'report':
			      
			        conn.updatePresence(from, Presence.recording)
			        const bug = body.slice(8)
			        if (args.length < 1) return reply('Escreva o bug tbm!\nEspecifique com detalhes qual comando não está funcionando.')
			          repo = `────────────────
⚠️ *ERRO REPORTADO* ⚠️
*Usuário que reportou:*\napi.whatsapp.com/send?phone=${sender.split("@")[0]}\n*Tempo Ativo:*\n${kyun(uptime)}\n\n*Descrição do Problema:*\n${bug}
────────────────`
                  conn.sendMessage("559284928452@s.whatsapp.net", repo, text, { quoted: fstatus3});
                  reply('Erro reportado ao criador com sucesso!\nObrigado ;)')
			      break
			      case 'botfdp':
			      
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Vai te foder seu merda, comi tua mae aquela vaca`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
			      case 'user':
			          
			        listusr = `Contagem dos usuários registrados:\n${user.length}`
			        botlg = await conn.getProfilePicture(sender).catch(e => {
			          fs.readFileSync('./img/botlogo.png')
			        });
			 conn.sendMessage(from, listusr, text, {quoted: fstatus4, thumbnail: (botlg, 'base64')});
			        break
			        case 'location':
			          
			          conn.sendMessage(from, {
			           degressLatitude: 24.234190,
			           degressLongitude: 32.678954
			          }, MessageType.location, {quoted: ping})
			          break
			          case 'catalogo':
			            case 'sexo':
			            
			            try {
			   
    const catalogo = 'title:Linux\n'
    + 'description:Sistema operacional\n'
    + 'currencyCode:BRL\n'
    + 'priceAmount1000:350000'
    + 'retailerId:COD203\n'
    + 'url:https://npmjs.org/\n'
    + 'productImageCount:1\n'
    + 'salePriceAmount1000:0\n'
    + 'businessOwnerJid:559284928452@s.whatsapp.net'
		
		conn.sendMessage(from, catalogo, MessageType.productMessage);
		 } catch (e) {
		  reply(`${e}`)
		  console.log(e)
		}
			            break
			        case 'ownergp':
			          
			          if (!isGroup) return reply(msg.only.group)
			          adm_supremo = from.split('-')[0]
			          grupo_dono = `O criador deste grupo é\nwa.me/+${adm_supremo}.`
			          conn.sendMessage(from, grupo_dono, MessageType.text, {quoted: ack})
			        break
			        case 'ephemeral':
			          
			          if (!isGroup) return reply(msg.only.group)
			          if (!isGroupAdmins) return reply(msg.only.admin)
			          if (!isBotGroupAdmins) return reply(msg.only.Badmin)
			          if (args.length < 1) return reply('Hummmm')
			          if (args[0] == 'on') {
			 conn.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
			 reply('*DONE*\nMessagens temporárias ativadas.')
			          } else if (args[0] == 'off') {
			    conn.toggleDisappearingMessages(from, 0)
			    reply('*DONE*\nMessagens temporárias desativadas.')
			          } else {
			            reply(`'on' para ativar, 'off' para desativar.`)
			          }
			          break
			        case 'perfil':
			          
			          let userL = isLevelingOn ? getLevelingLevel(sender) : '_[OFF]_'
			          let userX = isLevelingOn ? getLevelingXp(sender) : '_[OFF]_'
			     pfl = `*_BANCO DE DADOS_*\n\n*_NOME_*: ${pushname}\n*_NÚMERO_*: ${namek}\n*_DATA_*: ${date}\n*_HORA_*: ${time}\n*_LEVEL_*: ${userL}\n*_XP_*: ${userX}\n*_PATENTE_*: ${role}\n*_SEU ID_*: ${generateMessageID()}\n\n𝖠𝗎𝗆𝖾𝗇𝗍𝖾 𝗌𝖾𝗎 𝗑𝗉 𝖾 𝖽𝖾𝗌𝖻𝗅𝗈𝗊𝗎𝖾𝗂𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌.`
			     try {
			       foto_usuario = await conn.getProfilePicture(sender);
			     } catch {
			       foto_usuario = fs.readFileSync('./img/botlogo.png');
			     }
			    let pfil = await getBuffer(foto_usuario)
			   conn.sendMessage(from, pfil, image, {quoted: fstatus3, caption: pfl, thumbnail: pfil})
			          break
			          case 'level':
			            
					if (!isGroup) return reply(msg.only.group)
				if (!isLevelingOn) return reply(msg.levelnoton)
					if (userLevel === undefined && userXp === undefined) return reply(msg.levelnol)
					resul = `LEVEIS\n~> Nome ${pushname}\n~> Número : ${sender.split('@')[0]}\n~> Seu XP :  ${userXp}\n~> Patente: ${role}\n~> Seu Level : ${userLevel}`
					conn.sendMessage(from, resul, MessageType.text, {quoted: ack, contextInfo: {mentionedJid: [sender]}})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(msg.only.group)
			ativarButton(isLevelingOn, 'leveling', 'Esta função quando ativa,\npermite os membros\nsubirem de nível\nconforme conversam.\nQuer mesmo');
			break
					case 'leveling_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isLevelingOn) {
						_leveling.push(from)
						fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
						reply('*DONE*\nModo leveling ativo.')
					} else if (isLevelingOn) {
					  let position = false
          Object.keys(_leveling).forEach((i) => {
                if (_leveling[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						_leveling.splice(position, 1)
						fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))}
						reply('*DONE*\nLeveis desbloqueados neste grupo.')
					}
					break
					
					case 'anagrama':
					  
						if(!isGroup) return reply(msg.only.group)
					  const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
					  if(!isGroupAdmins) return reply(msg.only.admin)
				   if(args.length == 0) return reply('1 para ativar, 0 para desativar')
						if (args[0] == '1') {
							if(fs.existsSync(`./database/json/anagrama-${from}.json`)) {
							  let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/json/anagrama-${from}.json`))
							  reply(`o jogo já foi iniciado neste grupo:\n\npalavra: ${dataAnagrama2.embaralhada}\ndica: ${dataAnagrama2.dica}
				  `)} else {
					  fs.writeFileSync(`./database/json/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
					  conn.sendMessage(from, `
		 🎓 ANAGRAMA 🎓
 ╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
 │ ➣ Jogador: ${namek}
 │ ➣ Anagrama: ${palavrasANA[anaaleatorio].embaralhada}
 │ ➣ Dica: ${palavrasANA[anaaleatorio].dica}
 ╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸ 
				  `,  MessageType.text, {quoted: ack})
				  }                  
						} else if (args[0] == '0') {
						  if(!fs.existsSync(`./database/json/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				  fs.unlinkSync(`./database/json/anagrama-${from}.json`)
				  reply("desativado com sucesso")
						}
					break
			      case 'botgay':
			      
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Pergunta ta tua mãe se eu sou gay kkkk ela acha o contrário`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
			       case 'botfalido':
			       
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: ` Vê se faz um melhor seu poha, duvido fazer igual!`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
			       case 'botbaiano':
			       case 'botbaianor':
			       
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Cala a sua boca e me deixa durmir seu merdinha 😡`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
			       case 'botputa':
			       
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Puta é a sua mãe aquela cadela 😠`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: ack } )
			      break
					case 'qrcode':
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return conn.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: ack})
					reply('Gerando qr code, aguarde...')
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					conn.sendMessage(from, bufferr, image, {quoted: ack})
					break
					case 'all':
					
conn.updatePresence(from, Presence.recording)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(msg.only.group)
if (!isGroupAdmins) return reply(msg.only.group.admin)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim() : ''
//todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
mn1 = `${Math.floor(Math.random() * 8) +1}`
mn = `${Math.floor(Math.random() * 998) +1}`
todos += `║➸@${mem.jid.split('@')[0]} > ${mn1},${mn},00\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒Banco༒⚋◑╾╼╮\n║➸'+ todos+'\n', members_id, true)
break
case 'rankgay':

try{
if(!isGroup) return reply(msg.only.group)
d = []
viado = `🏳️‍🌈 Os mais gay 🏳️‍🌈:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
viado += `🏳️‍🌈 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(viado, d, true, {quoted: ack})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'rankcorno':

try{
if(!isGroup) return reply(msg.only.group)
d = []
boi = `🐃 Os mais chifrudos 🐃:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
boi += `🐃 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(boi, d, true, {quoted: ack})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'ranklindo':

try{
if(!isGroup) return reply(msg.only.group)
d = []
top1 = body.slice(9)
bnt = `😎 Os mais lindos 😎:\n😎 @559284928452\n`
for(i = 0; i < 4; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
bnt += `😎 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(bnt, d, true, {quoted: ack})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'rankgado':

try{
if(!isGroup) return reply(msg.only.group)
d = []
gds = `🐂 Os mais gados 🐂:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
gds += `🐂 = @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(gds, d, true, {quoted: ack})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'rankxp':
  try {
  
  if (!isGroup) return reply(msg.only.group)
_level.sort((a, b) => { return a.xp - b.xp })
fd = 'Rank XP:\n\n'
let position = false 
function GetXp(arg) {
  Object.keys(_level).forEach((i) => {
  if (_level[i].jid == _level[i]) {
    position = i
  }
  if (position !== false) return _level[i].xp
});
}
for (let i = 0; i < 10; i++) {
const xp = GetXp([i])
fd = `~> ${xp}\n\n`
}
reply(fd)
} catch (e) {
  reply(`${e}`)
  console.log(e)
}
  break
case 'smule':

					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(msg.error.Iv)
					reply(msg.wait)
					thumb = await getBuffer(anu.thumb)
					conn.sendMessage(from, thumb, image, {quoted: ack, caption: teks})
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					conn.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: ack, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
					case 'play2':
					  try {
					
					  if (args.length < 1) return reply('Cadê o nome da música krlh?')
                reply('🔎 Procurando música, aguarde...🔎')
                anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.url)
                dur = anu.duration.split(':')[0]
                if (dur > 6) return reply(`Limite de 6 minutos por música. Esta tem ${anu.duration} MIN.`)
             conn.sendMessage(from, lagu, MessageType.document, {quoted: fromGp, mimetype: 'audio/mp4', filename: `${anu.result.title}.M4A`, contextInfo: {
               externalAdReply: {
                 "title": `${anu.result.title}`,
                 "mediaType": 1,
                 "thumbnail": buffer,
                 "sourceUrl": `${anu.url}`
               }
             }});
					     } catch (erro) {
                  reply(erro)
                  console.log(erro)
                }
                break
                case 'play3':
                  try {
					  if (args.length < 1) return reply('Cadê o nome da música krlh?')
                reply('🔎 Procurando música, aguarde...🔎')
                const teks = body.slice(7)
                anu = await fetchJson(`https://jonaz-api-v2.herokuapp.com/play?music=${teks}`)
    let butto = [{ buttonId: `${prefix}option_player mp3 ${anu.url_dl} ${sender}`, buttonText: { displayText: '⎋ Via MP3' }, type: 1 }, { buttonId: `${prefix}option_player m4a ${anu.url_dl} ${sender}`, buttonText: { displayText: '⎆ Via M4A' }, type: 1 }]
        
      let butPlay = { contentText: `Quer ouvir a\nmúsica? Escolha\no método de download.`, footerText: 'mais opções\nem breve...', buttons: butto, headerType: 1 }
        
  const sendPlay =  await conn.sendMessage(from, butPlay, MessageType.buttonsMessage);
  
   conn.relayWAMessage(sendPlay, {waitForAck: true});
                  } catch(e) {
                    reply('Erro encontrado. Talvez o servidor tenha caído.')
                    console.log(e)
                  }
                break
                case 'option_player':
                  if (sender != args[2]) return reply('*_Apenas quem pediu o comando pode decidir_*')
               lagu = await getBuffer(args[1])
                  if (args[0] == 'm4a') {
                thb = await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUXb6IGiy678GXoXE_R9g2-ASsR2VLeOC9w&usqp=CAU")
               conn.sendMessage(from, lagu, MessageType.document, {quoted: fromGp, mimetype: 'audio/mp4', filename: `${anu.titulo}.M4A`, contextInfo: { externalAdReply: {
                        title: `${anu.titulo}`,
                        mediaType: 1,
                        body: "siga @LucasHRTeam",
                        thumbnail: thb,
                      sourceUrl: `${anu.link}`
                      }}});
                  } else if (args[0] == 'mp3') {
                    conn.sendMessage(from, lagu, MessageType.audio, {quoted: fromGp});
                  }
                break
case 'play':
  try {
reply('Procurando resultado...')
var srch = body.slice(6)
ytbusca = await yts(srch);
ytbr = ytbusca.all
let { yt } = require('./lib/y2mate3');
q = encodeURIComponent(ytbr[0].url)
reply(JSON.stringify(ytbr[0], null, 4))
lhg = await yt(q, '128kbps', 'mp3', '128', 'en61').catch(e => {
})
console.log(lhg)
/*reply(JSON.stringify(String(lhg), null, 4))
then = await getBuffer(lhg.link)
conn.sendMessage(from, then, audio, { quoted: fromGp, mimetype: 'audio/mp4'})*/
} catch (e) {
  reply(String(e))
  console.log(e)
}
break
					case 'setdesc':
					  case 'mudardesc':
					
			    	 if (!isGroup) return reply(msg.only.group)
				     if (!isGroupAdmins) return reply(msg.only.admin)
			   	     if (!isBotGroupAdmins) return reply(msg.only.Badmin)
			   	     if (args.length < 1) return reply('Hmmmm')
				     conn.groupUpdateDescription(from, `${args[0]}`)
				     conn.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: ack})
				     break
				     case 'setname':
				       
             if (!isGroup) return reply(msg.only.group)
			    if (!isGroupAdmins) return reply(msg.only.admin)
				if (!isBotGroupAdmins) return reply(msg.only.Badmin)
				if (args.length < 1) return reply('Hmmmm')
                conn.groupUpdateSubject(from, `${body.slice(9)}`)
                conn.sendMessage(from, 'Nome alerado com sucesso.', text, {quoted: ack})
					break
					case 'pack':
					
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
                    conn.sendMessage(from, pack(prefix), text, { quoted: ack })
                    break
                    case 'addhentai':
                      
                      if (!isOwner) return reply(msg.only.ownerB)
                      if (args.length < 1) return reply('Manda o link filha da puta.')
                      linkHentai = args[0]
                      if (hentaiPesado.includes(linkHentai)) return reply('Já tem essa foto.')
                      try {
                    Resul = await getBuffer(linkHentai)
                      hentaiPesado.push(linkHentai)
                      fs.writeFileSync('./database/json/hentai.json', JSON.stringify(hentaiPesado))
                      conn.sendMessage(from, Resul, MessageType.image, {quoted: ack, caption: `Foto adicionada à lista hentai\n\nLink: ${linkHentai}\nTotal: ${hentaiPesado.length}`, thumbnail: Resul})
                      } catch (e) {
                        reply(`Erro. talvez ${linkHentai} não seja um link.`)
                        console.log(e)
                      }
                      break
      case 'hentai':
  try {
    
    if (!isGroup && !isPremium && !isOwner) return reply('Apenas usuários premium podem usar esta função no privado.')
  if (!isNsfw && isGroup) return reply(msg.only.nsfw)
    const fotoHentai = hentaiPesado[Math.floor(Math.random() * hentaiPesado.length)]
      pict = await getBuffer(fotoHentai);
      
  conn.sendMessage(from, pict, MessageType.image, {quoted: ack, caption: 'Humm hentai é tudo de bom', thumbnail: pict});
  } catch (e) {
       reply(`${e}`)
            console.log(e)
                      }
                      break
                    case 'chentai':
                    
                    conn.sendMessage(from, chentai(prefix), text, { quoted: ack })
                    break
                    case 'daftarvip':
                    
                      conn.sendMessage(from, daftarvip(prefix), text, { quoted: ack })
                      break
                    case 'premium':
                    case 'vip':
                    
                      var premi = `*Você não é um usuário premium. para ter acesso, entre em contato com o criador, e obtenha os valores. Digite ${prefix}owner*`
                      if (isPremium) {
                        premi = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────'
                      } 
                      if (isOwner) {
                        premi = '*O criador sempre é premium.*'
                        
                      }
                      conn.sendMessage(from, premi, text, { quoted: ack })
                      break
                      case 'checkprem':
				const cekExp = ms(expiredCheck(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
                    case 'xvideos':
                    case 'xnxx':
                    
                      conn.sendMessage(from, xvideos(prefix), text, { quoted: ack })
                      break
                      case'dono':
                        case 'criador':
                      case 'owner':
                    conn.sendMessage(from, {displayname: "Lucas Hora", vcard: vcard}, MessageType.contact, { contextInfo: { externalAdReply: {
                        title: "Clique aqui para falar com o criador.",
                        mediaType: 1,
                        body: 'Siga @LucasHRTeam',
                        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6824BOOnkMeQQ7UMATA1CQtOW-eL0keV1g&usqp=CAU',
                      sourceUrl: "https://wa.me/+5592984928452?text=Oi%20Lucas,%20meu%20nome%20é:"
                      }
                    }})
                    conn.sendMessage(from, 'Contato do meu criador. fique à vontade para entrar em contato.', text, {quoted: { key: { fromMe: true, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": 'Meu criador ^~^'}}}})
                    break
                    case 'doar':
                      case 'donate':
                        
                        doação = 'Caro usuário, este bot possui vários comandos. Quase todo dia há uma nova atualização.\nCaso queira fazer uma doação, aceito pix. Ou recarga de celular:\n+55 92 98492-8452\nCLARO-BR\n\nLucas Santos Da Hora\nChave pix: telefone'
                        reply(doação)
                        break
				case 'info':
				
				uptime = process.uptime();
				var dt = new Date();
			//	var dia = dt.toLocaleDateString();
				const meuNome = me.name
				const NumberBot = me.jid.split('@')[0]
				const blck = blockcmd.length
				const serverV = conn.version
				const navegador = conn.browserDescription
				
				runtime = `${kyun(uptime)}`
					exec('npm i -v @adiwajshing/baileys && node -v && npm i -v', (erro, stdout) => {
					  if (stdout) {BlsServer = `${stdout}`} else {BlsServer = `${stdout}`}
					conn.sendMessage(from, informs(dia, meuNome, NumberBot, prefix, blck, runtime, totalcmd, serverV, navegador, wa_version, BlsServer, ram), text, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${from}` } : {})}, message: { extendedTextMessage: { text:`Bateria: ${nv()}\nCarregando: ${charg}`
                        }
	                  } 
                     }});
					});
                     break
                     case 'grupos':
               let grs = await conn.chats.all().filter(q => q.jid.endsWith('@g.us'))
               g = ''
      for (let i = 0; i < grs.length; i++) {
          const gr = await conn.groupMetadata(grs[i].jid)
              g += `${'-·-'.repeat(20)}\nNOME: ${grs[i].name}\nDONO: wa.me/+${grs[i].jid.split('-')[0]}\nMEMBROS: ${gr.participants.length}\n${'-·-'.repeat(20)}`
      }
               conn.sendMessage(from, g, MessageType.text, {quoted: fstatus4});
                       break
          case 'fakemsg':
        
        if (!isGroup) return reply(msg.only.group)
        if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque alguma mensagem')
        if (args.length < 1) return reply('Precisa do texto')
        if (!budy.includes('|')) return reply('Precisa da barra |.')
        complet = body.slice(9);
        const fakeText = complet.split('|')[0];
        const inf = complet.split('|')[1];
    const mentio = ack.message.extendedTextMessage.contextInfo.participant
    const mak = ack.key.remoteJid
    if (inf === undefined || inf === null || fakeText === undefined || fakeText === null) return reply('Coloque os dois parâmetros, separados por |')
      conn.sendMessage(from, inf, text, {quoted: { key: { 
        participant: `${mentio}`, mentionedJid: `${mentio}`, ...(from ?
	 { remoteJid: `${from}` } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`${fakeText}`
                        }
	                  } 
                     }});
					break
				case 'blocklist':
				
					listabl = `Esta é a lista de comandos bloqueados:\nTotal: ${blockcmd.length}\n`
					for (let block of blockcmd) {
						listabl += `~> ${block.replace(blockcmd)}\n`
					}
					conn.sendMessage(from, listabl, text, {quoted: ack})
					break
				case 'ocr':
				
					if ((isMedia && !ack.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
						const media = await conn.downloadAndSaveMediaMessage(encmedia)
						reply(msg.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Somente fotos!')
					}
					break
				case 'tp':
				
					if (args.length < 1) {
						return reply('Escolha um tema entre 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Cadê o texto?')
					}
					reply(msg.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						conn.sendMessage(from, await getBuffer(anu), image, { caption: msg.success, quoted: ack })
					} else {
						reply('[❗] Ocorreu um erro, escolha outro tema')
					}
					break
				case 'ep':
				
					if (args.length < 1) {
						return reply('Escolha um tema entre 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Cadê o texto?')
					}
					reply(msg.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						conn.sendMessage(from, await getBuffer(anu), image, { caption: msg.success, quoted: ack })
					} else {
						reply('[❗] Ocorreu um erro, escolha outro tema')
					}
					break
					case 'fordward':
					  
					  if (!isGroup) return reply(msg.only.group)
	   conn.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
				case 'tahta':
				
					if (args.length < 1) return reply('Cadê o texto?')
					anu = `https://mhankbarbar.moe/api/htahta?text=${args.join(' ')}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						conn.sendMessage(from, await getBuffer(anu), image, { quoted: ack, caption: msg.sucess })
					} else {
						reply('Deu erro caralho :/')
					}
					break
					case 'readall':
					  case 'vertudo':
					  
					if (!isOwner)return reply(msg.only.ownerB)
					var chats = await conn.chats.all()
      chats.map( async ({ jid }) => {
                          await conn.chatRead(jid)
                    })
  const unread = await conn.loadAllUnreadMessages();
jac = `*DONE!*\n*Total chats*: ${chats.length}\n*Unread Messages*: ${unread.length}`
					await conn.sendMessage(from, jac, MessageType.text, {quoted: ack})
					break
					case 'criargp':
					  
					  if (!isOwner) return reply('Quem é você?')
					  if (args.length < 1) return reply('Falta o nome do grupo.')
					gc = body.slice(9)
					conn.groupCreate (`${gc}`, [`${sender}`, `${sender}`])
					console.log ("Grupo criado com sucesso")
					break
							case 'stickerhide':
							  case 'cita':
							    try {
							if (!isGroup) return reply(msg.only.group)
							if (!isGroupAdmins) return reply(msg.only.admin);
						if (type == 'conversation') return reply('Citar oq?')
				var gr = await conn.groupMetadata(from)
			var membe = gr['participants']
		 var mbr = []
					membe.map( async adm => {
					mbr.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
				encme = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const hideSave = await conn.downloadAndSaveMediaMessage(encme)
							const hide = fs.readFileSync(hideSave)
				if (ack.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage) {
						conn.sendMessage(from, hide, MessageType.sticker, {contextInfo: {mentionedJid: mbr}})
						} else if (ack.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage) {
				  if (args.length < 1) return reply('Hummmmmmm')
		conn.sendMessage(from, hide, MessageType.document, {mimetype: 'application/pdf', filename: body.slice(5), contextInfo: {mentionedJid: mbr}})
		} else if (ack.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage) {
						  conn.sendMessage(from, hide, MessageType.audio, {ptt: true, contextInfo: {mentionedJid: mbr}})
		} else if (type == 'imageMessage' || isQuotedImage) {
		  conn.sendMessage(from, hide, MessageType.image, {thumbnail: null, caption: body.slice(5), contextInfo: {mentionedJid: mbr}})
						  } else {
			reply('_No momento apenas stickers, audios e docs são marcáveis. Mais opções em breve._')
						}
  	fs.unlinkSync(hideSave)
		  } catch (e) {
		    console.log(e)
		  }
					break
					  case 'boton':
			butaa = [{buttonId: `${prefix}ping`,buttonText:{displayText: 'SEXO?'},type:6}]
			
 locMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./img/botlogo.jpeg`), 'imageMessage', {thumbnail: null})).imageMessage
 
 buttonMsg = {
   degressLatitude: 0,
   degressLongitude: 0,
   name: "sexo",
   thumbnail: locMsg,
   buttons: butaa
 }
/* buttonMsg = {
 contentText: `CUCETA PRETA`,
 footerText: `ai mia bussetia`,
 locationMessage: locMsg,
 buttons: butaa,
 headerType: 4 
 }
*/
  const pik =  await conn.prepareMessageContent(from, buttonMsg, MessageType.locationMessage);
  
   conn.relayWAMessage(pik, {waitForAck: true});
        break
        		  case 'lboton':
			buta = [{buttonId: `${prefix}ping`,buttonText:{displayText: 'SEXO?'},type:1}]
			
 imageMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./img/botlogo.jpeg`), 'imageMessage', {thumbnail: null})).imageMessage
 
 buttonsMsg = {
 contentText: `CUCETA PRETA`,
 footerText: `ai mia bussetia`,
 imageMessage: imageMsg,
 buttons: buta,
 headerType: 4 
 }
        
  const pika =  await conn.sendMessage(from, buttonsMsg, MessageType.buttonsMessage);
  
   conn.relayWAMessage(pika, {waitForAck: true});
        break
        case 'menulite':
          
          
          const but = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu Principal'}, type: 1},
  {buttonId: `${prefix}figumenu`, buttonText: {displayText: 'Menu Sticker'}, type: 1},
  {buttonId: `${prefix}ping`, buttonText: {displayText: 'Latência'}, type: 1}
]

const texto_botao = {
    contentText: 'Veja as opções',
    footerText: `Caso não apareça as\nopções pra você,\nenvie ${prefix}menu`,
    buttons: but,
    headerType: 1
}

const sendMsg = await conn.sendMessage(from, texto_botao, MessageType.buttonsMessage, {quoted: fstatus4});

conn.relayWAMessage(sendMsg, {waitForAck: true});
        break
        case 'auto':
          
          const ButAuto = [{
            buttonId: `${prefix}ping`, buttonText: {
              displayText: 'Latência'
            },
            type: 1
          }]
          
              const aut = {
                contentText: 'Title 01',
            footerText: 'Title 02',
            buttons: ButAuto,
            headerType: 1
              }
              
       const sendBut = await conn.sendMessage(from, aut, MessageType.buttonsMessage, {quoted: ack, contextInfo: {
         forwardingScore: 99999999999,
         isForwarded: true
       }});
       
       conn.relayWAMessage(sendBut, {waitForAck: true})
            im = fs.readFileSync('./img/botlogo.png');
          break
          case 'adivinha':
            if (!isGroup) return reply(msg.only.group)
        let mencionado = ack.message.extendedTextMessage.contextInfo.mentionedJid[0]
        if (!mencionado) return reply('Mencione alguem com @.')
          try {
            atr = []
          cta = await conn.chats.all().filter(v => v.jid == from)
          atr.push(cta)
      // todas as mensagens do chat
      var msgChat = atr[0][0].messages
      
      let android = await msgChat.all().filter(c => c.key.id.length > 21)
      
      let ios =  await msgChat.all().filter(d => d.key.id.substring(0, 2) == '3A')
      
      let wapp = await msgChat.all().filter(p => p.key.id.length < 21 && p.key.id.substring(0, 2) != '3A')
      
    // todas as mensagens da pessoa mencionada
    msg_mentioned = await msgChat.all().filter(a => a.participant == mencionado)
    // posição da utima mensagem
    ultima = msg_mentioned.length - 1
  
	let typeDevice = msg_mentioned[ultima].key.id.length > 21 ? "Android" : msg_mentioned[ultima].key.id.substring(0,2) == "3A" ? "iOS" : "WhatsApp WEB"
	
  tipoMsg = `*_Adivinha hardcore:_*
      
      *_Seu aparelho_*: ${deviceType}
      *_Aparelho do @${mencionado.split('@')[0]}_*:
      ${typeDevice}
      
      *_Total grupo_*: ${msgChat.length}
      *_Android_*: ${android.length} mensagens
      *_IOS_*: ${ios.length} mensagens
      *_Whatsapp WEB_*: ${wapp.length} mensagens`

	conn.sendMessage(from, tipoMsg, MessageType.text, {quoted: ack, contextInfo: {mentionedJid: [mencionado]}})
          } catch (e) {
        reply('Não encontrei nenhuma mensagem dessa pessoa no chat')
            console.error(e)
          }
            break
        case 'figumenu':
			        case 'menufigu':
			          
const botao_lista = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "MENU STICKER",
buttonText: "MaxBOT",
description: `Você pode fazer sticker\nusando 3 comandos\ndiferentes. Veja\naqui a diferença\nentre eles.`,
footerText: 'Follow me on github:\n@LucasHRTeam',
listType: 1,
"sections": [{//botão 1
"title": "Sticker formato original",
"rows": [{
"title": `${prefix}sticker`,
"rowId": `${prefix}sticker`},
]}, //*botão 2
{ "title": "Sticker formato 1:1",
"rows": [{
  "title": `${prefix}fsticker`,
  "rowId": `${prefix}fsticker`},
]},
// Separados por tags *botão 3
{ "title": "Sticker com foco no centro",
"rows": [{
  "title" : `${prefix}st2`,
  "rowId": `${prefix}st2`},
]},
// Separados por tags *botão 4
{ "title": "Contato",
"rows": [{
"title": "criador",
"description": "Enviar contato do criador",
"rowId": `${prefix}criador` },
]}
]
})
})
let preparedconn = await conn.prepareMessageFromContent(from, botao_lista, {quoted: fstatus});
conn.relayWAMessage(preparedconn, {waitForAck: true})
break
case 'votar':
  case 'next':
  if (!isGroup) return reply(msg.only.group)
  if (args.length < 1) {theme = 'Tema aleatório. Por favor responda'} else {theme = body.slice(7)}
  const optionsList = WAMessageProto.Message.fromObject({
      listMessage: WAMessageProto.ListMessage.fromObject({
        title: "Lista By Lucas Hora",
        buttonText: "Votar",
        description: `Tema da votação:\n${theme}`,
        footerText: "Lista By Lucas Hora",
        listType: 1,
        "sections": [ // AQUI COMEÇA AS OPÇÕES DA LISTA
          {
          "title": "Opção 01",
          "rows": [{
          "title": "Sim",
          "description": "Concordo",
          "rowId": `${prefix}resultado_sim`,}
          ]},
          {
            "title": "Opção 02",
            "rows": [{
              "title": "Não",
              "description": "Discordo",
              "rowId": `${prefix}resultado_nao`,
            }]// CHAVE ROWS BOTÃO 2
          },
          {
            "title": "Opção 03",
            "rows": [{
              "title": "Proxima pergunta",
              "rowId": `${prefix}next`,
            }]
          }
          ] // CHAVE DE SECTIONS (ONDE TERMINA)
      })
    })
  let vote_list = await conn.prepareMessageFromContent(from, optionsList, {quoted: fromGp});
  
  conn.relayWAMessage(vote_list, {waitForAck: true});
  break
  case 'resultado_sim':
    reply('Computado. Resposta: Sim\nVote quantas vezes quiser')
    break
    case 'resultado_nao':
      
    reply('Computado. Resposta: Não\nVote quantas vezes quiser')
    break
					case 'take':
					case 'roubar':
					if (!isQuotedSticker) return reply(`Você precisa marcar uma figurinha com "${prefix}take nome|autor`)
					if (!budy.includes("|")) return reply('Parâmetro incorreto!\nPrecisa do |')
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await conn.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Erro caralho :/')
					conn.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ack})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'nobg':
if (isMedia && !ack.message.videoMessage || (isQuotedImage)) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(msg.wait)
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Erro, tente novamente :/')
exec(`webpmux -set exif ${addMetadata('MaxBOt', 'HRTeam')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply('Erro parça faz de novo ae')
conn.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: ack})
fs.unlinkSync(ranw)
})
})
})
} else {
  reply('_Use este comando para fazer stickers sem o fundo, mas apenas fotos._')
}
				  break
case 'sticker':
  
if (isMedia && !ack.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(msg.wait)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('MAX', 'BOT')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(`${error}`)
reply(`Caso a sticker não fique boa, use ${prefix}fsticker ou ${prefix}st2.`)
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ping})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=${fps}, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if (isMedia && ack.message.videoMessage.seconds < 11 || isQuotedVideo && ack.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(msg.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('MAX', 'BOT')} ${ran} -o ${ran}`, async (error) => {
reply('Caso a sticker fique parada, diminua o fps do vídeo.\nColoque o n° após o comando.')
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fstatus})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=${fps}, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'fsticker':
  
if (isMedia && !ack.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
const media = await conn.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('MAX', 'BOT')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=${fps} -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
reply(`Se a sticker ficar muito achatada,\ntente usar ${prefix}sticker ou ${prefix}st2`)
conn.sendMessage(from, buffer, sticker, {quoted: fstatus})
fs.unlinkSync(rano)
})
} else if (isMedia && ack.message.videoMessage.seconds < 11 || isQuotedVideo && ack.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) {
  reply(msg.wait)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
const media = await conn.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('MAX', 'BOT')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Ocorreu um erro na conversão de ${tipe} para sticker*`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=${fps} -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
reply('Caso a sticker fique parada, diminua o fps do vídeo.\nColoque o n° após o comando.')
conn.sendMessage(from, buffer, sticker, {quoted: fstatus});
fs.unlinkSync(rano)
})
} else {
reply('Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos')
}
break
//STICKER 1:1 COM FOCO NO CENTRO
case 'stk2':
case 'st2':
case 'fig2':
  
        if (isMedia && !ack.message.videoMessage || isQuotedImage) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ack
                        const media = await conn.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('SEM PLUGIN', 'MAX BOT')} ${ran} -o ${ran}`, async(error) => {
           reply(`Se a sticker estiver cortada, use ${prefix}fsticker ou ${prefix}sticker`)
      conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fstatus});
                                    
                   fs.unlinkSync(media)
                   fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=${fps}`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else if (isMedia && ack.message.videoMessage.seconds < 11 || isQuotedVideo && ack.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) {
                      reply(msg.wait)
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ack
                        const media = await conn.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`Ocorreu um erro na conversão de ${tipe} para sticker`)
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('SEM PLUGIN', 'MAX BOT')} ${ran} -o ${ran}`, async(error) => {
      reply('Caso a sticker fique parada, diminua o fps do vídeo.\nColoque o n° após o comando.')
          conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fstatus});
                    fs.unlinkSync(media)
                   fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=${fps}`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou video com até 10 segundos`)
                    }
                    break
                    case 'translate':
                      
                      if (!isGroup) return reply(msg.only.group)
                      if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Please quotes a text message.')
                      lingua = args[0]
                      texto = ack.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                      if (args.length < 1) return reply('Please choose the linguage code')
                      translate(`${texto}`, {to: `${lingua}`}, gotopts).then(res => {
                      console.log(res.text)
                      })
                      break
					case 'voz':
				case 'tts':
				  
					if (args.length < 1) return conn.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: ack})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return conn.sendMessage(from, 'Cadê o texto tio', text, {quoted: ack})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Quer escrever a bíblia krlh?')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							if (err) return reply(msg.error.again)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							conn.sendMessage(from, buff, audio, {quoted: ack, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'ttslist':
					
					  conn.sendMessage(from, linguagens(prefix, pushname), text, { quoted: ack})
					  break
					case 'tomp3':
					
                	conn.updatePresence(from, Presence.recording) 
					if (!isQuotedVideo) return reply('Marque o vídeo.')
					  encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					  reply('Convertendo...')
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ack})
						fs.unlinkSync(ran)
					})
					break
					case 'cheguei':
					
					  if (!isGroup) return reply('Usa só nos grupos krlh!')
					  var cheguei = 'Fds ninguém liga pra tu membro comum 🙄'
					  if (isGroupAdmins) {
					    cheguei = 'Finalmente um ademiro pra controlar esses gados'
					    
					  } 
					  if (isOwner) {
					    cheguei = 'Olá meu criador, como está? 😳 👉👈'
                        
                      }
                      conn.sendMessage(from, cheguei, text, { quoted: ack })
                      break
					case 'calculadora':
					
				     if (args.length < 1) return reply(`Enviar pedidos *${prefix}calculadora [ Números ]*\nExemplo : ${prefix}calculadora 12*12\n*NOTA* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para compartilhar usando /`)
		  ta = `${JSON.stringify(eval(`${args}`))}`
				    conn.sendMessage(from, ta, text, {quoted: ack})
				    await limitAdd(sender) 	
				    break
				case 'memeindo':
				
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					conn.sendMessage(from, buffer, image, {quoted: ack, caption: '.......'})
					break
				case 'loli':
				  
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply(msg.error.again)
						buffer = await getBuffer(res.url)
						conn.sendMessage(from, buffer, image, {quoted: ack, caption: 'Bate pra 2D kkkk'})
					})
					break
				case 'nsfwloli':
				  
					if (!isNsfw) return reply('Modo pornô não está ativo neste grupo')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply(msg.error.again)
						buffer = await getBuffer(res.url)
						conn.sendMessage(from, buffer, image, {quoted: ack, caption: 'Ala o cara bate pra 2D kkkk'})
					})
					break
				case 'hilih':
				  
					if (args.length < 1) return reply('Cadê a ppha do texto?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
				
					if (args.length < 1) return reply('Onde está o link?')
					reply(msg.wait)
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(msg.error.Iv)
					anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/download/ytmp3?url=${args[0]}&apikey=Fxc7`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytsc = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					conn.sendMessage(from, thumb, image, {quoted: ack, caption: ytsc})
					buffer = await getBuffer(anu.result)
					conn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: ack})
					break
				case 'ytsearch':
				if (args.length < 1) return reply('O que vc está procurando?')
				reply('Procurando resultados...')
				var pesq = body.slice(10)
				ytbus = await yts(pesq);
				ytb = ytbus.all
				wad = ''
				for (let q = 0; q < 10; q++) {
				  wad += `${'·-·'.repeat(20)}\n_Título_: ${ytb[q].title}\n_Link_: ${ytb[q].url}\n_Duração_: ${ytb[q].seconds}\n${'·-·'.repeat(20)}`
				}
		conn.sendMessage(from, wad, MessageType.text, {quoted: fromGp});
					break
				case 'nulis':
				case 'tulis':
				
					if (args.length < 1) return reply('O que você quer escrever?')
					teks = body.slice(7)
					reply(msg.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					conn.sendMessage(from, buff, image, {quoted: ack, caption: msg.success})
					break
				case 'print':
				
				tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('De que tipo?')
				//	if (!tipelist.includes(args[0])) return reply('descreva o tipo de site: desktop | tablet | mobile')
			//		if (args.length < 2) return reply('Onde está o link?')
					if (!isUrl(args[1])) return reply(msg.error.Iv)
					reply(msg.wait)
					anu = await fetchJson(`http://mhankbarbar.moe/api/url2image?tipe=mobile&url=${args[1]}&apiKey=3jssezjmNE8MW6zGfRZr`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					conn.sendMessage(from, buff, image, {quoted: ack})
					break
					case 'attp':
					
					if (args.length < 1) return reply('Cadê a poha do texto?')
					var txt = encodeURI(body.slice(6))
                    anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
					conn.sendMessage( from, anu, sticker, {quoted:ack})
					break
					case 'attp1':	//@Lucas æ„›
					
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp1 lucas*`)
attp1 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${attp1}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: ack})
			     	break	     
case 'attp2':	//@Lucas æ„›	

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp lucas*`)
attp2 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${attp2}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: ack})
			     	break	
	case 'attp3': //@Lucas æ„›	
	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp3 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${attp3}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: ack})
			     	break	
	case 'attp4': //@Lucas æ„›
	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp4 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${attp4}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: ack})
			     	break	
		case 'attp5':	//@Lucas æ„›
		
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp5 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${attp5}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: ack})
			     	break
case 'attp6':	//@Lucas æ„›	

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp6 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${attp6}`)
sends = await getBuffer(url)
conn.sendMessage(from, sends, sticker, {quoted: ack})
break
					case 'destrava':
					
					if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    for (let i = 0; i < 10; i++) {
                    conn.sendMessage(from, destrava(prefix), MessageType.text)
                    }
                    break
				case 'tagall':
				
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*┃│❍➣* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'tagall3':
					
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣𖥻ꦼꦽ➳ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					conn.sendMessage(from, teks, text, {detectLinks: false, quoted: ack})
					break
				case 'clearchat':
				  case 'limparchat':
				  
					if (!isOwner) return reply(msg.only.ownerB)
					anu = await conn.chats.all()
					conn.setMaxListeners(25)
					for (let _ of anu) {
					conn.modifyChat(_.jid, ChatModification.delete)
					}
					reply(`*DONE*\n${anu.length} conversas limpas.`)
					break
					case 'bc':
					
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await conn.chats.all();
					if (isMedia && !ack.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
						buff = await conn.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							conn.sendMessage(_.jid, buff, image, {caption: `*AVISO DE TRANSMISSÃO*\n\n${body.slice(4)}`})
						}
					} else {
						for (let _ of anu) {
						  bc = `*AVISO DE TRANSMISSÃO:*\n\n${budy.slice(4)}`
						  conn.sendMessage(_.jid, bc, text);
						}
					}
					break
					case 'bcgc':
					 if (!isOwner) return reply('Xiu macaco.')
					 if (args.length < 1) return reply('sim')
					let gc = await conn.chats.all().filter(v => v.jid.endsWith('g.us'))
					for (let i = 0; i < gc.length; i++)
					conn.sendMessage(gc[i].jid, `*_Mensagem automática_*\n\n${body.slice(command.length + 2)}`, MessageType.text)
					  break
					case 'tm':
					  if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					q = user.length
		for (let i = 0; i < q; i++) {
		  setTimeout( function timer() {
		  conn.sendMessage(user[i], body.slice(4), MessageType.text, {quoted: fstatus4});
		  }, i * 10000);
		}
						break
					  case 'going':
					  
					  const going = fs.readFileSync('./src/going.webp')
					  conn.sendMessage(from, going, sticker, { quoted: ack })
					  break
					  case 'raposo':
					  
					  const raposo = fs.readFileSync('./src/raposo.webp')
					  conn.sendMessage(from, raposo, sticker, { quoted: ack })
					  break
					  case 'nuke':
					    
					    
					    nuke = fs.readFileSync('./src/nuke.mp4');
					    await conn.sendMessage(from, nuke, video, {mimetype: "video/gif", quoted: ack, caption: 'Nuke.', thumbnail: null})
					    break
					  case 'carioca':
					  
					    divu = `━━━━━━ ･ ❪ ❁ ❫ ･ ━━━━━━
🔥 𝑺𝒂𝒍𝒗𝒆 𝒎𝒆𝒖 𝒄𝒐𝒏𝒕𝒂𝒕𝒐 𝒂𝒆 𝒏𝒂 𝒎𝒐𝒓𝒂𝒍 🔥
♕︎𝑺𝒉𝒊𝒕 𝒅𝒆 𝒒𝒖𝒂𝒍𝒊𝒅𝒂𝒅𝒆♕︎
✌︎𝑵𝒂̃𝒐 𝒐𝒄𝒖𝒍𝒕𝒐 𝒗𝒊𝒔𝒖✌︎
☮︎𝑺𝒐𝒖 𝒍𝒆𝒈𝒂𝒍☮︎
❀𝑵𝒂̃𝒐 𝒅𝒐𝒖 𝒗𝒂́𝒄𝒖𝒐❀

☟︎︎︎𝑵𝒂̃𝒐 𝒗𝒂𝒊 𝒔𝒆 𝒂𝒓𝒓𝒆𝒑𝒆𝒏𝒅𝒆𝒓☟︎︎︎

⏤͟͟͞𝑇𝐼𝑂᭄ 𝐶𝐴𝑅𝐼𝑂𝐶͢𝐴¹⁵⁷ on
wa.me/+5521965895523
━━━━❰･❉･❱━━━━`
carioca = fs.readFileSync('./src/carioca.jpeg')
conn.sendMessage(from, carioca, image, { quoted: ack, caption: divu, thumbnail: carioca});
break
case 'metadinha':
  
data = await fetchJson("https://random-couple.herokuapp.com/api/metadinha");
menino = await getBuffer(data.result.menino);
menina = await getBuffer(data.result.menina);
conn.sendMessage(from, menino, image, {quoted: ack,caption: "Follow me on github https://github.com/LucasHRTeam"});
conn.sendMessage(from, menina, image, {quoted: ack, caption: "Follow me on github https://github.com/LucasHRTeam"})
  break
// EFEITOS PARA MIDIAS
case 'reversevideo':
  
if (!isQuotedVideo) return reply('Marque um vídeo')
encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ack })
fs.unlinkSync(ran)
})
break
case 'rapidovid':
    
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(msg.wait)
encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ack })
fs.unlinkSync(ran)
})		
break
case 'lentovid':
    
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(msg.wait)
encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ack })
fs.unlinkSync(ran)
})
break
case 'nightcore':
    
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break   
case 'devagar':
    
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await conn.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
case 'esquilo':
    
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await conn.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
case 'gigaudio':
  case 'gigaaudio':
    
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await conn.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
case 'fast':
  case 'acelerar':
    
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
case 'bass':            
    
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
case 'estourar':       
    
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ack})
fs.unlinkSync(ran)
})
break
					case 'roleta':
					
					  if (!isGroup) return reply('Usa só nos grupos krlh!')
					  if (!isGroupAdmins) return reply('Ala esse random quer ter moral kaskss')
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					  reply('Girando o tambor, aguarde...')
					 let cu = []
					 let sort = Math.floor(Math.random() * groupMembers.length)
					 for (let _ of groupMembers) {
           cu.push(`${_.jid}`)
					 }
					 sorteado = cu[sort]
					 sort = `Adeus @${sorteado.split('@')[0]} não foi dessa vez`
					conn.sendMessage(from, sort, MessageType.text, {contextInfo: { mentionedJid: [sorteado]}})
					setTimeout( () => { conn.groupRemove(from, [sorteado]) }, 3000);
						break
						case 'cassino':
						  if (!isGroup) return reply(msg.only.group)
						let frutas = ["🍎","🍌","🍒"]
					let ft01 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft02 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft03 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft04 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft05 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft06 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft07 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft08 = frutas[Math.floor(Math.random() * frutas.length)]
						let ft09 = frutas[Math.floor(Math.random() * frutas.length)]
						let res = (ft01 == ft02 && ft02 == ft03) || (ft04 == ft05 && ft05 == ft06) || (ft07 == ft08 && ft08 == ft09)? 'Você venceu, parabéns.' : 'Que pena, você perdeu o jogo.'
						  const csno = `*_CASSINO_*\nJogador: @${sender.split('@')[0]}\n\n${ft01} ${ft02} ${ft03}\n${ft04} ${ft05} ${ft06}\n${ft07} ${ft08} ${ft09}\n\n${res}`
						  conn.sendMessage(from, csno, MessageType.text, {quoted: fstatus4, contextInfo: {mentionedJid: [sender]}});
						  break
					case 'promote':
					
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque com @')
					mentioned = ack.message.extendedTextMessage.contextInfo.mentionedJid
						conn.groupMakeAdmin(from, mentioned)
					break
				case 'demote':
				
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return
					mentioned = ack.message.extendedTextMessage.contextInfo.mentionedJid
		 conn.groupDemoteAdmin(from, mentioned)
					break
				case 'add':
				
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Você quer adiconar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0]}@s.whatsapp.net`
						conn.groupAdd(from, [num])
					} catch {
						reply('Não foi possível adicionar pq o número é privado')
					}
			break
			case 'trava':
			  try{
			  
			  if (!isOwner) return reply(msg.only.ownerB)
			  if (args.length < 1) return reply('Vai mandar pra quem?')
			  	if (args[0].startsWith('08')) return reply('Use o código do país')
						num = `${args[0] + '@s.whatsapp.net'}`
						quantidade = args[1]
						if (quantidade == undefined) return reply('Precisa da quantidade carai. coloca dps do número')
						for (let i = 0; i < quantidade; i++) {
						  conn.sendMessage(num, travas(prefix), text)
						}
						reply('Trava enviada!')
			  } catch (e) {
			    reply(`${e}`)
			    console.log(e)
			  }
						break
			case 'kick':
			
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque o corno que vai ser expulso!')
					mentioned = ack.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, emitido :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(` Pedido recebido, emitido : @${mentioned[0].split('@')[0]}`, mentioned, true)
						conn.groupRemove(from, mentioned)
					}
					break
					case 'ban':
					
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
if (ack.message.extendedTextMessage === null || ack.message.extendedTextMessage === undefined) return reply('Marque uma mensagem do random')
if (ownerNumber.includes(ack.message.extendedTextMessage.contextInfo.participant)) return reply('Não posso remover meu dono.')
if (ack.message.extendedTextMessage.contextInfo.participant == frendsowner) return reply('Não posso remover o mais brabo do grupo')
setTimeout(function() {}, 2000);
if (ack.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = ack.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}

conn.groupRemove(from, M_exe)
} else {
conn.groupRemove(from, [exe1[0]])
}
} else {
exe1 = ack.message.extendedTextMessage.contextInfo.participant
conn.groupRemove(from, [exe1])
}
break
case 'banir':
  if (!isGroup) return reply(msg.only.group)
  if (!isGroupAdmins) return reply(msg.only.admin)
  atr = []
  for (let i of groupMembers) {
    atr.push(i.jid)
  }
  var noUser = await atr.filter(q => !user.includes(q))
  if (isBotGroupAdmins) {
  if (noUser.length == 0) return reply('Todos os membros já foram registrados.')
reply('*_Estou prester a banir deste grupo os usuários que não estão registrados em minha base de dados._*')
for (let i = 0; i < noUser.length; i++) {
    setTimeout( async() => {
      await conn.groupRemove(from, [noUser[i]])
    }, i * 10000)
  }
} else {
  wep = 'Não sou adm, então o máximo que eu posso fazer é mostrar os macacos! Se registrem.\n'
  for (let i = 0; i < noUser.length; i++) {
    wep += `📌 @${noUser[i].split('@')[0]}\n`
  }
  conn.sendMessage(from, wep, MessageType.text, {quoted: ack, contextInfo: {mentionedJid: noUser}});
}
  break
case 'listrg':
  
  rglist = `Lista de usuários registrados:\nTotal: ${usuariot}\n`
  for (let i = 0; i < user.length; i++) {
			rglist += `~> @${user[i].split("@")[0]} \n`
  }
		mentions(rglist, user, true)
  break
					case 'modapk':
					
                    conn.sendMessage(from, modapk(prefix), text, {quoted: ack})
                    break
				case 'listadmins':
				
					if (!isGroup) return reply(msg.only.group)
					adms = ` Esta é a lista de adms do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adms += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adms, groupAdmins, true)
					break
								case 'premlist':
	            case 'listprem':
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break
                case 'linkgroup':
                  case 'linkgc':
                    case 'linkgp':
                
                    if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    if (!isBotGroupAdmins) return reply(msg.only.Badmin)
                    linkgc = await conn.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    case 'resetlink':
                    
                    if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    if (!isBotGroupAdmins) return reply(msg.only.Badmin)
                  conn.query({json:["action", "inviteReset", from]});
               reply('Link redefinido!')
                    break
                case 'leave':
                  case 'xau':
                
                    if (!isGroup) return reply(msg.only.group)
                    if (isOwner || isOwner) {
                    	conn.groupLeave(from)
                    } else {
                        reply(msg.only.ownerG)
                    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('Por favor, marque uma sticker')
 qwe = ack.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated
if (qwe == true) return reply('Só sticker parada amigo')
					reply(msg.wait)
					encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('[❗] Erro ao converter adesivos em imagens')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, image, {quoted: ack, thumbnail: fs.readFileSync('./img/botlogo.png'), caption: 'Bora transar?'})
						fs.unlinkSync(ran)
					})
					break
					  case 'tovid':
conn.updatePresence(from,
  Presence.recording)

if (!isQuotedSticker) return reply('Marque uma sticker')
reply(msg.wait)
anumedia = JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await conn.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply(msg.error.again)
  buffer = fs.readFileSync(ran)
  conn.sendMessage(from, buffer, video, {
quoted: ack, caption: 'Follow me on github https://github.com/LucasHRTeam'
  })
  fs.unlinkSync(ran)
})
break
							case 'togif':
					if (!isQuotedSticker) return reply('_Marque alguma sticker_')
					reply(msg.wait)
					encmedia = JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.gif')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					 //if (err) return reply('Erro parça, faz de novo ae')
						fs.unlinkSync(media)
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, video, {quoted: ack, mimetype: 'video/gif', thumbnail: buffer, caption: 'Follow me on github https://github.com/LucasHRTeam'})
						fs.unlinkSync(ran)
					})
					break
					case 'tlight':
					
					  if (args.length < 1) return reply('Cadê a poha do texto?')
pc = body.slice(8)
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/tlight?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text=${ pc}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: (pc)})
break
					case 'avengers':
					
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: (pc)})
break
					case 'wolflogo':
					
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: (pc)})
break
					case 'glith':
					
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(7)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: (pc)})
break
					case 'phlogo':
					
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(8)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?apikey=1PFFeP5mSjRYerN9uFn92giz8aa&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: pc, thumbnail: anu})
break
case 'ytplaca':
  
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(9)
  ytpl = await getBuffer(`https://api.zeks.xyz/api/splaybutton?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, ytpl, image, { quoted:ack, caption: txt})
  break
case 'goldplaca':
  
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(11)
  gdpl = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, gdpl, image, { quoted:ack, caption: txt, thumbnail: gdpl})
  break
case 'txt3d':
  
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(7)
  texto3d = await getBuffer(`https://api.zeks.xyz/api/text3d?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, texto3d, image, { quoted:ack, caption: txt, thumbnail: texto3d})
  break
case 'txtblock':
  
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(10)
  textblock = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, textblock, image, { quoted:ack, caption: txt, thumbnail: textblock})
  break
case 'pubglogo':

					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/pubglogo?apikey=1PFFeP5mSjRYerN9uFn92giz8aa&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:ack, caption: (pc), thumbnail: anu})
break
				case 'simi':
				
					if (args.length < 1) return reply('Cadê o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi não funciona. desativa!')
					reply(anu)
					break
					case 'ativos':
					  
					  if (!isGroup) return reply(msg.only.group)
					  const s = '✅'
					  const n = '❌'
					  let wk = isWelkom ? s : n
					  let af = isantifake ? s : n
					  let ac = isantichat ? s : n
					  let al = isantilink ? s : n
					  let ak = isantikwai ? s : n
					  let atk = isantitiktok ? s : n
					  let ayt = isantiyoutube ? s : n
					  let afc = isantiface ? s : n
					  let ata = isantiinsta ? s : n
					  let otag = isOnlytag ? s : n
					  let porn = isNsfw ? s : n
					  let atsk = isAutoStick ? s : n
					  let sih = isSimi ? s : n
					  let pv = isAntiPv ? s : n
					  let leveis = isLevelingOn ? s : n
					  conn.sendMessage(from, ativos(groupName, wk, af, ac, al, ak, atk, ayt, afc, ata, otag, porn, atsk, sih, pv, leveis), MessageType.text, {quoted: fstatus});
					  break
				case 'simih':
				
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isSimi, 'simih', 'Este modo de chat\npermite o bot\nUsar IA para tentar\nformular uma resposta\npara a sua mensagem.\n[Beta]\nQuer mesmo');
					break
					case 'simih_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isSimi) {
						samih.push(from)
						fs.writeFileSync('./database/json/samih.json', JSON.stringify(samih))
						reply('*DONE*\nsamih ativo.')
					} else if (isSimi) {
					  let position = false
          Object.keys(samih).forEach((i) => {
                if (samih[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						samih.splice(position, 1)
						fs.writeFileSync('./database/json/samih.json', JSON.stringify(samih))}
						reply('*DONE*\nModo samih desativado')
					}
					break
						case 'autostickerimg':
				
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isAutoStick, 'autostickerimg', 'O modo autostick\npermite que o bot faça\nstickers sem\nprecisar do comando.\nQuer mesmo');
					break
					case 'autostickerimg_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isAutoStick) {
						AutoStick.push(from)
						fs.writeFileSync('./database/json/AutoStick.json', JSON.stringify(AutoStick))
						reply('*DONE*\nAutostick ativo.')
					} else if (isAutoStick) {
					  let position = false
          Object.keys(AutoStick).forEach((i) => {
                if (AutoStick[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						AutoStick.splice(position, 1)
						fs.writeFileSync('./database/json/AutoStick.json', JSON.stringify(AutoStick))}
						reply('*DONE*\nModo autostick desativado')
					}
					break
					case 'nsfw':
				
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isNsfw, 'nsfw', 'O modo nsfw\nlibera comandos\n+18 no grupo.\nQuer realmente');
					break
					case 'nsfw_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isNsfw) {
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('*DONE*\nnsfw ativo.')
					} else if (isNsfw) {
					  let position = false
          Object.keys(nsfw).forEach((i) => {
                if (nsfw[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						nsfw.splice(position, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))}
						reply('*DONE*\nModo nsfw desativado')
					}
					break
				case 'welcome':
				
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isWelkom, 'welcome', 'O modo welcome recepciona\ne se despede dos membros.\nQuer realmente');
  
					break
					case 'welcome_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isWelkom) {
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('*DONE*\nBoas vindas ativas.')
					} else if (isWelkom) {
					  let position = false
          Object.keys(welkom).forEach((i) => {
                if (welkom[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						welkom.splice(position, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))}
						reply('*DONE*\nBoas vindas desativadas.')
					}
					break
						case 'onlytag':
				
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isOnlytag, 'onlytag', 'O modo onlytag\nobriga os membros\na usarem a tag no nome\npara poder usar\nos comandos\nQuer realmente');
					break
					case 'onlytag_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isOnlytag) {
						onlytag.push(from)
						fs.writeFileSync('./database/json/onlytag.json', JSON.stringify(onlytag))
						reply('*DONE*\nonlytag ativo.')
					} else if (isOnlytag) {
					  let position = false
          Object.keys(onlytag).forEach((i) => {
                if (onlytag[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						onlytag.splice(position, 1)
						fs.writeFileSync('./database/json/onlytag.json', JSON.stringify(onlytag))}
						reply('*DONE*\nModo onlytag desativado')
					}
					break
						case 'antipv':
				
					if (isAntiPv) {(pvd = 'Desativar antipv') && (actionPv = 'desativar')} else if (!isAntiPv) {(pvd = 'Ativar antipv') && (actionPv = 'ativar')}
        const PvBut = [{ buttonId: `${prefix}antipv_`, buttonText: { displayText: `${pvd}` }, type: 1 }, { buttonId: `${prefix}ativos`, buttonText: { displayText: 'Mostrar ativos' }, type: 1 }]
        
        let messPvBut = { contentText: `O modo antipv\nbloqueia o acesso ao\nprivado de usuários que\n não sejam premium.\nQuer realmente\n${actionPv} o antipv?`, footerText: 'Somente o dono pode decidir', buttons: PvBut, headerType: 1 }
        
  const sendPv =  await conn.sendMessage(from, messPvBut, MessageType.buttonsMessage, {quoted: fstatus});
  
   conn.relayWAMessage(sendPv, {waitForAck: true});
					break
					case 'antipv_':
				
				if (!isOwner) return reply(msg.only.ownerB)
						if (!isAntiPv) {
						antipv.push("Ativado")
						fs.writeFileSync('./database/json/antipv.json', JSON.stringify(antipv))
						reply('*DONE*\nAnti pv ativado.')
					} else if (isAntiPv) {
						antipv.splice("Ativado")
						fs.writeFileSync('./database/json/antipv.json', JSON.stringify(antipv))
						reply('*DONE*\nAnti pv desativado.')
					}
					break
						case 'infinityblock':
				
				if (!isOwner) return reply(msg.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isInfinityBlock) return reply('Já está ativo!')
						InfinityBlock.push("Ativado")
						fs.writeFileSync('./database/json/infinityblock.json', JSON.stringify(InfinityBlock))
						reply('A função de comandos infinitos foi bloqueada ✔️')
					} else if (Number(args[0]) === 0) { 
					  if (!isInfinityBlock) return reply('Não está ativo')
						InfinityBlock.splice("Ativado")
						fs.writeFileSync('./database/json/infinityblock.json', JSON.stringify(InfinityBlock))
						reply('Comandos infinitos desbloqueados com sucesso ✔')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'mutar':
					
					if (!isOwner) return reply(msg.only.ownerB)
					if (!isGroup) return reply(msg.only.group)
					if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Hummmm')
			mentioned = ack.message.extendedTextMessage.contextInfo.participant
			if (banned.includes(mentioned)) return reply('Já foi mutado.')
banned.push(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(banned))
susp = `🚫 @${mentioned.split('@')[0]} foi mutado e será ignorado 🚫`
mentions(`${susp}`, mentioned, true)   
break
case 'desmutar':
  
  if (!isOwner) return reply(msg.only.ownerB)
  if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Hmmmm') 
mentioned = ack.message.extendedTextMessage.contextInfo.participant
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
banned.splice(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(banned))
susp = `✅ @${mentioned.split('@')[0]} foi desmutado e pode usar o bot novamente ✅`
mentions(`${susp}`, mentioned, true)   
break
	case 'antipalavra':
	  
	  if (!isGroup) return reply(msg.only.group)
	  if (!isGroupAdmins) return reply(msg.only.admin)
	  ativarButton(isAntiPalavra, 'antipalavra', 'Este modo autoriza\no bot a remover os membros\nque digam alguma\npalavra proibida\nQuer mesmo');
	  break
					case 'antipalavra_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isAntiPalavra) {
						antipalavra.push(from)
						fs.writeFileSync('./database/json/antipalavra.json', JSON.stringify(antipalavra))
						reply('*DONE*\nAntipalavra ativo.')
					} else if (isAntiPalavra) {
					  let position = false
          Object.keys(antipalavra).forEach((i) => {
                if (antipalavra[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antipalavra.splice(position, 1)
						fs.writeFileSync('./database/json/antipalavra.json', JSON.stringify(antipalavra))}
						reply('*DONE*\nModo antipalavra desativado')
					}
					break
	   case 'blockcmd':
	    
	    if (!isOwner) return reply(msg.only.ownerB)
	    if (args.length < 1) return reply( ` Hmmmm`)
	    if (args.length > 1) return reply('Um comando por vez.')
	    blockcmd.push(args[0])
	    fs.writeFileSync('./database/json/blockcmd.json', JSON.stringify(blockcmd))
	    reply(`O comando ${args[0]} foi bloqueado.`)
	    break
	    case 'unblockcmd':
	      
	      if (!isOwner) return reply(msg.only.ownerB)
	      if (args.length < 1) return reply( `Hmmmm`)
	      if (args.length > 1) return reply('Um comando por vez.')
	      cmdblck = args[0]
	    let posição = false
           Object.keys(blockcmd).forEach((i) => {
             if (blockcmd[i] === cmdblck) {
                posição = i
                      }
                        })
        if (posição !== false) {
	      blockcmd.splice(posição, 1)}
	      fs.writeFileSync('./database/json/blockcmd.json', JSON.stringify(blockcmd))
	      reply(`Comando ${args[0]} foi desbloqueado com sucesso.`)
	      break
	  case 'addanagrama':
	    
	    if (!isOwner) return reply(msg.only.ownerB)
	    if (args.length < 3) return reply('Parâmetro incorreto. Preciso de 3 palavras')
	    const ori = args[0];
	    const bag = args[1];
	    const pista = args[2];
	    if (ori.length !== bag.length) return reply('Mude apenas a ordem das letras. Tente novamente')
	    
	    var palavra_nova = 
	{original: ori, embaralhada: bag, dica: pista}
						nova_palavra.push(palavra_nova)
						fs.writeFileSync('./database/json/palavraAna.json', JSON.stringify(nova_palavra, null, '\t'))
	      wor = `Palavra adicionada ao Anagrama\n\noriginal: ${ori}\nembaralhada: ${bag}\ndica: ${pista}`
	      conn.sendMessage(from, wor, text, {quoted: ack})
	    break
	  case 'addpalavra':
	    
	    if (!isOwner) return reply(msg.only.ownerB)
	    if (args.length < 1) return reply( ` Hmmmm`)
	    bw = body.slice(12)
	    bad.push(bw)
	    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
	    reply(`Palavra ${bw} adicionada a lista de palavras proibidas`)
	    break
	    case 'removerpalavra':
	      
	      if (!isOwner) return reply(msg.only.ownerB)
	      if (args.length < 1) return reply( `Hmmmm`)
	      bw = body.slice(16)
	    let position = false
           Object.keys(bad).forEach((i) => {
             if (bad[i] === bw) {
                position = i
                      }
                        })
        if (position !== false) {
	      bad.splice(position, 1)}
	      fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
	      reply(`Palavra ${bw} removida da lista de palavras proibidas`)
	      break 
	      case 'listpalavras':
	        case 'listapalavra':
	         case 'listpalavras':
	           
	        lbw = `Esta é a lista de palavras proibidas\nTotal : ${bad.length}\n`
	        for (let i of bad) {
	          lbw += `~> ${i.replace(bad)}\n`
	        }
	        await reply(lbw)
	        break 
					case 'antifake':
				
					if (!isGroup) return reply(msg.only.group)
					if (isantifake) {(fake = 'Desativar antifake') && (actionFake = 'desativar')} else if (!isantifake) {(fake = 'Ativar antifake') && (actionFake = 'ativar')}
        const FakeBut = [{ buttonId: `${prefix}antifake_`, buttonText: { displayText: `${fake}` }, type: 1 }, { buttonId: `${prefix}ativos`, buttonText: { displayText: 'Mostrar ativos' }, type: 1 }]
        
        let messFakeBut = { contentText: `O modo antifake remove\nnovos membros que não\nsejam números\n+1, +55 ou +351.\nQuer mesmo ${actionFake} o antifake?`, footerText: 'Somente admins podem decidir', buttons: FakeBut, headerType: 1 }
        
  const sendantifake =  await conn.sendMessage(from, messFakeBut, MessageType.buttonsMessage, {quoted: fstatus});
  
   conn.relayWAMessage(sendantifake, {waitForAck: true});
					break
					case 'antifake_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isantifake) {
						antifake.push(from)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('*DONE*\nAntifake ativo.')
					} else if (isantifake) {
					  let position = false
          Object.keys(antifake).forEach((i) => {
                if (antifake[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antifake.splice(position, 1)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))}
						reply('*DONE*\nModo antifake desativado')
					}
					break
					case 'antilink':
				
					if (!isGroup) return reply(msg.only.group)
					if (isantilink) {(link = 'Desativar antilink') && (actionlink = 'desativar')} else if (!isantilink) {(link = 'Ativar antilink') && (actionlink = 'ativar')}
        const linkBut = [{ buttonId: `${prefix}antilink_`, buttonText: { displayText: `${link}` }, type: 1 }, { buttonId: `${prefix}ativos`, buttonText: { displayText: 'Mostrar ativos' }, type: 1 }]
        
        let messlinkBut = { contentText: `O modo antilink\nremove os membros\nque mandam links de \nqualquer\nnatureza. Ainda é beta.\nNão ative.`, footerText: 'Somente admins podem decidir', buttons: linkBut, headerType: 1 }
        
  const sendantilink =  await conn.sendMessage(from, messlinkBut, MessageType.buttonsMessage, {quoted: fstatus});
  
   conn.relayWAMessage(sendantilink, {waitForAck: true});
					break
					case 'antilink_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isantilink) {
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('*DONE*\nantilink ativo.')
					} else if (isantilink) {
					  let position = false
          Object.keys(antilink).forEach((i) => {
                if (antilink[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antilink.splice(position, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))}
						reply('*DONE*\nModo antilink desativado')
					}
					break
						case 'antichat':
				
					if (!isGroup) return reply(msg.only.group)
					if (isantichat) {(chaton = 'Desativar antichat') && (actionchat = 'desativar')} else if (!isantichat) {(chaton = 'Ativar antichat') && (actionchat = 'ativar')}
        const ChatBut = [{ buttonId: `${prefix}antichat_`, buttonText: { displayText: `${chaton}` }, type: 1 }, { buttonId: `${prefix}ativos`, buttonText: { displayText: 'Mostrar ativos' }, type: 1 }]
        
        let messChatBut = { contentText: `O modo antichat\nremove os membros\nque mandam links de grupos.\nRealmente quer ${actionchat}?`, footerText: 'Somente admins podem decidir', buttons: ChatBut, headerType: 1 }
        
  const sendantichat =  await conn.sendMessage(from, messChatBut, MessageType.buttonsMessage, {quoted: fstatus});
  
   conn.relayWAMessage(sendantichat, {waitForAck: true});
					break
					case 'antichat_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isantichat) {
						antichat.push(from)
						fs.writeFileSync('./database/json/antichat.json', JSON.stringify(antichat))
						reply('*DONE*\nantichat ativo.')
					} else if (isantichat) {
					  let position = false
          Object.keys(antichat).forEach((i) => {
                if (antichat[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antichat.splice(position, 1)
						fs.writeFileSync('./database/json/antichat.json', JSON.stringify(antichat))}
						reply('*DONE*\nModo antichat desativado')
					}
					break
						case 'antictt':
				
					if (!isGroup) return reply(msg.only.group)
				ativarButton(isAntiCtt, 'antictt', 'O modo antictt\nremove os membros\nque mandam contatos\ndo whatsapp.\nRealmente quer')
					break
					case 'antictt_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isAntiCtt) {
						antictt.push(from)
						fs.writeFileSync('./database/json/antictt.json', JSON.stringify(antictt))
						reply('*DONE*\nantictt ativo.')
					} else if (isAntiCtt) {
					  let position = false
          Object.keys(antictt).forEach((i) => {
                if (antictt[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antictt.splice(position, 1)
						fs.writeFileSync('./database/json/antictt.json', JSON.stringify(antictt))}
						reply('*DONE*\nModo antictt desativado')
					}
					break
						case 'antidoc':
					
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isAntiDoc, 'antidoc', 'Este modo protege\no grupo de quaisquer\ntipos de documentos.n.Quer mesmo');
					break
					case 'antidoc_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isAntiDoc) {
						antidoc.push(from)
						fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
						reply('*DONE*\nantidoc ativo.')
					} else if (isAntiDoc) {
					  let position = false
          Object.keys(antidoc).forEach((i) => {
                if (antidoc[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antidoc.splice(position, 1)
						fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))}
						reply('*DONE*\nModo antidoc desativado')
					}
					break
						case 'anticatalogo':
					
					if (!isGroup) return reply(msg.only.group)
				ativarButton(isAntiCatalogo, 'anticatalogo', 'O modo anticatalogo \nremove os membros\nque mandam\ncatalogo no grupo.\nQuer realmente')
				break
			
					case 'anticatalogo_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isAntiCatalogo) {
						anticatalogo.push(from)
						fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
						reply('*DONE*\nanticatalogo ativo.')
					} else if (isAntiCatalogo) {
					  let position = false
          Object.keys(anticatalogo).forEach((i) => {
                if (anticatalogo[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						anticatalogo.splice(position, 1)
						fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))}
						reply('*DONE*\nModo anticatalogo desativado')
					}
					break
						case 'antilocation':
					
					if (!isGroup) return reply(msg.only.group)
					ativarButton(isAntiLocation, 'antilocation', 'O modo antilocation\nremove membros\nque mandam qualquer\ntipo de localização.\nRealmente quer');
					break
				
					case 'antilocation_':
					  
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (!isAntiLocation) {
						antilocation.push(from)
						fs.writeFileSync('./database/json/antilocation.json', JSON.stringify(antilocation))
						reply('*DONE*\nantilocation ativo.')
					} else if (isAntiLocation) {
					  let position = false
          Object.keys(antilocation).forEach((i) => {
                if (antilocation[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						antilocation.splice(position, 1)
						fs.writeFileSync('./database/json/antilocation.json', JSON.stringify(antilocation))}
						reply('*DONE*\nModo antilocation desativado')
					}
					break
					case 'antikwai':
					
					if (!isGroup) return reply(msg.only.group)
				ativarButton(isantikwai, 'antikwai')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantikwai) return reply('Já está ativo!')
						antikwai.push(from)
						fs.writeFileSync('./database/json/antikwai.json', JSON.stringify(antikwai))
						reply('Ativou com sucesso o recurso antikwai neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from, 1)
						fs.writeFileSync('./database/json/antikwai.json', JSON.stringify(antikwai))
						reply('Desativou com sucesso o antikwai neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antiyoutube':
					
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantiyoutube) return reply('Já está ativo!')
						antiyoutube.push(from)
						fs.writeFileSync('./database/json/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('Ativou com sucesso o recurso antiyoutube neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						antiyoutube.splice(from, 1)
						fs.writeFileSync('./database/json/antiyoutube.json', JSON.stringify(antiyoutube))
						reply('Desativou com sucesso o antiyoutube neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antitiktok':
					
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantitiktok) return reply('Já está ativo!')
						antitiktok.push(from)
						fs.writeFileSync('./database/json/antitiktok.json', JSON.stringify(antitiktok))
						reply('Ativou com sucesso o recurso antitiktok neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						antitiktok.splice(from, 1)
						fs.writeFileSync('./database/json/antitiktok.json', JSON.stringify(antitiktok))
						reply('Desativou com sucesso o antitiktok neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antiface':
					
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantiface) return reply('Já está ativo!')
						antiface.push(from)
						fs.writeFileSync('./database/json/antiface.json', JSON.stringify(antiface))
						reply('Ativou com sucesso o recurso antiface neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						antiface.splice(from, 1)
						fs.writeFileSync('./database/json/antiface.json', JSON.stringify(antiface))
						reply('Desativou com sucesso o antiface neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antiinsta':
					
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantiinsta) return reply('Já está ativo!')
						antiinsta.push(from)
						fs.writeFileSync('./database/json/antiinsta.json', JSON.stringify(antiinsta))
						reply('Ativou com sucesso o recurso anti-insta neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						antiinsta.splice(from, 1)
						fs.writeFileSync('./database/json/antiinsta.json', JSON.stringify(antiinsta))
						reply('Desativou com sucesso o anti-insta neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'wait':
				
					if ((isMedia && !ack.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(msg.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
						media = await conn.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							conn.sendMessage(from, res.video, video, {quoted: ack, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Somente fotos!')
					}
					break
					case 'shadow': 
					
					if (args.length < 1) return reply('Cadê a poha do texto?')
					shad = body.slice(8)
					reply(msg.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					conn.sendMessage(from, ssha, image, {caption: `${args[0]}`, quoted: ack})
					break
					case 'walpaperanime':
					
				    try {
				      const anime = walpaperanime[Math.floor(Math.random * walpaperanime.length)]
						let wal = await getBuffer(anime)
						conn.sendMessage(from, wal, image, {quoted: ack, caption: 'Se não gostou peça novamente.'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Não conseguir encontrar nenhum, tente de novo.')
					}
					break
					case 'dado':
					
					kapankah = body.slice(1)
					const elu =['Número sorteado: 1','Número sorteado: 2','Número sorteado: 3','Número sorteado: 4','Número sorteado: 5','Número sorteado: 6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					conn.sendMessage(from, ule, text, { quoted: ack })
					break
					case 'listonline':
					
				if (!isGroup) return reply(msg.only.group)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let onli = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
			    conn.sendMessage(from, 'Lista Online:\n' + onli.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: ack, contextInfo: { mentionedJid: onli } })
				break
				case 'addprem':
				
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return  reply(msg.only.ownerB)
if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Please quotes a text message.')
mentioned = ack.message.extendedTextMessage.contextInfo.participant
if (premium.includes(mentioned)) return reply('Ele já é premium.')
premium.push(`${mentioned}`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
susp = `👑 @${mentioned.split('@')[0]} foi adicionado à lista de usuários premium com sucesso 👑`
mentions(`${susp}`, mentioned, true)
break
	case 'dellprem':
	
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return  reply(msg.only.ownerB)
if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Please quotes a text message.')
mentioned = ack.message.extendedTextMessage.contextInfo.mentionedJid
premium.splice(mentioned, 1)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned.split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break
					case 'hunti':
					
					reply(msg.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					conn.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: ack})
					break
					case 'fotogp':
					  try {
					
            if (!isGroup) return reply(msg.only.group)
            if (!isGroupAdmins) return reply(msg.only.admin)
            if (!isBotGroupAdmins) return reply(msg.only.Badmin)
            if (!isQuotedImage) return reply('Por favor marque uma imagem')
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ack
						const media = await conn.downloadAndSaveMediaMessage(encmedia)
                    await conn.updateProfilePicture (from, media)
                    reply('*DONE*\nFoto do grupo alterada.')
					  } catch (e) {
					    reply('Erro, tente novamente.')
					    console.log(e)
					  }
                    break
                    case 'getpic':
                      
                      if (!isGroup) return reply(msg.only.group)
                      if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque alguma mensagem.')
                      try {
            men = ack.message.extendedTextMessage.contextInfo.participant
            ft = await conn.getProfilePicture(men)
          let cu = await getBuffer(ft)
      sendImage(cu, 'Follow me on github https://github.com/LucasHRTeam');
                      } catch (e) {
                        reply('Esse aí deve ta sem foto')
                        console.log(e)
                      }
                      break
               case 'newpic':
                      
                      if (!isOwner) return reply(msg.only.ownerB)
                      if (!isQuotedImage) return reply('Marque uma foto.')
                      try {
       const logs = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ack
                        num = `${me.jid}`
            conn.updateProfilePicture(num, logs)
            reply('*DONE*\nFoto alterada.')
                      } catch (e) {
                        reply('Erro, tente novamente.')
                        console.log(e)
                      }
                      break
                         case 'getnick':
                      
                      if (!isGroup) return reply(msg.only.group)
                      if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque alguma mensagem.')
                      try {
            fdp = ack.message.extendedTextMessage.contextInfo.participant
        let pu = conn.contacts[fdp] != undefined ? conn.contacts[fdp].vname || conn.contacts[fdp].notify: undefined
        let push = fdp == me.jid ? me.name : pu
        reply(push)
                      } catch (e) {
                        reply('Erro, tenta de novo.')
                        console.log(e)
                      }
                      break
                      case 'getbio':
                        
                        if (!isGroup) return reply(msg.only.group)
                        if (ack.message.extendedTextMessage === undefined || ack.message.extendedTextMessage === null) return reply('Marque alguma mensagem.')
                        try {
                men = ack.message.extendedTextMessage.contextInfo.participant
              let status = await conn.getStatus(men)
               // const status = await this.query({ json: ['query', 'Status', jid || this.user.jid], requiresPhoneConnection: false });
                          reply(`${status}`)
                        } catch (e) {
                          reply('Número sem bio ou bio privada.')
                          console.log(e)
                        }
                        break
					case 'covid':
					  case 'corona':
					    case 'coronavirus':
					    
					      anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
					      corona = `𝗣𝗮𝗶́𝘀:\nBRASIL\n𝗔𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗱𝗼 𝗲𝗺:\n${anu.result.dadosAtualizados}\n𝗧𝗼𝘁𝗮𝗹 𝗱𝗲 𝗰𝗮𝘀𝗼𝘀:\n${anu.result.totalCasos}\n𝗡𝗼𝘃𝗼𝘀 𝗖𝗮𝘀𝗼𝘀:\n${anu.result.novosCasos}\n𝗧𝗼𝘁𝗮𝗹 𝗱𝗲 𝗺𝗼𝗿𝘁𝗲𝘀:\n${anu.result.totalMortes}\n𝗡𝗼𝘃𝗮𝘀 𝗺𝗼𝗿𝘁𝗲𝘀:\n${anu.result.novasMortes}\n𝗥𝗲𝗰𝘂𝗽𝗲𝗿𝗮𝗱𝗼𝘀:\n${anu.result.recuperados}\n𝗩𝗮𝗰𝗶𝗻𝗮𝗱𝗼𝘀 𝗽𝗿𝗶𝗺𝗲𝗶𝗿𝗮 𝗱𝗼𝘀𝗲:\n${anu.result.vacinadosPrimeiraDose}\n𝗩𝗮𝗰𝗶𝗻𝗮𝗱𝗼𝘀 𝘀𝗲𝗴𝘂𝗻𝗱𝗮 𝗱𝗼𝘀𝗲:\n${anu.result.vacinadosSegundaDose}\n𝗕𝗼𝗹𝗲𝘁𝗶𝗻𝘀 𝗰𝗼𝗻𝘁𝗮𝗯𝗶𝗹𝗶𝘇𝗮𝗱𝗼𝘀:\n${anu.result.boletinsContabilizados}`
					      conn.sendMessage(from, corona, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗨𝗟𝗧𝗜𝗠𝗢 𝗕𝗢𝗟𝗘𝗧𝗜𝗠\n𝗦𝗢𝗕𝗥𝗘 𝗢 𝗖𝗢𝗥𝗢𝗡𝗔𝗩𝗜𝗥𝗨𝗦`, 'jpegThumbnail': fs.readFileSync('./img/corona.jpeg')}}}})
					      break
						case 'google':
						
                const googleQuery = body.slice(8)
               if (args.length < 1) return reply(`Nenhum resultado encontrado para a pesquisa: ${googleQuery}`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    conn.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break
                case 'gimage':
                  
                  if (!isGroup) return reply(msg.only.group)
                  if (!isNsfw) return reply(msg.only.nsfw)
                  if (args.length < 1) return reply('Cadê a poha do texto?')
                  reply(msg.wait)
                  const img = body.slice(8)
                  anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${img}`)
                  imagem = await getBuffer(anu.result)
                  conn.sendMessage(from, imagem, image, {quoted: ack, caption: `Aqui está sua pesquisa sobre ${img}`, thumbnail: imagem})
                  break
case 'restart':
  case 'reiniciar':
  
  if (!isOwner) return reply(msg.only.ownerB)
  reply('*Restart using node...*')
  try {
      conn.close();
  } catch (e) {
    reply(`${e}`)
    console.log(e)
  }
  break
  case 'reload':
    
    if (!isOwner) return reply(msg.only.ownerB)
    reply('*Reload using pm2...*')
    pm2 = 'pm2 reload all && pm2 status'
    exec(pm2, (err, stdout) => {
      if (err) return reply(`${err}`)
      if (stdout) {
        conn.sendMessage(from, stdout, MessageType.text, {quoted: ack});
      }
    });
    break
case 'repeat':
  
  if (args.length < 1) return reply('Hmmmm')
  conn.sendMessage(from, `${args[0]}${'\u200B'.repeat(2000)}`, text, {quoted: ack});
break
case 'exe':

if (!isOwner) return reply(msg.only.ownerB)
if (args.length < 1) return reply('Cadê o comando?')
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
conn.sendMessage(from, stdout, text, {quoted: ack})
console.log(stdout)
}
})
break
case 'tela':
  
            if (!isOwner) return reply(msg.only.ownerB)
           try {
             const sesPic = await conn.getSnapshot()
           await conn.sendMessage(from, sesPic, 'session.png', 'Neh...', id)
           } catch (erro) {
             error = console.log(erro)
             reply(error)
           }
            break
         case 'speed':
       case 'ping':
         const timestamp = speed();
       const latensi = speed() - timestamp
       conn.updatePresence(from, )
       uptime = process.uptime();
                    	const laten = {
            contentText: `*Latência:* ${latensi.toFixed(4)} _ms_\n*Uptime:* ${kyun(uptime)}`,
            footerText: 'Linux localhost 4.9.190 #1 SMP PREEMPT armv7l Android',
            headerType: 1
          }
          
      const SendPing = await conn.sendMessage(from, laten, MessageType.buttonsMessage, {quoted: fromGp, contextInfo: { forwardingScore: 9999999999, isForwarded: true}});
          
     conn.relayWAMessage(SendPing, {waitForAck: true});
                    break
                    break
                    case 'delete':
                      case 'del':
                        
if (!isGroup)return reply(msg.only.group)
if (!isGroupAdmins)return reply(msg.only.admin)
try {
conn.deleteMessage(from, {
  id: ack.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Marque a mensagem que quer apagar!')
}
        break
        case 'ack':
        try {
   reply(JSON.stringify({quoted: ack}, null, 4))
        } catch (e) {
     reply(`${e}`)
     console.log(e)
   }
          break
        case 'closegc':
          case 'closegp':
            case 'fechargp':
                    	
					conn.updatePresence(from, Presence.recording) 
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					var nomor = ack.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\n*apenas administradores* podem enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					conn.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
					  case 'opengc':
                case 'abrirgp':
                  case 'opengp':
                
					conn.updatePresence(from, Presence.recording) 
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					const	open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\n*todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					conn.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
					break
					case 'gpessoa':
					case 'gerarpessoa':
					
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)
gerar = `Indentidade Gerada Com Sucesso!\n\nNome ${anu.resultado.nome}\nNome da Mãe ${anu.resultado.mae}\nNome do Pai ${anu.resultado.pai}\nRG ${anu.resultado.RG} CPF ${anu.resultado.CPF}\nNúmero de Telefone ${anu.resultado.telefonde}\nData de Nascimento ${anu.resultado.nascimento}\nSigno ${anu.resultado.signo}\nAltura ${anu.resultado.altura}\nCidade ${anu.endereco.cidade}\nBairro ${anu.endereço.bairro}\nEstado ${anu.endereco.estado}`
conn.sendMessage(from, gerar, text, {quoted: ack})
break
case 'slayer':
   ap = fs.readFileSync('./src/sexo.apk')
  conn.sendMessage(from, ap, MessageType.document, {quoted: ack, mimetype: 'apk', filename: 'Slayer enguiçando seu zap', thumbnail: fs.readFileSync('./src/roleta3.jpeg')});
  break
  case 'cleitin':
  ap1 = fs.readFileSync('./src/sexo.pdf')
  conn.sendMessage(from, ap1, MessageType.document, {quoted: ack, mimetype: 'application/pdf', filename: 'Cleitin enguiça zap', thumbnail: fs.readFileSync('./src/roleta3.jpeg')})
    break
    case 'addanuncio':
      if (!isOwner) return reply(msg.only.ownerB)
      aa = body.slice(11)
      anuncios.push(aa)
      fs.writeFileSync('./database/json/anuncios.json', JSON.stringify(anuncios))
      reply(`Anúncio adicionado!\n\nTotal: ${anuncios.length}\nResultado:\n${aa}`)
      break
    case 'base64':
    async function getBase64(id) {
			       ran = getRandom('.jpeg');
			    // try {
			      // foto_usuario = await conn.getProfilePicture(id);
			    // } catch {
			       foto_usuario = fs.readFileSync('./img/botlogo.png');
			//     }
			     const foto = await conn.downloadAndSaveMediaMessage(ran, `./sticker/${id}/`)
			     const port = fs.readFileSync(`./sticker/${id}/${ran}`, 'base64')
			     return port
			  }
		conn.sendMessage(from, 'oi', MessageType.text);
      break
  				case 'exc':
  case 'run':
if (!isOwner) return reply(msg.only.ownerB)
try {
  JSON.stringify(eval(body.slice(command.length + 2)))
} catch (e) {
  reply(String(e))
  console.log(e)
}
break

default:
//******* RESPOSTAS AUTOMATICAS *******
	if (bad.includes(budy)){
		if (!isGroup) return
		if (!isAntiPalavra) return
		if (isGroupAdmins) return reply('Palavra proibida, mas tu é adm então ta de boa')
		conn.updatePresence(from, )
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Palavra proibida, ja sabe ne!?`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			conn.updatePresence(from, )
			reply("Adeus")
		}, 0)
	}
		if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isantichat) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			try {
			  conn.groupRemove(from, [kic])
			} catch (e) {
			  reply(`${e}`)
			  console.log(e)
			}
		}
		
		/*if (budy.includes("https://")) {
		if (!isGroup) return
		if (!isantilink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado. Por isso o random @${sender.split("@")[0]} será expulso deste grupo!`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			conn.updatePresence(from, )
			reply("Vai mandar link na casa do krl")
		}, 0)
	}*/
	
	if (budy.includes("://s.kwai.app/")){
		if (!isGroup) return
		if (!isantikwai) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Vai mandar link na casa do krlh`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	
		if (budy.includes("youtube.com/") || budy.includes("youtu.be")){
		if (!isGroup) return
		if (!isBotGroupAdmins) return 
		if (!isantiyoutube) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Vai link na casa do krlh`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
	}
	
	if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isantitiktok) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link do Tik Tok detectado. Por isso o random @${sender.split("@")[0]} será expulso deste grupo!`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			conn.updatePresence(from, )
			reply("Vai mandar link na casa do krl")
		}, 0)
	}
	
	if (budy.includes("facebook.com/")){
		if (!isGroup) return
		if (!isantiface) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link de Facebook detectado. Por isso o random @${sender.split("@")[0]} será expulso deste grupo!`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			conn.updatePresence(from, )
			reply("Vai mandar link na casa do krl")
		}, 0)
	}
	
	if (budy.includes("instagram.com/")){
		if (!isGroup) return
		if (!isantiinsta) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		conn.updatePresence(from, )
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link do Instagram detectado. Por isso o random @${sender.split("@")[0]} será expulso deste grupo!`)
		setTimeout( () => {
			conn.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			conn.updatePresence(from, )
			reply("Vai mandar link na casa do krl")
		}, 0)
	}
	
	// AUTO STICKER 1:1 COM FOCO NO CENTRO
 if (isUser && isMedia && !ack.message.videoMessage) {
   if (!isAutoStick) return
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ack).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ack
foto_zap = fs.readFileSync('./img/botlogo.png')
  const media = await conn.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.webp')
  await ffmpeg(`./${media}`)
  .input(media)
  .on('start', function(cmd) {
console.log(`Started : ${cmd}`)
                            })
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
                            })
.on('end', function() {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('SEM PLUGIN', 'MAX BOT')} ${ran} -o ${ran}`, async(error) => {
conn.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {
  externalAdReply: {
    title: "Clique aqui para\nfalar com o criador.",
    description: "Criador do Max Bot",
    body: "siga @LucasHRTeam",
    sourceUrl: "https://wa.me/+5592984928452?text=Oi%20Lucas%20lindo"
  }
}})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
  })
  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
  .toFormat('webp')
 .save(ran)
 } 

if (messagesC.includes("tag")) {
  if (!isOnlytag) return 
reply('ꪶ')
reply('᳡')
}

/*if (messagesC.includes("ip"))
  { const aris = text.replace(/!ip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }*/
 try {
if (body.startsWith(`${prefix}${command}`)) {
  
  if (isBanned) return reply('Você foi mutado pelo proprietário')
  if (isInfinityBlock) {
reply(`Comando inexistente. Digite ${prefix}menu para ter acesso aos comandos`)
  } else {
  reply(`Comando ${prefix}${command} não encontrado, pesquisando no google...`) 
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${command}`)
imagem = await getBuffer(anu.result)
conn.sendMessage(from, imagem, image, {quoted: ack})
}
} } catch (e) {
  reply('Erro, tente novamente.')
  console.log(e)
}
}
} catch (erro) {
console.log(erro);
}
})
	
}
starts()
