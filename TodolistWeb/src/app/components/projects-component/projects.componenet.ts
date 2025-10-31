import { Component, signal, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/projectService';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  protected projects = signal<Project[]>([]);
  protected selectedProjectId = signal<number | null>(null);
  
  @Output() projectSelected = new EventEmitter<number>();

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects.set(this.getProjects());

    if(this.projects().length > 0)
      this.selectProject(this.projects()[0]);
  }

  selectProject(project: Project) {
    this.selectedProjectId.set(project.id);
    this.projectSelected.emit(project.id);
  }

  private getProjects() : Array<Project> {
       const projectsArray: Project[] = [
        { id: 1, name: "Project 1", description: "Description 1", createdAt: new Date() },
        { id: 2, name: "Project 2", description: "Description 2", createdAt: new Date() },
        { id: 3, name: "Project 3", description: "Description 3", createdAt: new Date() }
    ];
   return projectsArray;
  }
}