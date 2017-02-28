import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { 
  STOPWATCH_START, STOPWATCH_STOP, STOPWATCH_RESET, STOPWATCH_TIME,
  StopwatchState
} from 'app/reducers/stopwatch';

/**
 * Stopwatch functionality
 */
@Injectable()
export class StopwatchService {

  constructor(private store: Store<State>) {
    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => this.store.dispatch({ type: STOPWATCH_TIME }));
  }

  /** starts the timer */
  start() {
    this.store.dispatch({ type: STOPWATCH_START });
  }

  /** stops the timer */
  stop() {
    this.store.dispatch({ type: STOPWATCH_STOP });
  }

  /** resets the timer to 0 */
  reset() {
    this.store.dispatch({ type: STOPWATCH_RESET });
  }

}
