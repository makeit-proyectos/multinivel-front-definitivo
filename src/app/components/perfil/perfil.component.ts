import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';




@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  datos:Object;
  
  constructor(private actRoute: ActivatedRoute, private perfilService: PerfilService) { 
    this.getDatos()
  }

  ngOnInit() {
    
  }  

  getDatos():any{
    // this.actRoute.parent.params.subscribe(
    //   params=>{
    //     console.log(params['id'])
    //     this.datos= this.perfilService.getPerfil(params['id'])
    //   }
    // )
    this.datos= this.perfilService.getPerfil() //id tendra que ser tomado de la var sesion
  } 

}

