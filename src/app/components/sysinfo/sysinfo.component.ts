import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

// state management
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

/**
 * System information
 */
@Component({
  selector: 'app-sysinfo',
  templateUrl: './sysinfo.component.html',
  styleUrls: ['./sysinfo.component.css']
})
export class SysinfoComponent extends WidgetComponent {

  constructor(
    private store: Store<State>
  ) {
    super();
    //store.dispatch({ type: 'PLATFORM_UPDATE', payload: ??? })
  }

}
