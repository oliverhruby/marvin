import * as BABYLON from 'babylonjs/babylon';

export class Stats {

    private _scene: BABYLON.Scene;

    constructor(marvin: any) {
        var scene = marvin.scene;

    //     var canvas = new BABYLON.ScreenSpaceCanvas2D(scene, {
    //         id: "ScreenCanvas",
    //         size: new BABYLON.Size(200, 80),
    //         backgroundFill: "#4040408F",
    //         backgroundRoundRadius: 10,
    //         children: []
    //     });

    //     scene.registerBeforeRender(function () {
    //     var text = new BABYLON.Text2D("SPEED: " + marvin.speed + " km/h\nDIRECTION: " + marvin.angle + "°", {
    //         id: "text",
    //         parent: canvas,
    //         marginAlignment: "h: center, v:center",
    //   fontName: "11pt Arial",
    //     });

    //     });
    }
}
