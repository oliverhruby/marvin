/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

// services
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

// components
import { AppComponent } from './app.component';
import { AudioAnalyzerComponent } from './components';
import { BatteryComponent } from './components';
import { HorizonComponent } from './components';
import { LogBrowserComponent } from './components';
import { SceneComponent } from './components';
import { SpeechComponent } from './components';
import { StatsComponent } from './components';
import { StopwatchComponent } from './components';
import { UserCameraComponent } from './components';
import { VideoComponent } from './components';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AudioAnalyzerComponent,
        BatteryComponent,
        HorizonComponent,
        LogBrowserComponent,
        SceneComponent,
        SpeechComponent,
        StatsComponent,
        StopwatchComponent,
        UserCameraComponent,
        VideoComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
      ],
      providers: [
        ConfigService,
        GamepadService,
        LoggerService,
        SoundService,
        SpeechService,
        SpeechRecognitionService,
        SpeechSynthesisService,
        WebSocketService,
        WitAiService
      ]
    });
    TestBed.compileComponents();
  });

  // it('should create the app', async(() => {
  //    let fixture = TestBed.createComponent(AppComponent);
  //    let app = fixture.debugElement.componentInstance;
  //    expect(app).toBeTruthy();
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div').textContent).toContain('works!');
  // }));
});
