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
  }

  onResize(event) {
    this._engine.resize();
  }

}
