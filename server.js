// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));

// Add WebSocket listener 
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

setTimeout(function() {
  io.sockets.emit('time', {date: (new Date()).toString()} );
}, 1000 );


// Application database setup
// var fs = require("fs");
// var file = "server/database/marvin.db";
// var exists = fs.existsSync(file);

// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(file);

// db.serialize(function() {
//   // db.run("DROP TABLE user");
//   db.run("CREATE TABLE if not exists user (name TEXT)");
// });

// db.close();

// Sequelize ORM test code
var Sequelize = require('sequelize');
var sequelize = new Sequelize('marvin', '', '', {
  dialect: 'sqlite',
  storage: 'server/database/marvin.db'
});

var User = sequelize.define('user', {
  name: Sequelize.STRING
});

sequelize.sync().then(function() {
  User.create({ name: 'xyz' });
  User.findAll().then(function (users) {
    console.log(users);
  });
});

