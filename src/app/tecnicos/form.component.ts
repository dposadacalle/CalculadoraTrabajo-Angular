import { Component, OnInit } from '@angular/core';
import { Tecnico } from './tecnico';
import { TecnicoService } from './tecnico.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public tecnico: Tecnico = new Tecnico();
  public title: string = 'Reporte de Servicio';

  constructor(private tecnicoService: TecnicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void {
    this.tecnicoService.create(this.tecnico)
      .subscribe(cliente => {
        this.router.navigate(['/tecnicos'])
        Swal.fire('Nuevo Servicio', `Técnico ${this.tecnico.identServicio} creado con éxito!`, 'success')
      });
  }

  verDetalle(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.tecnicoService.getTecnico(id).subscribe( (tecnico) => this.tecnico = this.tecnico);
      }
    });
  }
}
