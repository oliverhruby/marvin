FROM mhart/alpine-node

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000

CMD [ "gulp", "serve-api" ]