FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 4000

CMD [ "npm", "start" ]