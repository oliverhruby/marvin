import { Component } from '@angular/core';
import { State } from 'app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {

  constructor(private store: Store<State>) {

  }

}
