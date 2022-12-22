import { Injectable } from '@angular/core';
import { UserType } from 'src/app/types/WorkOrder';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserType | null = null;
  constructor() {}
}
