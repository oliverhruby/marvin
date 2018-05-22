import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { WidgetComponent } from '../widget/widget.component';

/**
 * Sonar
 */
@Component({
  selector: 'app-sonar',
  templateUrl: './sonar.component.html',
  styleUrls: ['./sonar.component.css']
})
export class SonarComponent extends WidgetComponent {

  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  constructor(
    private store: Store<State>
  ) {
    super();
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
