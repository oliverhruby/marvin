import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import batteryReducer, * as fromBattery from './reducers/battery';
import commandReducer, * as fromCommand from './reducers/command';
import counterReducer, * as fromCounter from './reducers/counter';
import gamepadReducer, * as fromGamepad from './reducers/gamepad';
import gyroscopeReducer, * as fromGyroscope from './reducers/gyroscope';
import keyboardReducer, * as fromKeyboard from './reducers/keyboard';
import laserReducer, * as fromLaser from './reducers/laser';
import midiReducer, * as fromMidi from './reducers/midi';
import mqttReducer, * as fromMqtt from './reducers/mqtt';
import stopwatchReducer, * as fromStopwatch from './reducers/stopwatch';
import userReducer, * as fromUser from './reducers/user';
import vehicleReducer, * as fromVehicle from './reducers/vehicle';

// providers
import {
  AuthService,
  BatteryService,
  ChatService,
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
  UserComponent,
  UserCameraComponent,
  VideoComponent
} from './components';

import { HomeComponent } from './pages/home';

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
        battery: batteryReducer,
        counter: counterReducer,
        command: commandReducer,
        keyboard: keyboardReducer,
        gamepad: gamepadReducer,
        gyroscope: gyroscopeReducer,
        midi: midiReducer,
        mqtt: mqttReducer,
        stopwatch: stopwatchReducer,
        user: userReducer,
        vehicle: vehicleReducer
      }
    )
  ],
  providers: [
    AuthService,
    BatteryService,
    ChatService,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
