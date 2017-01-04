import * as BABYLON from 'babylonjs/babylon';

var xbox360pad;
var genericpad;

var gamepadConnected = function(gamepad) {
    if (gamepad.index === 0) {
        gamepad.onleftstickchanged(function(values) {
            // BABYLON.Tools.Log("X: " + values.x + " Y: " + values.y);
        });
        gamepad.onrightstickchanged(function(values) {
            // BABYLON.Tools.Log("X: " + values.x + " Y: " + values.y);
        });
        if (gamepad instanceof BABYLON.Xbox360Pad) {
            xbox360pad = gamepad;
            xbox360pad.onlefttriggerchanged(function(value) {
                // BABYLON.Tools.Log("LT: " + value.toString());
            });
            xbox360pad.onrighttriggerchanged(function(value) {
                // BABYLON.Tools.Log("RT: " + value.toString());
            });
            xbox360pad.onbuttondown(function(button) {
                switch (button) {
                    case 0:
                        // BABYLON.Tools.Log("A: pressed");
                        break;
                    case 1:
                        // BABYLON.Tools.Log("B: pressed");
                        break;
                    case 2:
                        // BABYLON.Tools.Log("X: pressed");
                        break;
                    case 3:
                        // BABYLON.Tools.Log("Y: pressed");
                        break;
                    case 5:
                        // BABYLON.Tools.Log("Back: pressed");
                        break;
                    case 4:
                        // BABYLON.Tools.Log("Start: pressed");
                        break;
                    case 6:
                        // BABYLON.Tools.Log("LB: pressed");
                        break;
                    case 7:
                        // BABYLON.Tools.Log("RB: pressed");
                        break;
                    case 8:
                        // BABYLON.Tools.Log("LS: pressed");
                        break;
                    case 9:
                        // BABYLON.Tools.Log("RS: pressed");
                        break;
                }
            });
            xbox360pad.onbuttonup(function(button) {
                switch (button) {
                    case 0:
                        // BABYLON.Tools.Log("A: released");
                        break;
                    case 1:
                        // BABYLON.Tools.Log("B: released");
                        break;
                    case 2:
                        // BABYLON.Tools.Log("X: released");
                        break;
                    case 3:
                        // BABYLON.Tools.Log("Y: released");
                        break;
                    case 5:
                        // BABYLON.Tools.Log("Back: released");
                        break;
                    case 4:
                        // BABYLON.Tools.Log("Start: released");
                        break;
                    case 6:
                        // BABYLON.Tools.Log("LB: released");
                        break;
                    case 7:
                        // BABYLON.Tools.Log("RB: released");
                        break;
                    case 8:
                        // BABYLON.Tools.Log("LS: released");
                        break;
                    case 9:
                        // BABYLON.Tools.Log("RS: released");
                        break;
                }
            });
            xbox360pad.ondpaddown(function(button) {
                switch (button) {
                    case 1:
                        // BABYLON.Tools.Log("Down: pressed");
                        break;
                    case 2:
                        // BABYLON.Tools.Log("Left: pressed");
                        break;
                    case 3:
                        // BABYLON.Tools.Log("Right: pressed");
                        break;
                    case 0:
                        // BABYLON.Tools.Log("Up: pressed");
                        break;
                }
            });
            xbox360pad.ondpadup(function(button) {
                switch (button) {
                    case 1:
                        // BABYLON.Tools.Log("Down: released");
                        break;
                    case 2:
                        // BABYLON.Tools.Log("Left: released");
                        break;
                    case 3:
                        // BABYLON.Tools.Log("Right: released");
                        break;
                    case 0:
                        // BABYLON.Tools.Log("Up: released");
                        break;
                }
            });
        } else {
            genericpad = gamepad;
            genericpad.onbuttondown(function(buttonIndex) {
                // BABYLON.Tools.Log("Button " + buttonIndex + " pressed");
            });
            genericpad.onbuttonup(function(buttonIndex) {
                // BABYLON.Tools.Log("Button " + buttonIndex + " released");
            });
        }
    }
};
var gamepads = new BABYLON.Gamepads(gamepadConnected);
