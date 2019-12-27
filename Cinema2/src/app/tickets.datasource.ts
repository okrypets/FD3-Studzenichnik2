import { Injectable } from "@angular/core";

@Injectable()
export class TicketsDatasource {


  private tickets:Array<{seatNumber:number,isEmpty:boolean}>=[
    { seatNumber:1, isEmpty:true },
    { seatNumber:2, isEmpty:true },
    { seatNumber:3, isEmpty:true },
    { seatNumber:4, isEmpty:true },
    { seatNumber:5, isEmpty:true },
    { seatNumber:6, isEmpty:true },
    { seatNumber:7, isEmpty:true },
    { seatNumber:8, isEmpty:true },
    { seatNumber:9, isEmpty:true },
    { seatNumber:10, isEmpty:true },
    { seatNumber:11, isEmpty:true },
    { seatNumber:12, isEmpty:true },
  ];

  private name:string;
  private seatsNumber:number;
  private onlineCashArray:Array<number>=[];
  private offlineCashArray:Array<number>=[];
  private error:string="Билеты закончились"

  setName(_name):void {
    this.name = _name;
  }

  getName():string {
    return this.name;
  }

  getEmptyTickets():number {
    console.log(this.tickets)
    return this.tickets
      .filter(it => it.isEmpty)
      .length
      ;
  }

  getEngagedTickets():number {
    console.log(this.tickets)
    return this.tickets
      .filter(it => !it.isEmpty)
      .length
      ;
  }

  setOnlineCashBoxNumber(_seatsNumber:number):void {
    this.seatsNumber = _seatsNumber
    this.setOlineCashArray(this.seatsNumber)
    this.setNewTickets(this.seatsNumber)
  }

  setOfflineCashBoxNumber(_seatsNumber:number):void {
    this.seatsNumber = _seatsNumber
    this.setOfflineCashArray(this.seatsNumber)
    this.setNewTickets(this.seatsNumber)
  }

  filterEmpty(num:number):Array<{seatNumber:number,isEmpty:boolean}> {
    const filter:Array<{seatNumber:number,isEmpty:boolean}> = this.tickets
      .filter(it => it.isEmpty === true)
      .slice(0, num)
    return filter
  }

  setNewTickets(_busyNumber:number):void {
    let busy:Array<{seatNumber:number,isEmpty:boolean}> = this.filterEmpty(_busyNumber)
    busy.forEach(i => {i.seatNumber, i.isEmpty = false})
    const newTickets = this.tickets.slice()
    this.tickets = Array.from(new Set(newTickets.concat(busy)))
  }
  setOlineCashArray(_onlineSeats:number):void {
    let online:Array<{seatNumber:number,isEmpty:boolean}> = this.filterEmpty(_onlineSeats)
    for(let i = 0; i< online.length; i++) {
      const {seatNumber} = online[i]
      this.onlineCashArray = [...this.onlineCashArray, seatNumber]
    }
  }

  setOfflineCashArray(_offlineSeats:number):void {
    let offline:Array<{seatNumber:number,isEmpty:boolean}> = this.filterEmpty(_offlineSeats)
    for(let i = 0; i< offline.length; i++) {
      const {seatNumber} = offline[i]
      this.offlineCashArray = [...this.offlineCashArray, seatNumber]
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

