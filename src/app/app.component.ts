import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenido, Calculadora de las Horas de Trabajo';
  description: string = 'Esta aplicación ofrece un sistema web que permite calcular y generar un reporte de las horas de trabajo';
}
