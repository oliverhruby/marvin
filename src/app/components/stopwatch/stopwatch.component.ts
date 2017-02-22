import { Component, OnInit, Attribute } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { WidgetComponent } from '../widget/widget.component';
import { 
  STOPWATCH_START, STOPWATCH_STOP, STOPWATCH_RESET, STOPWATCH_TIME,
  StopwatchState
} from 'app/reducers/stopwatch';

/**
 * For showing mission time, clock, etc.
 */
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent extends WidgetComponent {
  public data;
  public format;

  private timer;
  private intervalSet = false;

  constructor(
    @Attribute("format") format,
    @Attribute("data") data,
    @Attribute('timer') timer,
    private store: Store<State>
  ) {
    super();
    this.format = format || 'HH:mm:ss';
    this.data = new Date();
  }

  ngOnInit() {
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
