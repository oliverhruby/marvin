import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { State } from 'app/reducers';
import { BatteryState, BATTERY_UPDATE } from 'app/reducers/battery';
import { BatteryService } from 'app/services';

// interface BatteryManager {
//   charging: boolean;
//   chargingTime: number;
//   dischargingTime: number;
//   level: number;
//   onchargingchange: () => any;
//   onchargingtimechange: () => any;
//   ondischargingtimechange: () => any;
//   onlevelchange: () => any;
// }

// interface Navigator {
//   getBattery(): any;//BatteryManager;
// }

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit, OnDestroy {

  level: number = 0;

  private subscription: Subscription;

  constructor(
    private zone: NgZone,
    private batteryService: BatteryService,
    private store: Store<State>
  ) {
    this.subscription = this.store.select<BatteryState>('battery')
      .subscribe((data) => this.level = data.level);
  }

  ngOnInit() {
    this.zone.run(() => {
      (<any>navigator).getBattery().then(battery =>
        function (battery) {
          console.log(battery); // TODO: not working!!!
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
