import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterationComponent } from "./Components/registeration/registeration.component";
import { LoginForEmployeeComponent } from "./Components/login-for-employee/login-for-employee.component";

import { LoginForUserComponent } from "./Components/login-for-user/login-for-user.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterationComponent, LoginForEmployeeComponent,
     LoginForUserComponent]
})
export class AppComponent {
  title = 'freelanceTask';
}
