import { Component } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class HallComponent {

  constructor(private datasource:TicketsDatasource) {
  }

  private error:string;

  getEmptyTickets():number {
    return this.datasource.getEmptyTickets();
  }

  getEngagedTickets():number {
    return this.datasource.getEngagedTickets();
  }

  getError():string {
    return this.datasource.getError();
  }


}
