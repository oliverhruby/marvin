import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

// TODO: is this working also? which version is better?
// import { accelerometerReducer, AccelerometerState } from './accelerometer';
// import { batteryReducer, BatteryState } from './battery';
// import { counterReducer, CounterState } from './counter';
import accelerometerReducer, * as fromAccelerometer from './accelerometer';
import batteryReducer, * as fromBattery from './battery';
import counterReducer, * as fromCounter from './counter';

/** State interface */
export interface State {
   accelerometer: fromAccelerometer.AccelerometerState,
   battery: fromBattery.BatteryState,
   counter: fromCounter.CounterState
};

export default compose(combineReducers)({
    accelerometer: accelerometerReducer,
    battery: batteryReducer,
    counter: counterReducer
});

// TODO: look at http://bodiddlie.github.io/ng-2-toh-with-ngrx-suite/
