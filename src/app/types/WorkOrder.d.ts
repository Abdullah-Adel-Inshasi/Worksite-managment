type UserType = 'Site Engineer' | 'Foreman';

interface WorkOrder {
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

interface WorkItem {
  description: string;
  location: LocationTypes;
  progress: number;
  id: number;
}

type LocationTypes = 'Roof' | 'Tile' | '1st Floor' | 'Second Floor';
