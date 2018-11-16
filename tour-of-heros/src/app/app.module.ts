import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { MessageComponent } from './message/message.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerodetailsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: true})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
