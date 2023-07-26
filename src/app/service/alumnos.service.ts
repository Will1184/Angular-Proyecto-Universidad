import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private urlAlumnos ='http://localhost:8090/alumnos';

  constructor(private http:HttpClient) {}

    public findAlumnos():Observable<any>{
      return this.http.get<any>(this.urlAlumnos);
    }

}
