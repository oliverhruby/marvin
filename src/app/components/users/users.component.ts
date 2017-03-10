import { User } from './../../../api/models/user.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { State } from 'app/reducers';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends WidgetComponent {

  users: Observable<User[]>;

  constructor (apiService: ApiService) {
    super();
    this.users = apiService.getAllUsers();
  }
}
