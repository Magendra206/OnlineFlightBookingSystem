import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../userservic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User[] = [];
  currentUser: User = new User();
  loginForm!: FormGroup;

  name!: FormControl;
  email!: FormControl;

  showErrorMessage = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    // this.role = new FormControl('customer');
    this.loginForm = new FormGroup(
      {
        'name': this.name,
        'email': this.email,
        // 'role': this.role,
      }
    );

  }
  onSubmit()
  {
      this.userLogin();
  } 

  userLogin()
  {
    this.userService.getAllUsers().subscribe(data => 
      {
        this.user = data;

        this.user.forEach(user => 
          {
            if (user.name == this.loginForm.get('name')!.value)
            {
              if (user.email == this.loginForm.get('email')!.value)
                this.currentUser = user;
            }
          });

        if (this.currentUser == null)
          this.showErrorMessage = true;
        else
          this.router.navigate(['users',this.currentUser.phone_no]);
        
      });

    this.showErrorMessage = false;
  }

}
