import { Action } from '@ngrx/store';

export const MQTT_STATUS = 'MQTT_STATUS';
export const MQTT_TOPIC = 'MQTT_TOPIC';

export class Status implements Action {
    readonly type = MQTT_STATUS;
    constructor(public payload: any) { }
}

export class Topic implements Action {
    readonly type = MQTT_TOPIC;
    constructor(public payload: any) { }
}

export type MqttAction =
    Status |
    Topic;
