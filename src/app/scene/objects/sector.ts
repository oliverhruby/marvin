import * as BABYLON from '../../vendor/babylonjs/babylon';

/**
 * Visualization of various guides (best path, danger zone, etc.)
 */
export class Sector {

    constructor(private scene: BABYLON.Scene) {
        this.initialize();
    }

    private initialize() {
        let radius = 10;
        let tes = 60;
        let pi2 = Math.PI * 2;
        let step = pi2 / tes;
        let path = [];
        for (let i = 0; i < pi2; i += step) {
            let x = radius * Math.sin(i);
            let z = radius * Math.cos(i);
            let y = 0;
            path.push(new BABYLON.Vector3(x, y, z));
        }
        path.push(path[0]);

        let circle = BABYLON.Mesh.CreateLines('circle', path, this.scene);

        // render loop
        this.scene.registerBeforeRender(function () {
            circle.position.x += 0.1;
        });
    }
}

