import { Component,OnInit } from '@angular/core';
import { AlumnosService } from '../service/alumnos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  data:any[] = [];
   constructor(private alumnosService:AlumnosService){
   }
   ngOnInit(): void {
    this.llenarData()
  }
  llenarData(){
    this.alumnosService.getAlumnos().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }
}

