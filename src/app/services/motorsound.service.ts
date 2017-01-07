import { Injectable } from '@angular/core';

/**
 * Service for generating motor sound using Web Audio
 *
 * Uses the linear generator from https://github.com/cemrich/js-motor-sound-generation
 */
@Injectable()
export class MotorSoundService {

  private _scriptNode: ScriptProcessorNode;
  private _context: AudioContext;
  private _currentFrame: number;
  private _speed: number;
  private _isPlaying: boolean;
  private _data: Array<number>;
  private _gainNode: GainNode;
  private _dataLength: number;

  constructor(context) {
    this._data = [];
    this._context = context;
    this._currentFrame = 0;
    this._speed = 0.6;
    this._isPlaying = false;
    this._dataLength = 1024;

    // scriptNode to change sound wave on the run
    this._scriptNode = this._context.createScriptProcessor(1024);
    this._scriptNode.onaudioprocess = this.process.bind(this);

    // gainNode for volume control
    this._gainNode = context.createGain();
    this._gainNode.gain.value = 0.5;
    this._scriptNode.connect(this._gainNode);

    this.generate();
  }

  private process(event) {
    // this is the output buffer we can fill with new data
    var channel = event.outputBuffer.getChannelData(0);
    var index;

    for (var i = 0; i < channel.length; ++i) {
      // skip more data frames on higher speed
      this._currentFrame += this._speed;
      index = Math.floor(this._currentFrame) % this._data.length;
      // update buffer from data
      channel[i] = this._data[index];
    }
    this._currentFrame %= this._data.length;
  }

  public start() {
    this._gainNode.connect(this._context.destination);
  };

  public stop() {
    this._gainNode.disconnect(this._context.destination);
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
      nextPosition = Math.floor(i * this._dataLength);
      nextValue = Math.random() * 2 - 1;
      this.pushLinear(data, nextValue, nextPosition);
    }

    this.pushLinear(data, 1, this._dataLength);
    this._data = data;
  }

  /**
   * Sets the volume of the motor
   */
  public setVolume(volume: number) {
    this._gainNode.gain.value = volume;
  }

  /**
   * Sets the speed of the motor
   */
  public setSpeed(speed) {
    this._speed = speed;
  }


}
