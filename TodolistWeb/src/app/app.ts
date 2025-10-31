import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects-component/projects.componenet';
import { TasksComponent } from './components/tasks-component/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TodolistWeb');

  protected selectedProjectId = signal<number | null>(null);

  onProjectSelected(projectId: number) {
    this.selectedProjectId.set(projectId);
  }
}
