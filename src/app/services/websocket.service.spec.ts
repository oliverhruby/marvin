/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebSocketService } from './websocket.service';

describe('WebSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketService]
    });
  });

  it('should send message', inject([WebSocketService], (service: WebSocketService) => {
    expect(service).toBeTruthy();
    service.GetInstanceStatus();
  }));
});
