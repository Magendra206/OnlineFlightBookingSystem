import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './airport/airport.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // {path : 'home',component:HomeComponent},
  //  {path:'login',component:LoginComponent},
  //  {path : 'contact',component:ContactUsComponent},
  //  {path : 'employee-details',component:EmployeeDetailsComponent}
  {path : 'users',component:UsersComponent},
  {path :'login',component:LoginComponent},
  {path :'flightbooking',component:FlightBookingComponent},
  {path :'airport',component:AirportComponent},
  {path :'flight',component:FlightComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
