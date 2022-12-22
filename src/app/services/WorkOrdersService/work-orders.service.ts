import { Injectable } from '@angular/core';
import { average } from 'src/app/helpers/utils';
import { WorkItem, WorkOrder } from 'src/app/types/WorkOrder';
@Injectable({
  providedIn: 'root',
})
export class WorkOrdersService {
  workOrders: WorkOrder[] = [
    {
      header: {
        id: 1,
        creationDate: '2022-01-01',
        startDate: '2022-01-02',
        endDate: '2022-01-03',
        progress: 50,
        operationDescription: 'Repair the roof',
      },
      workItems: [
        {
          description: 'Replace damaged tiles',
          location: 'Roof',
          progress: 75,
          id: 1,
        },
        {
          description: 'Fix leak in the roof',
          location: 'Roof',
          progress: 25,
          id: 2,
        },
        {
          description: 'Paint the walls',
          location: '1st Floor',
          progress: 50,
          id: 3,
        },
      ],
    },
  ];

  get getWorkOrders() {
    return this.workOrders;
  }

  getWorkItems(headerId: number) {
    try {
      const order = this.workOrders.find(
        (order) => order.header.id === headerId
      );
      if (order?.workItems === undefined) {
        throw new Error('Work Items not found');
      }
      return Array.from([...order.workItems]);
    } catch (error) {
      return undefined;
    }
  }
  updateProgress(headerId: number, workItems: WorkItem[]) {
    this.workOrders = this.workOrders.map((order) => {
      if (order.header.id === headerId) {
        order.workItems = workItems;
        return order;
      }
      return order;
    });
  }

  getTotalProgress(workItems: WorkItem[]): number {
    const progresses = workItems.map((item) => item.progress);
    return +average(...progresses).toFixed(0);
  }

  addWorkItem(workItem: WorkItem, headerId: number) {
    this.workOrders = this.workOrders.map((order) => {
      if (order.header.id === headerId) {
        order.workItems.push(workItem);
        return order;
      }
      return order;
    });
  }

  removeWorkItem(workItemId: number, headerId: number): WorkItem[] | string {
    try {
      const workOrder = this.workOrders.find(
        (order) => order.header.id === headerId
      );
      if (workOrder === undefined) {
        throw new Error('work Order is not found');
      }
      const newItems = workOrder.workItems.filter(
        (workItem) => workItem.id !== workItemId
      );
      if (newItems === undefined || !newItems.length) {
        throw new Error("An order can't have 0 work items ");
      }
      workOrder.workItems = newItems;
      return newItems;
    } catch (error: any) {
      return error.message;
    }
  }

  addWorkOrder(workOrder: any) {
    this.workOrders.push(workOrder);
  }
  constructor() {}
}
