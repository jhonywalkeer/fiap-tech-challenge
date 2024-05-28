FROM node:17-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate && npm run start
EXPOSE 3000

CMD [ "npm", "run", "start"]
