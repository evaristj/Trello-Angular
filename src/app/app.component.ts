import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Array<Task> = [{ text: 'prueba', id: 1, completada: false }];
  // JSON.parse(localStorage.getItem('tareas')) || [];
  nuevaTarea(text) {
    const crearTarea: Task = { text, id: Date.now(), completada: false};
    this.tareas.push(crearTarea);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log(this.tareas);
  }
}
