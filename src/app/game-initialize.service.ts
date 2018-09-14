import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';

const maxCards = 52;
@Injectable({
  providedIn: 'root'
})
export class GameInitializeService {

  constructor(private deckServe: DeckService) {}

  initializeTable() {
    this.deckServe.generateDeck();
    let deck= this.deckServe.mainDeck;
    for ( let i = 0; i < maxCards; i++) {

      let currentTopCard = deck.removeTopCard();
      deck.appendCardToDiv(currentTopCard);
    }
    
  
  }

}
