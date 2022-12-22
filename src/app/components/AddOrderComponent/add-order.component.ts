import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { formatDate } from 'src/app/helpers/utils';
import { WorkOrdersService } from 'src/app/services/WorkOrdersService/work-orders.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private workOrderService: WorkOrdersService,
    private router: Router,
    private userService: UserService
  ) {}

  addWorkOrderForm = this.formBuilder.group({
    header: this.formBuilder.group({
      id: [this.workOrderService.workOrders.length + 1],
      creationDate: [new Date()],
      progress: [0],
      operationDescription: [
        '',
        [Validators.required, Validators.minLength(20)],
      ],
      startDate: [formatDate(new Date())],
      endDate: [
        formatDate(new Date(new Date().getTime() + 10 * 25 * 60 * 60 * 1000)),
      ],
    }),
    workItems: this.formBuilder.array<FormGroup>(
      [],
      [Validators.minLength(1), Validators.required]
    ),
  });

  get operationDescription() {
    return this.addWorkOrderForm.get('header.operationDescription');
  }

  get workItems() {
    return this.addWorkOrderForm.get('workItems') as FormArray;
  }
  addOrder() {
    if (!this.addWorkOrderForm.value.workItems?.length) {
      alert('The Work Order must have at least one work Item');
    } else if (!this.addWorkOrderForm.valid) {
      alert('Please fill all fields');
    } else {
      this.workOrderService.addWorkOrder(this.addWorkOrderForm.value);
      this.router.navigateByUrl('dashboard', { replaceUrl: true });
    }
  }

  workItemsControl(i: number) {
    return this.addWorkOrderForm.controls.workItems.controls.at(i);
  }

  addWorkItem() {
    this.workItems.push(
      this.formBuilder.group({
        id: this.workItems.length + 1,
        location: ['1st Floor'],
        description: ['', [Validators.minLength(20), Validators.required]],
        progress: 0,
      })
    );
  }

  deleteWorkItem(index: number) {
    this.workItems.removeAt(index);
  }

  locations: LocationTypes[] = ['1st Floor', 'Roof', 'Second Floor', 'Tile'];
  ngOnInit(): void {
    if (this.userService.user === null || this.userService.user === 'Foreman') {
      this.router.navigateByUrl('login', { replaceUrl: true });
    }
  }
}
