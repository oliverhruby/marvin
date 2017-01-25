import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
 * Visualization of the path as the robot moves
 */
export class Path {

    constructor(private scene: BABYLON.Scene) {
        this.createPath();
    }


    private createPath() {

        let path1 = [];
        let path2 = [];

        // generate random path
        let pos = [0, 0];
        let angle = 0;
        for (let i = 0; i < 200; i++) {
            let aRad = angle * Math.PI / 180;
            let d = Math.floor(Math.random() * 100 + 100);
            let x = Math.cos(aRad) * 1;
            let y = Math.sin(aRad) * 1;
            pos = [pos[0] + x, pos[1] + y];
            path1.push(new BABYLON.Vector3(pos[0], 0, pos[1]));
            path2.push(new BABYLON.Vector3(pos[0], 2, pos[1]));
            angle = angle + Math.random() * 20 - 10;
        }

        let paths = [];
        paths.push(path1);
        paths.push(path2);

        let mat = new BABYLON.StandardMaterial('mat2', this.scene);
        mat.alpha = 0.5;
        mat.diffuseColor = new BABYLON.Color3(1, 1, 1);
        mat.backFaceCulling = false;

        let ribbon = BABYLON.Mesh.CreateRibbon('paths', paths, false, false, 0, this.scene);
        ribbon.material = mat;
    }
}
