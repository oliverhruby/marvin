import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as BABYLON from 'babylonjs/babylon';

/**
 * Service for providing the gamepad control
 */
@Injectable()
export class GamepadService {

  constructor() {

    var gamepadConnected = function (gamepad) {
      console.log("gamepad connected");
    };

    var gamepads = new BABYLON.Gamepads(gamepadConnected);

    function gameLoop() {
      var gamepads = navigator.getGamepads();
      for (var playerIndex = 0; playerIndex < gamepads.length; playerIndex++) {
        var gamepad = gamepads[playerIndex];
        if (gamepad) {
          if (gamepad.buttons[6].pressed || gamepad.buttons[7].pressed) {
            console.log('player ' + playerIndex);
          }
        }
      }
      window.requestAnimationFrame(gameLoop);
    }
    gameLoop();
  }

}
