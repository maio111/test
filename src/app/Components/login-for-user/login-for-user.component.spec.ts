import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForUserComponent } from './login-for-user.component';

describe('LoginForUserComponent', () => {
  let component: LoginForUserComponent;
  let fixture: ComponentFixture<LoginForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
