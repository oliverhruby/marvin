/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulationService } from './simulation.service';

describe('SimulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulationService]
    });
  });

  it('should initialize', inject([SimulationService], (service: SimulationService) => {
    expect(service).toBeTruthy();
  }));
});
