import {Component, OnInit} from '@angular/core';
import {PabellonesService} from "../service/pabellones.service";

@Component({
  selector: 'app-pabellones',
  templateUrl: './pabellones.component.html',
  styleUrls: ['./pabellones.component.css']
})
export class PabellonesComponent implements OnInit{
   pabellones:any[]=[];
  constructor(private pabellonesService:PabellonesService) {
  }
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.pabellonesService.findPabellones().subscribe(pabellon=>{
      this.pabellones=pabellon.datos;
      console.log(this.pabellones);

    });
  }

}
