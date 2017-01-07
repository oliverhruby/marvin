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

    public sendMessage(text:string){
      this.websocket.send(text);
    }

    public GetInstanceStatus(): Observable<any>{
      this.websocket = new WebSocket("ws://echo.websocket.org/"); //dummy echo websocket service
      this.websocket.onopen =  (evt) => {
          this.websocket.send("Hello World");
      };

      return Observable.create(observer=>{
          this.websocket.onmessage = (evt) => {
              observer.next(evt);
          };
      })
      .map(res=>"From WS: " + res.data)
      .share();
    }

}
