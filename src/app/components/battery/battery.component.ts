import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { State } from 'app/reducers';
import { BatteryState } from 'app/reducers/battery';

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent extends WidgetComponent {

  battery: BatteryState;

  constructor(
    private store: Store<State>
  ) {
    super();
    this.store.select('battery').subscribe((data) => this.battery = data);
  }
}
