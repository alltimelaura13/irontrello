import { User } from '../model/user.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService {
  private defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private defaultOptions: RequestOptions = new RequestOptions({
    headers: this.defaultHeaders,
    withCredentials: true
  });

  private endpoint = `${environment.api}/session`;

  user: User;

  constructor(private http: Http) { }

  create(user: User): Observable<User> {
    return this.http.post(this.endpoint, JSON.stringify(user), this.defaultOptions)
      .catch(this.handleError);
  }

  destroy(): Observable<void> {
    return this.http.delete(this.endpoint, this.defaultOptions)
      .catch (this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(`Phone Service error: ${error.json()}`);
    }

    return Observable.throw(error.json());
  }

}
