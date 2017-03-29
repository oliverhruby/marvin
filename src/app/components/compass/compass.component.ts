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
    store.select<VehicleState>('vehicle').subscribe((data) => this.heading = data.position[0]);
  }

}
