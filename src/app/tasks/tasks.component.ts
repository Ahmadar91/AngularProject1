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

    tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      },
    ]

    get selectedUserTasks() {
      return this.tasks.filter(task => task.userId === this.userId);
    }

    onCompleteTask(taskId: string) {
      //this.tasks.splice(this.tasks.findIndex(task => task.id === taskId), 1);
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCancelAddTask() {
      this.isAddingTask = false;
    }

    onAddTask(taskData: NewTaskData ) {
      this.tasks.push({
        id: Math.random().toString(),
        userId: this.userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      });
      this.isAddingTask = false;
    }
}
