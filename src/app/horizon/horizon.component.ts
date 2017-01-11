import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.css']
})
export class HorizonComponent implements OnInit, OnDestroy {

  private ticks: number = 0;
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0, 10);
    this.subscription = timer.subscribe(t => this.ticks = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
