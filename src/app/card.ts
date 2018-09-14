export class Card {
    suit: number;
    rank: number;
    isColorRed: boolean;
    isFaceUp: boolean;

    constructor(rank: number, suit: number) {
        this.rank = rank;
        this.suit = suit;
    }

    get cardImg(){
        let cardDiv = document.createElement('div');
        let suit = this.suit;
        let rank = this.rank;
        cardDiv.className = "card";
        cardDiv.id = suit + "-" + rank;
        cardDiv.style.backgroundImage = "url('./assets/" + cardDiv.id + ".JPG')";
        cardDiv.style.backgroundSize = "cover";
        cardDiv.style.height = "90px";
        cardDiv.style.width = "60px";
        cardDiv.style.cssFloat = "left";
        cardDiv.style.border = "1px solid green";
        cardDiv.style.padding = "5px 5px 5px";
        cardDiv.style.position = "absolute";
        return cardDiv;
    }

    getSuit(){
        return this.suit;
    }
    getRank(){
        return this.rank;
    }
 
} 