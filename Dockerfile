FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN apk -U upgrade --no-cache --no-progress --purge && npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8081
CMD npm start