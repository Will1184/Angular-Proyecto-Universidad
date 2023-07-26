import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private urlAlumnos ='https://rickandmortyapi.com/api/character/1,183';
  
  constructor(private http:HttpClient) {}

    public getAlumnos():Observable<any>{
      return this.http.get<any>(this.urlAlumnos);
    }
  
}