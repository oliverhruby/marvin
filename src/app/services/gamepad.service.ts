// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import * as BABYLON from 'app/vendor/babylonjs/babylon';

// /**
//  * Service for providing the gamepad control using the BABYLON library.
//  * This functionality is dependent on the browser support. It works
//  * well in Edge and Chrome with XBox controller for example.
//  */
// @Injectable()
// export class GamepadService {

//   constructor() {

//     let gamepadConnected = function (gamepad) {
//       console.log('gamepad connected');
//     };

//     let gamepads = new BABYLON.Gamepads(gamepadConnected);

//     function gameLoop() {
//       let gamepads = navigator.getGamepads();
//       for (let playerIndex = 0; playerIndex < gamepads.length; playerIndex++) {
//         let gamepad = gamepads[playerIndex];
//         if (gamepad) {
//           if (gamepad.buttons[6].pressed || gamepad.buttons[7].pressed) {
//             console.log('player ' + playerIndex);
//           }
//         }
//       }
//       window.requestAnimationFrame(gameLoop);
//     }
//     gameLoop();
//   }

// }
