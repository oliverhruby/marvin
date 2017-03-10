import { Scene } from './../../../api/models/scene.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { State } from 'app/reducers';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent extends WidgetComponent {

  scenes: Observable<Scene[]>;

  constructor (apiService: ApiService) {
    super();
    this.scenes = apiService.getAllScenes();
  }

  load() {
    alert('loading');
  }
}
