import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';

/**
 * Visualizes current state of the battery and charging
 */
@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  level: number = 0;

  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0, 100);
    this.subscription = timer.subscribe(t => this.level = t % 100);
  }

}
