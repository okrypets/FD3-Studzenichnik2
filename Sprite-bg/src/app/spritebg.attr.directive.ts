import { Directive, Input, ElementRef, Attribute, HostListener } from "@angular/core";

@Directive({
  selector: "[sprite-bg]",
})

export class SpriteBgDirective {

  offsets:Array<{x:number, y:number}>=[
    {x:0,y:1},
    {x:27,y:0},
    {x:51,y:0},
    {x:76,y:0},
    {x:0,y:-26},
    {x:0,y:-51},
    {x:0,y:-72},
    {x:27,y:-51},
    {x:27,y:-74},
    {x:27,y:-25},
    {x:50,y:-25},
    {x:52,y:-47},
    {x:52,y:-76},
    {x:75,y:-25},
    {x:75,y:-48},
    {x:75,y:-72},
  ];

  constructor(private element: ElementRef,
              @Attribute("sprite-url") url:string = "'http://fe.it-academy.by/Examples/smileys.png'",
              @Attribute("sprite-offsetx") offsetx:number = 0,
              @Attribute("sprite-offsety") offsety:number = 0,
              @Attribute("sprite-width") width:number = 27,
              @Attribute("sprite-height") height:number = 27,
              ) {

    this.element.nativeElement
      .style.backgroundPositionX=offsetx + 'px';

    this.element.nativeElement
      .style.backgroundPositionY=offsety + 'px';

    this.element.nativeElement
      .style.width=width + 'px';

    this.element.nativeElement
      .style.height=height + 'px';

    this.element.nativeElement
      .style.backgroundImage=`url(${url})`;
  }

  @HostListener("click")
  setRandomSprite():void {
    let spriteOffsetsIndex:number
      =Math.floor(Math.random()*this.offsets.length);
    let randomSpriteOffsetX:number
      =this.offsets[spriteOffsetsIndex].x;
    let randomSpriteOffsetY:number
      =this.offsets[spriteOffsetsIndex].y;
    this.element.nativeElement
      .style.backgroundPositionX=randomSpriteOffsetX + 'px';
    this.element.nativeElement
      .style.backgroundPositionY=randomSpriteOffsetY + 'px';
  }
}
