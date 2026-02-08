import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-suggestion-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suggestion-section.html',
  styleUrls: ['./suggestion-section.css']
})
export class SuggestionSectionComponent {

  form: FormGroup;

  isSubmitting = false;

  isSuccess = false;

  isError = false;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      book: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      message: ['']

    });

  }

  submit() {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.isError = false;

    /**
     * Simulate AJAX request
     * Replace later with real HTTP call
     */
    setTimeout(() => {

      const success = true; // change to false to test error

      this.isSubmitting = false;

      if (success) {

        this.isSuccess = true;

        this.form.reset();

      } else {

        this.isError = true;

      }

    }, 1500);

  }

}