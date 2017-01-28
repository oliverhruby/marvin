import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

// state management
import accelerometerReducer, * as fromAccelerometer from './reducers/accelerometer';
import batteryReducer, * as fromBattery from './reducers/battery';
import counterReducer, * as fromCounter from './reducers/counter';

// providers
import {
  BatteryService, ConfigService, GamepadService,
  LoggerService, SoundService, SpeechService,
  SpeechRecognitionService, SpeechSynthesisService,
  WebSocketService, WitAiService
} from './services';

// components
import { AppComponent } from './app.component';
import {
  AudioAnalyzerComponent, BatteryComponent,
  HorizonComponent, LogBrowserComponent, SceneComponent,
  SpeechComponent, StatsComponent, StopwatchComponent,
  UserCameraComponent, VideoComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent, AudioAnalyzerComponent, BatteryComponent,
    HorizonComponent, LogBrowserComponent, SceneComponent,
    SpeechComponent, StatsComponent, StopwatchComponent,
    UserCameraComponent, VideoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule,
    StoreModule.provideStore(
      {
        accelerometer: accelerometerReducer,
        battery: batteryReducer,
        counter: counterReducer,
      }
    )
  ],
  providers: [
    BatteryService, ConfigService, GamepadService,
    LoggerService, SoundService, SpeechService,
    SpeechRecognitionService, SpeechSynthesisService,
    WebSocketService, WitAiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
