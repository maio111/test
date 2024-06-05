import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterationComponent } from "./Components/registeration/registeration.component";
import { StepperComponent } from "./Components/stepper/stepper.component";
import { LoginForEmployeeComponent } from "./Components/login-for-employee/login-for-employee.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterationComponent, StepperComponent, LoginForEmployeeComponent]
})
export class AppComponent {
  title = 'freelanceTask';
}
