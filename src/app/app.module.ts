import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckService } from './deck.service';
import { GameInitializeService } from './game-initialize.service';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DeckService,
    GameInitializeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
