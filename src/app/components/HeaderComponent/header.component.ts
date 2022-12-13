import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public userService: UserService, private router: Router) {}

  logOut() {
    this.userService.logOut();
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
  login() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
  ngOnInit(): void {}
}
