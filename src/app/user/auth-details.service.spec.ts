import { TestBed, inject } from '@angular/core/testing';

import { AuthDetailsService } from './auth-details.service';

describe('AuthDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDetailsService]
    });
  });

  it('should be created', inject([AuthDetailsService], (service: AuthDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
