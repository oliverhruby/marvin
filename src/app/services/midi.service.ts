import {
  NgZone,
  Injectable,
  EventEmitter
} from '@angular/core';

// TODO: I'm trying to simulate the logic in the nativespeechengine
// wrap the native MIDI fuctionality in observables and use state store

export interface IEvent {
  type: string;
  value: string;
}

let midi: any;
let navigator: any; // TODO: should use some typings for MIDI

@Injectable()
export class MidiService {

  private obs$: EventEmitter < IEvent > ;
  private err$: EventEmitter < any > ;

  constructor(private zone: NgZone) {
    this.obs$ = new EventEmitter < IEvent > ();
    this.err$ = new EventEmitter < any > ();
    // this.create();
  }

  onMidiInit() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
        sysex: false
      }).then(this.onMIDISuccess, this.onMIDIFailure);
    } else {
      alert('No MIDI support in your browser.');
    }
  }

  onMIDISuccess(midiAccess) {
    console.log('MIDI Access Object', midiAccess);
    midi = midiAccess;
    console.log(midi);

    let inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = this.onMIDIMessage;
    }

  }

  onMIDIMessage(event) {
    console.log('msg received', event);
  }

  onMIDIFailure(e) {
    console.log(e);
  }
}
