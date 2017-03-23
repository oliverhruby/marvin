import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { Scene, User } from 'app/models';

/**
 * Provide access to the server side API
 */
@Injectable()
export class ApiService {

  private url = '/api/version';

  constructor(
    private http: Http,
    private store: Store<State>
  ) {

  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get(this.url)
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

  getVersion(): Observable<any> {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllScenes(): Observable<Scene[]> {
    return this.http.get('/api/scenes').map(res => res.json());
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get('/api/users').map(res => res.json());
  }

}
