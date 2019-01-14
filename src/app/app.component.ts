import { Component } from '@angular/core';
import { Task } from './task.interface';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Array<Task> = JSON.parse(localStorage.getItem('tareas')) || [];
  tasks: Array<Task> = this.tareas;
  // tslint:disable-next-line:no-inferrable-types
  text: string = '';
  nuevaTarea(text) {
    const crearTarea: Task = { text, id: Date.now(), completada: false };
    this.tareas.push(crearTarea);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log(this.tareas);
  }
  tasksIncomplete() {
    this.tasks = this.tareas.filter(tarea => tarea.completada === false);
  }
  tasksComplete() {
    this.tasks = this.tareas.filter(tarea => tarea.completada === true);
  }
  allTask() {
    this.tasks = this.tareas;
  }
  buscarTarea(text: string) {
    this.text = text;
    this.tasks = this.tareas.filter(tarea => tarea.text.match(this.text));
  }
  newTasksComplete() {
    console.log('funcion padre');
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}
