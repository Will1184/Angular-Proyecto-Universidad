import {Component, OnInit} from '@angular/core';
import {ProfesoresService} from "../service/profesores.service";

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
   profesores:any[]=[];
  constructor(private profesoresService:ProfesoresService) {
  }
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.profesoresService.findProfesores().subscribe(profesor =>{
      this.profesores=profesor.datos;
      console.log(this.profesores);
    });
  }

}
