import * as BABYLON from '../../vendor/babylonjs/babylon';

export class Axis {

  private _scene: BABYLON.Scene;

  constructor(scene: BABYLON.Scene) {
    this._scene = scene;

    this.createAxis(100);
  }

  // ----------------------------------------------------------------------
  // Show the axis guidelines
  // ----------------------------------------------------------------------
  private createAxis(size) {

    var axisX = BABYLON.Mesh.CreateLines("axisX", [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
      new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], this._scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = this.makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

    var axisY = BABYLON.Mesh.CreateLines("axisY", [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
      new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    ], this._scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = this.makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
      new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    ], this._scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = this.makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  }

  // ----------------------------------------------------------------------
  // Creates a plane with text written on it
  // ----------------------------------------------------------------------
  private makeTextPlane(text, color, size) {
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, this._scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
    var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, this._scene, true);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", this._scene);
    plane.material.backFaceCulling = false;
    //plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    //plane.material.diffuseTexture = dynamicTexture;
    return plane;
  }

}
