import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
 * Main camera
 */
export class Camera {

  constructor(private scene: BABYLON.Scene, private canvas: HTMLCanvasElement) {

    // create a camera, limit to not go under ground, view at 0
    let mainCam = new BABYLON.ArcRotateCamera('MainCam', Math.PI, 0.8, 50, new BABYLON.Vector3(0, 0, 0), this.scene);
    mainCam.upperBetaLimit = Math.PI / 2;
    mainCam.setTarget(BABYLON.Vector3.Zero());
    // fill the whole canvas area
    mainCam.viewport = new BABYLON.Viewport(0, 0, 1, 1);
    // attach the camera to the canvas
    mainCam.attachControl(this.canvas, false);

    // attach the camera
    scene.activeCameras.push(mainCam);
  }
}
