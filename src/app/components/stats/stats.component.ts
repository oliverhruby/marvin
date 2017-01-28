import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { State } from 'app/reducers';
import { INCREMENT } from 'app/reducers/counter';

/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public state: any;

  private subscription: Subscription;

  constructor(private store: Store<State>) {
    store.subscribe((data) => this.state = JSON.stringify(data, undefined, 2));
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
