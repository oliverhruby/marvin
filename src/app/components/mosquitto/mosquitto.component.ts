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

  public msgs: Observable<any> = null;
  private mqttService: MqttService;

  constructor() {

    this.mqttService = new MqttService({
      protocol: 'ws',
      hostname: 'test.mosquitto.org',
      port: 8080
    });

    this.msgs = this.mqttService.observe("test").map(
      function (message) {
        var msg = {
          topic: message.topic,
          msg: message.payload.toString()
        };
        return msg;
      }
    );
    
    this.mqttService.publish("test", "test message", {qos: 0}).subscribe((err)=>{
       console.log(err);
    });

  }

}
