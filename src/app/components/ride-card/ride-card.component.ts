import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.css']
})
export class RideCardComponent {
bookRide(arg0: any) {
throw new Error('Method not implemented.');
}
viewDetails(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() ride: any;
}
