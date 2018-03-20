import { CardService } from './../../shared/services/card.service';
import { Component } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../shared/model/user.model';
import { SessionService } from '../../shared/services/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  modal: NgbModalRef;
  user: User = new User();

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private sessionService: SessionService,
    private cardService: CardService
  ) { }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  onSubmit(form: NgForm) {
    this.sessionService.create(this.user)
      .subscribe(() => {
        this.cardService.index().subscribe();
        this.modal.close();
      });
  }

}
