import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';
import { StoreModule } from '@ngrx/store';

// state management
import gyroscopeReducer, * as fromGyroscope from './reducers/gyroscope';
import batteryReducer, * as fromBattery from './reducers/battery';
import commandReducer, * as fromCommand from './reducers/command';
import counterReducer, * as fromCounter from './reducers/counter';
import gamepadReducer, * as fromGamepad from './reducers/gamepad';
import keyboardReducer, * as fromKeyboard from './reducers/keyboard';
import laserReducer, * as fromLaser from './reducers/laser';
import midiReducer, * as fromMidi from './reducers/midi';
import mqttReducer, * as fromMqtt from './reducers/mqtt';
import stopwatchReducer, * as fromStopwatch from './reducers/stopwatch';
import vehicleReducer, * as fromVehicle from './reducers/vehicle';

// providers
import {
  BatteryService,
  ConfigService, // GamepadService,
  LoggerService,
  MidiService,
  SoundService,
  SpeechService,
  SpeechRecognitionService,
  SpeechSynthesisService,
  WebSocketService,
  WitAiService
} from './services';

// components
import { AppComponent } from './app.component';
import {
  AudioAnalyzerComponent,
  BatteryComponent,
  ChartComponent,
  GamepadComponent,
  GyroscopeComponent,
  KeyboardComponent,
  LogBrowserComponent,
  MidiComponent,
  MosquittoComponent,
  SceneComponent,
  SpeechComponent,
  SplashComponent,
  StateComponent,
  StopwatchComponent,
  SysinfoComponent,
  UserCameraComponent,
  VideoComponent
} from './components';

import { HomeComponent } from './pages/home';
import { UserComponent } from './pages/user';

@NgModule({
  declarations: [
    AppComponent,
    AudioAnalyzerComponent,
    BatteryComponent,
    ChartComponent,
    GamepadComponent,
    GyroscopeComponent,
    HomeComponent,
    KeyboardComponent,
    LogBrowserComponent,
    MidiComponent,
    MosquittoComponent,
    SceneComponent,
    SpeechComponent,
    SplashComponent,
    StateComponent,
    StopwatchComponent,
    SysinfoComponent,
    UserCameraComponent,
    UserComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    DragulaModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    StoreModule.provideStore(
      {
        gyroscope: gyroscopeReducer,
        battery: batteryReducer,
        counter: counterReducer,
        command: commandReducer,
        keyboard: keyboardReducer,
        gamepad: gamepadReducer,
        midi: midiReducer,
        mqtt: mqttReducer,
        stopwatch: stopwatchReducer,
        vehicle: vehicleReducer
      }
    )
  ],
  providers: [
    BatteryService,
    ConfigService,
    // GamepadService,
    LoggerService,
    SoundService,
    SpeechService,
    SpeechRecognitionService,
    SpeechSynthesisService,
    WebSocketService,
    WitAiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
