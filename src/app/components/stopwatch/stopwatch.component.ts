import { Component, OnInit, Attribute } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { WidgetComponent } from '../widget/widget.component';

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
  }

}
