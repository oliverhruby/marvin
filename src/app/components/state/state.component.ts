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
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnDestroy {

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
