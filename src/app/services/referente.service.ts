import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenteService {
  referentes:object []=[
    {
      id:123,
      nombre:'alicia',
      apellido:'gomez',
      depto:'corrientes',
      ciudad:'goya',
      barrio:'itati'
      
    },
    {
      id:321,
      nombre:'oscar',
      apellido:'martinez',
      depto:'corrientes',
      ciudad:'goya',
      barrio:'itati'

    },

    {
      id:124,
      nombre:'erika',
      apellido:'perez',
      depto:'chaco',
      ciudad:'resistencia',
      barrio:'san fernando'
    },
    {
    
      id:125,
      nombre:'rosario',
      apellido:'bernal',
      depto:'buenos aires',
      ciudad:'caba',
      barrio:'palermo'
    
    }
  ]
  constructor() { }

  buscarNombre(nombre:string){
    let referentesResp:object[]=[];
    this.referentes.forEach(element => {
      if (element['nombre']==nombre) {
        referentesResp.push(element)
        
      }
      
    });
    return referentesResp

  }
  buscarCodigo(id:number){
    let referentesResp:any[]=[];
    this.referentes.forEach(element => {
      if (element['id']==id) {
        referentesResp.push(element)
        
      }
      
    });
    return referentesResp
  }
  buscarZona(depto:string, ciudad?:string, barrio?:string){
    let referentesResp:any[]=[];
    this.referentes.forEach(element => {
      if (element['depto']==depto && element['ciudad']==ciudad && element['barrio']==barrio ){
        referentesResp.push(element)
      }
    });
    return referentesResp

  }

}
