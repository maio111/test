import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiLoginForUserService } from '../../Services/LoginForUser/api-login-for-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-for-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-for-user.component.html',
  styleUrls: ['./login-for-user.component.css']
})
export class LoginForUserComponent {
  username: string = '';
  password: string = '';
  constructor(private loginService: ApiLoginForUserService) {}

  onSubmit() {
    console.log('Form submitted with:', this.username, this.password);
    this.loginService.login(this.username, this.password).subscribe({
      next: response => {
        // Handle successful response
        console.log('Login successful:', response);
      },
      error: error => {
        // Handle error response
        console.error('Login failed:', error);
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }
  
}
