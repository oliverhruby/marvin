import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import {
  GyroscopeState,
  GYROSCOPE_UPDATE_MOTION,
  GYROSCOPE_UPDATE_ORIENTATION
} from 'app/reducers/gyroscope';

/**
 * Virtual horizont showing roll, tilt, direction, etc.
 */
@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.component.html',
  styleUrls: ['./gyroscope.component.css']
})
export class GyroscopeComponent implements OnInit, OnDestroy {

  rotation: number = 10;

  private subscription: Subscription;

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) { }

  ngOnInit() {
    let me = this;

    // listen to the events and update the store
    window.ondeviceorientation = function (data) {
      me.zone.run(() => me.store.dispatch({ type: GYROSCOPE_UPDATE_ORIENTATION, payload: data }));
    };
    window.ondevicemotion = function (data) {
      me.zone.run(() => me.store.dispatch({ type: GYROSCOPE_UPDATE_MOTION, payload: data.accelerationIncludingGravity }));
    };

    // subscribe to the state to update the UI 
    me.subscription = this.store
      .select('gyroscope')
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
