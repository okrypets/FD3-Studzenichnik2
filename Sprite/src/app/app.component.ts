import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private url:string="http://fe.it-academy.by/Examples/cards2.png";

  private offsetx:number=0;

  private offsety:number=0;

  private width:number=144;

  private height:number=194;

  private clickCount:number=0;

  private offsets:Array<{x:number, y:number}>=[
    {x:0,y:0},
    {x:144,y:0},
    {x:288,y:0},
    {x:430,y:0},
    {x:0,y:-194},
    {x:144,y:-194},
    {x:288,y:-194},
    {x:430,y:-194},
    {x:0,y:-388},
    {x:144,y:-388},
    {x:288,y:-388},
    {x:430,y:-388},
    {x:0,y:-582},
    {x:144,y:-582},
    {x:288,y:-582},
    {x:430,y:-582},
    {x:0,y:-776},
    {x:144,y:-776},
    {x:288,y:-776},
    {x:430,y:-776},
    {x:0,y:-970},
    {x:144,y:-970},
    {x:288,y:-970},
    {x:430,y:-970},
    {x:0,y:-1164},
    {x:144,y:-1164},
    {x:288,y:-1164},
    {x:430,y:-1164},
    {x:0,y:-1358},
    {x:144,y:-1358},
    {x:288,y:-1358},
    {x:430,y:-1358},
    {x:0,y:-1552},
    {x:144,y:-1552},
    {x:288,y:-1552},
    {x:430,y:-1552},
    {x:0,y:-1742},
    {x:144,y:-1742},
    {x:288,y:-1742},
    {x:430,y:-1742},
    {x:0,y:-1940},
    {x:144,y:-1940},
    {x:288,y:-1940},
    {x:430,y:-1940},
    {x:0,y:-2134},
    {x:144,y:-2134},
    {x:288,y:-2134},
    {x:430,y:-2134},
    {x:0,y:-2328},
    {x:144,y:-2328},
    {x:288,y:-2328},
    {x:430,y:-2328},
    {x:0,y:-2520},
    {x:288,y:-2520},
  ];

  getUrl():string {
    return this.url;
  }

  getOffsetX():number {
    return this.offsetx;
  }

  getOffsetY():number {
    return this.offsety;
  }

  getWidth():number {
    return this.width;
  }

  getHeight():number {
    return this.height;
  }

  setSprite($event:void):void {
    this.setClickCount();
    let _offsetX = this.offsets[this.getClickCount()].x;
    let _offsetY = this.offsets[this.getClickCount()].y;
    this.offsetx=_offsetX;
    this.offsety=_offsetY;
  }

  getClickCount():number {
    return this.clickCount;
  }

  setClickCount():void {
    this.clickCount<this.offsets.length-1 ? this.clickCount++ : this.clickCount=0;
    console.log(this.clickCount);
  }

}
