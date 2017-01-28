import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { State } from 'app/reducers';
import { BatteryState, BATTERY_UPDATE } from 'app/reducers/battery';
import { BatteryService } from 'app/services';

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

  constructor(private batteryService: BatteryService, private store: Store<State>) {
    this.store.select<BatteryState>('battery')
      .subscribe((data) => this.level = data.level);
  }

  ngOnInit() {
    let timer = Observable.timer(0, 100);
    this.subscription = timer.subscribe(t => this.store.dispatch({ type: BATTERY_UPDATE }));;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
