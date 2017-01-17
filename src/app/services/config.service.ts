import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/**
 * Application configuration
 *
 * References:
 * - https://medium.com/@hasan.hameed/reading-configuration-files-in-angular-2-9d18b7a6aa4#.lwv95vk2u
 * - http://plnkr.co/edit/U5LUZ0rRDcuCNJ5MBGwC?p=info
 */
@Injectable()
export class ConfigService {
  public config: any;

  constructor(private http: Http) {

  }

  /**
   * Returns an observable config structure
   */
  public getConfig() {
    return this.http.get('assets/config/development.json')
      .map(response => this.config = response.json());
  }
};
