# Marvin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oliverhruby/marvin.svg?branch=master)](https://travis-ci.org/oliverhruby/marvin)
[![Coverage Status](https://coveralls.io/repos/github/oliverhruby/marvin/badge.svg?branch=master)](https://coveralls.io/github/oliverhruby/marvin?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/5880a5cab194d40038f473f9/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5880a5cab194d40038f473f9)

Marvin is a browser-based application for 3D visualization of a robot vehicle and its ambient world, obstacles, paths, etc. The application can also be used to control the vehicle using any input method you can think of. Being all JavaScript based it is portable and can be run anywhere on a desktop or mobile using a browser that suports WebGL, Web Audio, Web Sockets, gamepad API, etc.

The main purpose is to demonstrate the possibilities of pure browser based technologies for this kind of rich experience. It can serve as a base or reference for building your own project. The application is built with focus on simplicity, recommended patterns and continuous integration.

Application architecture:
* [Angular2](https://angular.io) - core framework defining the architecture of the application
* [BabylonJS](http://babylonjs.com) - JavaScript library for working with WebGL which provides a full set of features for building visualizations and games

Technologies used:
* [WebGL](https://en.wikipedia.org/wiki/WebGL) - browser base technology that supports hardware accelerated 3D graphics
* [Web Audio](http://webaudioapi.com) - browser based technology for generating sounds, playing samples, mixing and adding audio effects, etc.
* [WebSocket API](https://en.wikipedia.org/wiki/WebSocket) - for communication between the browser and the system that controls the real vehicle ([Node-RED](https://nodered.org) or other)
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - speech recognition and speech synthesis directly in the browser, isn't that cool? :-)

Tools used:
* [TypeScript](https://www.typescriptlang.org/index.html) - typed superset of JavaScript that compiles into plain JavaScript
* [Webpack 2](https://webpack.js.org) - module bundler
* [Travis CI](https://travis-ci.org) - free service for continuous integration builds (see the bagde below the title)
* [Karma](http://karma-runner.github.io/1.0/index.html) - test runner



This project structure was originally generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

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

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
