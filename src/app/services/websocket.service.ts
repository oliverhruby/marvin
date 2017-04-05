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
    // tslint:disable-next-line:max-line-length
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaW9zdHJlYW1lciIsImlhdCI6MTQ5MTM5MzQ5OCwiZXhwIjoxMzEwOTEzOTM0OTh9.6H_o4JWy_piv9D-ch3jsrn8bh9lmuMBCyvnQwX3ngDc';
    // TODO: replace with real user token
    this.websocket = this.createWebSocket('/?access_token=' + token);
    this.websocket.onopen = (evt) => {
      this.websocket.send('Hello World');
    };
  }

  private createWebSocket(path) {
    let protocolPrefix = (window.location.protocol === 'https:') ? 'wss:' : 'ws:';
    return new WebSocket(protocolPrefix + '//' + location.host + path);
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
