/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';

// services
import {
  ConfigService, GamepadService, LoggerService,
  SoundService, SpeechService, SpeechRecognitionService,
  SpeechSynthesisService, WebSocketService, WitAiService
} from './services';

// reducers
import accelerometerReducer, * as fromAccelerometer from './reducers/accelerometer';
import batteryReducer, * as fromBattery from './reducers/battery';
import counterReducer, * as fromCounter from './reducers/counter';
import stopwatchReducer, * as fromStopwatch from './reducers/stopwatch';
import vehicleReducer, * as fromVehicle from './reducers/vehicle';

// components
import { AppComponent } from './app.component';
import {
  AudioAnalyzerComponent, BatteryComponent,
  HorizonComponent, LogBrowserComponent, SceneComponent,
  SpeechComponent, StateComponent, StopwatchComponent,
  UserCameraComponent, VideoComponent
} from './components';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AudioAnalyzerComponent, BatteryComponent,
        HorizonComponent, LogBrowserComponent, SceneComponent,
        SpeechComponent, StateComponent, StopwatchComponent,
        UserCameraComponent, VideoComponent
      ],
      imports: [
        BrowserModule, FormsModule, HttpModule, JsonpModule,
        StoreModule.provideStore(
          {
            accelerometer: accelerometerReducer,
            battery: batteryReducer,
            counter: counterReducer,
            stopwatch: stopwatchReducer,
            vehicle: vehicleReducer
          }
        )
      ],
      providers: [
        ConfigService, GamepadService, LoggerService,
        SoundService, SpeechService, SpeechRecognitionService,
        SpeechSynthesisService, WebSocketService, WitAiService
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
