FROM node:18-alpine as build

RUN mkdir -p /opt/build
WORKDIR /opt/build

COPY . .

RUN npm ci
RUN npm run test
RUN npm run build

# --- --- ---

FROM node:18-alpine

ENV NODE_ENV production

RUN mkdir -p /opt/service
WORKDIR /opt/service

COPY --from=build /opt/build/dist/index.js index.js

ENTRYPOINT ["node", "index.js"]