import { Component, OnInit } from '@angular/core';
import { GamepadService } from './services/gamepad.service';
import { SoundService } from './services/sound.service';

/**
 * Main application component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _gamepadService: GamepadService,
    private _soundService: SoundService
  ) {

  }

  ngOnInit() {
  }

}
