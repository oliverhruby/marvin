import { Component, OnInit, Attribute } from '@angular/core';

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
    let date, miliseconds;
    this.format = format || 'h:mm:s';
    this.data = data || new Date();
    if (timer) {
      if (typeof this.data !== 'Date') {
        date = new Date();
      } else {
        date = this.data;
      }

      miliseconds = (60 - date.getSeconds()) * 1000;
      window.setTimeout(() => { this.refreshTime(); }, miliseconds);
    }
  }

  refreshTime() {
    this.data = new Date();
    if (!this.intervalSet) {
      window.setInterval(() => { this.refreshTime() }, 60000);
      this.intervalSet = true;
    }
  }

}
