import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  cameraUrl: string;

  constructor(private configService: ConfigService) {
    this.cameraUrl = 'http://192.168.0.108:8081'; // configService.config.cameraUrl;
  }

  ngOnInit() {
  }

}
