import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MqttService, MqttMessage } from 'angular2-mqtt';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { WidgetComponent } from '../widget/widget.component';


/**
 * This component allows browsing MQTT messages
 */
@Component({
  selector: 'app-mosquitto',
  templateUrl: './mosquitto.component.html',
  styleUrls: ['./mosquitto.component.css']
})
export class MosquittoComponent extends WidgetComponent {

  public msgs: Observable<any> = null;
  private mqttService: MqttService;

  constructor(private store: Store<State> ) {
    super();
    try {

      this.mqttService = new MqttService({
        protocol: 'ws',
        hostname: 'test.mosquitto.org',
        port: 8080
      });

      this.store.dispatch({ type: 'MQTT_STATUS', payload: true })

      this.msgs = this.mqttService.observe('"test').map(
        function (message) {
          let msg = {
            topic: message.topic,
            msg: message.payload.toString()
          };
          return msg;
        }
      );

      this.mqttService.publish('test', 'test message', {
        qos: 0
      }).subscribe((err) => {
        console.log(err);
      });
    } catch (ex) {
        this.store.dispatch({ type: 'MQTT_STATUS', payload: false });
    }
  }

}
