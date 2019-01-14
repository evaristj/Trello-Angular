import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  @Input() arrData: Array<object>;
  @Output() arrTasksComplete = new EventEmitter();
  eliminarTarea(tarea) {
    const posicion = this.arrData.indexOf(tarea);
    this.arrData.splice(posicion, 1);
    localStorage.setItem('tareas', JSON.stringify(this.arrData));
    console.log(this.arrData);
  }
  arrTaskComplete() {
    console.log('inicio funcion nuevo array tareas');
    this.arrTasksComplete.emit();
    console.log('fin funcion nuevo array tareas');
  }
  constructor() {
  }

  ngOnInit() {
    console.log(this.arrData);
  }

}
