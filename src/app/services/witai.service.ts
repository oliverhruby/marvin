import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/**
 * Service for communication with Wit.ai
 */
@Injectable()
export class WitAiService {

  constructor(private http: Http) {

  }

  public getResponse(question: string) {
    return this.http.get('/books', {}).map(res => res.json());
  }

}

