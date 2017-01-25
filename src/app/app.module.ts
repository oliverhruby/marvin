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

@NgModule({
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
