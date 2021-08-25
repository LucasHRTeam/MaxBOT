/*
* Bot feito por Lucas Hora sobre MhankBar.
* Reprodução proibida.

* Agradecimentos:
* ~> @adiwajshing/baileys (API WHATSAPP WEB)
* ~> Sr Edition
* ~> MhankBarBar (Base)
* ~> Tiringa-BOT (node_modules)
* ~> Vinícius GDR | E-SPORTS (REST API)
* ~> Kratos (Pack de comandos)
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
    WA_DEFAULT_EPHEMERAL
} = require('@adiwajshing/baileys')
const ownerNumber = ["559284928452@s.whatsapp.net"] // Aqui é o número do dono
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

prefix = '#'
nome_bot = 'MAX BOT'
blocked = []
limitawal = '999999999'
cr = '*All Black Max*'
fake = '𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 ⚠︎'
totalcmd = '208';
let uptime = process.uptime();

/******** ARQUIVOS SRC E LIB ********/
const { y2mateV } = require('./lib/y2mate')
const y2mateA = require('./lib/y2mate');
const {
  msgFilter,
isUrl } = require('./spam/index.js')
const { pack } = require('./src/pack')
const { chentai } = require('./src/chentai')
const { daftarvip } = require('./src/daftarvip')
const { xvideos } = require('./src/xvideos')
const { help } = require('./src/help')
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
//const ytdl = require('ytdl-core')
//const lolis = require('lolis.life')
//const loli = new lolis()

// ********* ARQUIVOS JSON *********
const hentaiPesado = JSON.parse(fs.readFileSync('./database/json/hentai.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'))
const metadinha = JSON.parse(fs.readFileSync('./database/json/metadinha.json'))
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

