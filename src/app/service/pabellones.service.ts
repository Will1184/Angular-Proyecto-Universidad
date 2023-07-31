import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PabellonesService {
  private urlEmpleados='http://localhost:8090/pabellones';

  constructor(private http:HttpClient) { }
  public findPabellones():Observable<any>{
   return  this.http.get<any>(this.urlEmpleados);
  }
}
