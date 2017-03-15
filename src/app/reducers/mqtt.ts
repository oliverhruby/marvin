import { Action, ActionReducer } from '@ngrx/store';

export const MQTT_TOPIC = 'MQTT_TOPIC';
export const MQTT_STATUS = 'MQTT_STATUS';

export interface MqttState {
  connected: boolean;
  topics: any;
};

export const initialState: MqttState = {
  connected: null,
  topics: {}
};

export default function (state = initialState, action: Action): MqttState {
  switch (action.type) {
    case MQTT_STATUS:
      state.connected = action.payload;
      return state;
    case MQTT_TOPIC:
      return state;
    default:
      return state;
  }
};
