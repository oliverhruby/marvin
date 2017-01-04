import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { VisualizationComponent } from './robotstats'

// providers
import { WebSocketService } from './robotstats/websocket.service'
import { GamepadService } from './robotstats/gamepad.service'

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WebSocketService,
    GamepadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
