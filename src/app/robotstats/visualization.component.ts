import { WebSocketService } from './websocket.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'babylonjs/babylon';

import { Sector } from './scene/sector';
import { Obstacle } from './scene/obstacle';
import { Path } from './scene/path';
import { World } from './scene/world';
import { Marvin } from './scene/marvin';
import { Laser } from './scene/laser';
import { Camera } from './scene/camera';
import { Stats } from './scene/stats';

@Component({
  selector: 'robot-stats',
  providers: [WebSocketService],
  template: `
    <div>
      <canvas #renderCanvas
        [attr.width]='_size'
        [attr.height]='_size'>
      </canvas>
      Speed: 0; Direction: 0
      <div>Responses:</div>
	    <div *ngFor="let message of messages">{{message}}</div>
    </div>
  `
})
export class VisualizationComponent {
  private _size: number;
  private _canvas: HTMLCanvasElement;

  private messages: string[] = [];

  // get the element with the #renderCanvas on it
  @ViewChild("renderCanvas") renderCanvas: ElementRef;

  constructor(
    private webSocketService: WebSocketService
  ) {
    this._size = 300;

    this.webSocketService.GetInstanceStatus().subscribe((result) => {
      this.messages.push(result);
    });
  }

  ngAfterViewInit() { // wait for the view to init before using the element
    // get the reference to the rendering canvas
    let canvas: HTMLCanvasElement = this.renderCanvas.nativeElement;
    // Load the BABYLON 3D engine
    var engine = new BABYLON.Engine(canvas, true);
    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);
    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color3(0, 1, 0);
    // This creates and positions a free camera
    var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);
    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    // Dim the light a small amount
    light.intensity = .5;
    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;
    // Let's try our built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    // add the custom models to the scene
    var sector = new Sector(scene);
    var obstacle = new Obstacle(scene);
    var path = new Path(scene);
    //var marvin = new Marvin(scene);
    //var world = new World(scene);
    //var camera = new Camera(scene, canvas);
    //var stats = new Stats(marvin);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });

    var xbox360pad;
    var genericpad;

    var gamepadConnected = function (gamepad) {
      if (gamepad.index === 0) {
        gamepad.onleftstickchanged(function (values) {
          // BABYLON.Tools.Log("X: " + values.x + " Y: " + values.y);
        });
        gamepad.onrightstickchanged(function (values) {
          // BABYLON.Tools.Log("X: " + values.x + " Y: " + values.y);
        });
        if (gamepad instanceof BABYLON.Xbox360Pad) {
          xbox360pad = gamepad;
          xbox360pad.onlefttriggerchanged(function (value) {
            // BABYLON.Tools.Log("LT: " + value.toString());
          });
          xbox360pad.onrighttriggerchanged(function (value) {
            // BABYLON.Tools.Log("RT: " + value.toString());
          });
          xbox360pad.onbuttondown(function (button) {
            switch (button) {
              case 0:
                // BABYLON.Tools.Log("A: pressed");
                console.log("A: pressed");
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
          xbox360pad.onbuttonup(function (button) {
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
          xbox360pad.ondpaddown(function (button) {
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
          xbox360pad.ondpadup(function (button) {
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
          genericpad.onbuttondown(function (buttonIndex) {
            // BABYLON.Tools.Log("Button " + buttonIndex + " pressed");
          });
          genericpad.onbuttonup(function (buttonIndex) {
            // BABYLON.Tools.Log("Button " + buttonIndex + " released");
          });
        }
      }
    };

    var gamepads = new BABYLON.Gamepads(gamepadConnected);

  }
}
