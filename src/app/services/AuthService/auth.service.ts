import { Injectable } from '@angular/core';
import { UserService } from '../UserService/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setUser(user: UserType) {
    this.userService.user = user;
  }
  logOut() {
    this.userService.user = null;
  }
  constructor(private userService: UserService) {}
}
