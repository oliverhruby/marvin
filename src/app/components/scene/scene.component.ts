import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'app/vendor/babylonjs/babylon';

// state management
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

// scene objects
import { Sector } from './objects/sector';
import { Obstacle } from './objects/obstacle';
import { Path } from './objects/path';
import { World } from './objects/world';
import { Marvin } from './objects/marvin';
import { Laser } from './objects/laser';
import { Camera } from './objects/camera';
import { Axis } from './objects/axis';

/**
 * This component represents the overall 3D visualization scene rendered on a canvas
 */
@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {
  private _engine: BABYLON.Engine;
  private _canvas: HTMLCanvasElement;

  // get the element with the #mainCanvas on it
  @ViewChild('mainCanvas') mainCanvas: ElementRef;

  constructor(
    private store: Store<State>
  ) {

  }

  ngAfterViewInit() { // wait for the view to init before using the element
    // get the reference to the rendering canvas
    let canvas: HTMLCanvasElement = this.mainCanvas.nativeElement;
    // Load the BABYLON 3D engine
    let engine = new BABYLON.Engine(canvas, true);
    // Now create a basic Babylon Scene object
    let scene = new BABYLON.Scene(engine);
    this._engine = engine;
    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    // This creates and positions a free camera
    let camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 3, 1.2, 100, new BABYLON.Vector3(0, 0, 0), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // add the custom models to the scene
    let world = new World(scene);
    let sector = new Sector(scene);
    let obstacle = new Obstacle(scene);
    let path = new Path(scene);
    let axis = new Axis(scene);
    let marvin = new Marvin(scene, this.store);
    // let camera = new Camera(scene, canvas);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });

    let xbox360pad;
    let genericpad;

    let gamepadConnected = function (gamepad) {
      if (gamepad.index === 0) {
        gamepad.onleftstickchanged(function (values) {
          // BABYLON.Tools.Log('X: " + values.x + " Y: " + values.y);
        });
        gamepad.onrightstickchanged(function (values) {
          // BABYLON.Tools.Log('X: " + values.x + " Y: " + values.y);
        });
        if (gamepad instanceof BABYLON.Xbox360Pad) {
          xbox360pad = gamepad;
          xbox360pad.onlefttriggerchanged(function (value) {
            // BABYLON.Tools.Log('LT: " + value.toString());
          });
          xbox360pad.onrighttriggerchanged(function (value) {
            // BABYLON.Tools.Log('RT: " + value.toString());
          });
          xbox360pad.onbuttondown(function (button) {
            switch (button) {
              case 0:
                // BABYLON.Tools.Log('A: pressed');
                console.log('A: pressed');
                break;
              case 1:
                // BABYLON.Tools.Log('B: pressed');
                break;
              case 2:
                // BABYLON.Tools.Log('X: pressed');
                break;
              case 3:
                // BABYLON.Tools.Log('Y: pressed');
                break;
              case 5:
                // BABYLON.Tools.Log('Back: pressed');
                break;
              case 4:
                // BABYLON.Tools.Log('Start: pressed');
                break;
              case 6:
                // BABYLON.Tools.Log('LB: pressed');
                break;
              case 7:
                // BABYLON.Tools.Log('RB: pressed');
                break;
              case 8:
                // BABYLON.Tools.Log('LS: pressed');
                break;
              case 9:
                // BABYLON.Tools.Log('RS: pressed');
                break;
            }
          });
          xbox360pad.onbuttonup(function (button) {
            switch (button) {
              case 0:
                // BABYLON.Tools.Log('A: released');
                break;
              case 1:
                // BABYLON.Tools.Log('B: released');
                break;
              case 2:
                // BABYLON.Tools.Log('X: released');
                break;
              case 3:
                // BABYLON.Tools.Log('Y: released');
                break;
              case 5:
                // BABYLON.Tools.Log('Back: released');
                break;
              case 4:
                // BABYLON.Tools.Log('Start: released');
                break;
              case 6:
                // BABYLON.Tools.Log('LB: released');
                break;
              case 7:
                // BABYLON.Tools.Log('RB: released');
                break;
              case 8:
                // BABYLON.Tools.Log('LS: released');
                break;
              case 9:
                // BABYLON.Tools.Log('RS: released');
                break;
            }
          });
          xbox360pad.ondpaddown(function (button) {
            switch (button) {
              case 1:
                // BABYLON.Tools.Log('Down: pressed');
                break;
              case 2:
                // BABYLON.Tools.Log('Left: pressed');
                break;
              case 3:
                // BABYLON.Tools.Log('Right: pressed');
                break;
              case 0:
                // BABYLON.Tools.Log('Up: pressed');
                break;
            }
          });
          xbox360pad.ondpadup(function (button) {
            switch (button) {
              case 1:
                // BABYLON.Tools.Log('Down: released');
                break;
              case 2:
                // BABYLON.Tools.Log('Left: released');
                break;
              case 3:
                // BABYLON.Tools.Log('Right: released');
                break;
              case 0:
                // BABYLON.Tools.Log('Up: released');
                break;
            }
          });
        } else {
          genericpad = gamepad;
          genericpad.onbuttondown(function (buttonIndex) {
            // BABYLON.Tools.Log('Button " + buttonIndex + " pressed');
          });
          genericpad.onbuttonup(function (buttonIndex) {
            // BABYLON.Tools.Log('Button " + buttonIndex + " released');
          });
        }
      }
    };

    let gamepads = new BABYLON.Gamepads(gamepadConnected);
  }

  onResize(event) {
    this._engine.resize();
  }

}
