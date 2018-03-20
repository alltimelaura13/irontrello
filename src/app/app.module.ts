import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';

import { CardService } from './shared/services/card.service';
import { HttpModule } from '@angular/http';
import { SessionService } from './shared/services/session.service';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    HeaderComponent,
    ListComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [CardService, SessionService],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
