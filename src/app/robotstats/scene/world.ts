import * as BABYLON from 'babylonjs/babylon';

export class World {

    private _scene: BABYLON.Scene;

    constructor(scene: BABYLON.Scene) {
        this._scene = scene;

        this.createGround();
        this.createSky();
        this.createLight();
        this.createAxis(100);
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
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsEngine.BoxImpostor, {
           mass: 0
        });
    };

    // ----------------------------------------------------------------------
    // Creates a plane with text written on it 
    // ----------------------------------------------------------------------
    private makeTextPlane(text, color, size) {
        var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, this._scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
        var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, this._scene, true);
        plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", this._scene);
        plane.material.backFaceCulling = false;
        //plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        //plane.material.diffuseTexture = dynamicTexture;
        return plane;
    };

    // ----------------------------------------------------------------------
    // Show the axis guidelines 
    // ----------------------------------------------------------------------
    private createAxis(size) {

        var axisX = BABYLON.Mesh.CreateLines("axisX", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
        ], this._scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = this.makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
        ], this._scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = this.makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
        ], this._scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = this.makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    }

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
