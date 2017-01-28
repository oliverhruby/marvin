import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { AccelerometerState } from 'app/reducers/accelerometer';

/**
 * Virtual horizont showing roll, tilt, direction, etc.
 */
@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.css']
})
export class HorizonComponent implements OnInit, OnDestroy {

  accelerometer: AccelerometerState;

  private subscription: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscription = this.store
      .select<AccelerometerState>('accelerometer')
      .subscribe((data) => this.accelerometer = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
