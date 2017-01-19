import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// providers
import {
  WebSocketService,
  GamepadService,
  SoundService,
  WitAiService,
  ConfigService,
  SpeechService
} from './services';

// components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene';
import { StatsComponent } from './stats';
import { HorizonComponent } from './horizon';
import { AudioAnalyzerComponent } from './audioanalyzer';
import { LogBrowserComponent } from './logbrowser';
import { VideoComponent } from './video/video.component';
import { UserCameraComponent } from './user-camera';
import { StopwatchComponent } from './stopwatch';

@NgModule({
  declarations: [
    AppComponent,
    AudioAnalyzerComponent,
    HorizonComponent,
    LogBrowserComponent,
    SceneComponent,
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
    SoundService,
    SpeechService,
    WebSocketService,
    WitAiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
