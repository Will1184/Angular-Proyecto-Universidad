import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private urlAulas ='http://localhost:8090/aulas';

  constructor(private http:HttpClient) {}

  public findAulas():Observable<any>{
    return this.http.get<any>(this.urlAulas);
  }
}
