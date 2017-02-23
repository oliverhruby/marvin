import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { UserState, USER_LOGIN, USER_LOGOUT } from 'app/reducers/user';

// Avoid name not found warnings
import Auth0Lock from 'auth0-lock';
//declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  authOptions = {
    auth: {
      redirect: true // TODO: configure Client IDs and try this without redirection
    }
  };

  // Configure Auth0
  lock = new Auth0Lock('WV4K0SP34zBDrILyg7s4n8AxEbYym2yI', 'oliverhruby.eu.auth0.com', this.authOptions);

  constructor(private store: Store<State>) {

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }
        this.store.dispatch({ type: USER_LOGIN, payload: profile });
        localStorage.setItem('profile', JSON.stringify(profile));
      });

    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}