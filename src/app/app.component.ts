import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  nuevaTarea(inputText) {
    this.tareas.push(inputText);
  }
}
