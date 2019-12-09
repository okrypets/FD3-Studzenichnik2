import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  @Input("url")
  public url:string;

  @Input("offset-x")
  private offsetx:number;

  @Input("offset-y")
  private offsety:number;

  @Input("width")
  private width:number;

  @Input("height")
  private height:number;

  @Output("setSpriteOutput")
  private setSpriteOutputEE=new EventEmitter<void>();

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

  setSprite():void {
    this.setSpriteOutputEE.emit();
  }

}
