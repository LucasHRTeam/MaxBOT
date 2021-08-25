#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install -y nodejs libwebp ffmpeg wget tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[!] Bot criado sobre a base MhankBar por Lucas Hora. Por favor digite \"npm start\" para gerar o qrcode e iniciar o bot! KIBA NÃO SEU MERDINHA."
