/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MqttService } from './mqtt.service';

describe('MqttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MqttService]
    });
  });

  it('should initialize', inject([MqttService], (service: MqttService) => {
    expect(service).toBeTruthy();
  }));
});
