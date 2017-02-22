import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

/**
 * System information
 */
@Component({
  selector: 'app-sysinfo',
  templateUrl: './sysinfo.component.html',
  styleUrls: ['./sysinfo.component.css']
})
export class SysinfoComponent extends WidgetComponent implements OnInit {

  constructor() {
    super();
  }

  /**
   * Wait for the view to init before using the element, then init everything
   */
  ngOnInit() {

  }
}
