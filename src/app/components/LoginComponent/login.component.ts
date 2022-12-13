import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';
import { UserType } from 'src/app/types/WorkOrder';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  logIn(user: UserType) {
    this.userService.setUser(user);
    this.router.navigateByUrl('dashboard');
  }

  ngOnInit(): void {}
}
