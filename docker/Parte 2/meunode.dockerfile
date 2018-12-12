#Image base for this one
FROM node:latest

#Labels for this image
LABEL Version="1.0" \
      Author="Alex Giannotti" \
      Vendor="Lambda3" \
      Description="Test Image"

#Folder to start the container with
WORKDIR /var/www

#Volume to mount the image
VOLUME [ "'C:\Workspaces\docker\volumes\HotTowel'" ]

#Run this commands at the criation of the image
RUN npm install && npm install --global bower

#Expose this port for communication
EXPOSE 3000