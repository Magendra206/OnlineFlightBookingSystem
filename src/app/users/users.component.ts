import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../userservic.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //  roles = ['user'];

  registerForm!: FormGroup;

  name!: FormControl;
  email!: FormControl;
  address!: FormControl ;
  phone_no!: FormControl ;
  // password: FormControl;
  // role: FormControl;
  // foodSpecialization: FormControl;

  formSubmitted = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {

    this.name = new FormControl('', Validators.required);
    // this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.phone_no = new FormControl('', [Validators.required, Validators.minLength(10)]);
    // this.role = new FormControl('customer');
    // this.foodSpecialization = new FormControl('', Validators.required);

    this.registerForm = new FormGroup(
      {
        'name': this.name,
        // 'lastName': this.lastName,
        'email': this.email,
        'address': this.address,
        'phone_no': this.phone_no,
        // 'role': this.role,
        // 'foodSpecialization': this.foodSpecialization
      }
    );

  }
  onSubmit()
  {
      this.addUser(this.registerForm.value);
    // else
    // {
    //   this.addVendor(this.registerForm.value);
    // }
  }

  addUser(user: User)
  {
    this.userService.addUser(user)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

  // addVendor(vendor: Vendor)
  // {
  //   this.vendorService.addVendor(vendor)
  //   .subscribe(data => {
  //     console.log(data)
  //   },
  //   error => console.log(error));

  //   this.formSubmitted = true;
  // }

}
