import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MqttService, MqttMessage } from 'angular2-mqtt';

/**
 * This component allows browsing MQTT messages
 */
@Component({
  selector: 'app-mosquitto',
  templateUrl: './mosquitto.component.html',
  styleUrls: ['./mosquitto.component.css']
})
export class MosquittoComponent {

  public msgs: Observable<MqttMessage> = null;
  private mqttService: MqttService;

  constructor() {

    this.mqttService = new MqttService({
      protocol: 'ws',
      hostname: '192.168.0.108',
      port: 9001,
      path: ''
    });

    this.mqttService.observe("#").subscribe((data)=>{
      // console.log(data);
    });
    this.mqttService.publish("pokus", "pokus msg", {qos: 0}).subscribe((err)=>{
      // console.log(err);
    });

  }

}
