import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NumwordComponent } from './numword.component';
import { NumwordPipe } from './numword.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ NumwordComponent, NumwordPipe
  ],
  providers: [],
  bootstrap: [NumwordComponent]
})
export class AppModule { }
