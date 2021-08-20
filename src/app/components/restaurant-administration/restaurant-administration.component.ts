import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseBack } from 'src/app/interfaces/response-back';
import { RestaurantAdministrationService } from 'src/app/services/restaurant-administration.service';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.component.html',
  styleUrls: ['./restaurant-administration.component.css']
})
export class RestaurantAdministrationComponent implements OnInit {

  public listRestaurants: any = [];

  constructor( private services : RestaurantAdministrationService, private modal: NgbModal ) { 
  };
  
  ngOnInit( ): void {
    this.getListOfRestaurant();
  };

  getListOfRestaurant() {
    this.services.getRestaurant()
      .subscribe( ( result : any ) => {
        this.listRestaurants = result.status ? result.data : [];
        console.log(this.listRestaurants);
      }, ( error:any ) => {
        this.listRestaurants = [];
      });
  };

  createRestaurant() {
    const modal = this.modal.open(CreateComponent);
    modal.result.then(( result ) => {
      this.getListOfRestaurant();
    }, ( reason ) => {
      this.getListOfRestaurant();
    })
  };

}
