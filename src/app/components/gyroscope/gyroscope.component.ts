import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { WidgetComponent } from 'app/components/widget';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { GyroscopeState } from 'app/reducers/gyroscope';

/**
 * Virtual horizont showing roll, tilt, direction, etc.
 */
@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.component.html',
  styleUrls: ['./gyroscope.component.css']
})
export class GyroscopeComponent extends WidgetComponent {

  rotation: number = 0;

  constructor(
    private store: Store<State>
  ) {
    super();
    store.select<GyroscopeState>('gyroscope').subscribe((data) => this.rotation = data.deviceOrientation.alpha);
  }

}
