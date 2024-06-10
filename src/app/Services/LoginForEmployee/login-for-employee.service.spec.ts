import { TestBed } from '@angular/core/testing';

import { LoginForEmployeeService } from './login-for-employee.service';

describe('LoginForEmployeeService', () => {
  let service: LoginForEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginForEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
