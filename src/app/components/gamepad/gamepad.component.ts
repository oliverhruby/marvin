import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as BABYLON from 'app/vendor/babylonjs/babylon';

import { State } from 'app/reducers';
import { GAMEPAD_CONNECT, GAMEPAD_UPDATE } from 'app/reducers/gamepad';

/**
 * Manages and visualizes a gamepad if connected
 */
@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
  styleUrls: ['./gamepad.component.css']
})
export class GamepadComponent implements OnInit, OnDestroy {

  // gamepad: GamepadState;

  constructor(
    private zone: NgZone,
    // private gamepadService: GamepadService,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    // let me = this;
    // window.addEventListener("gamepadconnected", () => me.zone.run(() => me.store.dispatch({ type: GAMEPAD_CONNECT })));
  }

  ngOnDestroy() {
  }

}
