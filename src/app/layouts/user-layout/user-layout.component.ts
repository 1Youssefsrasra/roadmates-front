import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {



  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123 456 789',
    memberSince: new Date('2022-01-01'),
  };

  createdRides = [
    {
      id: 1,
      departure: 'Waziers',
      destination: 'Gennevilliers',
      time: '18:00',
      date: '2023-12-01',
      availableSeats: 2,
      pricePerSeat: '15.59',
      author: 'John Doe',
      authorPhoto: 'assets/user-avatar.png',
      rating: '5.0',
    },
    // Add more rides here
  ];

  receivedDemands = [
    {
      id: 1,
      driverName: 'Emily Johnson',
      pickup: '789 Pine Rd',
      dropoff: '321 Maple St',
      date: new Date('2023-11-16T09:00'),
    },
    // Add more demands here
  ];

  sentRequests = [
    {
      id: 1,
      driverName: 'Michael Brown',
      pickup: '102 Birch Ln',
      dropoff: '654 Cedar Ct',
      date: new Date('2023-11-17T07:45'),
    },
    {
      id: 1,
      driverName: 'Michael Brown',
      pickup: '102 Birch Ln',
      dropoff: '654 Cedar Ct',
      date: new Date('2023-11-17T07:45'),
    },
    // Add more requests here
  ];



  userFeedbacks = [
    {
      rating: 5.0,
      comment: 'Outstanding experience! Friendly driver and smooth journey.',
      date: new Date('2023-10-09T09:00'),
    },
    {
      rating: 4.5,
      comment: 'Very good service, but the car could be cleaner.',
      date: new Date('2023-11-01T14:30'),
    },
    {
      rating: 4.0,
      comment: 'Good ride, but the driver arrived late.',
      date: new Date('2023-11-10T16:00'),
    },
    // Add more feedback objects as needed
  ];

  showCreateRideForm = false;
  createRideForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with controls and validators
    this.createRideForm = this.fb.group({
      startingPoint: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      availableSeats: ['', [Validators.required, Validators.min(1)]],
      pricePerSeat: ['', [Validators.required, Validators.min(0)]],
      carModel: ['', Validators.required],
      smokingAllowed: [false],
      musicOn: [false],
      airConditioning: [false],
    });
  }

  toggleCreateRideForm() {
    this.showCreateRideForm = !this.showCreateRideForm;
  }

  onSubmitRide() {
    if (this.createRideForm.valid) {
      const newRide = this.createRideForm.value;
      console.log('New Ride Created:', newRide);

      // Logic to save the new ride (e.g., API call)
      // ...

      // Close the form after submission
      this.toggleCreateRideForm();
      this.createRideForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
