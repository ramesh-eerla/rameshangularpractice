import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
        {id: 10 , name: 'Ramesh'},
        {id: 11 , name: 'Suresh'},
        {id: 12 , name: 'Naresh'},
        {id: 13 , name: 'Mahesh'},
        {id: 14 , name: 'Rajesh'},
        {id: 15 , name: 'Veresh'},
        {id: 16 , name: 'Ganesh'},
        {id: 17 , name: 'Mukesh'},
        {id: 18 , name: 'Venkatesh'},
        {id: 19 , name: 'Sarvesh'},
        {id: 20 , name: 'Tesh'},
    ];
    return {heroes};
  }
}
