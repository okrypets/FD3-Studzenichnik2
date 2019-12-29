import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class TicketsDatasource {


  private tickets:Array<boolean>=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
  private placesObs:Observable<Array<boolean>>;
  private name:string;
  private seatsNumber:number;
  private onlineCashArray:Array<number>=[];
  private offlineCashArray:Array<number>=[];
  private error:string="Билеты закончились";


  setName(_name):void {
    this.name = _name;
  }

  getName():string {
    return this.name;
  }
/*
  getTickets():Array<boolean> {
    return this.tickets;
  }

 */

  getTicketsObs():Observable<Array<boolean>> {
    return of(this.tickets);
  }

  setOnlineCashBoxNumber(_seatsNumber:number):void {
    this.seatsNumber = _seatsNumber
    this.setOnlineCashArray(this.seatsNumber)
  }

  setOfflineCashBoxNumber(_seatsNumber:number):void {
    this.seatsNumber = _seatsNumber
    this.setOfflineCashArray(this.seatsNumber)
  }

  getFirstEmpty() {
    return this.tickets.indexOf(this.tickets.some(it => it === true)) // index первого свободного места в зале
  }

  setOnlineCashArray(_onlineSeats:number):void {
    let firstEmpty = this.getFirstEmpty()
    let newTickets = this.tickets.fill(false, firstEmpty, firstEmpty+_onlineSeats)
    this.tickets = newTickets
    for (let i = firstEmpty; i < firstEmpty+_onlineSeats; i++) {
      this.onlineCashArray = [...this.onlineCashArray, i+1]
    }
  }

  setOfflineCashArray(_offlineSeats:number):void {
    let firstEmpty = this.getFirstEmpty()
    let newTickets = this.tickets.fill(false, firstEmpty, firstEmpty+_offlineSeats)
    this.tickets = newTickets
    for (let i = firstEmpty; i < firstEmpty+_offlineSeats; i++) {
        this.offlineCashArray = [...this.offlineCashArray, i+1]
    }
  }

  getOnlineCashBoxNumberArray():Array<number> {
    return this.onlineCashArray
  }

  getOfflineCashBoxNumberArray():Array<number> {
    return this.offlineCashArray
  }

  getError():string {
    return this.error;
  }

}

