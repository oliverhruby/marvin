import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

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

// components
import { AppComponent } from './app.component';
import { AudioAnalyzerComponent } from './audioanalyzer';
import { HorizonComponent } from './horizon';
import { LogBrowserComponent } from './logbrowser';
import { SceneComponent } from './scene';
import { SpeechComponent } from './speech';
import { StatsComponent } from './stats';
import { StopwatchComponent } from './stopwatch';
import { UserCameraComponent } from './user-camera';
import { VideoComponent } from './video';

@NgModule({
  declarations: [
    AppComponent,
    AudioAnalyzerComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
