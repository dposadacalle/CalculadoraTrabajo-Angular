import { Component, OnInit } from '@angular/core';
import { Tecnico } from './tecnico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  private tecnico: Tecnico = new Tecnico();
  private title: string = 'Reporte de Servicio';

  constructor() { }

  public create(): void{

  }

  ngOnInit(): void {
  }

}