//METADINHA
const metade = (male) => {
 let position = false
            Object.keys(perfil).forEach((i) => {
                if (metadinha[i] === male) {
                    position = i
                }
            })
            if (position !== false) {
                return metadinha[position].female
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
  
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
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
	  	if(antifake.includes(anu.jid)) {
	const mdata = await conn.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55) && !num.split('@')[0].startsWith(351) && !num.split('@')[0].startsWith(1)) {
					setTimeout(async function () {
						conn.groupRemove(mdata.id, [num])
					}, 2000)
			    }
			}
		}
		
		//********* FUNCTION WELCOME ********
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await conn.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				if (!num.startsWith(55)) return 
				try {
					ppimg = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				conn.sendMessage(mdata.id, {
				  degressLatitude: 0,
				  degressLongitude: 0,
				  name: `Bem vindo ${num.split('@')[0]}`,
				  address: 'Se registre para ter acesso aos comandos.',
				  jpegThumbnail: ppimg
				}, MessageType.location);
				teks = `Oi @${num.split('@')[0]}\nBem vindo ao grupo\n${mdata.subject} 🔮`
				let buff = await getBuffer(ppimg)
				conn.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: ppimg, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await conn.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				if (!num.startsWith(55)) return conn.sendMessage(mdata.id, 'Vai com Deus fake filha da puta', MessageType.text);
				teks = `Menos 1 No puteiro😔... @${num.split('@')[0]} 👋*
_Volte Nunca Mais Seu merdinha👋😏_`
				let buff = await getBuffer(ppimg)
				conn.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	//********** FUNCTION BATERIA **********
conn.on('CB:action,,battery', json => {
  //conn.logger.level = 'debug'
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
})
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		conn.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	    var batanu = global.batrei[global.batrei.length - 1]
	    
// ANTI DELETE
 /*if (body.type == 'conversation' || body.type == 'extendedTextMessage') {
	const strConversation = `		 「 ANTI-DELETE 」

- Nome : ${pushname} 
- Numero : ${namek}
- Tipe : Text
- Data : ${date}
- Hora : ${time}
- Pesan : ${body ? body : '-'}`
	conn.sendMessage(from, strConversation, MessageType.text, selepbot72)
			}*/
	    
// ANTI DELETE
conn.on('message-update', async (mek) => {
		try {
	    const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./database/json/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./database/json/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/json/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? conn.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status para o grupo : ${!isRevoke}\nStatus de todos os contatos : ${!isCtRevoke}\nStatus do contato excluído : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./database/json/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「🍁 *ANTI-DELETE* 」

- *NOME* : ${pushname} 
- *USUARIO* : ${sender.replace('@s.whatsapp.net', '')}
- *TIPO* : Texto
- *HORA* : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- *DATA* : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- *MENSAGEM* :\n${body ? body : '-'}`
				conn.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await conn.downloadAndSaveMediaMessage(int.data, `./src/sticker/${filename}`)
				const strConversation = `		 「🍁 *ANTI-DELETE* 」

- *NOME* : ${pushname} 
- *USUARIO* : ${sender.replace('@s.whatsapp.net', '')}
- *TIPO* : Sticker
- *HORA* : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- *DATA* : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				conn.sendMessage(from, strConversation, MessageType.text, opt4tag)
				conn.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await conn.downloadAndSaveMediaMessage(int.data, `./src/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `		 「🍁 *ANTI-DELETE* 」

- *NOME* : ${pushname} 
- *USUARIO* : ${sender.replace('@s.whatsapp.net', '')}
- *TIPO* : Imagem
- *HORA* : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- *DATA* : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- *MENSAGEM* : ${body ? body : '-'}\`\`\``
				conn.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
conn.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./database/json/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./database/json/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./database/json/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
	
} catch {
}
})

//** FUNCTION QUE DETECTA NOVA MENSAGEM **
	conn.on('chat-update', async (mek) => {
		try {
      if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
			body = ((type === 'conversation' || type !== 'protocolMessage') && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : /*aqui começa do botao e a lista*/(mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId:  (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId: ''
			budy = (type === 'conversation' || type == 'DisappearingMessages' || type == 'ephemeralMessage') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const messagesC2 = pes.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

//********** DEFINIÇÕES DO REPLY *********
			msg = {
			  levelnoton: '✖ O sistema de leveis não está ativos neste grupo ✖',
			  levelon: 'Sistema level ativado ✔',
			  leveloff: 'Sistema level desativado ✔',
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
					group:'❌ Este comando só pode ser usado em grupos ❌',
					nsfw: 'O modo nsfw precisa estar ativado para usar este comando',
					ownerG:'🚫 Comando exclusivo do criador! 🚫',
					ownerB:'Comando não permitido para macacos.',
					admin:'❌ *Silêncio membro comum!* ❌',
					Badmin:'Como eu vou fazer isso sem adm?',
					Premium:'❌ Você não é usuário premium! ❌                    Para adquirir acesso entre em contato com meu proprietário. digite !owner',
					banned: '😜 Você está proibido de usar os comandos do bot 😜',
					Nao_Registrado: `∘ 𝗦𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗘 𝗣𝗥𝗜𝗠𝗘𝗜𝗥𝗢\n\n∘ ${prefix}registrar nome|idade `,
				}
			}
			const me = conn.user
			const botNumber = conn.user.jid
			const isGroup = from.endsWith('@g.us')
			const isGrupoTotal = grupoTotal.includes(from)
			const isPv = from.endsWith('@s.whatsapp.net')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupDesc = isGroup ? groupMetadata.description : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const vipMembers = isGroup ? 
			premium.jid : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isGroupMember = groupMembers.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
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
			const isPremium = premium.includes(sender)
			const isAntiPv = antipv.includes("Ativado")
			const isInfinityBlock = InfinityBlock.includes("Ativado")
			const isAntiPalavra = isGroup ? antipalavra.includes(from) : false
			const isUser = user.includes(sender)
			var {owner, creation, participants, desc } = groupMetadata;
			
			function reply(teks) {
				conn.sendMessage(from, teks, text, {quoted:mek})
			}
			
			function sendMess(hehe, teks) {
				conn.sendMessage(hehe, teks, text)
			}
			
			function mentions(teks, memberr, id) {
				(id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : conn.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			function sendImage(hehe, teks) {
			   conn.sendMessage(from, hehe, MessageType.image, {quoted: mek, thumbnail: hehe, caption: teks});
			 }
	
		//JOGO DO ANAGRAMA
			if(isGroup && isUser && fs.existsSync(`./database/json/anagrama-${from}.json`)){
				let dataAnagrama = JSON.parse(fs.readFileSync(`./database/json/anagrama-${from}.json`))
			   if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
		
				if(budy.toUpperCase() == dataAnagrama.original && (isUser)) { conn.sendMessage(from, `Parabéns @${sender.replace('@s.whatsapp.net', '')} 🥳\nVocê ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {quoted: mek}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/json/anagrama-${from}.json`)
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
				  `,  MessageType.text, {quoted: mek})
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
			let pushname = conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify: undefined
			let authorname = conn.contacts[from] != undefined ? conn.contacts[from].vname || conn.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
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
			
			if (isOwner) {UserPremium = '\x1b[36mOWNER\x1b[0m'} else if (isPremium) {UserPremium = '\x1b[32mPREMIUM\x1b[0m'} else if (!isPremium) {UserPremium = '\x1b[31mNoPremium\x1b[0m'}
			if (isUser) {login = '\x1b[46mRegistrado\x1b[0m'} else {login = '\x1b[41mNãoRegistrado\x1b[0m'}
			
			//******* COMANDO NO PRIVADO *******
			if (!isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> ${color(chalk.white.bgGreen('[CMD]'))} ${color('PRIVADO', 'gold')} ⦁ ${color(command)} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			//******* MENSAGEM NO PRIVADO ******
		if (!isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> \x1b[41m[RECV]\x1b[0m ${color('PRIVADO', 'gold')} ⦁ \x1b[31mMENSAGEM\x1b[0m [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			//******** COMANDO NO GRUPO *******
			if (isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> \x1b[42m[CMD]\x1b[0m ${color(groupName, 'gold')} ⦁ ${color(command)} [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
			
			
			//******** MENSAGEM NO GRUPO *******
		  if (isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m> \x1b[41m[RECV]\x1b[0m ${color(groupName, 'gold')} ⦁ \x1b[31mMENSAGEM\x1b[0m [ ${pushname} ]\n${UserPremium} \x1b[4m${numero}\x1b[0m ${login} ${color(time, 'yellow')}\n`)
		  
			
//******* USUÁRIO BANIDO BY ME ********
		if (isCmd && isBanned) {
reply(`Você foi mutado pelo proprietário`)
return console.log(color('[BAN] Ignorando comando', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))
		  
		}
		
// ANTI NEW CHAT 
 /*conn.on('chat-new', () => {
   if (isGroup) {typeChat = `Grupo\nNome: ${groupName}`} else {typeChat = 'Privado'}
      conn.sendMessage("559284928452@s.whatsapp.net", `Novo chat de ${sender.split('@')[0]}\nTipo: ${typeChat}`, MessageType.text)
    })
    */
   /* conn.on('group-update', (anu) => {
      nu = anu.participants[0]
      if (anu.action == 'promote') {
      conn.sendMessage(from, `O ${nu} ganhou adm neste grupo`, MessageType.text)
      } else if (anu.action == 'demote') {
    conn.sendMessage(from, `O ${nu} perdeu adm neste grupo`, MessageType.text)
      }
    })
*/
//******* COMANDO BLOQUEADO *********
if (isCmd && !isOwner && isUser && blockcmd.includes(messagesC2)) {
  reply('🚫 Este comando está bloqueado, fale o criador para saber o pq 🚫')
  return console.log(color('[ COMANDO BLOQUEADO ]', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))
}

/******* ANTICTT BY LUCAS HORA *****/
if (isGroup && isBotGroupAdmins && isAntiCtt && (type == 'contactMessage')) {
  if (isGroupAdmins) return reply('Isso é um contato, mas vc é adm então ta de boa.')
reply('Contatos são proibidos aqui')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

/******* ANTICATÁLOGO BY LUCAS HORA *****/
if (isGroup && isBotGroupAdmins && isAntiCatalogo && (type == 'productMessage')) {
  if (isGroupAdmins) return reply('Isso é um catálogo, mas vc é adm então ta de boa.')
reply('Catálogos são proibidos aqui')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

// ANTI LINK HARD

//ANTI LOCALIZAÇÃO BY LUCAS HORA
if (isGroup && isBotGroupAdmins && isAntiLocation && (type == 'locationMessage' || type == 'liveLocationMessage')) {
  if (isGroupAdmins) return reply('Hummm localização. partiu casa do adm')
reply('Eca membro comum')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  conn.groupRemove(from, [kik])
}, 2000)
}

//ANTI DOCUMENTO BY LUCAS HORA
if (isGroup && isBotGroupAdmins && isAntiDoc && (type == document)) {
  if (isGroupAdmins) return reply('Hummm documento do adm.')
  reply('Eca membro comum')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
    conn.groupRemove(from, [kik])
  },2000)
}

/***** LISTA DE GRUPOS *********
if (isGroup) {
  if (isGrupoTotal) return
  grupoTotal.push(from)
  fs.writeFileSync('./database/json/grupoTotal.json', JSON.stringify(grupoTotal));
  const criador = from.split('-')[0];
  const adms = groupAdmins.length;
  const membros = participants.length;
  const nomeGp = groupName;
  let infoGp = {jid: from, nomeGrupo: nomeGp, dono: criador, admins: adms, membro: membros}
  groupList.push(infoGp)
  fs.writeFileSync('./database/json/grupos.json', JSON.stringify(groupList, null, 4));

};*/

/******* ANTI-PV BY LUCAS HORA *******/
if (isCmd && isPv && !isOwner && !isPremium && isAntiPv) {
  reply('⛔ *PV BLOQUEADO* ⛔') 
  conn.blockUser (from, "add") 
  await conn.modifyChat(from, 'delete')
  return console.log(color('[ANTI-PV] USUÁRIO BLOQUEADO', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))}
  
  /****** ANTI SPAM BY ITALUH *******/
if (isCmd && msgFilter.isFiltered(from)) {
conn.sendMessage(from, `Sem flood @${sender.split('@')[0]}...\n\nAguarde 5 segundos antes de usar outro comando✅`, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

//********* TAG OBRIGATÓRIA ************
if (isCmd && !isGroupAdmins && isOnlytag && !pushname.includes('᳡') && !pushname.includes('ꪶ')) {
reply(`Oi ${pushname}\nPor favor coloque a tag para ser reconhecido.\nExemplo: ᳡${pushname}\nCaso queira apenas a tag escreva "tag".\n2 tags disponíveis.\n\nSe já estiver usando a tag, peça o comando novamente`)
  return console.log(color('[TAG] USUÁRIO SEM TAG', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), color(`${command}`),'DE:', color(pushname))}

/*********** ANTI-CALL *********
if'voipIndividualOutgoing') {
		conn.sendMessage(sender, 'Me ligou? agora toma teu block')
		conn.blockUser (sender, "add")
		console.log(color('[CALL]', 'orange'), color(`${sender.split("@s.whatsapp.net")[0]} foi bloqueado por me ligar...`, 'yellow'))
	}*/

			//******** SÍMBOLO BATERIA ********
			if (batanu == undefined) {nv = `*[██▒▒▒▒▒▒▒▒] 33%*`} else if (batanu <= 10) {
				nv = `*[█▒▒▒▒▒▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 20) {
				nv = `*[██▒▒▒▒▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 30) {
				nv = `*[███▒▒▒▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 40) {
				nv = `*[████▒▒▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 50) {
				nv = `*[█████▒▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 60) {
				nv = `*[██████▒▒▒▒] ${batanu}%*`
			} else if (batanu <= 70) {
				nv = `*[███████▒▒▒] ${batanu}%*`
			} else if (batanu <= 80) {
				nv = `*[████████▒▒] ${batanu}%*`
			} else if (batanu <= 90) {
				nv = `*[█████████▒] ${batanu}%*`
			} else if (batanu <= 100) {
				nv = `*[██████████] ${batanu}%*`
			} 
			
	// VERIFICADO DECLARADO:
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }}}
        
// VERIFICADO BATERIA + CARREGANDO
const ping = { key: {fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: `${me.jid}`} : {})}, message: { extendedTextMessage: { text: `Bateria: ${nv}\nCarregando: Sim`,}}}
			
	// VERIFICADO 2
const freply2 = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }}}
        
  // VERIFICADO 3
const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "Message": { "caption": `${pushname}`}}}

// VERIFICADO DE CATÁLOGO
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${me.jid}` } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg"
					},
					"title": `${nome_bot}`,
					"description": "KEYY BOTZ", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "LORD KEYY",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        
// VERIFICADO COM/SEM MIMETYPE
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

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
			  case 'registrar':
			    try {
					conn.updatePresence(from, Presence.recording)
					if (isUser) return reply('você já está registrado')
					if (!budy.includes("|")) return reply(`Parâmetro incorreto \n${prefix}registrar nome|idade\n\nDesta forma: ${prefix}registrar Lucas|18`)
					var reg = body.slice(11)
					var nickname = reg.split("|")[0];
					var idade = reg.split("|")[1];
					if (idade > 30) return reply('Muito velho')
					if (idade < 12) return reply('Idade a partir de 12 anos')
						user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						
						const perfilrg = (userId) => {
						const nomeidade = {jid: userId, reg, nickname, idade}
						perfil.push(nomeidade)
						fs.writeFileSync('./database/json/perfil.json', JSON.stringify(perfil, null, '\t'))
						}
						perfilrg(sender)
						rg = `𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙛𝙚𝙞𝙩𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤:\n\n𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙘𝙤𝙢𝙤:\n${reg}\n𝙉𝙞𝙘𝙠: ${nickname}\n𝗜𝗱𝗮𝗱𝗲: ${idade}\n@${sender.split("@s.whatsapp.net")[0]}\n𝘿𝙖𝙩𝙖: ${date}\n𝙃𝙤𝙧𝙖: ${time}\n\n${prefix}menu para ver todos os comandos bot.\n\n𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨: ${user.length}\n𝙎𝙚 𝙛𝙡𝙤𝙙𝙖𝙧 𝙡𝙚𝙫𝙖 𝙗𝙖𝙣/𝙗𝙡𝙤𝙘𝙠\n\n•────•──────────•────•\n║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

☣︎︎ Copyright ® 𝙈𝙖𝙭 𝘽𝙤𝙩 2021 ☣︎︎
`
conn.sendMessage(from, rg, text, {quoted: mek}) } catch (erro) {
  console.log(erro)
}
					break
			  case 'menu1':
			    case 'help1':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
                    putagg = await getBuffer(`https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/SuperPassword.jpg/250px-SuperPassword.jpg`)
                    conn.sendMessage(from, putagg, image, {quoted: mek})
                    break
				case 'help':
				case 'menu':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
				  conn.updatePresence(from, Presence.recording)
				  uptime = process.uptime();
				  conn.sendMessage(from, help(kyun, uptime, chatst, usuariot, prefix, nv, namek, totalcmd), text, {quoted: { key: { fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${from}`} : {})}, message: { 
		"extendedTextMessage": {
                 "text":`𝙈𝙀𝙉𝙐 𝘿𝙊 𝙈𝘼𝙓 𝘽𝙊𝙏\n𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎: ${totalcmd}`,
                        }
	                  } 
                     }, contextInfo: { forwardingScore: 9999999999, isForwarded: true, "mentionedJid": [sender]}})
            break
					case 'gay':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					  reply('⌛ Calculando, aguarde... ⌛')
					 const gay = `${Math.floor(Math.random() * 100)}`
					 if (gay < 10) {baitl = `Homofóbico`} else if (gay <= 20) {baitl = `Nem tanto`} else if (gay <= 30) {baitl = `Acima da média`} else if (gay <= 40) {baitl = `Só toma cerveja no Toba's Bar`} else if (gay <= 50) {baitl = `Gosta de far uns pega no amigo`} else if (gay <= 60) {baitl = `Mais gay que a maioria das drags`} else if (gay <= 70) {baitl = `Tão gay que sai de casa so pra dar o cu`} else if (gay <= 80) {baitl = `Saiu da casa dos pais pra morar com um negão`} else if (gay <= 90) {baitl = `Pablo Vittar tem inveja`} else if (gay > 90) {baitl = `Se mata mano na moral kkjjk`}
if (args.length < 1) {gayzao = namek} else (gayzao = args[0])
nivel = `Quanto o ${gayzao} é gay:\n *${gay}%*\n\n${baitl}`
fotogay = fs.readFileSync('./img/fotogay.jpeg')
conn.sendMessage(from, fotogay, image, {quoted: mek, caption: nivel, thumbnail: fotogay})
break
case 'gostoso':
  case 'gostosa':
if (!isUser) return reply(msg.only.Nao_Registrado)
					  reply(`⌛ Calculando, aguarde... ⌛` )
					 const gostosa = `${Math.floor(Math.random() * 100)}`
					 	 if (gostosa < 10) {gata = '𝗠𝗲́𝗱𝗶𝗰𝗼 𝘁𝗲𝗻𝘁𝗼𝘂 𝗺𝗮𝘁𝗮𝗿 𝗲 𝗻𝗮̃𝗼 𝗰𝗼𝗻𝘀𝗲𝗴𝘂𝗶𝘂'} else if (gostosa == 10) {gata = '𝗙𝗲𝗶𝗼 𝗾𝘂𝗲 𝗱𝗼𝗶 𝗮𝘁𝗲́ 𝗻𝗮 𝗮𝗹𝗺𝗮'} else if (gostosa == 11) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 12) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 13) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 14) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 15 ) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 16 ) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 17) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 18) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 19) {gata = '𝗖𝗮𝗶𝘂 𝗱𝗼 𝗯𝗲𝗿𝗰̧𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗲𝗿𝗮 𝗰𝗿𝗶𝗮𝗻𝗰̧𝗮 𝗲 𝗱𝗲𝗳𝗼𝗿𝗺𝗼𝘂 𝗮 𝗰𝗮𝗿𝗮'} else if (gostosa == 20) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 21) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 22) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 23) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 24) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 25) {gata = '𝗙𝗲𝗶𝗼, 𝘀𝗼𝗺𝗲𝗻𝘁𝗲'} else if (gostosa == 26) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 27) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 28) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 29) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 30) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 31) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 32) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 33) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 34) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 35) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 36) {gata = '𝗖𝗼𝗺𝗶́𝘃𝗲𝗹'} else if (gostosa == 37) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 38) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 39) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 40) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 41) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 42) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 43) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 44) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 45) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 46) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 47) {gata = '𝗔𝘁𝗲́ 𝗾𝘂𝗲 𝗻𝗮̃𝗼 𝗲́ 𝗳𝗲𝗶𝗼'} else if (gostosa == 48) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 49) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 50) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 51) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 52) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 53) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 54) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 55) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 56) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 57) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 58) {gata = `𝗕𝗼𝗻𝗶𝘁𝗶𝗻𝗵𝗼 𝘃𝗰 𝗲𝗶𝗻!?`} else if (gostosa == 59) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 60) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 61) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 62) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 63) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 64) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 65) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 66) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 67) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 68) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 69) {gata = '𝗚𝗼𝘀𝘁𝗼𝘀𝗶𝗻𝗵𝗼(𝗮)'} else if (gostosa == 70) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 71) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 72) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 73) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 74) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 75) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 76) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 77) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 78) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 79) {gata = '𝗖𝗼𝗺𝗲𝗱𝗼𝗿 𝗱𝗲 𝗰𝗮𝘀𝗮𝗱𝗮'} else if (gostosa == 80) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 81) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 82) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 83) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 84) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 85) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 86) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 87) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 88) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa == 89) {gata = '𝗣𝗮𝘀𝘀𝗮 𝗼 𝘇𝗮𝗽 𝗮𝗶 𝗴𝗮𝘁𝗶𝗻𝗵𝗼 👉👈'} else if (gostosa > 90) {gata = '𝗦𝗲 𝗳𝗼𝘀𝘀𝗲 𝗲𝘂 𝘁𝗲 𝘁𝗼𝗿𝗮𝘃𝗮 𝗻𝗼 𝗺𝗲𝗶𝗼. 𝗚𝗼𝘀𝘁𝗼𝘀𝗮 𝗱𝗼 𝗸𝗿𝗹𝗵'}
