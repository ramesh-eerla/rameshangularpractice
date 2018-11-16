import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Myresponse } from './Myresponse';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'user-key': '7a085af4d14c3226e6dd9079a38a3767' })
};

@Injectable({
  providedIn: 'root'
})
export class FectchstatesService {

  fectchurl = 'https://developers.zomato.com/api/v2.1/categories';
  post_url = 'https://reqres.in/api/users';
  constructor(private httpclient: HttpClient) { }

  getStates(): Observable<any> {

    /**const params = new HttpParams().set('name', 'morpheus').set('job', 'leader');*/
    return this.httpclient.get(this.fectchurl,  { headers: httpOptions.headers });
    /**return this.httpclient.post(this.post_url, params, { headers: httpOptions.headers }); */

  }


}
