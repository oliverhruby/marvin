import * as BABYLON from 'babylonjs/babylon';
import { Laser } from './laser'

/**
 * Main robot object
 */
export class Marvin {

    public scene: BABYLON.Scene;
    public position: BABYLON.Vector3;
    public speed = 0;
    public direction = 0;
    public radarAngle = 0;
    public mode = 0; // 0 - manual, 1 - automatic

    public path = [];

    public LightL: BABYLON.SpotLight;
    public LightR: BABYLON.SpotLight;

    private _sound: BABYLON.Sound;

    constructor(scene: BABYLON.Scene) {
        this.scene = scene;
        this.position = new BABYLON.Vector3(0, 0, 0);

        this._createVehicle();
        this._createText();
        this._sound = new BABYLON.Sound("hover", "sounds/button.wav", this.scene);
    }

    /*
    Serializer for persisting the state
    */
    public toJson() {
        return ("{\n" +
            "  \"position\": " + this.position + ",\n" +
            "  \"lightL\": " + this.LightL.isEnabled() + ",\n" +
            "  \"lightR\": " + this.LightR.isEnabled() + ",\n" +
            "  \"speed\": " + this.speed + ",\n" +
            "  \"direction\": " + this.direction + ",\n" +
            "  \"radarAngle\": " + this.radarAngle + "\n" +
            "}");
    }

