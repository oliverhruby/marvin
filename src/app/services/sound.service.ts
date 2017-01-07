import { Injectable } from '@angular/core';
import { MotorSoundService } from './motorsound.service';

/**
 * Service for generating sounds using Web Audio
 */
@Injectable()
export class SoundService {

  private _motorSoundService: MotorSoundService;

  constructor() {
    var context = new AudioContext();
    this._motorSoundService = new MotorSoundService(context);
  }

  /**
   * Beeps with a specified frequency for a specified time
   */
  public beep(time: number, frequency: number) {
    var context = new AudioContext(); // Create audio container
    var oscillator = context.createOscillator(); // Create bass guitar
    var gainNode = context.createGain(); // Create boost pedal
    oscillator.connect(gainNode); // Connect bass guitar to boost pedal
    gainNode.connect(context.destination); // Connect boost pedal to amplifier
    gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume
    oscillator.start();
    // TODO: wait
    oscillator.stop();
  }

  /**
   * Sets the oscillators simulating the motor sound based on the speed
   */
  public setMotorSound(speed: number) {
    this._motorSoundService.setSpeed(speed);
    if (speed > 0) {
      this._motorSoundService.start();
    } else {
      this._motorSoundService.stop();
    }
  }

}
