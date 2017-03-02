import { Component } from '@angular/core';
import { WidgetComponent } from 'app/components';
import { ApiService } from 'app/services';
import { Observable } from 'rxjs/Rx';

/**
 * System information
 */
@Component({
  selector: 'app-sysinfo',
  templateUrl: './sysinfo.component.html',
  styleUrls: ['./sysinfo.component.css']
})
export class SysinfoComponent {

  state: Observable<any>;

  constructor(
    private apiService: ApiService
  ) {
    this.state = apiService.getVersion();
  }

}
