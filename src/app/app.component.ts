import { Component, OnInit } from '@angular/core';

// providers
import {
  ConfigService,
  GamepadService,
  LoggerService,
  SoundService,
  SpeechService,
  SpeechRecognitionService,
  SpeechSynthesisService,
  WebSocketService,
  WitAiService
} from './services';

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
