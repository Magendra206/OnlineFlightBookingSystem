import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../userservic.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  [x: string]: any;
  
  user : User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.reloadUsersData();
  }

  reloadUsersData(){
    this.userService.getAllUsers().subscribe(
      data=>{
        this.user= data;
      }
    )
     
  }

 

}
