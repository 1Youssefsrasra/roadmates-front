import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demand-card',
  templateUrl: './demand-card.component.html',
  styleUrls: ['./demand-card.component.css']
})
export class DemandCardComponent {
  @Input() demand: any; 

  holdRequest(arg0: any) {
throw new Error('Method not implemented.');
}
rejectRequest(arg0: any) {
throw new Error('Method not implemented.');
}
acceptRequest(arg0: any) {
throw new Error('Method not implemented.');
}


}
