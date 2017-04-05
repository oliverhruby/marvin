import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
 * Represents the surrounding world - ground, sky, sun, etc.
 */
export class World {

  private scene: BABYLON.Scene;

  constructor(scene: BABYLON.Scene) {
    this.scene = scene;

    this.createGround();
    this.createSky();
    this.createLight();
  }

  /**
   * Add ground to the scene
   */
  private createGround() {
    // ground mesh
    let ground = BABYLON.MeshBuilder.CreateGround('ground', {
      width: 2000,
      height: 2000
    }, this.scene);
    ground.position.y = -0.0001;

    // ground material
    let groundMaterial = new BABYLON.GridMaterial('groundMaterial', this.scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 20;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
    groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;

    ground.material = groundMaterial;

    // let ground2 = BABYLON.Mesh.CreateGroundFromHeightMap(
    //   'your-mesh-name',
    //   '/assets/images/heightmap.jpg',
    //   1000, // width of the ground mesh (x axis)
    //   1000, // depth of the ground mesh (z axis)
    //   40,  // number of subdivisions
    //   0,   // min height
    //   20,  // max height
    //   this.scene,
    //   false, // updateable?
    //   null // callback when mesh is ready
    // );

    // ground physics
    // ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsEngine.BoxImpostor, {
    //   mass: 0
    // });
  };

  /**
   * Show the skybox
   */
  private createSky() {
    let skyMaterial = new BABYLON.SkyMaterial('skyMaterial', this.scene);
    skyMaterial.backFaceCulling = false;

    let skybox = BABYLON.Mesh.CreateBox('skyBox', 1000.0, this.scene);
    skybox.material = skyMaterial;
  }

  /**
   * Create a basic light, aiming 0,1,0 - meaning, to the sky
   */
  private createLight() {
    let light = new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, 0.2), this.scene);
    light.groundColor = new BABYLON.Color3(.2, .2, .2);
  }
}
