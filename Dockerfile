FROM node:18-alpine3.15 as debug
# --------------------------- Debugging Environment -------------------------- #
WORKDIR /todo_service
COPY package*.json ./
RUN npm install
COPY . ./
# RUN npm run start:dev

# -------------------------- Production Environment -------------------------- #
FROM node:18-alpine3.15 as prod
WORKDIR /todolist_service
COPY package*.json ./
RUN npm install
COPY . ./
CMD npx sequelize-cli db:create; npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all; npm start