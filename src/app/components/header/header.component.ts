import { Card } from './../../shared/model/card.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sessionService: SessionService, private modalService: NgbModal) { }

  onNewCard() {
    const modalRef = this.modalService.open(FormComponent);

    modalRef.componentInstance.card = new Card();
  }

}
