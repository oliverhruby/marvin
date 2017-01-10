import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

/**
 * Spectrum analyzer to visualize audio signal
 */
@Component({
  selector: 'audioanalyzer',
  templateUrl: './audioanalyzer.component.html',
  styleUrls: ['./audioanalyzer.component.css']
})
export class AudioanalyzerComponent implements OnInit {

  @ViewChild("audioanalyzer") analyzer: ElementRef;

  constructor() {
  }

  ngOnInit() { // wait for the view to init before using the element

    // create audio analyzer
    let audioCtx = new AudioContext();
    let analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;

    // prepare the canvas to draw to
    let canvasCtx: CanvasRenderingContext2D = this.analyzer.nativeElement.getContext("2d");
    canvasCtx.clearRect(0, 0, 300, 100);

    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);

    if (navigator.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true
        },

        // Success callback
        function (stream) {
          var source = audioCtx.createMediaStreamSource(stream);
          var gainNode = audioCtx.createGain();
          source.connect(analyser);
          analyser.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          draw();
        },

        // Error callback
        function (err) {
          console.log('The following error occured: ' + err);
        }
      );
    } else {
      console.log('getUserMedia not supported on your browser!');
    }

    function draw() {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, 300, 100);

      var barWidth = (300 / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        canvasCtx.fillRect(x, 100 - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
      }
    };

    draw();
  }
}
