import { ActionReducerMap } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromBattery from './battery';
import * as fromCommand from './command';
import * as fromGamepad from './gamepad';
import * as fromGyroscope from './gyroscope';
import * as fromLaser from './laser';
import * as fromMidi from './midi';
import * as fromMqtt from './mqtt';
import * as fromScene from './scene';
import * as fromStopwatch from './stopwatch';
import * as fromUser from './user';
import * as fromVehicle from './vehicle';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
   battery: fromBattery.BatteryState;
   command: fromCommand.CommandState;
   gamepad: fromGamepad.GamepadState;
   gyroscope: fromGyroscope.GyroscopeState;
   laser: fromLaser.LaserState;
   mqtt: fromMqtt.MqttState;
   midi: fromMidi.MidiState;
   scene: fromScene.SceneState;
   stopwatch: fromStopwatch.StopwatchState;
   user: fromUser.UserState;
   vehicle: fromVehicle.VehicleState;
};

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
    battery: fromBattery.reducer,
    command: fromCommand.reducer,
    gamepad: fromGamepad.reducer,
    gyroscope: fromGyroscope.reducer,
    laser: fromLaser.reducer,
    mqtt: fromMqtt.reducer,
    midi: fromMidi.reducer,
    scene: fromScene.reducer,
    stopwatch: fromStopwatch.reducer,
    user: fromUser.reducer,
    vehicle: fromVehicle.reducer
};

