import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { Scene } from 'app/models/scene.model';
import { State } from 'app/reducers';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent extends WidgetComponent {

  scenes: Observable<Scene[]>;

  constructor(
    private apiService: ApiService,
    private store: Store<State>,
    private router: Router
  ) {
    super();
    this.scenes = apiService.getAllScenes();
  }

  load(id) {
    this.router.navigate(['/scene/' + id])
    // this.store.dispatch(go('/scene/' + id));
  }

  new() {

  }
}
