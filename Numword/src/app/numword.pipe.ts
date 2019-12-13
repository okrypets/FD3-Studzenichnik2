import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  private apple1:string = "яблоко";
  private apple5:string = "яблок";
  private apple2:string = "яблока";

  transform(apples:number):string {
    let dd=apples%100;
    if ( (dd>=11) && (dd<=19) )
      return this.apple5;
    let d=apples%10;
    if ( d==1 )
      return this.apple1;
    if ( (d>=2) && (d<=4) )
      return this.apple2;
    return this.apple5;
  }

}

