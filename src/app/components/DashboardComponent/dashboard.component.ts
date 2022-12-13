import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';
import { UserType } from 'src/app/types/WorkOrder';
import { Router } from '@angular/router';
import { WorkOrdersService } from 'src/app/services/WorkOrdersService/work-orders.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userType!: UserType | null;
  constructor(
    private userService: UserService,
    private router: Router,
    public workOrdersService: WorkOrdersService
  ) {}

  addWorkItem() {}

  ngOnInit(): void {
    if (!this.userService.user) {
      this.router.navigateByUrl('login');
    } else {
      this.userType = this.userService.user;
    }
  }
}
