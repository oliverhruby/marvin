import { Injectable } from '@angular/core';

/**
 * Service for generating sounds using Web Audio
 */
@Injectable()
export class SoundService {

  private _oscillator: OscillatorNode;

  constructor() {
    var context = new AudioContext(); // Create audio container
    var oscillator = context.createOscillator(); // Create bass guitar
    var gainNode = context.createGain(); // Create boost pedal
    oscillator.connect(gainNode); // Connect bass guitar to boost pedal
    gainNode.connect(context.destination); // Connect boost pedal to amplifier
    gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume

    this._oscillator = oscillator;
  }

  /**
   * Starts the oscillator simulating the motor sound
   */
  public startOscillator() {
    this._oscillator.start();
  }

}
