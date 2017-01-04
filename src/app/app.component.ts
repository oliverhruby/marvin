import { Component } from '@angular/core';
import * as BABYLON from 'babylonjs/babylon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new BABYLON.Vector3(2,0,0).toString();
}
