import { AlertModule } from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';

// state management
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
// TODO: do we need this "* as xxxx" ?
import batteryReducer, * as fromBattery from './reducers/battery';
import commandReducer, * as fromCommand from './reducers/command';
import counterReducer, * as fromCounter from './reducers/counter';
import gamepadReducer, * as fromGamepad from './reducers/gamepad';
import gyroscopeReducer, * as fromGyroscope from './reducers/gyroscope';
import keyboardReducer, * as fromKeyboard from './reducers/keyboard';
import laserReducer, * as fromLaser from './reducers/laser';
import midiReducer, * as fromMidi from './reducers/midi';
import mqttReducer, * as fromMqtt from './reducers/mqtt';
import sceneReducer, * as fromScene from './reducers/scene';
import stopwatchReducer, * as fromStopwatch from './reducers/stopwatch';
import userReducer, * as fromUser from './reducers/user';
import vehicleReducer, * as fromVehicle from './reducers/vehicle';

// providers
import {
  ApiService,
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
  ChatComponent,
  ChartComponent,
  GamepadComponent,
  GyroscopeComponent,
  KeyboardComponent,
  LogBrowserComponent,
  HomeComponent,
  MidiComponent,
  MosquittoComponent,
  SceneComponent,
  ScenesComponent,
  SpeechComponent,
  SplashComponent,
  StateComponent,
  StopwatchComponent,
  SysinfoComponent,
  UserComponent,
  UsersComponent,
  UserCameraComponent,
  VideoComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    AudioAnalyzerComponent,
    BatteryComponent,
    ChatComponent,
    ChartComponent,
    GamepadComponent,
    GyroscopeComponent,
    HomeComponent,
    KeyboardComponent,
    LogBrowserComponent,
    MidiComponent,
    MosquittoComponent,
    SceneComponent,
    ScenesComponent,
    SpeechComponent,
    SplashComponent,
    StateComponent,
    StopwatchComponent,
    SysinfoComponent,
    UserCameraComponent,
    UserComponent,
    UsersComponent,
    VideoComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    ChartsModule,
    DragulaModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /*
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
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
        router: routerReducer,
        scene: sceneReducer,
        stopwatch: stopwatchReducer,
        user: userReducer,
        vehicle: vehicleReducer
      }, {
        router: {
         path: window.location.pathname + window.location.search
        }
      }
    )
  ],
  providers: [
    ApiService,
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
