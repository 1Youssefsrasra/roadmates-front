import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent {
  // Form group
  profileForm: FormGroup;

  // Dropdown data
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      zipCode: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      issueDay: ['', Validators.required],
      issueMonth: ['', Validators.required],
      issueYear: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
    } else {
      alert('Please fill all required fields!');
    }
  }

  onUploadPicture() {
    alert('Upload Profile Picture clicked!');
  }
}
