FROM node:22-slim AS client-build
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

FROM node:22-slim
WORKDIR /app

COPY server/package*.json ./
RUN npm install --production
COPY server/ ./

COPY --from=client-build /client/build ./public

EXPOSE 3000
CMD ["npm", "start"]
