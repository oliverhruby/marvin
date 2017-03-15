/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';

// services
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

// reducers
import gyroscopeReducer, * as fromGyroscope from './reducers/gyroscope';
import batteryReducer, * as fromBattery from './reducers/battery';
import counterReducer, * as fromCounter from './reducers/counter';
import stopwatchReducer, * as fromStopwatch from './reducers/stopwatch';
import vehicleReducer, * as fromVehicle from './reducers/vehicle';

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

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
      ],
      imports: [
        BrowserModule, FormsModule, HttpModule, JsonpModule,
        StoreModule.provideStore(
          {
            gyroscope: gyroscopeReducer,
            battery: batteryReducer,
            counter: counterReducer,
            stopwatch: stopwatchReducer,
            vehicle: vehicleReducer
          }
        )
      ],
      providers: [
        ConfigService, // GamepadService,
        LoggerService, SoundService, SpeechService, SpeechRecognitionService,
        SpeechSynthesisService, StopwatchService, WitAiService
      ]
    });
    TestBed.compileComponents();
  });

  // it('should create the app', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div').textContent).toContain('works!');
  // }));
});
