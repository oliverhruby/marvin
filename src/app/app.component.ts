import { Component, OnInit } from '@angular/core';

// providers
import {
  ConfigService,
  GamepadService,
  LoggerService,
  MidiService,
  SoundService,
  SpeechService,
  SpeechRecognitionService,
  SpeechSynthesisService,
  WebSocketService,
  WitAiService
} from './services';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

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
    private configService: ConfigService,
    private dragulaService: DragulaService,
    private gamepadService: GamepadService,
    private loggerService: LoggerService,
    private soundService: SoundService,
    private speechService: SpeechService,
    private speechRecognitionService: SpeechRecognitionService,
    private speechSynthesisService: SpeechSynthesisService,
    private webSocketService: WebSocketService,
    private witAiService: WitAiService
  ) { }

  ngOnInit() {
  }

}
