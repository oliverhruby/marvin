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
  ConfigService
} from './services';

// components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { StatsComponent } from './stats/stats.component';
import { HorizonComponent } from './horizon/horizon.component';
import { AudioAnalyzerComponent } from './audioanalyzer/audioanalyzer.component';
import { LogBrowserComponent } from './logbrowser/logbrowser.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    StatsComponent,
    HorizonComponent,
    AudioAnalyzerComponent,
    LogBrowserComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    WebSocketService,
    GamepadService,
    SoundService,
    WitAiService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
