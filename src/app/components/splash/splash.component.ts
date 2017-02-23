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
      let canvas = document.getElementById("renderCanvas");
      let engine = new BABYLON.Engine(canvas, false);
      let scene = new BABYLON.Scene(engine);
      let camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);

      camera.attachControl(canvas);

      // Creating sphere
      let sphere = BABYLON.Mesh.CreateSphere("Sphere", 16, 5, scene);

      let material = new BABYLON.ShaderMaterial("fire", scene, "/assets/shaders/fire", {
        attributes: ['position', 'normal', 'uv'],
        uniforms: ['time', 'worldViewProjection']
      });

      sphere.material = material;

      engine.runRenderLoop(function () {
        scene.render();
      });
    }
  }
}
