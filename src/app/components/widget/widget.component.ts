import { Component } from '@angular/core';

/**
 * Base class for dockable UI widgets 
 */
@Component({
  selector: 'app-widget',
  template: ''
})
export abstract class WidgetComponent {

  visible: boolean = true;
  maximized: boolean = false;
   
  constructor() {
  }

  minimize() {
    this.maximized = false;
  }

  maximize() {
    this.maximized = true;
  }

  show() {
    this.visible = true;
  }

  hide() {
   this.visible = false;
  }

}