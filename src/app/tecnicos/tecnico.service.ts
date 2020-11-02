import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {Tecnico} from './tecnico';
import {TECNICOS} from './tecnicos.json';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  
  private urlEndPoint: string = 'http://localhost:8080/api/tecnicos';

  constructor(private http: HttpClient) { }
  
  // Convertimos/creamos  que el flujo Observable a partir de los objetos TECNICOS
  // Observable: Se basa en el patron de diseño Observador, 
  // Donde se tiene un subjecto Observable, para este caso es Cliente, 
  // y tambien unos posibles observadores, estan atento a escuchar cualquier cambio en el Subjecto (Tecnico)
  
  // se tiene el cliente (Angular ) y un Backend (Spring Boot), 
  // Cuando cambia su contenido en el servidor backend, 
  // este automaticamente cambia y notifica en el cliente en tiempo real.
  // Sin la necesidad de recargar el Browser, se hara forma transparente
  // Solo cuando cambie el estado (informacion ) de los Tecnicos
  getTecnicos(): Observable<Tecnico[]>{
    // return of(TECNICOS);
    
    // primer forma
    return this.http.get<Tecnico[]>(this.urlEndPoint);
  }
}
