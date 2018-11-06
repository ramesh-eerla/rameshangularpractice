import { Injectable } from '@angular/core';
import {Observable, of, from} from 'rxjs';
import { Hero } from './hero';
import {Heros} from './mockheros';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice: MessageService) { }
  /** getheros(): Hero[] {

    return Heros;

  }*/
getHeros(): Observable<Hero[]> {
  this.messageservice.add('Heroserice : Data feteched');
  return of(Heros);
}

}
