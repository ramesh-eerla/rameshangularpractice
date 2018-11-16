import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heroname = 'Ramesh';
  twowarvalu: String = 'enter name';
  heroes: Hero[] = [];
  hero: Hero = {
      id: 1,
      name: 'Android',
        };
  selectedhero: Hero ;
onselect(heross: Hero) {
this.selectedhero = heross;
this.messageserice.add(this.selectedhero.name + '   ' + this.selectedhero.id);
}

  constructor(private heroservice: HeroService, public messageserice: MessageService) { }

  getHeros(): void {
      this.heroservice.getHeros().subscribe(heroes => { this.heroes = heroes['categories'] ; console.log(this.heroes); });
    }
  ngOnInit() {
    this.getHeros();
     }

}
