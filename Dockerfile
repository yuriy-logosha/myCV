FROM node:10-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80:80/tcp
ENTRYPOINT [ "npm", "start" ]
