import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class UserService {
    [x: string]: any;

    constructor(private http:HttpClient) { }
  
    private baseUrl = 'http://localhost:8084/user';
  
    getAllUsers():Observable<any>{
      return this.http.get(`http://localhost:8084/user/userlist`);
    } 
    addUser(user: Object): Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`, user);
  }
  getUser(phone_no: number): Observable<any>
  {
    return this.http.get(`http://localhost:8084/user/userlist/${phone_no}`);
  }

  }