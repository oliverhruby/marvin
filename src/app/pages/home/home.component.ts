import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/src';

/**
 * Home page
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  ngOnInit() {
    Cookie.set('marvin_test', 'Test cookie');
  }

}
