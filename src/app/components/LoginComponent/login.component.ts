import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public userService: UserService,
    private router: Router,
    public authService: AuthService
  ) {}

  logIn(user: UserType) {
    this.authService.setUser(user);
    this.router.navigateByUrl('dashboard');
  }

  ngOnInit(): void {}
}
