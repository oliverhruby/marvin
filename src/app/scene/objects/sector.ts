import * as BABYLON from '../../vendor/babylonjs/babylon';

/**
 * Visualization of various guides (best path, danger zone, etc.)
 */
export class Sector {

    private _scene: BABYLON.Scene;

    constructor(scene: BABYLON.Scene) {
        this._scene = scene;

        this.initialize();
    }

    private initialize() {
        var radius = 10;
        var tes = 60;
        var pi2 = Math.PI * 2;
        var step = pi2 / tes;
        var path = [];
        for (var i = 0; i < pi2; i += step) {
            var x = radius * Math.sin(i);
            var z = radius * Math.cos(i);
            var y = 0;
            path.push(new BABYLON.Vector3(x, y, z));
        }
        path.push(path[0]);

        var circle = BABYLON.Mesh.CreateLines("circle", path, this._scene);

        // render loop
        this._scene.registerBeforeRender(function () {
            circle.position.x += 0.1;
        });
    }
}

