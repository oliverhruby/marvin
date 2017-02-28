import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { State } from 'app/reducers';
import { INCREMENT } from 'app/reducers/counter';

/**
 * This component shows the complete state information.
 */
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent extends WidgetComponent {

  public state: any;

  private subscription: Subscription;

  constructor(private store: Store<State>) {
    super();
    store.subscribe((data) => this.state = JSON.stringify(data, undefined, 2));
  }

}
