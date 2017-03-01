# Marvin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oliverhruby/marvin.svg?branch=master)](https://travis-ci.org/oliverhruby/marvin)
[![Coverage Status](https://coveralls.io/repos/github/oliverhruby/marvin/badge.svg?branch=master)](https://coveralls.io/github/oliverhruby/marvin?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/5880a5cab194d40038f473f9/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5880a5cab194d40038f473f9)

Marvin is a browser-based application for 3D visualization of a robot vehicle and its ambient world, obstacles, paths, etc. The application can also be used to control the vehicle using any input method you can think of. Being all JavaScript based it is portable and can be run anywhere on a desktop or mobile using a browser that suports WebGL, Web Audio, Web Sockets, gamepad API, etc.

The main purpose is to demonstrate the possibilities of pure browser based technologies for this kind of rich experience.
It is built with focus on patterns and continuous integration. The application or parts of it can serve as a base
for building your own projects or modules. 

Technologies used:
* [WebGL](https://en.wikipedia.org/wiki/WebGL) - browser based technology that supports hardware accelerated 3D graphics
* [Web Audio](http://webaudioapi.com) - browser based technology for generating sounds, playing samples, mixing and adding audio effects, etc.
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - speech recognition and speech synthesis directly in the browser
* [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) - browser based support for gamepads
* [Battery Status API](https://www.w3.org/TR/battery-status) - charging status, charging/discharging time and current level of the computer or phone battery
* [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) - vector graphics using tag markup can be easily used to bind to real time data and animate
* [MQTT](http://mqtt.org) - MQTT is a machine-to-machine ("Internet of Things") connectivity protocol, used for remote control and receiving sensor data
* [WebSocket](https://en.wikipedia.org/wiki/WebSocket) - communication protocol (for MQTT over Websockets)
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
* [Sequelize](http://docs.sequelizejs.com/en/v3) - Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* [SQLite](https://www.sqlite.org) - SQLite is a self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine.


Tools used:
* [TypeScript](https://www.typescriptlang.org/index.html) - typed superset of JavaScript that compiles into plain JavaScript
* [Webpack](https://webpack.js.org) - module bundler
* [Electron](http://electron.atom.io/) - for packaging as a standalone application for Linux, Mac OS X and Windows
* [Travis CI](https://travis-ci.org) - free service for continuous integration builds (see the bagde below the title)
* [Jasmine](https://jasmine.github.io) - testing framework
* [Karma](http://karma-runner.github.io/1.0/index.html) - test runner


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). 