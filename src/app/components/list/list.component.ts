import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../shared/model/list.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cards$
      .subscribe((cards) => {
        this.list.cards = cards.filter(card => card.list === this.list.title);
      });
  }
}
