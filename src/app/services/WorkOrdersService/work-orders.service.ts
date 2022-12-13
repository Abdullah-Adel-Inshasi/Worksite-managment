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
        progress: 0,
        creationDate: '',
        endDate: '',
        operationDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        startDate: '',
      },
      workItems: [
        {
          id: 0,
          description:
            ' RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR v RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR ',
          location: 'Roof',
          progress: 40,
        },
        {
          id: 1,
          description:
            ' RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR v RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR ',
          location: 'Second Floor',
          progress: 44,
        },
        {
          id: 2,
          description:
            ' RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR v RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR ',
          location: 'Tile',
          progress: 0,
        },
        {
          id: 3,
          description:
            ' RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR v RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR ',
          location: 'Tile',
          progress: 75,
        },
        {
          id: 4,
          description:
            ' RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR v RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRR ',
          location: '1st Floor',
          progress: 100,
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
      return [];
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
    return average(...progresses);
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
