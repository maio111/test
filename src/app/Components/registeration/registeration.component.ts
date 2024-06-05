import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule,FormGroup,FormArray} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import * as configData from '../../../config/configuration.json';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  CommonModule,
  InputTextModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent  {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  forthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  isLinear = false;
  questions = (configData as any).questions;
  countryOptions = (configData as any).countryOptions;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      FirstnameCtrl: ['', Validators.required],
      FamilynameCtrl: ['', Validators.required],
      genderCtrl: ['', Validators.required],
      dobCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required],
      countryCtrl: ['', Validators.required],
      referenceCtrl: ['2', Validators.required], // Default value is "No"
      referenceDetailsFirstName: [''],
      referenceDetailsFamilyName: ['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      Country3: ['', Validators.required],
      Role3: ['', Validators.required],
      Description3: ['', Validators.required],
      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required]
    });

    this.forthFormGroup = this._formBuilder.group({
      referenceForPrePosition: ['2', Validators.required], // Default value is "No"
      previousPositions: this._formBuilder.array([])
    });

    this.fifthFormGroup = this._formBuilder.group({
      referenceFordiffrentPosition: ['2', Validators.required], // Default value is "No"
      differentPositions: this._formBuilder.array([])
    });

    this.subscribeToReferenceCtrlChanges();
    this.subscribeToPositionCtrlChanges(this.forthFormGroup, 'referenceForPrePosition', 'previousPositions');
    this.subscribeToPositionCtrlChanges(this.fifthFormGroup, 'referenceFordiffrentPosition', 'differentPositions');
  }

  subscribeToReferenceCtrlChanges() {
    const referenceCtrl = this.secondFormGroup?.get('referenceCtrl');
    if (referenceCtrl) {
      referenceCtrl.valueChanges.subscribe(value => {
        console.log('Reference Control Value:', value);
      });
    }
  }

  subscribeToPositionCtrlChanges(formGroup: FormGroup, refControlName: string, arrayControlName: string) {
    const referenceCtrl = formGroup?.get(refControlName);
    if (referenceCtrl) {
      referenceCtrl.valueChanges.subscribe(value => {
        const positionsArray = formGroup.get(arrayControlName) as FormArray;
        if (value === '1') {
          // Add initial controls if "Yes" is selected
          if (positionsArray.length === 0) {
            this.addPosition(positionsArray);
          }
        } else {
          // Clear all controls if "No" is selected
          while (positionsArray.length !== 0) {
            positionsArray.removeAt(0);
          }
        }
      });
    }
  }

  get previousPositionsControls() {
    return (this.forthFormGroup.get('previousPositions') as FormArray).controls;
  }

  get differentPositionsControls() {
    return (this.fifthFormGroup.get('differentPositions') as FormArray).controls;
  }

  addPosition(positionsArray: FormArray) {
    positionsArray.push(this._formBuilder.group({
      Country: ['', Validators.required],
      Role: ['', Validators.required],
      Description: ['', Validators.required],
      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required]
    }));
  }

  addPreviousPosition() {
    const positionsArray = this.forthFormGroup.get('previousPositions') as FormArray;
    this.addPosition(positionsArray);
  }

  addDifferentPosition() {
    const positionsArray = this.fifthFormGroup.get('differentPositions') as FormArray;
    this.addPosition(positionsArray);
  }
  onSave(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        console.log('First Step Data:', this.firstFormGroup.value);
        // Save first step data logic here
        break;
      case 1:
        console.log('Second Step Data:', this.secondFormGroup.value);
        // Save second step data logic here
        break;
      case 2:
        console.log('Third Step Data:', this.thirdFormGroup.value);
        // Save third step data logic here
        break;
      case 3:
        console.log('Fourth Step Data:', this.forthFormGroup.value);
        // Save fourth step data logic here
        break;
      case 4:
        console.log('Fifth Step Data:', this.fifthFormGroup.value);
        // Save fifth step data logic here
        break;
      default:
        break;
    }
  }
}
