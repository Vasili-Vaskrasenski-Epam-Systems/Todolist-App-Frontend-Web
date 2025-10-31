import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/taskService';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  projectId = input<number | null>();
  protected tasks = signal<Task[]>([]);

  constructor(private taskService: TaskService) {}

  ngOnChanges() {
    if (this.projectId()) {
      const tasksArray: Task[] = [
        { id: 1, projectId: 1, title: "Task 1", description: "Description 1", status: "TODO", dueDate: new Date(), createdAt: new Date() },
        { id: 2, projectId: 2, title: "Task 2", description: "Description 2", status: "TODO", dueDate: new Date(), createdAt: new Date() },
        { id: 3, projectId: 3, title: "Task 3", description: "Description 3", status: "TODO", dueDate: new Date(), createdAt: new Date() }
      ];
      this.tasks.set(tasksArray);
      // this.taskService.getTasksByProject(this.projectId()).subscribe(
      //   tasks => this.tasks.set(tasks)
      // );
    }
  }
}