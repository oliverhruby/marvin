import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'app/vendor/babylonjs/babylon';

// state management
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { SceneState, SCENE_UPDATE } from 'app/reducers/scene';

// scene objects
import { Sector } from './objects/sector';
import { Obstacle } from './objects/obstacle';
import { Path } from './objects/path';
import { World } from './objects/world';
import { Marvin } from './objects/marvin';
import { Laser } from './objects/laser';
import { Camera } from './objects/camera';
import { Axis } from './objects/axis';
import { Fire } from './objects/fire';

/**
 * This component represents the overall 3D visualization scene rendered on a canvas
 */
@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {
  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;

  // get the element with the #mainCanvas on it
  @ViewChild('mainCanvas') mainCanvas: ElementRef;

  constructor(
    private store: Store<State>
  ) {

  }

  ngAfterViewInit() {
    // get the reference to the rendering canvas
    let canvas: HTMLCanvasElement = this.mainCanvas.nativeElement;
    // Load the BABYLON 3D engine
    let engine = new BABYLON.Engine(canvas, true);
    // Now create a basic Babylon Scene object
    let scene = new BABYLON.Scene(engine);
    this._engine = engine;
    this._scene = scene;
    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    // This creates and positions a free camera
    let camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 3, 1.2, 100, new BABYLON.Vector3(0, 0, 0), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    /*
		This is where we create the rendering pipeline and attach it to the camera.
		The pipeline accepts many parameters, but all of them are optional.
		Depending on what you set in your parameters array, some effects will be
		enabled or disabled. Here is a list of the possible parameters:
    {
      chromatic_aberration: number;       // from 0 to x (1 for realism)
      edge_blur: number;                  // from 0 to x (1 for realism)
      distortion: number;                 // from 0 to x (1 for realism)
      grain_amount: number;               // from 0 to 1
      grain_texture: BABYLON.Texture;     // texture to use for grain effect; if unset, use random B&W noise
      dof_focus_distance: number;         // depth-of-field: focus distance; unset to disable (disabled by default)
      dof_aperture: number;               // depth-of-field: focus blur bias (default: 1)
      dof_darken: number;                 // depth-of-field: darken that which is out of focus (from 0 to 1, disabled by default)
      dof_pentagon: boolean;              // depth-of-field: makes a pentagon-like "bokeh" effect
      dof_gain: number;                   // depth-of-field: highlights gain; unset to disable (disabled by default)
      dof_threshold: number;              // depth-of-field: highlights threshold (default: 1)
      blur_noise: boolean;                // add a little bit of noise to the blur (default: true)
    }
	  */

    // let lensEffect = new BABYLON.LensRenderingPipeline('lens', {
    //   edge_blur: 1.0,
    //   chromatic_aberration: 1.0,
    //   distortion: 1.0,
    //   dof_focus_distance: 50,
    //   dof_aperture: 6.0,			// set this very high for tilt-shift effect
    //   grain_amount: 1.0,
    //   dof_pentagon: true,
    //   dof_gain: 1.0,
    //   dof_threshold: 1.0,
    //   dof_darken: 0.25
    // }, scene, 1.0, [camera]);

    // add the custom models to the scene
    let world = new World(scene);
    let sector = new Sector(scene);
    let obstacle = new Obstacle(scene);
    let path = new Path(scene);
    let axis = new Axis(scene);
    let fire = new Fire(scene);
    let marvin = new Marvin(scene, this.store);
    // let camera = new Camera(scene, canvas);

    // Create the "God Rays" effect (volumetric light scattering)
    let godrays = new BABYLON.VolumetricLightScatteringPostProcess(
      'godrays', 1.0, camera, null, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
    godrays.mesh.position = new BABYLON.Vector3(-150, 150, 150);
    godrays.mesh.scaling = new BABYLON.Vector3(350, 350, 350);
    marvin.position = godrays.mesh.position;

    // example loading of scene based on the state
    this.store.select<SceneState>('scene').subscribe(
      () =>
        // import objects from a file
        BABYLON.SceneLoader.ImportMesh('', 'assets/scenes/', 'robot.babylon', this._scene, function (meshes) {
        }, null, function (sc, message, exception) { })
    );

    let postProcess = new BABYLON.BlackAndWhitePostProcess('bandw', 1.0, camera, null, engine, true);

    // Persisting the scene
    // let serializedScene = BABYLON.SceneSerializer.Serialize(scene);
    // this.store.dispatch({ type: SCENE_UPDATE, payload: serializedScene });

    // scene.debugLayer.show();

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });
  }

  onResize(event) {
    this._engine.resize();
  }

}
