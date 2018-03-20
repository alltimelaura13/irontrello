import { CardService } from './../../shared/services/card.service';
import { Card } from './../../shared/model/card.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() card: Card;

  constructor(public activeModal: NgbActiveModal, private cardService: CardService) { }

  onSubmit() {
    this.isNewCard() ? this.createCard() : this.updateCard();
  }

  getTitle(): string {
    return this.isNewCard() ? 'New Card' : 'Edit Card';
  }

  private isNewCard() {
    return this.card.id === undefined;
  }

  private createCard() {
    this.cardService.create(this.card)
      .subscribe(() => {
        this.card = new Card();

        this.activeModal.close();
      });
  }

  private updateCard() {
    this.cardService.update(this.card).subscribe(() => {
      this.card = new Card();

      this.activeModal.close();
    });
  }
}
