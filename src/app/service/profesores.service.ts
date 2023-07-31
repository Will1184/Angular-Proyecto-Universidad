import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private urlProfesores='http://localhost:8090/profesores';
  constructor(private http:HttpClient) { }
  public findProfesores():Observable<any>{
    return this.http.get<any>(this.urlProfesores);
  }
}
