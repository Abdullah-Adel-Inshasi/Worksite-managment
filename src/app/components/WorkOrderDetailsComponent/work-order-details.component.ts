import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrdersService } from 'src/app/services/WorkOrdersService/work-orders.service';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.css'],
})
export class WorkOrderDetailsComponent implements OnInit {
  workItems!: WorkItem[];
  workOrderId = this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
    private workOrdersService: WorkOrdersService,
    private router: Router,
    public userService: UserService,
    private location: Location
  ) {}

  save() {
    this.workOrdersService.updateProgress(
      Number(this.workOrderId),
      this.workItems
    );
    this.location.back();
  }

  removeWorkItem(workItemId: number) {
    const result = this.workOrdersService.removeWorkItem(
      workItemId,
      Number(this.workOrderId)
    );
    if (typeof result === 'string') {
      alert(result);
    } else {
      this.workItems = result;
    }
  }

  ngOnInit(): void {
    if (this.workOrderId === null) {
      this.router.navigateByUrl('/404');
      return;
    }
    if (this.userService.user === null) {
      this.router.navigateByUrl('login');
      return;
    }

    const workItems = this.workOrdersService.getWorkItems(+this.workOrderId!);
    if (workItems === undefined) {
      this.router.navigateByUrl('/404/orderNotFound');
      return;
    }

    this.workItems = [...workItems];
  }
}
