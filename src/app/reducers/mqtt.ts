import { Action, ActionReducer } from '@ngrx/store';

export const MQTT_TOPIC: string = 'MQTT_TOPIC';

export interface MqttState {
  server: string;
  topics: any;
};

export const initialState: MqttState = {
  server: '',
  topics: {}
};

export default function (state = initialState, action: Action): MqttState {
  switch (action.type) {
    case MQTT_TOPIC:
      return state;
    default:
      return state;
  }
};
