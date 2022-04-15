import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8084/flight/flightlist';

  getAllFlight():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  } 

}