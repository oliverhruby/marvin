import * as BABYLON from 'babylonjs/babylon';

export class Camera {

    private _scene: BABYLON.Scene;
    private _canvas: HTMLCanvasElement;

    constructor(scene: BABYLON.Scene, canvas: HTMLCanvasElement) {
        this._scene = scene;
        this._canvas = canvas;

        // create a camera, limit to not go under ground, view at 0
        var mainCam = new BABYLON.ArcRotateCamera("MainCam", Math.PI, 0.8, 50, new BABYLON.Vector3(0, 0, 0), this._scene);
        mainCam.upperBetaLimit = Math.PI / 2;
        mainCam.setTarget(BABYLON.Vector3.Zero());
        // fill the whole canvas area
        mainCam.viewport = new BABYLON.Viewport(0, 0, 1, 1);
        // attach the camera to the canvas
        mainCam.attachControl(this._canvas, false);

        // attach the camera
        scene.activeCameras.push(mainCam);
    }
}
