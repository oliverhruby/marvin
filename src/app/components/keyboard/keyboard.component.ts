import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { WidgetComponent } from 'app/components/widget';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { KeyboardState, KEYBOARD_UPDATE } from 'app/reducers/keyboard';

/**
 * Keyboard input 
 */
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent extends WidgetComponent implements OnInit {

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) {
    super();
  }

  /**
   * Wait for the view to init before using the element, then init everything
   */
  ngOnInit() {
    let me = this;
    window.addEventListener("keydown", function () {
      me.zone.run(function () {
        me.store.dispatch({ type: KEYBOARD_UPDATE, payload: true });
      });
    });
    window.addEventListener("keyup", function () {
      me.zone.run(function () {
        me.store.dispatch({ type: KEYBOARD_UPDATE, payload: false });
      });
    });
  }
}
