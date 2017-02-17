import { Component, OnInit, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

import { MidiService } from 'app/services';

/**
 * This component shows info about MIDI controllers
 */
@Component({
  selector: 'app-midi',
  templateUrl: './midi.component.html',
  styleUrls: ['./midi.component.css']
})
export class MidiComponent implements OnInit {

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) {

  }

  ngOnInit() {
    try {
      let engine = new MidiService(this.zone);
      engine.onMidiInit();
    } catch (ex) {
      console.log("MIDI not available");
    }
  }

}