fotogata = fs.readFileSync('./img/gostosa.jpeg')
conn.sendMessage(from, fotogata, image, {quoted: mek, caption: `Quanto o(a) ${pushname} é gostoso(a):\n *${gostosa}%*\n${gata}`, thumbnail: fotogata})
conn.sendMessage(from, fotogata, image, {quoted: mek, caption: `Quanto o(a) ${pushname} é gostoso(a):\n *${gostosa}%*\n${gata}`, thumbnail: fotogada})
break
	case 'gado':
	  case 'gada':
	if (!isUser) return reply(msg.only.Nao_Registrado)
	if (!isGroup) return reply(msg.only.group)
	reply('⌛ Calculando, aguarde... ⌛')
const gado = `${Math.floor(Math.random() * 100)}`
if (gado <= 10) {dcgd = `Frio e calculista`} else if (gado <= 20) {dcgd = `Entra em grupo de amizade no zap`} else if (gado <= 30) {dcgd = `Cringe`} else if (gado <= 40) {dcgd = `Joga FF só pra falar em call com as mina`} else if (gado <= 50) {dcgd = `Deixa de sair com os parça pra falar com uma mina que nunca a vai comer`} else if (gado <= 60) {dcgd = `Moderador tira esse mlk do grupo agora!!!!`} else if (gado <= 70) {dcgd = `Boi boi boi, boi da cara preta, pega esse random que gadeia até o capeta`} else if (gado <= 80) {dcgd = `Esse aqui sabe até onde a mina mora kkkkj`} else if (gado <= 90) {dcgd = `Vive no pasto`} else if (gado > 90) {dcgd = `Se morasse aqui perto eu te quebrava na porrada`}
gadice = fs.readFileSync('./img/fotogado.jpeg')
conn.sendMessage(from, gadice, image, {quoted: mek, caption: `*O quanto ${pushname} é gado:* ${gado}%\n\n*${dcgd}*`, thumbnail: gadice})
break
case 'corno':
	case 'corna':
if (!isUser) return reply(msg.only.Nao_Registrado)
					  reply('⌛ Calculando, aguarde... ⌛')
					  let usercorno = conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify: undefined
const corno = `${Math.floor(Math.random() * 100)}`
cornice = fs.readFileSync('./img/fotogado.jpeg');
conn.sendMessage(from, cornice, image, {quoted: mek, caption: `*O quanto @${usercorno} é corno(a): *${corno}%`, thumbnail: cornice});
chifre = fs.readFileSync('./src/chifre.opus');
conn.sendMessage(from, chifre, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hidemarcar':
if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					var value = body.slice(12)
					var group = await conn.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					conn.sendMessage(from, options, text)
					break
					case 'join':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				if (!isOwner) return reply(msg.only.ownerB)
				if (args.length < 1) return reply('You are burro?')
conn.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
reply('Já estou la.')
break
					case 'wppim':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					  conn.sendMessage(from, wppim(prefix), text, { quoted: mek })
                    break
                    case 'db':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                      conn.sendMessage(from, database(prefix), text, { quoted: mek})
                      break
                      case 'wiki':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                        if (args.length < 1) return reply('Cadê a pesquisa tio')
					tekss = body.slice(5)
					reply(msg.wait)
					anu = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${tekss}&apikey=estreia `)
					bufferz = await getBuffer(anu.result.result)
					conn.sendMessage(from, bufferz, text, {quoted: mek})
					break
							case 'infogc':
							  case 'infogp':
							    case 'infogroup':
							if (!isUser) return reply(msg.only.Nao_Registrado)
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
					conn.sendMessage(from, buf, image, {quoted: mek, caption: inform, thumbnail: buf})
					break
					case 'block':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
				  conn.updatePresence(from, Presence.recording)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return reply('Quem é você?')
if (args.length < 1) return reply('marque o random')
conn.blockUser (`${body.slice(7)}@c.us`, "add")
conn.sendMessage(from, `Membro bloqueado`, text, {
quoted: mek
})
break
					case 'unblock':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
				  conn.updatePresence(from, Presence.recording)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return reply('Quem é você?')
if (args.length < 1) return reply('marque o random')
conn.blockUser (`${body.slice(9)}@c.us`, "remove")
reply('Membro desbloqueado')
break
				   case 'playstore':
				     if (!isUser) return reply(msg.only.Nao_Registrado)
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  conn.sendMessage(from, store, MessageType.text, {quoted: mek})
                  break
					case 'wa.me':
					case 'wame':
					if (!isUser) return reply(msg.only.Nao_Registrado)
                  conn.updatePresence(from, Presence.recording) 
                  options = {
                  text: `━━━━━━━━━❮◆❯━━━━━━━━━\n「 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n━───────⊹⊱✙⊰⊹───────━\n\n║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

☣︎︎ Copyright © 𝙈𝙖𝙭 𝘽𝙤𝙩 2021 ☣︎︎
`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
			      case 'futebol':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
				if (args.length < 1) return reply(`Parâmetro incorreto.\n${prefix}futebol texto1|texto2`)
				reply(msg.wait) 
				ct = body.slice(9)
				zha1 = ct.split("|")[0];
                zha2 = ct.split("/")[1];
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=kingsboybot&text1=${zha1}&text2=${zha2}`)
				conn.sendMessage(from, zhain, image, { quoted: mek, caption: ct })
                    break
			      case 'flaming':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
			      if (args.length < 1) return reply('Cadê a poha do texto?')
			      reply(msg.wait)
cum = body.slice(9)
pqp = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${cum}`)
conn.sendMessage(from, pqp, image, {quoted: mek, caption: cum})
break
   case 'pornhub':
     if (!isUser) return reply(msg.only.Nao_Registrado)
     if (!isNsfw) return reply(msg.only.nsfw)
          if (args.length < 1) return reply('Cadê o texto, mano?')
          reply('🔎 Pesquisando, aguarde...')
          try {
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    porno = `===============\n`
                    for (let bokep of anu.result) {
                    porno += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    conn.sendMessage(from, porno, MessageType.text, {quoted: mek})
          } catch (erro) {
            reply(msg.error.again)
            console.log(erro)
          }
			     	break  
			      case 'report':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
			        conn.updatePresence(from, Presence.recording)
			        const bug = body.slice(8)
			        if (args.length < 1) return reply('Escreva o bug tbm!\nEspecifique com detalhes qual comando não está funcionando.')
			        options = {
			          text: `────────────────
