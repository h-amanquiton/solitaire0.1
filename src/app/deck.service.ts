import { Card } from './card';
import { Deck } from './deck';
import { Injectable } from '@angular/core';

const numRank = 13;
const numSuit = 4;

@Injectable({
  providedIn: 'root'
})


export class DeckService {
 mainDeck: Deck = new Deck();

  constructor() { }

  generateDeck() {
    for (let s = 0; s < numSuit; s++) {
      for ( let r =0; r < numRank; r++) {
        let card = new Card (r, s);
        this.mainDeck.addCardToDeck(card);
        

      }
    }
  }
  
}
