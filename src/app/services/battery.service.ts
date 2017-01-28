import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
/**
 * Provide access to the battery API
 */
@Injectable()
export class BatteryService {

  constructor(private store: Store<State>) { }

}
