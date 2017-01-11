import * as BABYLON from '../../vendor/babylonjs/babylon';

/**
 * Visualization of the obstacles found by sensors
 */
export class Obstacle {

    constructor(private scene: BABYLON.Scene) {
        this.createObstacle();
    }

    private createObstacle() {

        let paths = [];
        let path1 = [];
        let path2 = [];

        for (let i = 0; i < 360; i++) {
            let aRad = i * Math.PI / 180;
            let d = Math.floor(Math.random() * 100 + 100);
            let x = Math.cos(aRad) * d;
            let y = Math.sin(aRad) * d;
            path1.push(new BABYLON.Vector3(x, 0, y));
            path2.push(new BABYLON.Vector3(x, 50, y));
        }

        path1.push(path1[0]);
        path2.push(path2[0]);

        paths.push(path1);
        paths.push(path2);

        let mat = new BABYLON.StandardMaterial('mat1', this.scene);
        mat.alpha = 1.0;
        mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
        mat.backFaceCulling = false;

        let ribbon = BABYLON.Mesh.CreateRibbon('obstacle', paths, false, false, 0, this.scene);
        ribbon.material = mat;

        ribbon.visibility = 0.8;

        // let animationBox = new BABYLON.Animation(
        //     "obstacleAnimation",
        //     "scaling.y",
        //     30,
        //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        //     BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        // );

        // // An array with all animation keys
        // let keys = [];
        // keys.push({
        //     frame: 0,
        //     value: 1
        // });
        // keys.push({
        //     frame: 20,
        //     value: 0.2
        // });
        // keys.push({
        //     frame: 100,
        //     value: 1
        // });

        // animationBox.setKeys(keys);

        // ribbon.animations.push(animationBox);
        // this._scene.beginAnimation(ribbon, 0, 100, true);
    }
}
