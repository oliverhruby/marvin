import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/state-management/state/main-state';
import { BatteryService } from 'app/services';

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  level: number = 0;

  private subscription: Subscription;

  constructor(private batteryService: BatteryService, private store: Store<State>) {
    
  }

  ngOnInit() {
    let timer = Observable.timer(0, 100);
    this.subscription = timer.subscribe(t => this.level = t % 100);
  }

}
