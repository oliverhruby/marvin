import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as BABYLON from 'app/vendor/babylonjs/babylon';
import { State } from 'app/reducers';
import { GAMEPAD_CONNECT, GAMEPAD_DISCONNECT, GAMEPAD_UPDATE } from 'app/reducers/gamepad';

/**
 * Manages and visualizes a gamepad if connected
 */
@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
  styleUrls: ['./gamepad.component.css']
})
export class GamepadComponent implements AfterViewInit, OnDestroy {

  // gamepad: GamepadState;

  constructor(
    private zone: NgZone,
    // private gamepadService: GamepadService,
    private store: Store < State >
  ) {}

  ngAfterViewInit() {
    let me = this;
    window.addEventListener('gamepadconnected', () => me.zone.run(
      () => me.store.dispatch({
        type: GAMEPAD_CONNECT
      })
    ));
    window.addEventListener('gamepaddisconnected', () => me.zone.run(
      () => me.store.dispatch({
        type: GAMEPAD_DISCONNECT
      })
    ));
    window.addEventListener('gamepadchanged', () => me.zone.run(
      () => me.store.dispatch({
        type: GAMEPAD_UPDATE
      })
    ));
  }

  ngOnDestroy() {}

}
