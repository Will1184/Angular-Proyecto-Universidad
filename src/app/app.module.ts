import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { AulasComponent } from './aulas/aulas.component';
import { PabellonesComponent } from './pabellones/pabellones.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent, ProfesoresComponent, EmpleadosComponent, CarrerasComponent, AulasComponent, PabellonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
