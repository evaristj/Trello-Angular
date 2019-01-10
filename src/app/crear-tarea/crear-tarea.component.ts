import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {
  @Output() insertarTarea = new EventEmitter;
  newTareaTxt = '';
  handleKeyUp(ev) {
    this.newTareaTxt = ev.target.value.trim();
    if (ev.keyCode === 13 && this.newTareaTxt.trim() !== '') {
      console.log('tarea añadida: ' + this.newTareaTxt);
      this.insertarTarea.emit(this.newTareaTxt);
      ev.target.value = '';
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
