import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/state-management/state/main-state';
/**
 * Provide access to the battery API
 */
@Injectable()
export class BatteryService {

  constructor(private store: Store<State>) { }

}
