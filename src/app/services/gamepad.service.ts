import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as BABYLON from 'app/vendor/babylonjs/babylon';
import { State } from 'app/reducers';
import {
  GAMEPAD_CONNECT,
  GAMEPAD_DISCONNECT,
  GAMEPAD_UPDATE_LS,
  GAMEPAD_UPDATE_RS
} from 'app/reducers/gamepad';

/**
 * Service for providing the gamepad control using the BABYLON library.
 * This functionality is dependent on the browser support. It works
 * well in Edge and Chrome with XBox controller for example.
 */
@Injectable()
export class GamepadService {

  constructor(
    private store: Store<State>
  ) {

    let xbox360pad;
    let genericpad;

    let gamepadConnected = function (gamepad) {
      store.dispatch({
        type: GAMEPAD_CONNECT
      });
      if (gamepad.index === 0) {
        gamepad.onleftstickchanged(function (values) {
          store.dispatch({
            type: GAMEPAD_UPDATE_LS,
            payload: values
          });
        });
        gamepad.onrightstickchanged(function (values) {
          store.dispatch({
            type: GAMEPAD_UPDATE_RS,
            payload: values
          });
        });

        if (gamepad instanceof BABYLON.Xbox360Pad) {
          xbox360pad = gamepad;
          xbox360pad.onlefttriggerchanged(function (value) {
            // leftTriggerValue.innerHTML = value.toString();
          });
          xbox360pad.onrighttriggerchanged(function (value) {
            // rightTriggerValue.innerHTML = value.toString();
          });
          xbox360pad.onbuttondown(function (button) {
            switch (button) {
              case 0:
                // xboxButtonPressed.innerHTML = "A pressed";
                break;
              case 1:
                // xboxButtonPressed.innerHTML = "B pressed";
                break;
              case 2:
                // xboxButtonPressed.innerHTML = "X pressed";
                break;
              case 3:
                // xboxButtonPressed.innerHTML = "Y pressed";
                break;
              case 5:
                // xboxButtonPressed.innerHTML = "Back pressed";
                break;
              case 4:
                // xboxButtonPressed.innerHTML = "Start pressed";
                break;
              case 6:
                // xboxButtonPressed.innerHTML = "LB pressed";
                break;
              case 7:
                // xboxButtonPressed.innerHTML = "RB pressed";
                break;
              case 8:
                // xboxButtonPressed.innerHTML = "LeftStick pressed";
                break;
              case 9:
                // xboxButtonPressed.innerHTML = "RightStick pressed";
                break;
            }
          });
          xbox360pad.onbuttonup(function (button) {
            switch (button) {
              case 0:
                // xboxButtonReleased.innerHTML = "A released";
                break;
              case 1:
                // xboxButtonReleased.innerHTML = "B released";
                break;
              case 2:
                // xboxButtonReleased.innerHTML = "X released";
                break;
              case 3:
                // xboxButtonReleased.innerHTML = "Y released";
                break;
              case 5:
                // xboxButtonReleased.innerHTML = "Back released";
                break;
              case 4:
                // xboxButtonReleased.innerHTML = "Start released";
                break;
              case 6:
                // xboxButtonReleased.innerHTML = "LB released";
                break;
              case 7:
                // xboxButtonReleased.innerHTML = "RB released";
                break;
              case 8:
                // xboxButtonReleased.innerHTML = "LeftStick released";
                break;
              case 9:
                // xboxButtonReleased.innerHTML = "RightStick released";
                break;
            }
          });
          xbox360pad.ondpaddown(function (button) {
            switch (button) {
              case 1:
                // dpadPressed.innerHTML = "Down pressed";
                break;
              case 2:
                // dpadPressed.innerHTML = "Left pressed";
                break;
              case 3:
                // dpadPressed.innerHTML = "Right pressed";
                break;
              case 0:
                // dpadPressed.innerHTML = "Up pressed";
                break;
            }
          });
          xbox360pad.ondpadup(function (button) {
            switch (button) {
              case 1:
                // dpadReleased.innerHTML = "Down released";
                break;
              case 2:
                // dpadReleased.innerHTML = "Left released";
                break;
              case 3:
                // dpadReleased.innerHTML = "Right released";
                break;
              case 0:
                // dpadReleased.innerHTML = "Up released";
                break;
            }
          });
        } else {
          // GenericPadSection.className = "";
          genericpad = gamepad;
          genericpad.onbuttondown(function (buttonIndex) {
            // buttonPressed.innerHTML = "Button " + buttonIndex + " pressed";
          });
          genericpad.onbuttonup(function (buttonIndex) {
            // buttonReleased.innerHTML = "Button " + buttonIndex + " released";
          });
        }
      }
    }

    let gamepads = new BABYLON.Gamepads(gamepadConnected);
  }
}
