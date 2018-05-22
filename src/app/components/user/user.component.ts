import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetComponent } from '../widget/widget.component';
import { AuthService } from 'app/services/auth.service';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { UserState } from 'app/reducers/user';

/**
 * User information
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends WidgetComponent {

  public state: Observable<UserState>;

  constructor(
    private auth: AuthService,
    private store: Store<State>
  ) {
    super();

    this.state = this.store.select('user');
  }
}
