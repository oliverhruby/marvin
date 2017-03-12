import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WidgetComponent } from '../widget/widget.component';
import { WebSocketService } from 'app/services';

/**
 * User chat room
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends WidgetComponent {

  text: string;
  message: Observable<any>;

  constructor(
    private webSocketService: WebSocketService
  ) {
    super();
    webSocketService.GetInstanceStatus().subscribe(data => alert(data));
  }

  submit() {
    this.webSocketService.send(this.text);
    this.text = '';
  }
}
