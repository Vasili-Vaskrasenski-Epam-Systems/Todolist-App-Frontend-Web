export interface Task {
  id: number;
  projectId: number;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  dueDate: Date;
  createdAt: Date;
}

export class Task implements Task {
  constructor(
    public id: number,
    public projectId: number,
    public title: string,
    public description: string,
    public status: 'TODO' | 'IN_PROGRESS' | 'DONE',
    public dueDate: Date,
    public createdAt: Date
  ) {}
}