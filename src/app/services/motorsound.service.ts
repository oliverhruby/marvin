import { Injectable } from '@angular/core';

/**
 * Service for generating motor sound using Web Audio
 * It uses the linear generator from https://github.com/cemrich/js-motor-sound-generation
 */
@Injectable()
export class MotorSoundService {

  private scriptNode: ScriptProcessorNode;
  private currentFrame: number;
  private speed: number;
  private isPlaying: boolean;
  private data: Array<number>;
  private gainNode: GainNode;
  private dataLength: number;

  constructor(private context: AudioContext) {
    this.data = [];
    this.currentFrame = 0;
    this.speed = 0.6;
    this.isPlaying = false;
    this.dataLength = 1024;

    // scriptNode to change sound wave on the run
    this.scriptNode = this.context.createScriptProcessor(1024);
    this.scriptNode.onaudioprocess = this.process.bind(this);

    // gainNode for volume control
    this.gainNode = context.createGain();
    this.gainNode.gain.value = 0.5;
    this.scriptNode.connect(this.gainNode);

    this.generate();
  }

  private process(event) {
    // this is the output buffer we can fill with new data
    var channel = event.outputBuffer.getChannelData(0);
    var index;

    for (var i = 0; i < channel.length; ++i) {
      // skip more data frames on higher speed
      this.currentFrame += this.speed;
      index = Math.floor(this.currentFrame) % this.data.length;
      // update buffer from data
      channel[i] = this.data[index];
    }
    this.currentFrame %= this.data.length;
  }

  public start() {
    this.gainNode.connect(this.context.destination);
  };

  public stop() {
    this.gainNode.disconnect(this.context.destination);
  }

  private pushLinear(data, toValue, toPosition) {
    var lastPosition = data.length - 1;
    var lastValue = data.pop();
    var positionDiff = toPosition - lastPosition;
    var step = (toValue - lastValue) / positionDiff;
    for (var i = 0; i < positionDiff; i++) {
      data.push(lastValue + step * i);
    }
    return data;
  };

  private generate() {
    var data = [];
    var lastValue = 1;
    var lastPosition = 0;
    var nextValue, nextPosition;

    data.push(lastValue);

    for (var i = 0.05; i < 1; i += Math.random() / 8 + 0.01) {
      nextPosition = Math.floor(i * this.dataLength);
      nextValue = Math.random() * 2 - 1;
      this.pushLinear(data, nextValue, nextPosition);
    }

    this.pushLinear(data, 1, this.dataLength);
    this.data = data;
  }

  /**
   * Sets the volume of the motor
   */
  public setVolume(volume: number) {
    this.gainNode.gain.value = volume;
  }

  /**
   * Sets the speed of the motor
   */
  public setSpeed(speed) {
    this.speed = speed;
  }
}
