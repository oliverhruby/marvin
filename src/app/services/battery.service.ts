import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { BatteryState, BATTERY_UPDATE } from 'app/reducers/battery';

interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: () => any;
  onchargingtimechange: () => any;
  ondischargingtimechange: () => any;
  onlevelchange: () => any;
}

interface Navigator {
  getBattery(): BatteryManager;
}

/**
 * Provide access to the battery API
 */
@Injectable()
export class BatteryService {

  constructor(
    private store: Store<State>,
    private zone: NgZone
  ) {
    let me = this;
    window.addEventListener('load', function () {
      me.zone.run(function () { me.init() });
    });
  }

  init() {
    let me = this;
    try {
      me.zone.run(function () {
        (<any>navigator).getBattery().then(function(battery) {
          battery.onchargingchange = function() {
            me.store.dispatch({ type: BATTERY_UPDATE, payload: battery });
          };
          battery.onchargingtimechange = function() {
            me.store.dispatch({ type: BATTERY_UPDATE, payload: battery });
          };
          battery.ondischargingtimechange = function() {
            me.store.dispatch({ type: BATTERY_UPDATE, payload: battery });
          };
          battery.levelchange = function() {
            me.store.dispatch({ type: BATTERY_UPDATE, payload: battery });
          };
        });
      });
    } catch (ex) {
      console.log('Battery monitoring not available.');
    }

  }
}
