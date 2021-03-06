# Marvin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oliverhruby/marvin.svg?branch=master)](https://travis-ci.org/oliverhruby/marvin)
[![Coverage Status](https://coveralls.io/repos/github/oliverhruby/marvin/badge.svg)](https://coveralls.io/github/oliverhruby/marvin?branch=master)
[![Dependency Status](https://david-dm.org/oliverhruby/marvin/status.svg)](https://david-dm.org/oliverhruby/marvin)

Marvin is a browser-based application for 3D visualization of a robot vehicle and its ambient world, obstacles, paths, etc. The application can also be used to control the vehicle using any input method you can think of. Being all JavaScript based it is portable and can be run anywhere on a desktop or mobile using a browser that suports WebGL, Web Audio, Web Sockets, gamepad API, etc.

__Please note that in this is still in PoC stage, I'm testing various features and architectural blocks.__

The main purpose is to demonstrate the possibilities of pure browser based technologies for this kind of rich experience.
It is built with focus on patterns and continuous integration. The application or parts of it can serve as a base for building your own projects or modules. 

Technologies used:
* [WebGL](https://en.wikipedia.org/wiki/WebGL) - browser based technology that supports hardware accelerated 3D graphics
* [Web Audio](http://webaudioapi.com) - browser based technology for generating sounds, playing samples, mixing and adding audio effects, etc.
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - speech recognition and speech synthesis directly in the browser
* [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) - browser based support for gamepads
* [Battery Status API](https://www.w3.org/TR/battery-status) - charging status, charging/discharging time and current level of the computer or phone battery
* [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) - vector graphics using tag markup can be easily used to bind to real time data and animate
* [MQTT](http://mqtt.org) - MQTT is a machine-to-machine ("Internet of Things") connectivity protocol, used for remote control and receiving sensor data
* [WebSocket](https://en.wikipedia.org/wiki/WebSocket) - communication protocol (for MQTT over Websockets)
* [JSON Web Token](https://jwt.io/) - JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.
* [Node-RED](https://nodered.org) - an instance on Node-RED could be optionally used with this application for "drag-and-drop plumbing" to control anything

Application architecture - Client
* [Angular2](https://angular.io) - core framework defining the architecture of the application
* [RxJS](http://reactivex.io/rxjs) - reactive programming for JavaScript
* [ngrx](https://github.com/ngrx/ngrx.github.io) - RxJS powered state management for Angular2 apps, inspired by Redux
* [BabylonJS](http://babylonjs.com) - JavaScript library for working with WebGL which provides a full set of features for building visualizations and games
* [Font Awesome](http://fontawesome.io) - free iconic font and css toolkit
* [ng2-charts](https://github.com/valor-software/ng2-charts) - Beautiful charts for Angular2 based on Chart.js

Application architecture - Server
* [Node.js](https://nodejs.org/en) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](http://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [SQLite](https://www.sqlite.org) - SQLite is a self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine.
* [Bookshelf.js](http://bookshelfjs.org) - Bookshelf is a JavaScript ORM for Node.js, built on the Knex SQL query builder.
* [Knex.js](https://knexjs.org) - A SQL Query Builder for Javascript
* [Auth0](https://auth0.com) - Single sign on & token based authentication provider

Tools used:
* [TypeScript](https://www.typescriptlang.org/index.html) - typed superset of JavaScript that compiles into plain JavaScript
* [Webpack](https://webpack.js.org) - module bundler
* [Electron](http://electron.atom.io/) - for packaging as a standalone application for Linux, Mac OS X and Windows
* [Travis CI](https://travis-ci.org) - free service for continuous integration builds (see the bagde below the title)
* [Jasmine](https://jasmine.github.io) - testing framework
* [Karma](http://karma-runner.github.io/1.0/index.html) - test runner

## Running the application

Run `npm install -g @angular/cli typescript gulp` to install the command line tools globally.

Clone the source code and run `npm install` to install the dependencies.

Run `ng build --watch` to start build the frontend application and watch for changes. The app will automatically reload if you change any of the source files.

Run `gulp serve-api` after the frontend part has been built to build to start the backend.

Open `http:\\localhost:3000` in the browser to access the application.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
