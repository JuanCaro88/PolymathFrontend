import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndPointServer } from '../global.config';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAdministrationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  public getRestaurant() {
    return this.http.get(`${EndPointServer}/restaurant`, this.httpOptions)
  };
}
