import {Component, OnInit} from '@angular/core';
import {CarrerasService} from "../service/carreras.service";

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit{
  carreras:any[]=[]
  constructor(private carrerasService:CarrerasService) {
  }
  ngOnInit(): void {
    this.llenarDatos();
  }
  llenarDatos(){
    this.carrerasService.findCarreras().subscribe(carrera=>{
      this.carreras=carrera.datos;
      console.log(this.carreras);
    })
  }

}
