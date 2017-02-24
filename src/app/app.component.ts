import { Component, OnInit } from '@angular/core';

// providers
import {
  BatteryService,
  ConfigService,
  GamepadService,
  GyroscopeService,
  LoggerService,
  KeyboardService,  
  MidiService,
  SoundService,
  SpeechService,
  SpeechRecognitionService,
  SpeechSynthesisService,
  StopwatchService,
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
    private batteryService: BatteryService,
    private configService: ConfigService,
    private dragulaService: DragulaService,
    private gamepadService: GamepadService,
    private gyroscopeService: GyroscopeService,
    private loggerService: LoggerService,
    private kayboardService: KeyboardService,
    private midiService: MidiService,
    private soundService: SoundService,
    private speechService: SpeechService,
    private speechRecognitionService: SpeechRecognitionService,
    private speechSynthesisService: SpeechSynthesisService,
    private stopwatchService: StopwatchService,
    private webSocketService: WebSocketService,
    private witAiService: WitAiService
  ) { }

  ngOnInit() {

  }

}
