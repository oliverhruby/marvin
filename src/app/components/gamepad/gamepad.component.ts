import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { GamepadState } from 'app/reducers/gamepad';

/**
 * Visualizes the gamepad if connected
 */
@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
  styleUrls: ['./gamepad.component.css']
})
export class GamepadComponent extends WidgetComponent {

  state: Observable<GamepadState>;

  constructor(
    private store: Store<State>
  ) {
    super();

    this.state = store.select('gamepad');
  }

}
