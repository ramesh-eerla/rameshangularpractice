import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  constructor(public messageservice: MessageService) { }

  ngOnInit() {
  }

}
