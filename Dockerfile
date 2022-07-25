FROM node:18.2

WORKDIR /app

COPY ./package*.json .

RUN npm update && \
    npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
