import { Component, OnInit } from '@angular/core';
import { List } from '../../shared/model/list.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: Array<List> = [
    new List('ToDo'),
    new List('Work In Progress'),
    new List('Done')
  ];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.index().subscribe();
  }
}
