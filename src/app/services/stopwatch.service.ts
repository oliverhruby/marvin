import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import * as stopwatch from '../actions/StopwatchAction';

/**
 * Stopwatch functionality
 */
@Injectable()
export class StopwatchService {

  timer: Observable<any>;
  sub: Subscription;

  constructor(private store: Store<State>) {
    this.timer = Observable.timer(0, 1000);
  }

  // starts the timer
  start() {
    this.sub = this.timer.subscribe(t => this.store.dispatch({ type: stopwatch.STOPWATCH_TIME }));
    this.store.dispatch({ type: stopwatch.STOPWATCH_START });
  }

  // stops the timer
  stop() {
    this.sub.unsubscribe();
    this.store.dispatch({ type: stopwatch.STOPWATCH_STOP });
  }

  // resets the timer to 0
  reset() {
    this.store.dispatch({ type: stopwatch.STOPWATCH_RESET });
  }

}
