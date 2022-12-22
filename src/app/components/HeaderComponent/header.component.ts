import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = this.userService.user
    ? `You're a logged in as a ${this.userService.user}`
    : `You're not logged in`;
  constructor(
    public userService: UserService,
    private router: Router,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
  login() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
  ngOnInit(): void {}
}
