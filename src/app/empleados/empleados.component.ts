import {Component, OnInit} from '@angular/core';
import {EmpleadosService} from "../service/empleados.service";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
   empleados:[]=[];
  constructor(private empleadosService:EmpleadosService) {
  }
  ngOnInit(): void {
    this.llenarDatos()
  }
  llenarDatos(){
    this.empleadosService.findEmpleados().subscribe(empleado=>{
      this.empleados=empleado.datos;
      console.log(this.empleados);
    })
  }

}
