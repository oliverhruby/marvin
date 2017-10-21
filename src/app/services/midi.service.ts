import { NgZone, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import * as midi from '../actions/MidiAction';

@Injectable()
export class MidiService {

  constructor(
    private zone: NgZone,
    private store: Store<State>
  ) {
    let me = this;
    window.addEventListener('load', function () {
      me.zone.run(function () {
        me.store.dispatch(new midi.Update(true));
        me.onMidiInit();
      });
    });
  }

  onMidiInit() {
    try {
      (<any>navigator).requestMIDIAccess().then(this.onMIDISuccess, this.onMIDIFailure);
    } catch (ex) {
      console.error('No MIDI support in your browser.');
    }
  }

  onMIDISuccess(midiAccess) {
    console.log('MIDI Access Object', midiAccess);
    // let inputs = midi.inputs.values();
    // for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
    //   input.value.onmidimessage = this.onMIDIMessage;
    // }
  }

  onMIDIMessage(event) {
    console.log('msg received', event);
  }

  onMIDIFailure(e) {
    console.log(e);
  }
}
