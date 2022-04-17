import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    constructor(private http:HttpClient) { }
  
    private baseUrl = 'http://localhost:8084/user/userlist';
  
    getAllUsers():Observable<any>{
      return this.http.get(`${this.baseUrl}`);
    } 
    addUser(user: Object): Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`, user);
  }

  
  }