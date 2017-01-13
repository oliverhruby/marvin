import { Component, OnInit } from '@angular/core';
import { GamepadService } from './services/gamepad.service';
import { SoundService } from './services/sound.service';
import { WitAiService } from './services/witai.service';

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
    private gamepadService: GamepadService,
    private soundService: SoundService,
    private witAiService: WitAiService
  ) {

  }

  ngOnInit() {
    this.witAiService.getResponse("test");
  }

}
