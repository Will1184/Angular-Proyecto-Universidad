import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlumnosComponent} from "./alumnos/alumnos.component";
import {AulasComponent} from "./aulas/aulas.component";
import {CarrerasComponent} from "./carreras/carreras.component";
import {EmpleadosComponent} from "./empleados/empleados.component";
import {PabellonesComponent} from "./pabellones/pabellones.component";
import {ProfesoresComponent} from "./profesores/profesores.component";

const routes: Routes = [
  { path:'alumnos',component: AlumnosComponent},
  { path:'aulas',component: AulasComponent},
  {path:'carreras',component:CarrerasComponent},
  {path:'empleados',component:EmpleadosComponent},
  {path:'pabellones',component:PabellonesComponent},
  {path:'profesores',component:ProfesoresComponent},
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
