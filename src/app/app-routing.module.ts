import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantAdministrationComponent } from './components/restaurant-administration/restaurant-administration.component';

const routes: Routes = [
  { path : 'restaurant', component : RestaurantAdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
