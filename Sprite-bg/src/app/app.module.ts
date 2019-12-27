import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpriteBgDirective } from './spritebg.attr.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent, SpriteBgDirective
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
