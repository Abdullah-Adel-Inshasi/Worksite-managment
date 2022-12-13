import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
import { WorkOrdersService } from 'src/app/services/WorkOrdersService/work-orders.service';
import { UserType, WorkOrder } from 'src/app/types/WorkOrder';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css'],
})
export class WorkOrderComponent implements OnInit {
  userType!: UserType;
  average!: number;
  @Input() workOrder?: WorkOrder;
  estimatedTime!: number;
  constructor(
    private userService: UserService,
    public workOrdersService: WorkOrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userService.user) {
      this.userType = this.userService.user;
      this.average = this.workOrdersService.getTotalProgress(
        this.workOrder?.workItems!
      );
      this.estimatedTime =
        Number(this.workOrder?.header.endDate.split('-')[2]) -
        Number(this.workOrder?.header.startDate.split('-')[2]);
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
