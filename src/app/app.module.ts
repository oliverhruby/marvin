import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// providers
import {
  WebSocketService,
  GamepadService,
  SoundService
} from './services';

// components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { StatsComponent } from './stats/stats.component';
import { HorizonComponent } from './horizon/horizon.component';
import { AudioAnalyzerComponent } from './audioanalyzer/audioanalyzer.component';
import { LogBrowserComponent } from './logbrowser/logbrowser.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    StatsComponent,
    HorizonComponent,
    AudioAnalyzerComponent,
    LogBrowserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WebSocketService,
    GamepadService,
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
