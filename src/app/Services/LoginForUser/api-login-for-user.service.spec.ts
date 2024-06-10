import { TestBed } from '@angular/core/testing';

import { ApiLoginForUserService } from './api-login-for-user.service';

describe('ApiLoginForUserService', () => {
  let service: ApiLoginForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLoginForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
