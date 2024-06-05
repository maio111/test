import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForEmployeeComponent } from './login-for-employee.component';

describe('LoginForEmployeeComponent', () => {
  let component: LoginForEmployeeComponent;
  let fixture: ComponentFixture<LoginForEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
