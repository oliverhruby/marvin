import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import {
  GyroscopeState,
  GYROSCOPE_UPDATE_MOTION,
  GYROSCOPE_UPDATE_ORIENTATION
} from 'app/reducers/gyroscope';


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
      me.zone.run(() => me.store.dispatch({ type: GYROSCOPE_UPDATE_ORIENTATION, payload: data }));
    };
    window.ondevicemotion = function (data) {
      me.zone.run(() => me.store.dispatch({ type: GYROSCOPE_UPDATE_MOTION, payload: data.accelerationIncludingGravity }));
    };

  }

}
