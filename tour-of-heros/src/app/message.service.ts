import { Injectable } from '@angular/core';
import {observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: String [] = [];

  constructor() { }
add (mesage: String) {
  this.messages.push(mesage);
}

clear() {
this.messages = [];
}

}
