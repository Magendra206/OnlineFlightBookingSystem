import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FlightComponent } from './flight/flight.component';
import { AirportComponent } from './airport/airport.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//  import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    FlightComponent,
    AirportComponent,
    FlightBookingComponent,
    FlightDetailsComponent,
    FlightsComponent,
    UserComponent,
    ForgetPasswordComponent,
    HomeComponent,
    UserDetailsComponent,
    UpdateFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
