import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';
import { FlightService } from '../flightservice.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  [x: string]: any;

  
  flights : Flight[] = [];

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.reloadFlightData();
  }

  reloadFlightData(){
    this.flightService.getAllFlight().subscribe(
      data=>{
        this.flights= data;
      }
    )
     
  }

}

