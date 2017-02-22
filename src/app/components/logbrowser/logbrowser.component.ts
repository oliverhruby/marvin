import { Component, OnInit, OnDestroy } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

/**
 * This component allows browsing the log messages
 */
@Component({
  selector: 'app-log-browser',
  templateUrl: './logbrowser.component.html',
  styleUrls: ['./logbrowser.component.css']
})
export class LogBrowserComponent extends WidgetComponent implements OnInit, OnDestroy {

  private ticks: number;
  private subscription: Subscription;
  private messages: Array<string>;

  constructor(private store: Store<State>) {
    super();
    this.messages = ['test1', 'test2', 'test3'];
  }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(t => this.ticks = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
