import { NgZone, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import * as keyboard from '../actions/KeyboardAction';

@Injectable()
export class KeyboardService {

  constructor(
    private store: Store<State>
  ) {
    let me = this;
    window.addEventListener('keydown', function (event) {
        me.store.dispatch(new keyboard.Down(event));
    });
    window.addEventListener('keyup', function () {
        me.store.dispatch(new keyboard.Up(event));
    });
  }
}
