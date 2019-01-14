import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'no-completadas',
  templateUrl: './no-completadas.component.html',
  styleUrls: ['./no-completadas.component.css']
})
export class NoCompletadasComponent {
  @Output() taskIncomplete = new EventEmitter();
  @Output() taskComplete = new EventEmitter();
  @Output() allTasks = new EventEmitter();
  @Output() textoTarea = new EventEmitter();
  text = '';
  tareasSinHacer() {
    this.taskIncomplete.emit();
  }
  tareasHechas() {
    this.taskComplete.emit();
  }
  todasTareas() {
    this.allTasks.emit();
  }
  buscar() {
    this.textoTarea.emit(this.text);
  }

}
