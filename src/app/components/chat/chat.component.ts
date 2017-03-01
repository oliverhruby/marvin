import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

/**
 * User chat room
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends WidgetComponent {

  constructor(
  ) {
    super();
  }
}
