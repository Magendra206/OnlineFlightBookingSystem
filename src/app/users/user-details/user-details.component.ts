import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/userservic.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  [x: string]: any;
  phone_no: number=0;
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user=new User();
        this.route.snapshot.paramMap.get('phone_no');

    this.userService['getUser'](this.phone_no).subscribe((data: User) =>
      {
        console.log(data);
        this.user = data;
      }, (error: any) => console.log(error));
  }
  backToPortal()
  {
    this.router.navigate(['users',this.phone_no]);
  }

  goUpdate()
  {
    this.router.navigate(['user',this.phone_no,'details','update']);
  }

}
