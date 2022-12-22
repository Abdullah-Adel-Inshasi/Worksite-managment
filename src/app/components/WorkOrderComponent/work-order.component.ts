import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateDiffInDays } from 'src/app/helpers/utils';
import { UserService } from 'src/app/services/UserService/user.service';
import { WorkOrdersService } from 'src/app/services/WorkOrdersService/work-orders.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css'],
})
export class WorkOrderComponent implements OnInit {
  userType!: UserType;
  average!: number;
  @Input() workOrder?: WorkOrder;
  daysLeftEstimation!: number;
  tasksStatus = { toDo: 0, inProgress: 0, finished: 0 };

  constructor(
    private userService: UserService,
    public workOrdersService: WorkOrdersService,
    private router: Router
  ) {}

  populateVariables() {
    this.userType = this.userService.user!;
    this.average = this.workOrdersService.getTotalProgress(
      this.workOrder?.workItems!
    );
    this.daysLeftEstimation = dateDiffInDays(
      new Date(this.workOrder!.header.startDate),
      new Date(this.workOrder!.header.endDate)
    );
  }
  populateTaskStatuses = () => {
    this.workOrder!.workItems.forEach((workItem) => {
      if (workItem.progress === 0) {
        this.tasksStatus.toDo += 1;
      } else if (workItem.progress > 0 && workItem.progress < 100) {
        this.tasksStatus.inProgress += 1;
      } else if (workItem.progress === 100) {
        this.tasksStatus.finished += 1;
      } else {
        console.log('This work Item has an invalid progress value');
      }
    });
  };

  ngOnInit(): void {
    if (!this.userService.user) {
      this.router.navigateByUrl('login', { replaceUrl: true });
      return;
    }

    if (!this.workOrder) {
      this.router.navigateByUrl('404/errorHasOccurred');
      return;
    }

    this.populateVariables();
    this.populateTaskStatuses();
  }
}
