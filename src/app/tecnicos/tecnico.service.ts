import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

import {Tecnico} from './tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  
  private urlEndPoint: string = 'http://localhost:8080/api/tecnicos';
  
 private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }
  
  getTecnicos(): Observable<Tecnico[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Tecnico[])
    );
  }

  create(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>(this.urlEndPoint, tecnico, {headers: this.httpHeaders});
  }

  getTecnico(id): Observable<Tecnico>{
    return this.http.get<Tecnico>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(err => {
        this.router.navigate(['/tecnicos']);
        console.error(err.error.mensaje);
        Swal.fire('Error al ver Detalle', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

}

