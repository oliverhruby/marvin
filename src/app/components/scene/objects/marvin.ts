import * as BABYLON from 'app/vendor/babylonjs/babylon';
import { Store } from '@ngrx/store';
import { Laser } from './laser';
import { State } from 'app/reducers';
import { VehicleState, VEHICLE_UPDATE } from 'app/reducers/vehicle';

/**
 * Main robot object
 */
export class Marvin {

  public position: BABYLON.Vector3;
  public speed = 0;
  public direction = 0;
  public radarAngle = 0;
  public mode = 0; // 0 - manual, 1 - automatic

  public path = [];

  public LightL: BABYLON.SpotLight;
  public LightR: BABYLON.SpotLight;
  private sound: BABYLON.Sound;

  constructor(
    private scene: BABYLON.Scene,
    private store: Store<State>
  ) {
    this.position = new BABYLON.Vector3(0, 0, 0);
    this.createVehicle();
    this.sound = new BABYLON.Sound('click', 'assets/sounds/click.wav', this.scene);
  }

  /**
   * Serializer for persisting the state
   */
  public toJson() {
    return ('{\n' +
      '  \"position\": ' + this.position + ',\n' +
      '  \"lightL\": ' + this.LightL.isEnabled() + ',\n' +
      '  \"lightR\": ' + this.LightR.isEnabled() + ',\n' +
      '  \"speed\": ' + this.speed + ',\n' +
      '  \"direction\": ' + this.direction + ',\n' +
      '  \"radarAngle\": ' + this.radarAngle + '\n' +
      '}');
  }

  private createVehicle() {
    let me = this;

    // create body
    let body = BABYLON.MeshBuilder.CreateBox('vehicle', {
      height: 2,
      width: 12,
      depth: 7
    }, this.scene);
    body.position.y = 1.5;

    let laser = new Laser(body);

    // create wheels
    let rubber = new BABYLON.StandardMaterial('rubber', this.scene);
    rubber.alpha = 1.0;
    rubber.diffuseColor = new BABYLON.Color3(0.3, 0.5, 0.0);
    rubber.backFaceCulling = false;

    let wheelFL = BABYLON.Mesh.CreateCylinder('wheelFL', 2, 3, 3, 16, 2, this.scene, false);
    wheelFL.position = new BABYLON.Vector3(5, 0, 5);
    wheelFL.rotation.x = Math.PI / 2;
    // wheelFL.physicsImpostor = new BABYLON.PhysicsImpostor(wheel1, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
    wheelFL.material = rubber;
    wheelFL.parent = body;

    let wheelFR = BABYLON.Mesh.CreateCylinder('wheelFR', 2, 3, 3, 16, 2, this.scene, false);
    wheelFR.position = new BABYLON.Vector3(5, 0, -5);
    wheelFR.rotation.x = Math.PI / 2;
    // wheelFR.physicsImpostor = new BABYLON.PhysicsImpostor(wheel3, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
    wheelFR.material = rubber;
    wheelFR.parent = body;

    let wheelBR = BABYLON.Mesh.CreateCylinder('wheelBR', 2, 3, 3, 16, 2, this.scene, false);
    wheelBR.position = new BABYLON.Vector3(-5, 0, -5);
    wheelBR.rotation.x = Math.PI / 2;
    // wheelBR.physicsImpostor = new BABYLON.PhysicsImpostor(wheel2, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
    wheelBR.material = rubber;
    wheelBR.parent = body;

    let wheelBL = BABYLON.Mesh.CreateCylinder('wheelBL', 2, 3, 3, 16, 2, this.scene, false);
    wheelBL.position = new BABYLON.Vector3(-5, 0, 5);
    wheelBL.rotation.x = Math.PI / 2;
    // wheelBL.physicsImpostor = new BABYLON.PhysicsImpostor(wheel4, BABYLON.PhysicsEngine.SphereImpostor, { mass: 5 });
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
    this.LightL = new BABYLON.SpotLight('LightFrontLeft',
      new BABYLON.Vector3(0, 4, -2), new BABYLON.Vector3(10, 4, -2), 0.6, 0.5, this.scene);
    this.LightL.parent = body;

    this.LightR = new BABYLON.SpotLight('LightFrontRight',
      new BABYLON.Vector3(0, 4, 2), new BABYLON.Vector3(10, 4, 2), 0.6, 0.5, this.scene);
    this.LightR.parent = body;

    // mouse control
    let mouseOverUnit = function (mesh) {
      if (mesh.meshUnderPointer !== null) {
        mesh.meshUnderPointer.renderOutline = true;
        mesh.meshUnderPointer.outlineWidth = 0.1;
      }
      me.sound.play();
    };

    let mouseOutUnit = function (mesh) {
      if (mesh.meshUnderPointer !== null) {
        mesh.meshUnderPointer.renderOutline = false;
        mesh.meshUnderPointer.outlineWidth = 0.1;
      }
    };

    body.actionManager = new BABYLON.ActionManager(this.scene);
    body.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, mouseOverUnit));
    body.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, mouseOutUnit));

    // When a key is pressed, set the movement
    let onKeyDown = function (evt) {
      if (evt.keyCode === 65) { // a (turn left)
        me.direction -= 1;
      }
      if (evt.keyCode === 68) { // d (turn right)
        me.direction += 1;
      }
      if (evt.keyCode === 87) { // w (forward)
        me.speed += 0.1;
      }
      if (evt.keyCode === 83) { // s (backward)
        me.speed -= 0.1;
      }
      if (evt.keyCode === 76) { // l (lights front)
        me.toggleLights();
      }
    };

    // On key up, reset the movement
    let onKeyUp = function (evt) {
      me.speed = 0;
    };

    // Register events with the right Babylon function
    BABYLON.Tools.RegisterTopRootEvents([{
      name: 'keydown',
      handler: onKeyDown
    }, {
      name: 'keyup',
      handler: onKeyUp
    }]);

    // create a camera, limit to not go under ground, view at 0 ()
    // let vehicleCam = new BABYLON.ArcRotateCamera("VehicleCam", Math.PI, 0.8, 100, new BABYLON.Vector3(0, 0, 0), this.scene);
    // vehicleCam.upperBetaLimit = Math.PI / 2;
    // vehicleCam.setTarget(BABYLON.Vector3.Zero());
    // // view as a small overlay window
    // vehicleCam.viewport = new BABYLON.Viewport(0.05, 0.05, 0.15, 0.15);
    // // fix it to the body
    // vehicleCam.parent = body;
    // // add to the scene
    // this.scene.activeCameras.push(vehicleCam);

    // render loop
    this.scene.registerBeforeRender(function () {
      let angRad = (me.direction + 90) * Math.PI / 180;
      body.position.x += Math.sin(angRad) * me.speed;
      body.position.z += Math.cos(angRad) * me.speed;
      body.rotation.y = angRad - Math.PI / 2;
      me.position = body.position;

      me.store.dispatch({ type: VEHICLE_UPDATE, payload: [me.position.x, me.position.y, me.position.z] });
    });
  }

  /**
   * Toggle both front lights
   */
  public toggleLights() {
    this.LightL.setEnabled(!this.LightL.isEnabled());
    this.LightR.setEnabled(!this.LightR.isEnabled());
  }
}
