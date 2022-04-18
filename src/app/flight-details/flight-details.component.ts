import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Flight';
import { FlightService } from '../flightservice.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flightId!:number;
  flight!:Flight;

constructor(private route:ActivatedRoute,private router:Router
  ,private flightService:FlightService) { }

ngOnInit(): void {
  this.flight = new Flight();
   this.flightId = this.route.snapshot.params['id'];
   this.flightService['getFlight'](this.flightId).
   subscribe((selectedFlight: Flight)=>{
      console.log(selectedFlight);
      this.flight = selectedFlight;
   },(error: any)=>console.log(error));
}
goToFlightList(){
    this.router.navigate(['flight']);
}

}
