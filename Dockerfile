FROM node:10-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
ENTRYPOINT [ "npm", "start" ]