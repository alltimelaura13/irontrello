import { Card } from '../model/card.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class CardService {

  private endpoint = `${environment.api}/cards`;

  private defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private defaultOptions: RequestOptions = new RequestOptions({
    headers: this.defaultHeaders,
    withCredentials: true
  });

  private cards: Array<Card>;
  private cardsSubject = new Subject<Array<Card>>();

  // Observable string streams
  cards$: Observable<Array<Card>> = this.cardsSubject.asObservable();

  constructor(private http: Http) { }

  index(): Observable<Array<Card>> {
    return this.http.get(this.endpoint, this.defaultOptions)
      .map((res: Response) => {
        this.cards = res.json();

        this.cardsSubject.next(this.cards);

        return this.cards;
      })
      .catch(error => this.handleError(error));
  }

  create(card: Card): Observable<Card> {
    return this.http.post(this.endpoint, JSON.stringify(card), this.defaultOptions)
      .map((res: Response) => {
        const newCard: Card = res.json();

        this.cards.push(newCard);
        this.cardsSubject.next(this.cards);

        return card;
      })
      .catch(error => this.handleError(error));
  }

  delete(card: Card): Observable<any> {
    return this.http.delete(`${this.endpoint}/${card.id}`, this.defaultOptions)
      .map((res: Response) => {
        this.cards = this.cards.filter(c => card.id !== c.id);
        this.cardsSubject.next(this.cards);
      })
      .catch(error => this.handleError(error));
  }

  update(card: Card): Observable<Card> {
    return this.http.put(`${this.endpoint}/${card.id}`, JSON.stringify(card), this.defaultOptions)
      .map((res: Response) => {
        this.cards = this.cards.map(c => c.id === card.id ? card : c );

        this.cardsSubject.next(this.cards);
      })
      .catch (error => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(`Phone Service error: ${error.json()}`);
    }
    return Observable.throw(error.json());
  }

}
