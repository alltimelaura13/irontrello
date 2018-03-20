import { Card } from "./card.model";

export class List {

  constructor(public title: string, public cards: Array<Card> = []) {}

  addCard(card: Card): Array<Card> {
    this.cards.push(card);
    this.sortCards();

    return this.cards;
  }

  private sortCards() {
    return this.cards;
  }
}
