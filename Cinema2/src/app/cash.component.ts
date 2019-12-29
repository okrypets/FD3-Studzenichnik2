import { Component, Input } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';
import {Observable} from "rxjs/Observable";
import {from} from "rxjs/observable/from";

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {

  @Input("online-CashBox")
  private onlineCash:Array<number>;

  @Input("cashBox-Name")
  private name:string;
  private tickets:Array<boolean>
  public seatsNumber:number;

  constructor(private datasource:TicketsDatasource) {
    from(this.getTicketsObs()).subscribe( str => this.tickets=str );
  }

  setOnlineCashBoxNumber(_seatsNumber:number):void {
    console.log(_seatsNumber + this.getName())
    this.seatsNumber = _seatsNumber;
    this.datasource.setOnlineCashBoxNumber(this.seatsNumber)
  }

  getOnlineCashBoxNumberArray():Array<number> {
    return this.datasource.getOnlineCashBoxNumberArray();
  }

  setOfflineCashBoxNumber(_seatsNumber:number):void {
    console.log(_seatsNumber + this.getName())
    this.seatsNumber = _seatsNumber;
    this.datasource.setOfflineCashBoxNumber(this.seatsNumber)
  }

  getOfflineCashBoxNumberArray():Array<number> {
    return this.datasource.getOfflineCashBoxNumberArray();
  }

  getName():string {
    return this.name;
  }

  getEmptyTickets():number {
    return this.getTickets()
      .filter (it => it === true)
      .length
      ;
  }
  getTickets():Array<boolean> {
    return this.tickets;
  }

  getTicketsObs():Observable<Array<boolean>> {
    return this.datasource.getTicketsObs();
  }

}
