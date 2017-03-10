import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import batteryReducer, * as fromBattery from './battery';
import commandReducer, * as fromCommand from './command';
import counterReducer, * as fromCounter from './counter';
import gamepadReducer, * as fromGamepad from './gamepad';
import gyroscopeReducer, * as fromGyroscope from './gyroscope';
import laserReducer, * as fromLaser from './laser';
import mqttReducer, * as fromMqtt from './mqtt';
import sceneReducer, * as fromScene from './scene';
import stopwatchReducer, * as fromStopwatch from './stopwatch';
import userReducer, * as fromUser from './user';
import vehicleReducer, * as fromVehicle from './vehicle';

/** State interface */
export interface State {
   battery: fromBattery.BatteryState;
   command: fromCommand.CommandState;
   counter: fromCounter.CounterState;
   gamepad: fromGamepad.GamepadState;
   gyroscope: fromGyroscope.GyroscopeState;
   laser: fromLaser.LaserState;
   mqtt: fromMqtt.MqttState;
   scene: fromScene.SceneState;
   stopwatch: fromStopwatch.StopwatchState;
   user: fromUser.UserState;
   vehicle: fromVehicle.VehicleState;
};

export default compose(combineReducers)({
    battery: batteryReducer,
    command: commandReducer,
    counter: counterReducer,
    gamepad: gamepadReducer,
    gyroscope: gyroscopeReducer,
    laser: laserReducer,
    mqtt: mqttReducer,
    scene: sceneReducer,
    stopwatch: stopwatchReducer,
    user: userReducer,
    vehicle: vehicleReducer
});

// TODO: look at http://bodiddlie.github.io/ng-2-toh-with-ngrx-suite/
