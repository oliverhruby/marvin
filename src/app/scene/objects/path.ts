import * as BABYLON from '../../vendor/babylonjs/babylon';

/**
 * Visualization of the path as the robot moves
 */
export class Path {

    constructor(private scene: BABYLON.Scene) {
        this.createPath();
    }


    private createPath() {

        var path1 = [];
        var path2 = [];

        // generate random path
        var pos = [0, 0];
        var angle = 0;
        for (var i = 0; i < 200; i++) {
            var aRad = angle * Math.PI / 180;
            var d = Math.floor(Math.random() * 100 + 100);
            var x = Math.cos(aRad) * 1;
            var y = Math.sin(aRad) * 1;
            pos = [pos[0] + x, pos[1] + y];
            path1.push(new BABYLON.Vector3(pos[0], 0, pos[1]));
            path2.push(new BABYLON.Vector3(pos[0], 2, pos[1]));
            angle = angle + Math.random() * 20 - 10;
        }

        var paths = [];
        paths.push(path1);
        paths.push(path2);

        var mat = new BABYLON.StandardMaterial("mat2", this.scene);
        mat.alpha = 0.5;
        mat.diffuseColor = new BABYLON.Color3(1, 1, 1);
        mat.backFaceCulling = false;

        var ribbon = BABYLON.Mesh.CreateRibbon("paths", paths, false, false, 0, this.scene);
        ribbon.material = mat;
    }
}
