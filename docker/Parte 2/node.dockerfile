#Imagem da qual esta irá se basear
FROM node:latest

#Mantenedor desta imagem que estamos criando
MAINTAINER Alex Giannotti

#Copia os arquivos da pasta raiz deste projeto para a "/var/www" do container
COPY . /var/www

#Pasta em que o container será iniciado
WORKDIR /var/www

#Executa o comando ao criar a imagem
RUN npm install

#Quando a imagem for iniciada executa este comando
ENTRYPOINT [ "npm", "start" ]

#Expõe a porta dentro da imagem
EXPOSE 3000