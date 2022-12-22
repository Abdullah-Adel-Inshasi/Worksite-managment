export type UserType = 'Site Engineer' | 'Foreman';

export interface WorkOrder {
  header: {
    id: number;
    creationDate: string;
    startDate: string;
    endDate: string;
    progress: number;
    operationDescription: string;
  };
  workItems: WorkItem[];
}

export interface WorkItem {
  description: string;
  location: LocationTypes;
  progress: number;
  id: number;
}

export type LocationTypes = 'Roof' | 'Tile' | '1st Floor' | 'Second Floor';
