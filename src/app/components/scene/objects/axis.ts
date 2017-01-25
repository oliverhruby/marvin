import * as BABYLON from 'app/vendor/babylonjs/babylon';

/**
 * Axis guide arrows (x,y,z)
 */
export class Axis {

  constructor(private scene: BABYLON.Scene) {
    this.createAxis(100);
  }

  /**
   * Show the axis guidelines
   */
  private createAxis(size) {

    let axisX = BABYLON.Mesh.CreateLines('axisX', [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
      new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], this.scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    let xChar = this.makeTextPlane('X', 'red', size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

    let axisY = BABYLON.Mesh.CreateLines('axisY', [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
      new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    ], this.scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    let yChar = this.makeTextPlane('Y', 'green', size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

    let axisZ = BABYLON.Mesh.CreateLines('axisZ', [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
      new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    ], this.scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    let zChar = this.makeTextPlane('Z', 'blue', size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  }

  /**
   * Creates a plane with text written on it
   */
  private makeTextPlane(text, color, size) {
    let dynamicTexture = new BABYLON.DynamicTexture('DynamicTexture', 50, this.scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, 'bold 36px Arial', color, 'transparent', true);
    let plane = BABYLON.Mesh.CreatePlane('TextPlane', size, this.scene, true);
    plane.material = new BABYLON.StandardMaterial('TextPlaneMaterial', this.scene);
    plane.material.backFaceCulling = false;
    // plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    // plane.material.diffuseTexture = dynamicTexture;
    return plane;
  }

}
