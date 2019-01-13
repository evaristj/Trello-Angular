import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { FormsModule } from '@angular/forms';
import { NoCompletadasComponent } from './no-completadas/no-completadas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    ListadoTareasComponent,
    NoCompletadasComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
