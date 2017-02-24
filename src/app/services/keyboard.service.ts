import { NgZone, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { KeyboardState, KEYBOARD_UPDATE } from 'app/reducers/keyboard';

@Injectable()
export class KeyboardService {

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) {
    let me = this;
    window.addEventListener("keydown", function () {
      me.zone.run(function () {
        me.store.dispatch({ type: KEYBOARD_UPDATE, payload: true });
      });
    });
    window.addEventListener("keyup", function () {
      me.zone.run(function () {
        me.store.dispatch({ type: KEYBOARD_UPDATE, payload: false });
      });
    });
  }
}
