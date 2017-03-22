import { Component } from '@angular/core';

/**
 * Base class for dockable UI widgets 
 */
@Component({
  selector: '',
  template: ''
})
export abstract class WidgetComponent {

  visible = true;
  maximized = false;

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
