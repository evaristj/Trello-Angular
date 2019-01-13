import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  @Input() arrData: Array<object>;
  eliminarTarea(tarea) {
    const posicion = this.arrData.indexOf(tarea);
    this.arrData.splice(posicion, 1);
    localStorage.setItem('tareas', JSON.stringify(this.arrData));
    console.log(this.arrData);
  }
  constructor() {
  }

  ngOnInit() {
    console.log(this.arrData);
  }

}
