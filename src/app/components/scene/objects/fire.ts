import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
 * Exampe fire objects
 */
export class Fire {

  constructor(private scene: BABYLON.Scene) {
    this.init(15, 15);
    this.init(15, -15);
  }

  private init(x, z) {
    // Fountain object
    let fountain = BABYLON.Mesh.CreateBox('foutain', 2.0, this.scene);
    fountain.position.x = x;
    fountain.position.z = z;

    // Smoke
    let smokeSystem = new BABYLON.ParticleSystem('particles', 2000, this.scene);
    smokeSystem.particleTexture = new BABYLON.Texture('assets/textures/flare.png', this.scene);
    smokeSystem.emitter = fountain; // the starting object, the emitter
    smokeSystem.minEmitBox = new BABYLON.Vector3(-1, 1, -1); // Starting all from
    smokeSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1); // To...

    smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
    smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
    smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    smokeSystem.minSize = 0.5;
    smokeSystem.maxSize = 2;

    smokeSystem.minLifeTime = 0.3;
    smokeSystem.maxLifeTime = 1.5;

    smokeSystem.emitRate = 500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    smokeSystem.direction1 = new BABYLON.Vector3(0, 8, 0);
    smokeSystem.direction2 = new BABYLON.Vector3(0, 8, 0);

    smokeSystem.minAngularSpeed = 0;
    smokeSystem.maxAngularSpeed = Math.PI;

    smokeSystem.minEmitPower = 1;
    smokeSystem.maxEmitPower = 2;
    smokeSystem.updateSpeed = 0.005;

    smokeSystem.start();

    // Create a particle system
    let fireSystem = new BABYLON.ParticleSystem('particles', 2000, this.scene);

    // Texture of each particle
    fireSystem.particleTexture = new BABYLON.Texture('assets/textures/flare.png', this.scene);

    // Where the particles come from
    fireSystem.emitter = fountain; // the starting object, the emitter
    fireSystem.minEmitBox = new BABYLON.Vector3(-0.5, 1, -0.5); // Starting all from
    fireSystem.maxEmitBox = new BABYLON.Vector3(0.5, 1, 0.5); // To...

    // Colors of all particles
    fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
    fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    // Size of each particle (random between...
    fireSystem.minSize = 0.5;
    fireSystem.maxSize = 1;

    // Life time of each particle (random between...
    fireSystem.minLifeTime = 0.2;
    fireSystem.maxLifeTime = 0.4;

    // Emission rate
    fireSystem.emitRate = 500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    // Direction of each particle after it has been emitted
    fireSystem.direction1 = new BABYLON.Vector3(0, 8, 0);
    fireSystem.direction2 = new BABYLON.Vector3(0, 8, 0);

    // Angular speed, in radians
    fireSystem.minAngularSpeed = 0;
    fireSystem.maxAngularSpeed = Math.PI;

    // Speed
    fireSystem.minEmitPower = 1;
    fireSystem.maxEmitPower = 3;
    fireSystem.updateSpeed = 0.005;

    // Start the particle system
    fireSystem.start();
  }
}
