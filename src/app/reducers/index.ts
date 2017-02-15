import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import accelerometerReducer, * as fromAccelerometer from './accelerometer';
import batteryReducer, * as fromBattery from './battery';
import commandReducer, * as fromCommand from './command';
import counterReducer, * as fromCounter from './counter';
import laserReducer, * as fromLaser from './laser';
import mqttReducer, * as fromMqtt from './mqtt';
import stopwatchReducer, * as fromStopwatch from './stopwatch';
import vehicleReducer, * as fromVehicle from './vehicle';

/** State interface */
export interface State {
   accelerometer: fromAccelerometer.AccelerometerState,
   battery: fromBattery.BatteryState,
   command: fromCommand.CommandState,
   counter: fromCounter.CounterState,
   laser: fromLaser.LaserState,
   mqtt: fromMqtt.MqttState,
   stopwatch: fromStopwatch.StopwatchState,
   vehicle: fromVehicle.VehicleState
};

export default compose(combineReducers)({
    accelerometer: accelerometerReducer,
    battery: batteryReducer,
    command: commandReducer,
    counter: counterReducer,
    laser: laserReducer,
    mqtt: mqttReducer,
    stopwatch: stopwatchReducer,
    vehicle: vehicleReducer
});

// TODO: look at http://bodiddlie.github.io/ng-2-toh-with-ngrx-suite/
