import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  
  articulos: Articulo[]=[
    {
      codigo:'4321',
      categoria:'perfume',
      nombre:'fragancia',
      marca:'shakira',
      color:'rosa',
      precio:34.50,
      img:''
    },
    {
      codigo:'4322',
      categoria:'esmalte',
      nombre:'fragancia',
      marca:'shakira',
      color:'rom',
      precio:34.50,
      img:''
    },
    {
      codigo:'4320',
      categoria:'labial',
      nombre:'fragancia',
      marca:'xx',
      color:'rosa',
      precio:34.50,
      img:''
    }
  ]
  categorias:any[]=[
    {
      nombre:'perfume',
      img:''
    },
    {
      nombre:'esmalte',
      img:''
    },
    {
      nombre:'labial',
      img:''
    }
  ]
  

  constructor() { }

  //obtiene un articulo por su codigo, tambien deberia considerarse su categoria ya que por algo se encuentra agrupado
  getArticulo(codigo:string, categoria:string){
    console.log(codigo);
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo==codigo){
        return this.articulos[i];
      }     

      
    }
  }

  getPrecio(codigo){
    for (let index = 0; index < this.articulos.length; index++) {
      if (this.articulos[index].codigo==codigo){
        return this.articulos[index].precio
      }
      
      
    }
  }
  //obtiene un arreglo de las diferentes categorias
  getCategorias(){
    return this.categorias
  }
}

export interface Articulo{
  'codigo':string,
  'categoria':string,
  'nombre':string,
  'marca':string,
  'color':string,
  
  'precio':number,
  'img':string
}

