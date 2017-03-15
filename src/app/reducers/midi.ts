import { Action, ActionReducer } from '@ngrx/store';

export const MIDI_UPDATE = 'MIDI_UPDATE';

export interface MidiState {
  isConnected: boolean;
};

export const initialState: MidiState = {
  isConnected: false
};

export default function (state = initialState, action: Action): MidiState {
  switch (action.type) {
    case MIDI_UPDATE:
      return { isConnected: false };
    default:
      return state;
  }
};
