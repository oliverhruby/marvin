import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'app/vendor/babylonjs/babylon';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    if (BABYLON.Engine.isSupported()) {
      var canvas = document.getElementById("renderCanvas");
      var engine = new BABYLON.Engine(canvas, false);
      var scene = new BABYLON.Scene(engine);
      var camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);

      camera.attachControl(canvas);

      // Creating sphere
      var sphere = BABYLON.Mesh.CreateSphere("Sphere", 16, 5, scene);

      var amigaMaterial = new BABYLON.ShaderMaterial("amiga", scene, "/assets/shaders/custom", {
        attributes: ["position", "uv"],
        uniforms: ["worldViewProjection"]
      });

      sphere.material = amigaMaterial;

      engine.runRenderLoop(function () {
        scene.render();
      });
    }
  }
}
