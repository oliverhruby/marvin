import * as midi from '../actions/MidiAction';

export interface MidiState {
  isConnected: boolean;
};

export const initialState: MidiState = {
  isConnected: false
};

export function reducer (state = initialState, action: midi.MidiAction): MidiState {
  switch (action.type) {
    case midi.MIDI_UPDATE:
      return { isConnected: false };
    default:
      return state;
  }
};
