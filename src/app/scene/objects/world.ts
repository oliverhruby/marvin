import * as BABYLON from 'babylonjs/babylon';

export class World {

    private _scene: BABYLON.Scene;

    constructor(scene: BABYLON.Scene) {
        this._scene = scene;

        this.createGround();
        this.createSky();
        this.createLight();
    }

    // ----------------------------------------------------------------------
    // add ground to the scene
    // ----------------------------------------------------------------------
    private createGround() {
        // ground mesh
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {
            width: 2000,
            height: 2000
        }, this._scene);
        ground.position.y = -0.0001;

        // ground material
        // var groundMaterial = new BABYLON.GridMaterial("groundMaterial", this._scene);
        // groundMaterial.majorUnitFrequency = 5;
        // groundMaterial.minorUnitVisibility = 0.45;
        // groundMaterial.gridRatio = 20;
        // groundMaterial.backFaceCulling = false;
        // groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
        // groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
        // groundMaterial.opacity = 0.98;

        // ground.material = groundMaterial;

        // ground physics
        //ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsEngine.BoxImpostor, {
        //   mass: 0
        //});
    };

    // ----------------------------------------------------------------------
    // show the skybox
    // ----------------------------------------------------------------------
    private createSky() {
        // var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", this._scene);
        // skyMaterial.backFaceCulling = false;

        // var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, this._scene);
        // skybox.material = skyMaterial;
    }

    // ----------------------------------------------------------------------
    // create a basic light, aiming 0,1,0 - meaning, to the sky
    // ----------------------------------------------------------------------
    private createLight() {
        var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0.2), this._scene);
        light.groundColor = new BABYLON.Color3(.2, .2, .2);
    }
}
