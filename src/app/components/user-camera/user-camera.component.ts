import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-user-camera',
  templateUrl: './user-camera.component.html',
  styleUrls: ['./user-camera.component.css']
})
export class UserCameraComponent extends WidgetComponent implements AfterViewInit {

  // get the element with the #mainCanvas on it
  @ViewChild('video') video: any;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    let _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        });
    }
  }
}
