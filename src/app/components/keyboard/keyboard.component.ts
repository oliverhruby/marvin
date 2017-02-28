import { Component } from '@angular/core';
import { WidgetComponent } from 'app/components/widget';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { KeyboardState } from 'app/reducers/keyboard';

/**
 * Keyboard input 
 */
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent extends WidgetComponent {

  constructor(
    private store: Store<State>
  ) {
    super();
  }
}
