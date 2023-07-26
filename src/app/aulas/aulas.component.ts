import {Component, OnInit} from '@angular/core';
import {AulasService} from "../service/aulas.service";

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit{
  aulas:any[] = [];

  constructor(private aulaService:AulasService) {
  }
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.aulaService.findAulas().subscribe(aulas => {
      this.aulas = aulas.datos;
      console.log(this.aulas);
    }
    )
  }

}
