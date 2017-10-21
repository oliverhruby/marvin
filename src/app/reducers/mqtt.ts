import * as mqtt from '../actions/MqttAction';

export interface MqttState {
  connected: boolean;
  topics: any;
};

export const initialState: MqttState = {
  connected: null,
  topics: {}
};

export function reducer (state = initialState, action: mqtt.MqttAction): MqttState {
  switch (action.type) {
    case mqtt.MQTT_STATUS:
      state.connected = action.payload;
      return state;
    case mqtt.MQTT_TOPIC:
      return state;
    default:
      return state;
  }
};
