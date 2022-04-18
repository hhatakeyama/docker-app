FROM node:16.14.2

ENV MONGO_DB_USERNAME=admin \ MONGO_DB_PWD=admin

RUN mkdir -p /home/app

COPY ./api ./home/app

CMD [ "node", "server.js" ]