⚠️ *ERRO REPORTADO* ⚠️
*Usuário que reportou:*\napi.whatsapp.com/send?phone=${sender.split("@")[0]}\n*Tempo Ativo:*\n${kyun(uptime)}\n\n*Descrição do Problema:*\n${bug}
────────────────`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage("559284928452@s.whatsapp.net", options, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `⟩Alerta de erro`, 'jpegThumbnail': fs.readFileSync('./img/botlogo.png')}}}})
                  reply('Erro reportado ao criador com sucesso!\nObrigado ;)')
			      break
			      case 'botfdp':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Vai te foder seu merda, comi tua mae aquela vaca`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
			      case 'user':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
			        listusr = `Contagem dos usuários registrados:\n${user.length}`
			        botlg = fs.readFileSync('./img/botlogo.png')
			        conn.sendMessage(from, listusr, text, {quoted: ping, contextInfo: {sendEphemeral: true}});
			        break
			        case 'location':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
			          conn.sendMessage(from, {
			           degressLatitude: 24.234190,
			           degressLongitude: 32.678954
			          }, MessageType.location)
			          break
			          case 'catalogo':
			            case 'teste':
			            if (!isUser) return reply(msg.only.Nao_Registrado)
			            try {
			            catalogo = {
			              message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": `${fs.readFileSync('./img/botlogo.png')}`,
						"fileLength": "15928",
						"height": 378,
						"width": 400
					},
					"title": `${nome_bot}`,
					"description": "KEYY BOTZ", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "LORD KEYY",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
			              },
			              "messageTimestamp": "1629148430"
			            }
		
		const SendCatag = await conn.prepareMessageFromContent(from, catalogo, MessageType.productMessage, {quoted: mek});
		conn.relayWAMessage(SendCatag, {waitForAck: true});
		 } catch (e) {
		  reply(`${e}`)
		  console.log(e)
		}
			            break
			        case 'ownergp':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
			          if (!isGroup) return reply(msg.only.group)
			          adm_supremo = from.split('-')[0]
			          grupo_dono = `O criador deste grupo é\nwa.me/+${adm_supremo}.`
			          conn.sendMessage(from, grupo_dono, MessageType.text, {quoted: mek})
			        break
			        case 'messagetemp':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
			          if (!isOwner && !isPremium) return reply(msg.only.ownerB)
			          if (!isGroup) return reply(msg.only.group)
			 conn.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
			 reply('Messagens temporárias ativadas')
			          break
			        case 'perfil':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
			     pfl = `𝘽𝘼𝙉𝘾𝙊 𝘿𝙀 𝘿𝘼𝘿𝙊𝙎\n\n𝙉𝙊𝙈𝙀: ${pushname}\n𝙉𝙐𝙈𝙀𝙍𝙊: ${namek}\n𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊 𝘾𝙊𝙈𝙊: ${userPerfil}\n𝙉𝙊𝙈𝙀: ${userNome}\n𝙄𝘿𝘼𝘿𝙀: ${userIdade}\n𝘿𝘼𝙏𝘼: ${date}\n𝙃𝙊𝙍𝘼: ${time}\n𝙇𝙀𝙑𝙀𝙇: ${userLevel}\n𝙓𝙋: ${getLevelingXp(sender)}\n𝙋𝘼𝙏𝙀𝙉𝙏𝙀: ${role}\n\n𝖠𝗎𝗆𝖾𝗇𝗍𝖾 𝗌𝖾𝗎 𝗑𝗉 𝖾 𝖽𝖾𝗌𝖻𝗅𝗈𝗊𝗎𝖾𝗂𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌.`
			     
			     try {
			       foto_usuario = await conn.getProfilePicture(sender)
			       
			       let pfil = await getBuffer(foto_usuario)
			       
			          conn.sendMessage(from, pfil, image, {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "liveLocationMessage": { "caption": `𝘽𝘼𝙏𝙀𝙍𝙄𝘼: ${nv}`,}}}, caption: pfl, thumbnail: pfil})
			     } catch {
			       pfil2 = fs.readFileSync('./img/sem_foto.jpeg')
			       
			       conn.sendMessage(from, pfil2, image, {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "liveLocationMessage": { "caption": `𝘽𝘼𝙏𝙀𝙍𝙄𝘼: ${nv}`,}}}, caption: pfl, thumbnail: pfil2})
			     }
			          break
			          case 'level':
					if (!isLevelingOn) return reply(msg.levelnoton)
					if (!isGroup) return reply(msg.only.group)
					if (userLevel === undefined && userXp === undefined) return reply(msg.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome ${pushname}\n┣⊱ Número : ${sem}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Patente: ${role}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					conn.sendMessage(from, resul, MessageType.text, {quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (args[0] == '1') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(msg.levelon)
					} else if (args[0] == '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(msg.leveloff)
					} else {
					reply(`Use ${prefix}leveling 1 para ativar e  ${prefix}leveling 0 para desativar`)
					}
					break
					
					case 'anagrama':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
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
				  `,  MessageType.text, {quoted: mek})
				  }                  
						} else if (args[0] == '0') {
						  if(!fs.existsSync(`./database/json/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				  fs.unlinkSync(`./database/json/anagrama-${from}.json`)
				  reply("desativado com sucesso")
						}
					break
			      case 'botgay':
			      if (!isUser) return reply(msg.only.Nao_Registrado)
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Pergunta ta tua mãe se eu sou gay kkkk ela acha o contrário`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
			       case 'botfalido':
			       if (!isUser) return reply(msg.only.Nao_Registrado)
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: ` Vê se faz um melhor seu poha, duvido fazer igual!`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
			       case 'botbaiano':
			       case 'botbaianor':
			       if (!isUser) return reply(msg.only.Nao_Registrado)
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Cala a sua boca e me deixa durmir seu merdinha 😡`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
			       case 'botputa':
			       if (!isUser) return reply(msg.only.Nao_Registrado)
conn.updatePresence(from, Presence.recording)
                  options = {
                  text: `Puta é a sua mãe aquela cadela 😠`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  conn.sendMessage(from, options, text, { quoted: mek } )
			      break
					case 'qrcode':
					if (!isUser) return reply(msg.only.Nao_Registrado)
        		if (!isPremium) return reply(msg.only.Premium)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return conn.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					reply('Gerando qr code, aguarde...')
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					conn.sendMessage(from, bufferr, image, {quoted: mek})
					break
					case 'all':
					if (!isUser) return reply(msg.only.Nao_Registrado)
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
if (!isUser) return reply(msg.only.Nao_Registrado)
try{
if(!isGroup) return reply(msg.only.group)
d = []
viado = `🏳️‍🌈 Os mais gay 🏳️‍🌈:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
viado += `🏳️‍🌈 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(viado, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'rankcorno':
if (!isUser) return reply(msg.only.Nao_Registrado)
try{
if(!isGroup) return reply(msg.only.group)
d = []
boi = `🐃 Os mais chifrudos 🐃:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
boi += `🐃 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(boi, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'ranklindo':
if (!isUser) return reply(msg.only.Nao_Registrado)
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
mentions(bnt, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'rankgado':
if (!isUser) return reply(msg.only.Nao_Registrado)
try{
if(!isGroup) return reply(msg.only.group)
d = []
gds = `🐂 Os mais gados 🐂:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
gds += `🐂 = @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(gds, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Deu erro caralho :/')
}
break
case 'smule':
if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(msg.error.Iv)
					reply(msg.wait)
					thumb = await getBuffer(anu.thumb)
					conn.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					conn.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
					case 'play2':
					  try {
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê o nome da música krlh?')
                reply('🔎 Procurando música, aguarde...🔎')
                anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.url)
             conn.sendMessage(from, {
               degressLatitude: 0,
               degressLongitude: 0,
               name: `${anu.result.title}`,
               address: 'Enviando música, aguarde...',
               jpegThumbnail: buffer
             }, MessageType.location);
             
             conn.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}`, quoted: mek, ptt: false});
					     } catch (erro) {
                  reply(erro)
                  console.log(erro)
                }
                break
                case 'video':
                video = fs.readFileSync('./img/video.mp4')
                conn.sendMessage(from, video, MessageType.video, {quoted, mek, mimetype: 'Mimetype.gif'})
            break
                case 'play3':
                  try {
                if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê o nome da música krlh?')
                reply('🔎 Procurando música, aguarde...🔎')
                const teks = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=1PFFeP5mSjRYerN9uFn92giz8aa&q=${teks}`)
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.link)
        conn.sendMessage(from, {
               degressLatitude: 0,
               degressLongitude: 0,
               name: `${anu.result.title}`,
               address: 'Enviando música, aguarde...',
               jpegThumbnail: buffer
             }, MessageType.location);
             
               conn.sendMessage(from, lagu, audio, {mimetipe: 'audio/mp4', filename: `${anu.result.title}`, ptt: false, quoted: { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "videoMessage": { "caption": `${anu.result.title}`}}}});
                  } catch (erro) {
                    reply(msg.error.again)
                    console.log(erro)
                  }
                break
                case 'play':
                  if (!isUser) return reply(msg.only.Nao_Registrado)
                  if (!isPremium) return reply(`Apenas usiários premium. se quiser pesquisar uma música use ${prefix}play2 ou ${ prefix}play3.`)
                    if (args.length < 1) return reply('Digite o nome da música')
                    play = body.slice(5)
                    reply('Procurando sua música...⏳')
var srch = body.slice(6)
ytbusca = await yts(srch);
ytbr = ytbusca.all 
var link = ytbr[0].url
secs = []
ytbr.splice(10, ytbr.length)
ytbr.forEach((ytbr, i) =>{
secs.push({
"rows": [
{
description: `Titulo: ${ytbr.title}`,
"title": "\u200b",
"rowId": `${prefix}ytmp3forB ${ytbr.url}`
},
], title: i+1 })
})
let po = conn.prepareMessageFromContent(from, {
"listMessage":{
"title": "YT PLAY BY ITALUH👨🏽 ✈️",
"description": `Resultados para:${srch}\n`,
"buttonText": "Escolha sua música🎧",
"listType": "SINGLE_SELECT",
"sections": secs}}, {}) 
conn.relayWAMessage(po, {waitForAck: true})
 break


// AQUI É O AUDIO
case 'ytmp3forb':
  if (!isUser) return reply(msg.only.Nao_Registrado)
reply("Baixando sua escolha...")
q = args[0]
anu = await y2mateA(q).catch(e => {
})
lagunye = await getBuffer(anu[0].link)
conn.sendMessage(from, lagunye, audio, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`,...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": `${anu[0].judul}`,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": await getBuffer(anu[0].thumb)
}
 }
  },
mimetype: 'audio/mp4'
})
break
					case 'setdesc':
					  case 'mudardesc':
					if (!isUser) return reply(msg.only.Nao_Registrado)
			    	 if (!isGroup) return reply(msg.only.group)
				     if (!isGroupAdmins) return reply(msg.only.admin)
			   	     if (!isBotGroupAdmins) return reply(msg.only.Badmin)
			   	     if (args.length < 1) return reply('Hmmmm')
				     conn.groupUpdateDescription(from, `${args[0]}`)
				     conn.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break
				     case 'setname':
				       if (!isUser) return reply(msg.only.Nao_Registrado)
             if (!isGroup) return reply(msg.only.group)
			    if (!isGroupAdmins) return reply(msg.only.admin)
				if (!isBotGroupAdmins) return reply(msg.only.Badmin)
				if (args.length < 1) return reply('Hmmmm')
                conn.groupUpdateSubject(from, `${body.slice(9)}`)
                conn.sendMessage(from, 'Nome alerado com sucesso.', text, {quoted: mek})
					break
					case 'pack':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
                    conn.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                    case 'addhentai':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      if (!isOwner) return reply(msg.only.ownerB)
                      if (args.length < 1) return reply('Manda o link filha da puta.')
                      linkHentai = args[0]
                      if (hentaiPesado.includes(linkHentai)) return reply('Já tem essa foto.')
                      try {
                    Resul = await getBuffer(linkHentai)
                      hentaiPesado.push(linkHentai)
                      fs.writeFileSync('./database/json/hentai.json', JSON.stringify(hentaiPesado))
                      conn.sendMessage(from, Resul, MessageType.image, {quoted: mek, caption: `Foto adicionada à lista hentai\n\nLink: ${linkHentai}\nTotal: ${hentaiPesado.length}`, thumbnail: Resul})
                      } catch (e) {
                        reply(`Erro. talvez ${linkHentai} não seja um link.`)
                        console.log(e)
                      }
                      break
      case 'hentai':
  try {
    if (!isUser) return reply(msg.only.Nao_Registrado)
    if (!isGroup && !isPremium && !isOwner) return reply('Apenas usuários premium podem usar esta função no privado.')
  if (!isNsfw && isGroup) return reply(msg.only.nsfw)
    const fotoHentai = hentaiPesado[Math.floor(Math.random() * hentaiPesado.length)]
      pict = await getBuffer(fotoHentai);
      
  conn.sendMessage(from, pict, MessageType.image, {quoted: mek, caption: 'Humm hentai é tudo de bom', thumbnail: pict});
  } catch (e) {
       reply(`${e}`)
            console.log(e)
                      }
                      break
                    case 'chentai':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                    conn.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break
                    case 'daftarvip':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                      conn.sendMessage(from, daftarvip(prefix), text, { quoted: mek })
                      break
                    case 'premium':
                    case 'vip':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                      var premi = `*Você não é um usuário premium. para ter acesso, entre em contato com o criador, e obtenha os valores. Digite ${prefix}owner*`
                      if (isPremium) {
                        premi = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────'
                      } 
                      if (isOwner) {
                        premi = '*O criador sempre é premium.*'
                        
                      }
                      conn.sendMessage(from, premi, text, { quoted: mek })
                      break
                      case 'checkprem':
				const cekExp = ms(expiredCheck(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
                    case 'xvideos':
                    case 'xnxx':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                      conn.sendMessage(from, xvideos(prefix), text, { quoted: mek })
                      break
                      case'dono':
                        case 'criador':
                      case 'owner':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      fotozap = fs.readFileSync('./img/botlogo.png')
                    conn.sendMessage(from, {displayname: "Lucas Hora", vcard: vcard}, MessageType.contact, { quoted: mek, contextInfo: {
                      externalAdReply: {
                        title: "Clique aqui para falar com o criador.",
                        mediaType: 1,
                        body: "Max Bot",
                        matchedText: "wa.me/+5592984928452"
                      }
                    }})
                    conn.sendMessage(from, 'Contato do meu criador. fique à vontade para entrar em contato.', text, {quoted: { key: { fromMe: true, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": 'Meu criador ^~^'}}}})
                    break
                    case 'doar':
                      case 'donate':
                        if (!isUser) return reply(msg.only.Nao_Registrado)
                        doação = 'Caro usuário, este bot possui vários comandos. Quase todo dia há uma nova atualização.\nCaso queira fazer uma doação, aceito pix. Ou recarga de celular:\n+55 92 98492-8452\nCLARO-BR\n\nLucas Santos Da Hora\nChave pix: telefone'
                        reply(doação)
                        break
                    case 'botão':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      conn.sendMessage(from, {displayname: "BOTÃO\nCARAI\nKKKKKKK", vcard1:vcard1}, MessageType.contact, {quoted: mek})
                      break
				case 'info':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				uptime = process.uptime();
				var dt = new Date();
				var dia = dt.toLocaleDateString();
					exec('npm i -v @adiwajshing/baileys && node -v && npm i -v', (erro, stdout) => {
					  if (stdout) {BlsServer = `${stdout}`} else {BlsServer = `${stdout}`}
					informs = `*Date now*: ${dia}*Nome Bot:* ${me.name}\n*My Number:*\nwa.me/+${me.jid.split('@')[0]}\n*Prefix:* ${prefix}\n*Comandos Bloqueados:* ${blockcmd.length}\n*Uptime:*\n ${kyun(uptime)}\n*Comandos:* ${totalcmd}\n*Baileys Servers*\n${conn.version}\n*Browser*:\n${conn.browserDescription}\n*Version*:\n2,2119,6\n*Version Whatsapp:*\n${conn.user.phone.wa_version}\n*npm i -v @adiwajshing/baileys:*\n*node -v:*\n*npm i -v:*\n${BlsServer}`
					conn.sendMessage(from, informs, text, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${from}` } : {})}, message: { extendedTextMessage: { text:`Bateria: ${nv}\nCarregando: Sim`
                        }
	                  } 
                     }});
					});
                     break
          case 'fakemsg':
        if (!isUser) return reply(msg.only.Nao_Registrado)
        if (!isGroup) return reply(msg.only.Nao_Registrado)
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguma mensagem')
        if (args.length < 1) return reply('Precisa do texto')
        if (!budy.includes('|')) return reply('Precisa da barra |.')
        complet = body.slice(9);
        const fakeText = complet.split('|')[0];
        const inf = complet.split('|')[1];
    const mentio = mek.message.extendedTextMessage.contextInfo.participant
    const mak = mek.key.remoteJid
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
				if (!isUser) return reply(msg.only.Nao_Registrado)
					listabl = `Esta é a lista de comandos bloqueados:\nTotal: ${blockcmd.length}\n`
					for (let block of blockcmd) {
						listabl += `~> ${block.replace(blockcmd)}\n`
					}
					conn.sendMessage(from, listabl, text, {quoted: mek})
					break
				case 'ocr':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
						conn.sendMessage(from, await getBuffer(anu), image, { caption: msg.success, quoted: mek })
					} else {
						reply('[❗] Ocorreu um erro, escolha outro tema')
					}
					break
				case 'ep':
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
						conn.sendMessage(from, await getBuffer(anu), image, { caption: msg.success, quoted: mek })
					} else {
						reply('[❗] Ocorreu um erro, escolha outro tema')
					}
					break
					case 'fordward':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isGroup) return reply(msg.only.group)
	   conn.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
				case 'tahta':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê o texto?')
					anu = `https://mhankbarbar.moe/api/htahta?text=${args.join(' ')}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						conn.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: msg.sucess })
					} else {
						reply('Deu erro caralho :/')
					}
					break
					case 'readall':
					  case 'vertudo':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isOwner)return reply(msg.only.ownerB)
					var chats = await conn.chats.all()
      chats.map( async ({ jid }) => {
                          await conn.chatRead(jid)
                    })
  const unread = await conn.loadAllUnreadMessages();
jac = `*DONE!*\n*Total chats*: ${chats.length}\n*Unread Messages*: ${unread.length}`
					await conn.sendMessage(from, jac, MessageType.text, {quoted: mek})
					break
					case 'criargp':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isOwner) return reply('Quem é você?')
					  if (args.length < 1) return reply('Falta o nome do grupo.')
					gc = body.slice(9)
					conn.groupCreate (`${gc}`, [`${sender}`, `${sender}`])
					console.log ("Grupo criado com sucesso")
					break
							case 'stickerhide':
							  if (!isUser) return reply(msg.only.Nao_Registrado)
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						conn.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					  case 'boton':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					  
        var buttons = [{ buttonId: 'Teste', buttonText: { displayText: 'sim' }, type: 1 }, { buttonId: 'teste3', buttonText: { displayText: 'claro' }, type: 1 }, { buttonId: 'teste2', buttonText: { displayText: 'Com ctz' }, type: 1 }]
        
        var butMessage = { contentText: `seu cu é meu?`, footerText: 'clique para votar', buttons: buttons, headerType: 1 }
        
  const sendBotao =  await conn.sendMessage(from, butMessage, MessageType.buttonsMessage);
  
   conn.relayWAMessage(sendBotao, {waitForAck: true});
        break
        case 'menulite':
          if (!isUser) return reply(msg.only.Nao_Registrado)
          
          const but = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu Principal'}, type: 1},
  {buttonId: `${prefix}figumenu`, buttonText: {displayText: 'Menu Sticker'}, type: 1},
  {buttonId: `${prefix}ping`, buttonText: {displayText: 'Latência'}, type: 1}
]

const texto_botao = {
    contentText: 'Veja as opções',
    footerText: `Caso não apareça as opções pra você, envie ${prefix}menu`,
    buttons: but,
    headerType: 1
}

const sendMsg = await conn.sendMessage(from, texto_botao, MessageType.buttonsMessage, {});

conn.relayWAMessage(sendMsg, {waitForAck: true});
        break
        case 'auto':
          if (!isUser) return reply(msg.only.Nao_Registrado)
          const ButAuto = [{
            buttonId: `${prefix}ping`, buttonText: {
              displayText: 'Latência'
            },
            type: 1
          }]
          const aut = () => {
            const auto = {
              contentText: 'Title 01',
            footerText: 'Title 02',
            buttons: ButAuto,
            headerType: 1
            }
            img = fs.readFileSync('./img/botlogo.png')
            conn.sendMessage(from, img, image, {caption: auto})
          }
          const SendAuto = await conn.sendMessage(from, aut, MessageType.buttonsMessage, {quoted: mek, contextInfo: { forwardingScore: 9999999999, isForwarded: true}});
          conn.relayWAMessage(SendAuto, {waitForAck: true});
          break
        case 'figumenu':
			        case 'menufigu':
			          if (!isUser) return reply(msg.only.Nao_Registrado)
const botao_lista = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "MENU STICKER",
buttonText: "Max Bot",
description: `Clique aqui para ver a diferença\nentre os comados`,
footerText: 'Lista By Lucas Hora',
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
"rowId": `${prefix}criador` },
] }

]
})
})
let preparedconn = await conn.prepareMessageFromContent(from, botao_lista, {quoted: mek});
conn.relayWAMessage(preparedconn, {waitForAck: true})
break
case 'votar':
  case 'next':
  if (!isUser) return reply(msg.only.Nao_Registrado)
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
  let vote_list = await conn.prepareMessageFromContent(from, optionsList, {quoted: mek});
  
  conn.relayWAMessage(vote_list, {waitForAck: true});
  break
  case 'resultado_sim':
    if(!isUser) return reply(msg.only.Nao_Registrado)
    reply('Computado. Resposta: Sim\nVote quantas vezes quiser')
    break
    case 'resultado_nao':
      if (!isUser) return reply(msg.only.Nao_Registrado)
    reply('Computado. Resposta: Não\nVote quantas vezes quiser')
    break
					case 'take':
					case 'roubar':
					  if (!isUser) return reply(msg.only.resultado_nao)
					if (!isQuotedSticker) return reply(`Você precisa marcar uma figurinha com "${prefix}take nome|autor`)
					if (!budy.includes("|")) return reply('Parâmetro incorreto!\nPrecisa do |')
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await conn.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Erro caralho :/')
					conn.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
