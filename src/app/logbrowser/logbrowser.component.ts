import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'logbrowser',
  templateUrl: './logbrowser.component.html',
  styleUrls: ['./logbrowser.component.css']
})
export class LogBrowserComponent implements OnInit, OnDestroy {

  private ticks: number;
  private subscription: Subscription;
  private messages: Array<string>;

  constructor() {
    this.messages = ["test1", "test2", "test3"];
  }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(t => this.ticks = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
