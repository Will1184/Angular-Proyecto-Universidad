import {Component, OnInit} from '@angular/core';
import {AlumnosService} from "../service/alumnos.service";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  alumnos:any[] = [];
  constructor(private alumnosService:AlumnosService){
  }
  ngOnInit(): void {
    this.llenarData()
  }
  llenarData(){
    this.alumnosService.findAlumnos().subscribe(data =>{
      this.alumnos = data.datos;
      console.log(this.alumnos);
    })
  }
}


