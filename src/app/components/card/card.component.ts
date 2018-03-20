import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './../form/form.component';
import { Component, Input } from '@angular/core';
import { Card } from '../../shared/model/card.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;

  constructor(private cardService: CardService, private modalService: NgbModal) {}

  onDelete() {
    this.cardService.delete(this.card).subscribe();
  }

  onEdit() {
    const modalRef = this.modalService.open(FormComponent);

    modalRef.componentInstance.card = Object.assign({}, this.card);
  }
}