    private _createVehicle() {
        var me = this;

        //create body
        var body = BABYLON.MeshBuilder.CreateBox("vehicle", {
            height: 2,
            width: 12,
            depth: 7
        }, this.scene);
        body.position.y = 1.5;

        var laser = new Laser(body);

        //create wheels
        var rubber = new BABYLON.StandardMaterial("rubber", this.scene);
        rubber.alpha = 1.0;
        rubber.diffuseColor = new BABYLON.Color3(0.3, 0.5, 0.0);
        rubber.backFaceCulling = false;

        var wheelFL = BABYLON.Mesh.CreateCylinder("wheelFL", 2, 3, 3, 16, 2, this.scene, false);
        wheelFL.position = new BABYLON.Vector3(5, 0, 5);
        wheelFL.rotation.x = Math.PI / 2;
        //wheelFL.physicsImpostor = new BABYLON.PhysicsImpostor(wheel1, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
        wheelFL.material = rubber;
        wheelFL.parent = body;

        var wheelFR = BABYLON.Mesh.CreateCylinder("wheelFR", 2, 3, 3, 16, 2, this.scene, false);
        wheelFR.position = new BABYLON.Vector3(5, 0, -5);
        wheelFR.rotation.x = Math.PI / 2;
        //wheelFR.physicsImpostor = new BABYLON.PhysicsImpostor(wheel3, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
        wheelFR.material = rubber;
        wheelFR.parent = body;

        var wheelBR = BABYLON.Mesh.CreateCylinder("wheelBR", 2, 3, 3, 16, 2, this.scene, false);
        wheelBR.position = new BABYLON.Vector3(-5, 0, -5);
        wheelBR.rotation.x = Math.PI / 2;
        //wheelBR.physicsImpostor = new BABYLON.PhysicsImpostor(wheel2, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
        wheelBR.material = rubber;
        wheelBR.parent = body;

        var wheelBL = BABYLON.Mesh.CreateCylinder("wheelBL", 2, 3, 3, 16, 2, this.scene, false);
        wheelBL.position = new BABYLON.Vector3(-5, 0, 5);
        wheelBL.rotation.x = Math.PI / 2;
        //wheelBL.physicsImpostor = new BABYLON.PhysicsImpostor(wheel4, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
        wheelBL.material = rubber;
        wheelBL.parent = body;

        // add wheel physics
        // [wheel1, wheel2, wheel3, wheel4].forEach(function(w) {
        //     w.physicsImpostor = new BABYLON.PhysicsImpostor(w, BABYLON.PhysicsImpostor.SphereImpostor, {
        //         mass: 1,
        //         friction: 4,
        //         restitution: 0.5,
        //         nativeOptions: {
        //             move: true
        //         }
        //     });
        // });

        // create lights
        this.LightL = new BABYLON.SpotLight("LightFrontLeft", new BABYLON.Vector3(0, 4, -2), new BABYLON.Vector3(10, 4, -2), 0.6, 0.5, this.scene);
        this.LightL.parent = body;

        this.LightR = new BABYLON.SpotLight("LightFrontRight", new BABYLON.Vector3(0, 4, 2), new BABYLON.Vector3(10, 4, 2), 0.6, 0.5, this.scene);
        this.LightR.parent = body;

        // mouse control
        var mouseOverUnit = function (mesh) {
            if (mesh.meshUnderPointer !== null) {
                mesh.meshUnderPointer.renderOutline = true;
                mesh.meshUnderPointer.outlineWidth = 0.1;
            }
            me._sound.play();
        };

        var mouseOutUnit = function (mesh) {
            if (mesh.meshUnderPointer !== null) {
                mesh.meshUnderPointer.renderOutline = false;
                mesh.meshUnderPointer.outlineWidth = 0.1;
            }
        };

        body.actionManager = new BABYLON.ActionManager(this.scene);
        body.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, mouseOverUnit));
        body.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, mouseOutUnit));

        // // When a key is pressed, set the movement
        var onKeyDown = function (evt) {
            if (evt.keyCode == 65) { // a (turn left)
                me.direction -= 1;
            }
            if (evt.keyCode == 68) { // d (turn right)
                me.direction += 1;
            }
            if (evt.keyCode == 87) { // w (forward)
                me.speed += 0.1;
            }
            if (evt.keyCode == 83) { // s (backward)
                me.speed -= 0.1;
            }
            if (evt.keyCode == 76) { // l (lights front)
                me.toggleLights();
            }
        };

        // On key up, reset the movement
        var onKeyUp = function (evt) {
            me.speed = 0;
        };

        // Register events with the right Babylon function
        BABYLON.Tools.RegisterTopRootEvents([{
            name: "keydown",
            handler: onKeyDown
        }, {
            name: "keyup",
            handler: onKeyUp
        }]);

        // create a camera, limit to not go under ground, view at 0 ()
        var vehicleCam = new BABYLON.ArcRotateCamera("VehicleCam", Math.PI, 0.8, 100, new BABYLON.Vector3(0, 0, 0), this.scene);
        vehicleCam.upperBetaLimit = Math.PI / 2;
        vehicleCam.setTarget(BABYLON.Vector3.Zero());
        // view as a small overlay window
        vehicleCam.viewport = new BABYLON.Viewport(0.05, 0.05, 0.15, 0.15);
        // fix it to the body
        vehicleCam.parent = body;
        // add to the scene
        this.scene.activeCameras.push(vehicleCam);

        // render loop
        this.scene.registerBeforeRender(function () {
            var angRad = (me.direction + 90) * Math.PI / 180;
            body.position.x += Math.sin(angRad) * me.speed;
            body.position.z += Math.cos(angRad) * me.speed;
            body.rotation.y = angRad - Math.PI / 2;
            me.position = body.position;

            document.getElementById("info").innerText = me.toJson();
        });
    }

    public toggleLights = function () {
        this.LightL.setEnabled(!this.LightL.isEnabled());
        this.LightR.setEnabled(!this.LightR.isEnabled());
    }

    private _createText = function () {
        //data reporter
        // var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 25, this.scene, false);
        // outputplane.material = new BABYLON.StandardMaterial("outputplane", this.scene);
        // outputplane.position = new BABYLON.Vector3(-25, 15, 25);
        // outputplane.scaling.y = 0.4;

        // var outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, this.scene, true);
        // outputplane.material.diffuseTexture = outputplaneTexture;
        // outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        // outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
        // outputplane.material.backFaceCulling = false;

        // outputplaneTexture.drawText("Angle", null, 140, "bold 140px verdana", "white", "#0000AA");

        // var context2D = outputplaneTexture.getContext();
        // var out = function (data) {
        //     context2D.clearRect(0, 200, 512, 512);
        //     outputplaneTexture.drawText(data, null, 380, "140px verdana", "white", null);
        // }
        // out(this.radarAngle);
    };


}
