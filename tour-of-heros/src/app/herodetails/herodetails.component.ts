import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.scss']
})
export class HerodetailsComponent implements OnInit {
@Input() hero: Hero;
  constructor(public messageservice: MessageService) {
       }

  ngOnInit() {
      }

}
