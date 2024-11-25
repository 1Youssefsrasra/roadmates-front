import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchForm: FormGroup;
  selectedDate: string | null = null;
  passengers: number = 1;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      const formData = {
        departure: this.searchForm.value.departure,
        destination: this.searchForm.value.destination,
        date: this.selectedDate || 'Today',
        passengers: this.passengers,
      };
      console.log('Search submitted:', formData);
    } else {
      alert('Please fill in all fields!');
    }
  }

  selectDate() {
    const date = prompt('Enter a date (e.g., 2023-12-25):');
    this.selectedDate = date ? date : null;
  }

  selectPassengers() {
    const count = prompt('Enter number of passengers:');
    this.passengers = count ? parseInt(count, 10) || 1 : 1;
  }

}
