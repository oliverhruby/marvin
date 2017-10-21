import { AlertModule } from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MomentModule } from 'angular2-moment';
import { routes } from './app.routes';

// state management
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

//import { reducers, metaReducers } from './reducers';
import { reducers } from './reducers';

// providers
import {
  ApiService,
  AuthService,
  BatteryService,
  ChatService,
  ConfigService,
  GamepadService,
  GyroscopeService,
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
  CompassComponent,
  GamepadComponent,
  GyroscopeComponent,
  KeyboardComponent,
  LogBrowserComponent,
  HomeComponent,
  MidiComponent,
  MosquittoComponent,
  SceneComponent,
  ScenesComponent,
  SonarComponent,
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
    CompassComponent,
    GamepadComponent,
    GyroscopeComponent,
    HomeComponent,
    KeyboardComponent,
    LogBrowserComponent,
    MidiComponent,
    MosquittoComponent,
    SceneComponent,
    ScenesComponent,
    SonarComponent,
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
    MomentModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /*
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    StoreRouterConnectingModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    //StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    ApiService,
    AuthService,
    BatteryService,
    ChatService,
    ConfigService,
    GamepadService,
    GyroscopeService,
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
