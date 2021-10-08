const informs = (dia, meuNome, NumberBot, prefix, blck, runtime, totalcmd, serverV, navegador, wa_version, BlsServer, ram) => {
return `⌬  Dia: ${dia}
⌬  NomeBOT: ${meuNome}
⌬  NumberBOT: wa.me/+${NumberBot}
⌬  Prefixo: ${prefix}
⌬  Ram: ${ram}
⌬  Comandos Bloqueados: ${blck}
⌬  Totalcmd: ${totalcmd}
⌬  Baileys Server: ${serverV}
⌬  Browser: ${navegador}
⌬  Versão Whatsapp: ${wa_version}
⌬  Uptime: ${runtime}

Versão Baileys + Versão Node + Versão NPM:

${BlsServer}
`
}
exports.informs = informs