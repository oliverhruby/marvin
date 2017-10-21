import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { WidgetComponent } from '../widget/widget.component';
import { VehicleState } from 'app/reducers/vehicle';

/**
 * Compass indicator
 */
@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent extends WidgetComponent {

  heading = 0;

  constructor(
    private store: Store<State>
  ) {
    super();
    store.select('vehicle').subscribe((data) => this.heading = -data.rotation[1] * 180 / Math.PI);
  }

}
