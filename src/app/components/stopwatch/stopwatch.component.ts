import { Component, OnInit, Attribute } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { StopwatchState } from 'app/reducers/stopwatch';
import { WidgetComponent } from '../widget/widget.component';
import { StopwatchService } from 'app/services';

/**
 * For showing mission time, clock, etc.
 */
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent extends WidgetComponent {

  data: Date;

  constructor(
    private store: Store<State>,
    private stopwatchService: StopwatchService
  ) {
    super();
    store.select('stopwatch').subscribe(
      (data) => this.data = data  ? new Date(data.time) : null
    );
  }

  start() {
    this.stopwatchService.start();
  }

  stop() {
    this.stopwatchService.stop();
  }

  reset() {
    this.stopwatchService.reset();
  }

}
