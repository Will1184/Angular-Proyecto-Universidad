import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  private urlCarreras='http://localhost:8090/carreras';

  constructor(private http:HttpClient) { }
  public findCarreras():Observable<any>{
    return this.http.get<any>(this.urlCarreras);
  }
}
