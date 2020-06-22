FROM node:latest

ARG environment
ARG script

ENV environment ${environment}
ENV script ${script}

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 4000

CMD npm run ${script} --NODE_ENV=${environment}