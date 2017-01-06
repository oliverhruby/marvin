import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// providers
import {
  WebSocketService,
  GamepadService,
  SoundService
} from './services'

// components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene'

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent
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