case 'sticker':
  if (!isUser) return reply(msg.only.Nao_Registrado)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
if (error) return reply('Erro caralho')
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
if (err) return reply('Erro')
exec(`webpmux -set exif ${addMetadata('conn-BOT', 'conn')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply('Erro disgraça')
conn.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'fsticker':
  if (!isUser) return reply(msg.only.Nao_Registrado)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝗕𝗔𝗧𝗘𝗥𝗜𝗔: ${nv}\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${conn.user.phone.wa_version}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  reply(msg.wait)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝗕𝗔𝗧𝗘𝗥𝗜𝗔: ${nv}\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${conn.user.phone.wa_version}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}})
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
  if (!isUser) return reply(msg.only.Nao_Registrado)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
                                    conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "liveLocationMessage": { "caption": `𝗕𝗔𝗧𝗘𝗥𝗜𝗔: ${nv}\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${conn.user.phone.wa_version}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}})
                   fs.unlinkSync(media)
                   fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                      reply(msg.wait)
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
                                    conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{}}, message: { "liveLocationMessage": { "caption": `𝗕𝗔𝗧𝗘𝗥𝗜𝗔: ${nv}\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: ${conn.user.phone.wa_version}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"}}}})
                    fs.unlinkSync(media)
                   fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou video com até 10 segundos`)
                    }
                    break
                    case 'translate':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      if (!isGroup) return reply(msg.only.group)
                      if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Please quotes a text message.')
                      lingua = args[0]
                      texto = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                      if (args.length < 1) return reply('Please choose the linguage code')
                      translate(`${texto}`, {to: `${lingua}`}, gotopts).then(res => {
                      reply(res.text)
                      })
                      break
					case 'voz':
				case 'tts':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return conn.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return conn.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
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
							conn.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'ttslist':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  conn.sendMessage(from, linguagens(prefix, pushname), text, { quoted: mek})
					  break
					case 'tomp3':
					if (!isUser) return reply(msg.only.Nao_Registrado)
                	conn.updatePresence(from, Presence.recording) 
					if (!isQuotedVideo) return reply('Marque o vídeo.')
					  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					  reply('Convertendo...')
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'cheguei':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isGroup) return reply('Usa só nos grupos krlh!')
					  var cheguei = 'Fds ninguém liga pra tu membro comum 🙄'
					  if (isGroupAdmins) {
					    cheguei = 'Finalmente um ademiro pra controlar esses gados'
					    
					  } 
					  if (isOwner) {
					    cheguei = 'Olá meu criador, como está? 😳 👉👈'
                        
                      }
                      conn.sendMessage(from, cheguei, text, { quoted: mek })
                      break
					case 'calculadora':
					if (!isUser) return reply(msg.only.Nao_Registrado)
				     if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefix}calculadora [ Números ]*\nExemplo : ${prefix}calculadora 12*12\n*NOTA* :\n- Para multiplicação usando *\n- Para uso adicional +\n- Para redução do uso -\n- Para compartilhar usando /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    conn.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break
				case 'memeindo':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					conn.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				if (!isOwner) return reply(msg.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefixo alterado com sucesso para: ${prefix}`)
					break
				case 'loli':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply(msg.error.again)
						buffer = await getBuffer(res.url)
						conn.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bate pra 2D kkkk'})
					})
					break
				case 'nsfwloli':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isNsfw) return reply('Modo pornô não está ativo neste grupo')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply(msg.error.again)
						buffer = await getBuffer(res.url)
						conn.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ala o cara bate pra 2D kkkk'})
					})
					break
				case 'hilih':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê a ppha do texto?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Onde está o link?')
					reply(msg.wait)
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(msg.error.Iv)
					anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/download/ytmp3?url=${args[0]}&apikey=Fxc7`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytsc = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					conn.sendMessage(from, thumb, image, {quoted: mek, caption: ytsc})
					buffer = await getBuffer(anu.result)
					conn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('O que você está procurando?')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${body.slice(10)}&APIKEYLU=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'nulis':
				case 'tulis':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('O que você quer escrever?')
					teks = body.slice(7)
					reply(msg.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					conn.sendMessage(from, buff, image, {quoted: mek, caption: msg.success})
					break
				case 'print':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('De que tipo?')
				//	if (!tipelist.includes(args[0])) return reply('descreva o tipo de site: desktop | tablet | mobile')
			//		if (args.length < 2) return reply('Onde está o link?')
					if (!isUrl(args[1])) return reply(msg.error.Iv)
					reply(msg.wait)
					anu = await fetchJson(`http://mhankbarbar.moe/api/url2image?tipe=mobile&url=${args[1]}&apiKey=3jssezjmNE8MW6zGfRZr`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					conn.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'attp':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê a poha do texto?')
					var txt = encodeURI(body.slice(6))
                    anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
					conn.sendMessage( from, anu, sticker, {quoted:mek})
					break
					case 'attp1':	//@Lucas æ„›
					if (!isUser) return reply(msg.only.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp1 lucas*`)
attp1 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${attp1}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':	//@Lucas æ„›	
if (!isUser) return reply(msg.only.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp lucas*`)
attp2 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${attp2}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': //@Lucas æ„›	
	if (!isUser) return reply(msg.onlt.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp3 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${attp3}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': //@Lucas æ„›
	if (!isUser) return reply(msg.only.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp4 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${attp4}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	//@Lucas æ„›
		if (!isUser) return reply(msg.only.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp5 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${attp5}`)
send = await getBuffer(url)
conn.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	//@Lucas æ„›	
if (!isUser) return reply(msg.only.Nao_Registrado)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Lucas*`)
attp6 = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${attp6}`)
sends = await getBuffer(url)
conn.sendMessage(from, sends, sticker, {quoted: mek})
break
					case 'destrava':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    for (let i = 0; i < 10; i++) {
                    conn.sendMessage(from, destrava(prefix), MessageType.text)
                    }
                    break
				case 'tagall':
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣𖥻ꦼꦽ➳ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					conn.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearchat':
				  case 'limparchat':
				  if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isOwner) return reply(msg.only.ownerB)
					anu = await conn.chats.all()
					conn.setMaxListeners(25)
					for (let _ of anu) {
						conn.clearMessage(_.jid)
					}
					var conversas = await conn.chats.all();
					reply(`*DONE*\n${conversas.length} conversas limpas.`)
					break
					case 'bc':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await conn.chats.all();
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await conn.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							conn.sendMessage(_.jid, buff, image, {quoted: mek, caption: `*AVISO DE TRANSMISSÃO*\n\n${body.slice(4)}`})
						}
					} else {
						for (let _ of anu) {
						  bc = `*AVISO DE TRANSMISSÃO:*\n\n${budy.slice(4)}`
				const autoBc = {
            contentText: bc,
            footerText: 'Mensagem automática',
            buttons: null,
            headerType: 1
          }
          
      const SendAutoBc = await conn.sendMessage(_.jid, autoBc, MessageType.buttonsMessage, {quoted: ping, contextInfo: { forwardingScore: 9999999999, isForwarded: true}});
          
         conn.relayWAMessage(SendAutoBc, {waitForAck: true});
						}
					}
					break
					case 'tm':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await conn.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const status = "status@broadcast"
						buff = await conn.downloadMediaMessage(encmedia)
						conn.sendMessage(status, `${args[0]}`, MessageType.text)
						reply('️❬ ✔ ❭ Transmissão enviada')}
						break
					  case 'going':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					  const going = fs.readFileSync('./src/going.webp')
					  conn.sendMessage(from, going, sticker, { quoted: mek })
					  break
					  case 'raposo':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
					  const raposo = fs.readFileSync('./src/raposo.webp')
					  conn.sendMessage(from, raposo, sticker, { quoted: mek })
					  break
					  case 'nuke':
					    if (!isUser) return reply(msg.only.Nao_Registrado)
					    
					    nuke = fs.readFileSync('./src/nuke.mp4');
					    await conn.sendMessage(from, nuke, video, {mimetype: "video/gif", quoted: mek, caption: 'Nuke.', thumbnail: null})
					    break
					  case 'carioca':
					  if (!isUser) return reply(msg.only.Nao_Registrado)
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
conn.sendMessage(from, carioca, image, { quoted: mek, caption: divu, thumbnail: carioca});
break
case 'metadinha':
  if (!isUser) return reply(msg.only.Nao_Registrado)
data = await fetchJson("https://random-couple.herokuapp.com/api/metadinha");
menino = await getBuffer(data.result.menino);
menina = await getBuffer(data.result.menina);
conn.sendMessage(from, menino, image, {quoted: mek,capition: ">//<"});
conn.sendMessage(from, menina, image, {quoted: mek, capition: ">//<"})
  break
// EFEITOS PARA MIDIAS
case 'reversevideo':
  if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedVideo) return reply('Marque um vídeo')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'rapidovid':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(msg.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
case 'lentovid':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(msg.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'nightcore':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   
case 'devagar':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await conn.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'esquilo':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await conn.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gigaudio':
  case 'gigaaudio':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await conn.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'fast':
  case 'acelerar':
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'bass':            
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'estourar':       
    if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
					case 'roleta':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isGroup) return reply('Usa só nos grupos krlh!')
					  if (!isGroupAdmins) return reply('Ala esse random quer ter moral kaskss')
					  reply('Girando o tambor, aguarde...')
					  var tiro = Math.floor(Math.random() * groupMetadata.participants.length)
					 sorteado = `@${groupMembers[tiro].jid.split('@')[0]}`
					 sort = `Adeus ${sorteado} não foi dessa vez`
					mentions(sort, sorteado, true)
					conn.groupRemove(from, [sorteado])
						break
					case 'promote':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque com @')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ok chefe, esse cara aqui\n agora é admin do grupo!'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} a admin do grupo!`, mentioned, true)
						conn.groupMakeAdmin(from, mentioned)
					}
					promovido = fs.readFileSync('./src/solado.opus');
            conn.sendMessage(from, promovido, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'demote':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ok chefe, esse cara aqui\n deixou de ser adm'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} a membro comum!`, mentioned, true)
						conn.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
			  if (!isUser) return reply(msg.only.Nao_Registrado)
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
			if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o corno que vai ser expulso!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marque uma mensagem do random')
if (mek.message.extendedTextMessage.contextInfo.participant == ownerNumber) return reply('Não posso remover meu dono.')
if (mek.message.extendedTextMessage.contextInfo.participant == frendsowner) return reply('Não posso remover o mais brabo do grupo')
setTimeout(function() {}, 2000);
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
exe1 = mek.message.extendedTextMessage.contextInfo.participant
conn.groupRemove(from, [exe1])
}
break
case 'listrg':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  rglist = `Lista de usuários registrados:\nTotal: ${usuariot}\n`
  for (let i = 0; i < user.length; i++) {
			rglist += `~> @${user[i].split("@")[0]} \n`
  }
		mentions(rglist, user, true)
  break
					case 'modapk':
					if (!isUser) return reply(msg.only.Nao_Registrado)
                    conn.sendMessage(from, modapk(prefix), text, {quoted: mek})
                    break
				case 'listadmins':
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
                if (!isUser) return reply(msg.only.Nao_Registrado)
                    if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    if (!isBotGroupAdmins) return reply(msg.only.Badmin)
                    linkgc = await conn.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    case 'resetlink':
                    if (!isUser) return reply(msg.only.Nao_Registrado)
                    if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    if (!isBotGroupAdmins) return reply(msg.only.Badmin)
                  conn.query({json:["action", "inviteReset", from]});
               reply('Link redefinido!')
                    break
                case 'leave':
                  case 'xau':
                if (!isUser) return reply(msg.only.Nao_Registrado)
                    if (!isGroup) return reply(msg.only.group)
                    if (isOwner || isOwner) {
                    	conn.groupLeave(from)
                    } else {
                        reply(msg.only.ownerG)
                    }
                    break
                    case 'unicjpeg':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      unic = fs.readFileSync('./img/botlogo.png')
                      conn.sendMessage(from, unic, image, {quoted: mek, contextInfo: {viewOnceMessage: {fileLength: "87275", height: 1057, scanLengths: [
                        12132,
                        25744,
                        18371,
                        31028
                        ], viewOnce: true }}});
                      break
				case 'toimg':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isQuotedSticker) return reply('Por favor, marque uma sticker')
					reply(msg.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('[❗] Erro ao converter adesivos em imagens')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, image, {quoted: mek, thumbnail: fs.readFileSync('./img/botlogo.png'), caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					  case 'tovid':
conn.updatePresence(from,
  Presence.recording)
if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isQuotedSticker) return reply('Marque uma sticker')
reply(msg.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await conn.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply(msg.error.again)
  buffer = fs.readFileSync(ran)
  conn.sendMessage(from, buffer, video, {
quoted: mek, caption: '>//<'
  })
  fs.unlinkSync(ran)
})
break
					case 'togif':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isQuotedSticker) return reply('[❗] Por favor, marque uma sticker')
					reply(msg.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.gif')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, video, {quoted: mek, mimetype: 'video/gif', caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'tlight':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
pc = body.slice(8)
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/tlight?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text=${ pc}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
					case 'avengers':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
					case 'wolflogo':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
					case 'glith':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(7)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=eqsdwhj0C2zPkxCq8ernFgN3Ts7&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
					case 'phlogo':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(8)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?apikey=1PFFeP5mSjRYerN9uFn92giz8aa&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
case 'ytplaca':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(9)
  ytpl = await getBuffer(`https://api.zeks.xyz/api/splaybutton?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, ytpl, image, { quoted:mek, caption: txt})
  break
case 'goldplaca':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(11)
  gdpl = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, gdpl, image, { quoted:mek, caption: txt})
  break
case 'txt3d':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(7)
  texto3d = await getBuffer(`https://api.zeks.xyz/api/text3d?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, texto3d, image, { quoted:mek, caption: txt})
  break
case 'txtblock':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (args.length < 1) return reply('Cadê a poha do texto?')
  reply(msg.wait)
  txt = body.slice(10)
  textblock = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${txt}`)
  conn.sendMessage(from, textblock, image, { quoted:mek, caption: txt})
  break
case 'pubglogo':
if (!isUser) return reply(msg.only.Nao_Registrado)
					  if (args.length < 1) return reply('Cadê a poha do texto?')
if (!budy.includes("|")) return reply(`Escreve direito krlh!!\nÉ assim man:\nLucas|lindo. precisa ter o |`)
pc = body.slice(10)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(msg.wait)
anu = await getBuffer(`https://api.zeks.xyz/api/pubglogo?apikey=1PFFeP5mSjRYerN9uFn92giz8aa&text1=${tx1}&text2=${tx2}`)
conn.sendMessage(from, anu, image, {quoted:mek, caption: (pc)})
break
				case 'simi':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi não funciona. desativa!')
					reply(anu)
					break
				case 'simih':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				  if (!isOwner) return reply(msg.only.ownerB)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo simi está ativo!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Modo simk ativado com sucesso neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado com sucesso o modo simi neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar!')
					}
					break
						case 'autostickerimg':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAutoStick) return reply('Já está ativo!')
						AutoStick.push(from)
						fs.writeFileSync('./database/json/autostick.json', JSON.stringify(AutoStick))
						reply('*DONE*\nModo autostick ativado.')
					} else if (Number(args[0]) === 0) { 
					  let position = false
           Object.keys(AutoStick).forEach((i) => {
             if (AutoStick[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						AutoStick.splice(position, 1)}
						fs.writeFileSync('./database/json/autostick.json', JSON.stringify(AutoStick))
						reply('*DONE*\nModo autostick desativado.')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'nsfw':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Já está ativo!')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('*DONE*\nModo nsfw ativado.')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(nsfw).forEach((i) => {
             if (nsfw[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						nsfw.splice(position, 1)}
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('O nsfw foi desativado neste grupo 😡')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já está ativo!')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso as boas vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
          Object.keys(welkom).forEach((i) => {
                if (welkom[i] === from) {
                    position = i
                      }
                        })
                if (position !== false) {
						welkom.splice(position, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))}
						reply('Desativou com sucesso as boas vindas neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'onlytag':
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isOnlytag) return reply('Já está ativo!')
						onlytag.push(from)
						fs.writeFileSync('./database/json/onlytag.json', JSON.stringify(onlytag))
						reply('A partir de agora o uso da tag é obrigatória neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(onlytag).forEach((i) => {
             if (onlytag[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						onlytag.splice(position, 1)}
						fs.writeFileSync('./database/json/onlytag.json', JSON.stringify(onlytag))
						reply('Desativou a tag obrigatória neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'antipv':
				if (!isUser) return reply(msg.only.Nao_Registrado)
				if (!isOwner) return reply(msg.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiPv) return reply('Já está ativo!')
						antipv.push("Ativado")
						fs.writeFileSync('./database/json/antipv.json', JSON.stringify(antipv))
						reply('Ativou com sucesso o anti-pv ✔️')
					} else if (Number(args[0]) === 0) { 
					  if (!isAntiPv) return reply('Não está ativo')
						antipv.splice("Ativado")
						fs.writeFileSync('./database/json/antipv.json', JSON.stringify(antipv))
						reply('Desativou com sucesso o recurso anti-pv')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'infinityblock':
				if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isOwner) return reply(msg.only.ownerB)
					if (!isGroup) return reply(msg.only.group)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Hummmm')
			mentioned = mek.message.extendedTextMessage.contextInfo.participant
			if (banned.includes(mentioned)) return reply('Já foi mutado.')
banned.push(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(banned))
susp = `🚫 @${mentioned.split('@')[0]} foi mutado e será ignorado 🚫`
mentions(`${susp}`, mentioned, true)   
break
case 'desmutar':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (!isOwner) return reply(msg.only.ownerB)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Hmmmm') 
mentioned = mek.message.extendedTextMessage.contextInfo.participant
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
	  if (!isUser) return reply(msg.only.Nao_Registrado)
	  if (!isGroup) return reply(msg.only.group)
	  if (!isGroupAdmins) return reply(msg.only.admin)
	  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
	  if (args.length < 1) return reply('Hmmmm')
	  if (args[0] === '1') {
	    if (isAntiPalavra) return reply('Já está ativo')
	    antipalavra.push(from)
	    fs.writeFileSync('./database/json/antipalavra.json', JSON.stringify(antipalavra))
	    reply(`Ativou com sucesso o recurso Anti Palavras neste grupo ✔`)
	    
	  } else if (args[0] === '0') {
let position = false
           Object.keys(antipalavra).forEach((i) => {
             if (antipalavra[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
	    antipalavra.splice(position, 1)}
	    fs.writeFileSync('./database/json/antipalavra.json', JSON.stringify(antipalavra))
	    reply(`Desativou com sucesso o Anti Palavra neste grupo ✖`)
	    
	  } else {
	    reply('1 para ativar, 0 para desativar')
	    
	  }
	  break
	   case 'blockcmd':
	    if (!isUser) return reply(msg.only.Nao_Registrado)
	    if (!isOwner) return reply(msg.only.ownerB)
	    if (args.length < 1) return reply( ` Hmmmm`)
	    if (args.length > 1) return reply('Um comando por vez.')
	    blockcmd.push(args[0])
	    fs.writeFileSync('./database/json/blockcmd.json', JSON.stringify(blockcmd))
	    reply(`O comando ${args[0]} foi bloqueado.`)
	    break
	    case 'unblockcmd':
	      if (!isUser) return reply(msg.only.Nao_Registrado)
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
	    if (!isUser) return reply(msg.only.Nao_Registrado)
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
	      conn.sendMessage(from, wor, text, {quoted: mek})
	    break
	  case 'addpalavra':
	    if (!isUser) return reply(msg.only.Nao_Registrado)
	    if (!isOwner) return reply(msg.only.ownerB)
	    if (args.length < 1) return reply( ` Hmmmm`)
	    bw = body.slice(12)
	    bad.push(bw)
	    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
	    reply(`Palavra ${bw} adicionada a lista de palavras proibidas`)
	    break
	    case 'removerpalavra':
	      if (!isUser) return reply(msg.only.Nao_Registrado)
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
	           if (!isUser) return reply(msg.only.Nao_Registrado)
	        lbw = `Esta é a lista de palavras proibidas\nTotal : ${bad.length}\n`
	        for (let i of bad) {
	          lbw += `~> ${i.replace(bad)}\n`
	        }
	        await reply(lbw)
	        break 
					case 'antifake':
					if (!isUser) return reply(msg.only.Nao_Registrado)
                    try {
                    if (!isGroup) return reply(msg.only.group)
                    if (!isGroupAdmins) return reply(msg.only.admin)
                    if (!isBotGroupAdmins) return reply(msg.only.Badmin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isantifake) return reply('Ja esta ativo')
                        antifake.push(from)
                        fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
                        reply('Ativou com sucesso o recurso de antifake neste grupo ✔️')
                    } else if (Number(args[0]) === 0) {
                      let position = false
           Object.keys(antifake).forEach((i) => {
             if (antifake[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
      antifake.splice(position, 1)}
                        fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
                        reply('Desativou com sucesso o recurso de antifake neste grupo ✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply('Deu erro, tente novamente :/')
                    }
                break
					case 'antilink':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantilink) return reply('Já está ativo!')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Ativou com sucesso o recurso antilink neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(antilink).forEach((i) => {
             if (antilink[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						antilink.splice(position, 1)}
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativou com sucesso o antilink neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antichat':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isantichat) return reply('Já está ativo!')
						antichat.push(from)
						fs.writeFileSync('./database/json/antichat.json', JSON.stringify(antichat))
						reply('Ativou com sucesso o recurso antichat neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(antichat).forEach((i) => {
             if (antichat[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						antichat.splice(position, 1)}
						fs.writeFileSync('./database/json/antichat.json', JSON.stringify(antichat))
						reply('Desativou com sucesso o antichat neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'antictt':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiCtt) return reply('Já está ativo!')
						antictt.push(from)
						fs.writeFileSync('./database/json/antictt.json', JSON.stringify(antictt))
						reply('Ativou com sucesso o recurso anti-contato neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(antictt).forEach((i) => {
             if (antictt[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						antictt.splice(position, 1)}
						fs.writeFileSync('./database/json/antictt.json', JSON.stringify(antictt))
						reply('Desativou com sucesso o anti-contato neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'antidoc':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiDoc) return reply('Já está ativo!')
						antidoc.push(from)
						fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
						reply('Ativou com sucesso o recurso anti-documento neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(antidoc).forEach((i) => {
             if (antidoc[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						antidoc.splice(position, 1)}
						fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
						reply('Desativou com sucesso o anti-documento neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'anticatalogo':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiCatalogo) return reply('Já está ativo!')
						anticatalogo.push(from)
						fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
						reply('Ativou com sucesso o recurso anti-catálogo neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(anticatalogo).forEach((i) => {
             if (anticatalogo[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						anticatalogo.splice(position, 1)}
						fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
						reply('Desativou com sucesso o anti-catálogo neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
						case 'antilocation':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLocation) return reply('Já está ativo!')
						antilocation.push(from)
						fs.writeFileSync('./database/json/antilocation.json', JSON.stringify(antilocation))
						reply('Ativou com sucesso o recurso anti localização neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
					  let position = false
           Object.keys(antilocation).forEach((i) => {
             if (antilocation[i] === from) {
                position = i
                      }
                        })
        if (position !== false) {
						antilocation.splice(position, 1)}
						fs.writeFileSync('./database/json/antilocation.json', JSON.stringify(antilocation))
						reply('Desativou com sucesso o anti localização neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
					case 'antikwai':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
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
				if (!isUser) return reply(msg.only.Nao_Registrado)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(msg.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await conn.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							conn.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Somente fotos!')
					}
					break
					case 'shadow': 
					if (!isUser) return reply(msg.only.Nao_Registrado)
					if (args.length < 1) return reply('Cadê a poha do texto?')
					shad = body.slice(8)
					reply(msg.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					conn.sendMessage(from, ssha, image, {caption: `${args[0]}`, quoted: mek})
					break
					case 'walpaperanime':
					if (!isUser) return reply(msg.only.Nao_Registrado)
				    try {
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						conn.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ksksks'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'dado':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					kapankah = body.slice(1)
					const elu =['Número sorteado: 1','Número sorteado: 2','Número sorteado: 3','Número sorteado: 4','Número sorteado: 5','Número sorteado: 6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					conn.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'listonline':
					if (!isUser) return reply(msg.only.Nao_Registrado)
				if (!isGroup) return reply(msg.only.group)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let onli = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
			    conn.sendMessage(from, 'Lista Online:\n' + onli.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek, contextInfo: { mentionedJid: onli } })
				break
				case 'addprem':
				if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return  reply(msg.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Please quotes a text message.')
mentioned = mek.message.extendedTextMessage.contextInfo.participant
if (premium.includes(mentioned)) return reply('Ele já é premium.')
premium.push(`${mentioned}`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
susp = `👑 @${mentioned.split('@')[0]} foi adicionado à lista de usuários premium com sucesso 👑`
mentions(`${susp}`, mentioned, true)
break
	case 'dellprem':
	if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isGroup) return reply(msg.only.group)
if (!isOwner) return  reply(msg.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Please quotes a text message.')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.splice(mentioned, 1)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned.split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break
					case 'hunti':
					if (!isUser) return reply(msg.only.Nao_Registrado)
					reply(msg.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					conn.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
					case 'fotogp':
					  try {
					if (!isUser) return reply(msg.only.Nao_Registrado)
            if (!isGroup) return reply(msg.only.group)
            if (!isGroupAdmins) return reply(msg.only.admin)
            if (!isBotGroupAdmins) return reply(msg.only.Badmin)
            if (!isQuotedImage) return reply('Por favor marque uma imagem')
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await conn.downloadAndSaveMediaMessage(encmedia)
                    await conn.updateProfilePicture (from, media)
                    reply('*DONE*\nFoto do grupo alterada.')
					  } catch (e) {
					    reply('Erro, tente novamente.')
					    console.log(e)
					  }
                    break
                    case 'getpic':
                      if (!isUser) return reply(msg.only.Nao_Registrado)
                      if (!isGroup) return reply(msg.only.group)
                      if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguma mensagem.')
                      try {
            men = mek.message.extendedTextMessage.contextInfo.participant
            ft = await conn.getProfilePicture(men)
          let cu = await getBuffer(ft)
      sendImage(cu, '>//<');
                      } catch (e) {
                        reply('Esse aí deve ta sem foto')
                        console.log(e)
                      }
                      break
                      case 'getbio':
                        if (!isUser) return reply(msg.onlt.Nao_Registrado)
                        if (!isGroup) return reply(msg.only.group)
                        try {
                          men = mek.message.extendedTextMessage.contextInfo.participant
                          let status = await conn.getStatus(men)
                          reply(`${status}`)
                        } catch (e) {
                          reply('Número sem bio ou bio privada.')
                          console.log(e)
                        }
                        break
					case 'covid':
					  case 'corona':
					    case 'coronavirus':
					    if (!isUser) return reply(msg.only.Nao_Registrado)
					      anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
					      corona = `𝗣𝗮𝗶́𝘀:\nBRASIL\n𝗔𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗱𝗼 𝗲𝗺:\n${anu.result.dadosAtualizados}\n𝗧𝗼𝘁𝗮𝗹 𝗱𝗲 𝗰𝗮𝘀𝗼𝘀:\n${anu.result.totalCasos}\n𝗡𝗼𝘃𝗼𝘀 𝗖𝗮𝘀𝗼𝘀:\n${anu.result.novosCasos}\n𝗧𝗼𝘁𝗮𝗹 𝗱𝗲 𝗺𝗼𝗿𝘁𝗲𝘀:\n${anu.result.totalMortes}\n𝗡𝗼𝘃𝗮𝘀 𝗺𝗼𝗿𝘁𝗲𝘀:\n${anu.result.novasMortes}\n𝗥𝗲𝗰𝘂𝗽𝗲𝗿𝗮𝗱𝗼𝘀:\n${anu.result.recuperados}\n𝗩𝗮𝗰𝗶𝗻𝗮𝗱𝗼𝘀 𝗽𝗿𝗶𝗺𝗲𝗶𝗿𝗮 𝗱𝗼𝘀𝗲:\n${anu.result.vacinadosPrimeiraDose}\n𝗩𝗮𝗰𝗶𝗻𝗮𝗱𝗼𝘀 𝘀𝗲𝗴𝘂𝗻𝗱𝗮 𝗱𝗼𝘀𝗲:\n${anu.result.vacinadosSegundaDose}\n𝗕𝗼𝗹𝗲𝘁𝗶𝗻𝘀 𝗰𝗼𝗻𝘁𝗮𝗯𝗶𝗹𝗶𝘇𝗮𝗱𝗼𝘀:\n${anu.result.boletinsContabilizados}`
					      conn.sendMessage(from, corona, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `𝗨𝗟𝗧𝗜𝗠𝗢 𝗕𝗢𝗟𝗘𝗧𝗜𝗠\n𝗦𝗢𝗕𝗥𝗘 𝗢 𝗖𝗢𝗥𝗢𝗡𝗔𝗩𝗜𝗥𝗨𝗦`, 'jpegThumbnail': fs.readFileSync('./img/corona.jpeg')}}}})
					      break
						case 'google':
						if (!isUser) return reply(msg.only.Nao_Registrado)
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
                  if (!isUser) return reply(msg.only.Nao_Registrado)
                  if (!isGroup) return reply(msg.only.group)
                  if (!isNsfw) return reply(msg.only.nsfw)
                  if (args.length < 1) return reply('Cadê a poha do texto?')
                  reply(msg.wait)
                  const img = body.slice(8)
                  anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${img}`)
                  imagem = await getBuffer(anu.result)
                  conn.sendMessage(from, imagem, image, {quoted: mek, caption: `Aqui está sua pesquisa sobre ${img}`})
                  break
case 'restart':
  case 'reiniciar':
  if (!isUser) return reply(msg.only.Nao_Registrado)
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
    if (!isUser) return reply(msg.only.Nao_Registrado)
    if (!isOwner) return reply(msg.only.ownerB)
    reply('*Reload using pm2...*')
    pm2 = 'pm2 reload all && pm2 status'
    exec(pm2, (err, stdout) => {
      if (err) return reply(`${err}`)
      if (stdout) {
        conn.sendMessage(from, stdout, MessageType.text, {quoted: mek});
      }
    });
    break
case 'repeat':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (args.length < 1) return reply('Hmmmm')
  conn.sendMessage(from, `${args[0]}${'\u200B'.repeat(2000)}`, text, {quoted: mek});
break
case 'exe':
if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isOwner) return reply(msg.only.ownerB)
if (args.length < 1) return reply('Cadê o comando?')
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
conn.sendMessage(from, stdout, text, {quoted: mek})
console.log(stdout)
}
})
break
case 'tela':
  if (!isUser) return reply(msg.only.Nao_Registrado)
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
                if (!isUser) return reply(msg.only.Nao_Registrado)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    conn.updatePresence(from, )
                    uptime = process.uptime();
                    conn.sendMessage(from, `*Latência:* ${latensi.toFixed(4)} 𝘴𝘦𝘨𝘶𝘯𝘥𝘰𝘴\n*Uptime*: ${kyun(uptime)}`, text, {quoted: ping});
                    break
                    break
                    case 'delete':
                      case 'del':
                        if (!isUser) return reply(msg.only.Nao_Registrado)
if (!isGroup)return reply(msg.only.group)
if (!isGroupAdmins)return reply(msg.only.admin)
try {
conn.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Marque a mensagem que quer apagar!')
}
        break
        case 'mek':
          try {
          if (!isUser) return reply(msg.only.Nao_Registrado)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Hummmm')
          reply(JSON.stringify({quoted: mek}, null, 4))
          } catch (e) {
            reply(`${e}`)
            console.log(e)
          }
          break
        case 'closegc':
          case 'closegp':
            case 'fechargp':
                    	if (!isUser) return reply(msg.only.Nao_Registrado)
					conn.updatePresence(from, Presence.recording) 
					if (!isGroup) return reply(msg.only.group)
					if (!isGroupAdmins) return reply(msg.only.admin)
					if (!isBotGroupAdmins) return reply(msg.only.Badmin)
					var nomor = mek.participant
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
                if (!isUser) return reply(msg.only.Nao_Registrado)
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
					if (!isUser) return reply(msg.only.Nao_Registrado)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)
gerar = `Indentidade Gerada Com Sucesso!\n\nNome ${anu.resultado.nome}\nNome da Mãe ${anu.resultado.mae}\nNome do Pai ${anu.resultado.pai}\nRG ${anu.resultado.RG} CPF ${anu.resultado.CPF}\nNúmero de Telefone ${anu.resultado.telefonde}\nData de Nascimento ${anu.resultado.nascimento}\nSigno ${anu.resultado.signo}\nAltura ${anu.resultado.altura}\nCidade ${anu.endereco.cidade}\nBairro ${anu.endereço.bairro}\nEstado ${anu.endereco.estado}`
conn.sendMessage(from, gerar, text, {quoted: mek})
break
case 'apk':
  if (!isUser) return reply(msg.only.Nao_Registrado)
  apk = fs.readFileSync('./src/base-1.apk')
  conn.sendMessage(from, apk, MessageType.document, {quoted: mek, mimetype: 'apk', filename: 'base.apk'})
  break
  // CASE PRA ATIVAR
case 'antidelete':
  				if (!isOwner) return reply(msg.only.ownerB)
  				const dataRevoke = JSON.parse(fs.readFileSync('./database/json/gc-revoked.json'))
  				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/json/ct-revoked.json'))
  				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/json/ct-revoked-banlist.json'))
  				const isRevoke = dataRevoke.includes(from)
  				const isCtRevoke = dataCtRevoke.data
  				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
  				const argz = body.split(' ')
  				if (argz.length === 1) return conn.sendMessage(from, `Uso do recurso antidelete: \n\n ${prefix}antidelete [on / off] (para grupos)\n\n ${prefix}antidelete [ctton / cttoff] (para todos os contatos) \n\n ${prefix}antidelete banct 628558xxxxxxx (contato da lista de ban)`, MessageType.text, {quoted: mek})
  				if (argz[1] == 'on') {
  					if (isGroup) {
  						if (isRevoke) return conn.sendMessage(from, `Antidelete já foi habilitado neste grupo antes!`, MessageType.text, {quoted: mek})
  						dataRevoke.push(from)
  						fs.writeFileSync('./database/json/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
  						conn.sendMessage(from, `ativo com sucesso!`, MessageType.text, {quoted: mek})
  					} else if (!isGroup) {
  						conn.sendMessage(from, `Para ativar antidelete para contatos use ${prefix}antidelete ctton`, MessageType.text, {quoted: mek})
  					}
  	} else if (argz[1] == 'ctton') {
  					if (!isGroup) {
  						if (isCtRevoke) return conn.sendMessage(from, `Antidelete já estava habilitado em todos os contatos !`, MessageType.text, {quoted: mek})
  						dataCtRevoke.data = true
  						fs.writeFileSync('./database/json/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
  						conn.sendMessage(from, `Antidelete habilitado em todos os contatos!`, MessageType.text, {quoted: mek})
  					} else if (isGroup) {
  						conn.sendMessage(from, `Para grupos, use ${prefix}antidelete on`, MessageType.text, {quoted: mek})
  					}
  				} else if (argz[1] == 'banct') {
  					if (isBanCtRevoke) return conn.sendMessage(from, `Este contato já está no banco de dados da lista de banidos!`, MessageType.text, {quoted: mek})
  					if (argz.length === 2 || argz[2].startsWith('0')) return conn.sendMessage(from, `Insira um número começando com 55! exemplo 5555986xxxxx`, MessageType.text, {quoted: mek})
  					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
  					fs.writeFileSync('./database/json/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
  					conn.sendMessage(from, `O contato ${argz [2]} foi banido permanentemente da lista antidelete!`, MessageType.text, {quoted: mek})
  				} else if (argz[1] == 'off') {
  					if (isGroup) {
  						const index = dataRevoke.indexOf(from)
  						dataRevoke.splice(index, 1)
  						fs.writeFileSync('./database/json/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
  						conn.sendMessage(from, `Sucesso na desativação do Anti Delete em grupos`, MessageType.text, {quoted: mek})
  					} else if (!isGroup) {
  						conn.sendMessage(from, `Para contatos use $ Para contatos use ${prefix}antidelete cttoff`, MessageType.text, {quoted: mek})
  					}
  				} else if (argz[1] == 'cttoff') {
  					if (!isGroup) {
  						dataCtRevoke.data = false
  						fs.writeFileSync('./database/json/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
  						conn.sendMessage(from, `Antidelete está desligado em todos os contatos!`, MessageType.text, {quoted: mek})
  					} else if (isGroup) {
  						conn.sendMessage(from, `Para grupos use ${prefix}antidelete off.\nPara contatos, use ${prefix}antidelete ctoff`, MessageType.text, {quoted: mek})
  					}
  				}
  				break
  				case 'exc':
  if (!isUser) return reply(msg.only.Nao_Registrado)
     if (!isOwner) return reply(msg.only.ownerB)
     if (args.length < 1) return reply('Hummmm')
     cuceta = body.slice(5)
      try {
		JSON.stringify(eval(cuceta))
      } catch (erro) {
        reply(`${erro}`)
        console.log(erro)
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
	
		if (budy.includes("youtube.com/")){
		if (!isGroup) return
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
 if (isUser && isMedia && !mek.message.videoMessage) {
   if (!isAutoStick) return
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek, contextInfo: {
  externalAdReply: {
    title: "falar com o criador.",
    description: "Criador do Max Bot",
    body: "Max Bot",
    thumbnail: `${foto_zap}`,
    matchedText: "wa.me/+5592984928452"
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
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }*/
 try {
if (body.startsWith(`${prefix}${command}`)) {
  if (!isUser) return reply(msg.only.Nao_Registrado)
  if (isBanned) return reply('Você foi mutado pelo proprietário')
  if (isInfinityBlock) {
reply(`Comando inexistente. Digite ${prefix}menu para ter acesso aos comandos`)
  } else {
  reply(`Comando ${prefix}${command} não encontrado, pesquisando no google...`) 
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/search/gimage?q=${command}`)
imagem = await getBuffer(anu.result)
conn.sendMessage(from, imagem, image, {quoted: mek})
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
