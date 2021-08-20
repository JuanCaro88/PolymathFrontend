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

  public createRestaurant( values:any, file: any ) {
    const formData: FormData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('address', values.address);
    formData.append('city', values.city);
    formData.append('image', file, file.name);

    return this.http.post(`${EndPointServer}/restaurant`, formData)
  }
}
