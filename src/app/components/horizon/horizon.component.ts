import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/state-management/state/main-state';

/**
 * Virtual horizont showing roll, tilt, direction, etc.
 */
@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.css']
})
export class HorizonComponent implements OnInit, OnDestroy {

  public ticks: number = 0;

  private subscription: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    let timer = Observable.timer(0, 10);
    this.subscription = timer.subscribe(t => this.ticks = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
