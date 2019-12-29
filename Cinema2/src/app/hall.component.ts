import { Component } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';
import { from } from 'rxjs/observable/from';
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class HallComponent {

  constructor(private datasource:TicketsDatasource) {
    from(this.getTicketsObs()).subscribe( str => this.tickets=str );
  }

  private tickets:Array<boolean>
  private error:string;

  getEmptyTickets():number {
    return this.getTickets()
      .filter(it => it === true)
      .length
      ;
  }

  getEngagedTickets():number {
    return this.getTickets()
      .filter(it => it === false)
      .length
      ;
  }

  getError():string {
    return this.datasource.getError();
  }

  getTickets():Array<boolean> {
    return this.tickets;
  }

  getTicketsObs():Observable<Array<boolean>> {
    return this.datasource.getTicketsObs();
  }

}
