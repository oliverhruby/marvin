import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from "@ngrx/store";

import { State } from "app/state-management/state/main-state";
import { INCREMENT } from "app/state-management/actions/main-action-creator";
/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public ticks: number;
  public config: any;

  private subscription: Subscription;

  constructor(private store: Store<State>) {
    store.select('mainStoreReducer')
      .subscribe((data: State) => {
        this.ticks = data.counter;
      });

    this.store.dispatch({ type: INCREMENT });
  }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(t => this.store.dispatch({ type: INCREMENT }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
