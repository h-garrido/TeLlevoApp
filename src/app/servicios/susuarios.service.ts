import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuarios } from '../interfaces/iusuarios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SUsuariosService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<IUsuarios>{
    return this.http.get<IUsuarios>(`${environment.apiURL}/usuarios`);
  }

  crearUsuario(nuevoUsuario: IUsuarios): Observable<IUsuarios>{
    return this.http.post<IUsuarios>(`${environment.apiURL}/usuarios`, nuevoUsuario);
  }
}
