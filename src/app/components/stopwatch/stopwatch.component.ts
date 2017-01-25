import { Component, OnInit, Attribute } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * For showing mission time, clock, etc.
 */
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  public data;
  public format;

  private timer;
  private intervalSet = false;

  constructor( @Attribute("format") format, @Attribute("data") data, @Attribute('timer') timer) {
    this.format = format || 'HH:mm:ss';
    this.data = new Date();
  }

  ngOnInit() {
    let timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.data = new Date());
  }

}
