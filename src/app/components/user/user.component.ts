import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

/**
 * User information
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends WidgetComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
