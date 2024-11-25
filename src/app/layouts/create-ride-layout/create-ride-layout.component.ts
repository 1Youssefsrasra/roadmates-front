import { Component } from '@angular/core';

@Component({
  selector: 'app-create-ride-layout',
  templateUrl: './create-ride-layout.component.html',
  styleUrls: ['./create-ride-layout.component.css']
})
export class CreateRideLayoutComponent {
  rides = [
    {
      id: 1,
      departure: 'Waziers',
      destination: 'Gennevilliers',
      time: '18:00',
      date: '2023-12-01',
      availableSeats: 2,
      pricePerSeat: '15,59',
      author: 'Gabriel',
      authorPhoto: 'assets/images/profile.png',
      rating: '5.0',
    },
    {
      id: 2,
      departure: 'Paris',
      destination: 'Lille',
      time: '10:00',
      date: '2023-12-02',
      availableSeats: 3,
      pricePerSeat: '20,00',
      author: 'Emma',
      authorPhoto: 'assets/images/profile.png',
      rating: '4.8',
    },
   
    {
      id: 3,
      departure: 'Marseille',
      destination: 'Nice',
      time: '08:30',
      date: '2023-12-03',
      availableSeats: 1,
      pricePerSeat: '18,50',
      author: 'Lucas',
      authorPhoto: 'assets/images/profile.png',
      rating: '4.9',
    },
    {
      id: 3,
      departure: 'Marseille',
      destination: 'Nice',
      time: '08:30',
      date: '2023-12-03',
      availableSeats: 1,
      pricePerSeat: '18,50',
      author: 'Lucas',
      authorPhoto: 'assets/images/profile.png',
      rating: '4.9',
    },
    {
      id: 3,
      departure: 'Marseille',
      destination: 'Nice',
      time: '08:30',
      date: '2023-12-03',
      availableSeats: 1,
      pricePerSeat: '18,50',
      author: 'Lucas',
      authorPhoto: 'assets/images/profile.png',
      rating: '4.9',
    },
    {
      id: 3,
      departure: 'Marseille',
      destination: 'Nice',
      time: '08:30',
      date: '2023-12-03',
      availableSeats: 1,
      pricePerSeat: '18,50',
      author: 'Lucas',
      authorPhoto: 'assets/images/profile.png',
      rating: '4.9',
    },
    // Add more rides as needed
  ];

  viewDetails(rideId: number) {
    console.log('View details for ride ID:', rideId);
    // Add navigation or logic here
  }

  bookRide(rideId: number) {
    console.log('Book ride for ride ID:', rideId);
    // Add booking logic here
  }
}
