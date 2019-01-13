import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'no-completadas',
  templateUrl: './no-completadas.component.html',
  styleUrls: ['./no-completadas.component.css']
})
export class NoCompletadasComponent implements OnInit {
  @Input() arrData: Array<object>;
  @Output() taskIncomplete = new EventEmitter();
  @Output() taskComplete = new EventEmitter();
  @Output() allTasks = new EventEmitter();
  tareasSinHacer(id) {
    this.taskIncomplete.emit(id);
  }
  tareasHechas(id) {
    this.taskComplete.emit(id);
  }
  todasTareas() {
    this.allTasks.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
