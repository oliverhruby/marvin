import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * Service for communication using websockets
 * Some examples here: http://plnkr.co/edit/MjZA5HOfllvMPjoCxe3I?p=preview&open=app%2Fapp.component.ts
 */
@Injectable()
export class WebSocketService {

  private actionUrl: string;
  private websocket: any;
  private receivedMsg: any;

  constructor() {
    this.websocket = new WebSocket('ws://localhost:3000');
    this.websocket.onopen = (evt) => {
      this.websocket.send('Hello World');
    };
  }

  public GetInstanceStatus(): Observable<any> {
    return Observable.create(observer => {
      this.websocket.onmessage = (evt) => {
        observer.next(evt);
      };
    })
      .map(res => 'From WS: ' + res.data)
      .share();
  }

  public send(message: string) {
    this.websocket.send(message);
  }
}
