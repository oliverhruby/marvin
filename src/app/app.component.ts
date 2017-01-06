import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'babylonjs/babylon';
import { GamepadService } from './services/gamepad.service'
import { SoundService } from './services/sound.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title: string;

  constructor(
    private _gamepadService: GamepadService,
    private _soundService: SoundService
  ) {
    this.title = new BABYLON.Vector3(2, 0, 0).toString();
  }

  ngOnInit() {
  }

}
