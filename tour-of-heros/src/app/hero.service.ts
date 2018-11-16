import { Injectable, ErrorHandler } from '@angular/core';
import {Observable, of } from 'rxjs';
import {catchError, map , tap} from 'rxjs/operators';
import { Hero } from './hero';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {MessageService} from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'user-key': '7a085af4d14c3226e6dd9079a38a3767' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private herourl = 'api/heroes';

  fectchurl = 'https://developers.zomato.com/api/v2.1/categories';
  constructor(private httpclient: HttpClient, private messageservice: MessageService) { }
  /** getheros(): Hero[] {

    return Heros;

  }*/
private log (message: String) {
  this.messageservice.add('message ${message}');
}

getHeros(): Observable<any> {
  this.messageservice.add('Heroserice : Data feteched');
    return this.httpclient.get(this.fectchurl, { headers: httpOptions.headers }).
   pipe(tap(_ => this.log('fetched heroes')),
  catchError(this.handleError('getHeroes', [])));
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
     // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
     // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
     // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
