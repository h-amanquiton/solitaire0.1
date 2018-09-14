import { GameInitializeService } from './game-initialize.service';
import { Component } from '@angular/core';
import { DeckService } from './deck.service';

const maxCards = 52;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solitaire0.1';

  constructor(
    private deck: DeckService,
    private gameInit: GameInitializeService
    ) {}

  ngOnInit() {
    this.gameInit.initializeTable();
  }
 
}
