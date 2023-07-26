import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private urlEmpleados='http://localhost:8090/empleados';
  constructor(private http:HttpClient) { }

  public findEmpleados():Observable<any>{
    return this.http.get<any>(this.urlEmpleados);
  }
}
