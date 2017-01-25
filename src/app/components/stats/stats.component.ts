import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from 'app/services';

/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {

  public ticks: number;
  public config: any;

  private subscription: Subscription;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(
      data => this.config = data
    );

    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(t => this.ticks = t);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
