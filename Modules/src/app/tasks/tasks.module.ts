import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent
  ],
  imports: [
  SharedModule,
  CommonModule,
  FormsModule
  ],
  exports: [
    TasksComponent,
   ]
})
export class TasksModule {

}
