import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantAdministrationService } from 'src/app/services/restaurant-administration.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createFormRestaurant() {
      return new FormGroup({
        name        : new FormControl('', [ Validators.required ]),
        description : new FormControl('', [ Validators.required ]),
        address     : new FormControl('', [ Validators.required ]),
        city        : new FormControl('', [ Validators.required ])
      })
  };

  public formRestaurant: any;
  public file: any;
  
  constructor( public ngModal: NgbActiveModal, public formBuilder: FormBuilder, private services: RestaurantAdministrationService ) { 
    this.formRestaurant = this.createFormRestaurant();
  }

  ngOnInit(): void {
  }

  onFileChange( event:any ) {
    if ( event.target.files.length > 0 ) {
      this.file = event.target.files[0];
    };
  };

  sendData() {
    this.services.createRestaurant( this.formRestaurant.value, this.file )
      .subscribe( ( response:any ) => {
        console.log(response);
      })
  };

}
