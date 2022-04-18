import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './airport/airport.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
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
  {path :'home',component:HomeComponent},
  {path :'user-details',component:UserDetailsComponent},
  {path: 'users/:phone_no', component: UserDetailsComponent},
  {path: 'flight-details',component:FlightDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
