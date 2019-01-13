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
  tareasSinHacer(id) {
    this.taskIncomplete.emit(id);
  }
  constructor() { }

  ngOnInit() {
    console.log(this.arrData);
  }

}
