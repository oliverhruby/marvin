import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import * as gyroscope from '../actions/GyroscopeAction';

/**
 * This service provides the access to gyroscopic sensors
 */
@Injectable()
export class GyroscopeService {

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) {
    let me = this;
      window.ondeviceorientation = function (data) {
      me.zone.run(() => me.store.dispatch(new gyroscope.Orientation(data)));
    };
    window.ondevicemotion = function (data) {
      me.zone.run(() => me.store.dispatch(new gyroscope.Motion(data.accelerationIncludingGravity)));
    };

  }

}
