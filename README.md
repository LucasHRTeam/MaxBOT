### Sobre o projeto MB
Max Bot é um projeto de automação que usa pacotes npm e está sobre o ambiente node de execução de códigos da linguagem JavaScript.
Desenvolvido por uma equipe altamente capacitada, os quais tiveram como foco a total satisfação dos usuários. Alguns comandos incluem:

> #figumenu

> #st2

> #sticker

> #fsticker


além de outros comando voltados a administração de grupos:

> #abrigp
> #fechargp
> #linkgp
> #resetlink
> #ban
> #kick
> #add

## Configurando o terminal

```bash
> apt update
> apt upgrade
> apt install nodejs
> npm install
> termux-setup-storage
```

## Clonando este projeto

```bash
> git clone https://github.com/LucasHRTeam/MaxBOT
```

## Instalando as dependências
Antes de usar os comandos de instalação, 
primeiro acesse a pasta do projeto

> cd MaxBOT

Caso queira manter o prejeto fora de $HOME,
mova o projeto inteiro pra o diretório desejado.
Ex:

> mv MaxBOT /sdcard
```
> bash install.sh
```

### Iniciando o projeto
Você tem a opção de escolher qual método usar
para iniciar o projeto. Eu disponibilizo um arquivo shell
junto com o bot, que lhe permite iniciá-lo através dele,
mas caso o projeto caia por qualquer motivo que seja, ele volta em sequência.

Para iniciar o arquivo shell:
> sh start.sh


Node Package Maganer
```
> npm start
```

Usando node habitual
```
> node .
```

Usando pm2
```bash
> npm i -g pm2
> pm2 start .
> pm2 monit
```

Usando nodemon. Vale lembrar que você também pode consultar o timer do loop do nodemon dentro da package.json
```bash
> npm i -g nodemon
> nodemom start .
```

### Configurando
```
{
  "prefix": "#",
  "ownerNumber": "12345@s.whatsapp.net",
  "apiKey": "Sua melhor apikey"
}
```
## Agradecimentos
* <a href="https://github.com/adiwajshing/Baileys"><img alt="GitHub" src="https://img.shields.io/badge/adiwajshing/Baileys%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>

## Grupo oficial
* <a href="https://chat.whatsapp.com/HCgJgeBcP4K8jRPb2TiR8B"><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>

### Doações
* <a href="Acesse o link https://picpay.me/lucas.santos.da.hora"><img alt="PicPay" src="https://img.shields.io/badge/PicPay-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" /></a>
* <a href="https://paypal.me/LucasHRTeam"><img alt="Paypal" src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" /></a>

<p align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraQIy870Egztlo6zZC3aGDSDav_jhoI9l2OY86xR4dr7tgHvGMVYJFEg&s=10" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="Whatsapp-Bot" src="https://img.shields.io/badge/Projeto Max Bot 2.0-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/LucasHRTeam"><img title="Author" src="https://img.shields.io/badge/Author-LucasHRTeam-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/LucasHRTeam/followers"><img title="Followers" src="https://img.shields.io/github/followers/LucasHRTeam?color=blue&style=flat-square"></a>
<a href="https://github.com/LucasHRTeam/MaxBOT/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/LucasHRTeam/MaxBOT?color=red&style=flat-square"></a>
<a href="https://github.com/LucasHRTeam/MaxBOT/network/members"><img title="Forks" src="https://img.shields.io/github/forks/LucasHRTeam/MaxBOT?color=red&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-blue.svg"</a>
</p>