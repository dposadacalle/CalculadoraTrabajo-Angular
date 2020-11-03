import { Component, OnInit } from '@angular/core';
import { Tecnico } from './tecnico';
import { TecnicoService } from './tecnico.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  public tecnico: Tecnico = new Tecnico();
  public title: string = 'Detalle Servicio';

  constructor(private tecnicoService: TecnicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
