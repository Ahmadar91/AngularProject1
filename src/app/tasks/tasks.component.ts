import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { Component, Input, Output,EventEmitter, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
    @Input({required:true}) userId!: string;
    @Input({required:true}) name! : string ;
    isAddingTask : boolean = false;


  constructor(private TasksService: TasksService) {

  }
    get selectedUserTasks() {
      return this.TasksService.getSelectedUserTasks(this.userId);
    }

    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCloseAddTask() {
      this.isAddingTask = false;
    }

    onAddTask(taskData: NewTaskData ) {
      this.TasksService.addTask(taskData, this.userId);
      this.isAddingTask = false;
    }
}
