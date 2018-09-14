import { Card } from './card';
export class Deck {
    cards: Card[] = [];

    constructor(){

    }

    addCardToDeck(card: Card): void{
        this.cards.push(card);
    }

    appendCardToDiv(card: Card): void{
        let deckGame = document.getElementById('decko');
        let cardDiv = card.cardImg;
        deckGame.appendChild(cardDiv);
    }

    removeTopCard(): Card{
       return this.cards.pop();
    }
}