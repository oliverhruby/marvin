import { Action } from '@ngrx/store';

export const MIDI_UPDATE = 'MIDI_UPDATE';

export class Update implements Action {
    readonly type = MIDI_UPDATE;
    constructor(public payload: any) { }
}

export type MidiAction =
    Update;
