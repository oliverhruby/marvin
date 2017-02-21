import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
* Represents the distance sensor module used for scanning the space
* @desc Test
*/
export class Laser {

    public rotation: number;
    public angle: number;

    private scene: BABYLON.Scene;

    constructor(body: BABYLON.Mesh) {
        this.scene = body.getScene();

        let box = BABYLON.MeshBuilder.CreateBox('laserBox', { height: 1, width: 2, depth: 1 }, this.scene);

        box.parent = body;

        box.position.y = 2;
        box.position.x = 4;

        let laserMaterial = new BABYLON.ShaderMaterial('shader', this.scene, "/assets/shaders/custom", {
          needAlphaBlending: true,
          attributes: ['position', 'normal', 'uv'],
          uniforms: ['time', 'worldViewProjection']
        });

        let laserlen = 200;
        let plane = BABYLON.MeshBuilder.CreatePlane('pl', { width: 2, height: laserlen }, this.scene);
        let plane2 = BABYLON.MeshBuilder.CreatePlane('pl', { width: 2, height: laserlen }, this.scene);
        // plane2.rotation.y = Math.PI / 2;
        let matrix = BABYLON.Matrix.Translation(0, laserlen / 2, 0);
        plane.setPivotMatrix(matrix);
        plane2.setPivotMatrix(matrix);
        plane.parent = box;
        plane2.parent = box;
        box.rotation.x = Math.PI / 2;

        laserMaterial.setColor3('color', new BABYLON.Color3(1, 0, 0));
        laserMaterial.setVector3('cameraPosition', BABYLON.Vector3.Zero());
        laserMaterial.setFloat('time', 0.0);
        laserMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;
        laserMaterial.alpha = 0.44444;
        laserMaterial.backFaceCulling = false;

        plane.material = laserMaterial;
        plane2.material = laserMaterial;
        let k = 0;
        this.scene.registerBeforeRender(function () {
            box.rotation.z = Math.sin(k) - Math.PI / 2;
            k += .05;
            this.rotation = k;
        });
    }

}
