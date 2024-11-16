
export interface Task {
  id: number;
  status: 'Not Started' | 'In Progress' | 'Completed';
  title: string;
  description: string;
  dueDate: string | null; // Allow null
  dueTime: string | null; // Allow null
}
