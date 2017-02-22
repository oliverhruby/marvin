import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent extends WidgetComponent implements OnInit {

  cameraUrl: string;

  constructor(private configService: ConfigService) {
    super();
    this.cameraUrl = 'http://192.168.0.108:8081'; // configService.config.cameraUrl;
  }

  ngOnInit() {
  }

}
