import { Injectable } from '@angular/core';
import { Jsonp, Response, Headers } from '@angular/http';

/**
 * Service for communication with Wit.ai
 */
@Injectable()
export class WitAiService {

  private token = '';
  private apiUrl = 'https://api.wit.ai/message?v=20170113&q=lights&access_token=' + this.token + '&callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) {

  }

  /**
   * Retrieves the answer on a specified question
   */
  public getResponse(question: string) {
    let headers = new Headers();
    this.jsonp.get(this.apiUrl)
      .map(res => res.json())
      .subscribe(data => console.log(data));
  }

}

