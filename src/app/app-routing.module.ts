import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlumnosComponent} from "./alumnos/alumnos.component";
import {AulasComponent} from "./aulas/aulas.component";
import {CarrerasComponent} from "./carreras/carreras.component";

const routes: Routes = [
  { path:'alumnos',component: AlumnosComponent},
  { path:'aulas',component: AulasComponent},
  {path:'carreras',component:CarrerasComponent},
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
