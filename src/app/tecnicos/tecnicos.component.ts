import { Component, OnInit } from '@angular/core';

import {Tecnico} from './tecnico';
import { TecnicoService } from './tecnico.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {
  
  tecnicos: Tecnico[];

  constructor(private tecnicoService: TecnicoService) {}

  // Componente: ngOnInit() es cuando inicia el componente 
  ngOnInit(): void {
    this.tecnicoService.getTecnicos().subscribe(
      // Esto es una funcion Anonima de TS
      tecnicos => this.tecnicos = tecnicos
    );
  }

}
