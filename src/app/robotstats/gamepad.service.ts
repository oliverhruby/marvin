import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * Service for providing the gamepad control
 */
@Injectable()
export class GamepadService {

  constructor() {
    document.addEventListener('gamepadconnected', function() {
        console.log('gamepad connected');
     });
  }

}
