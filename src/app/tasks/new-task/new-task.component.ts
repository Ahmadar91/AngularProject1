import { TasksService } from './../tasks.service';
import { Component, Output, EventEmitter, signal, output, inject, Input,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  //@Output() add = new EventEmitter<{title: string, summary: string, dueDate: string}>();
  TasksService = inject(TasksService);

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  task = {title: '', summary: '', dueDate: ''};
  onCancel() {
    this.close.emit();
  }
  onSubmit(){
    this.TasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
