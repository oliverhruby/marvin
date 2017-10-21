import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { MidiState } from 'app/reducers/midi';
import { WidgetComponent } from '../widget/widget.component';

/**
 * This component shows info about MIDI controllers
 */
@Component({
  selector: 'app-midi',
  templateUrl: './midi.component.html',
  styleUrls: ['./midi.component.css']
})
export class MidiComponent extends WidgetComponent {

  state: Observable<MidiState>;

  constructor(
    private store: Store<State>
  ) {
    super();

    this.state = store.select('midi');
  }

}
