import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.creatForm();
  }
  creatForm() {
    this.form = this.formBuilder.group({
      // Email Input
      email: [
        '',
        Validators.compose([
          Validators.required, // Field is required
          Validators.minLength(5), // Minimum length is 5 characters
          Validators.maxLength(30), // Maximum length is 30 characters
        ]),
      ],
      // Password Input
      password: [
        '',
        Validators.compose([
          Validators.required, // Field is required
          Validators.minLength(8), // Minimum length is 8 characters
          Validators.maxLength(35), // Maximum length is 35 characters
        ]),
      ],
      confirm: ['', Validators.required],
    });
  }

  onRegisterSubmit() {
    console.log(this.form);
  }

  ngOnInit(): void {}
}
