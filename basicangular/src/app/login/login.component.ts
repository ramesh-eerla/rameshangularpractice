import { Component, OnInit } from '@angular/core';
import { FectchstatesService } from '../fectchstates.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Username: String = '';
  Password: String = '';
  disply: Boolean = false;
  categoies: any[] = [];

  constructor(private servie: FectchstatesService) { }

  ngOnInit() {
    this.servie.getStates().subscribe((response) => {
      console.log(response);
      this.categoies = response.categories;
    });
  }

  loadUsername(event: Event) {
    this.disply = false;
    this.Username = (<HTMLInputElement>event.target).value;
  }

  loadPassword(event: Event) {
    this.disply = false;
    this.Password = (<HTMLInputElement>event.target).value;
  }
  onClick() {
    this.disply = true;
  }
}
