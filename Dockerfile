FROM mhart/alpine-node

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000

CMD [ "node", "src/api/server.ts" ]