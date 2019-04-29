import { Component, OnInit } from '@angular/core';
import { ArticulosService, Articulo } from 'src/app/services/articulos.service';
import { NgModel, NgForm } from '@angular/forms';

import * as $ from 'jquery'
import { PedidoService, LineaPedido } from 'src/app/services/pedido.service';




@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  articulos: Articulo[]
  categorias: any[];
  articulosxCat:any[];
  
  constructor(private articulosService: ArticulosService, 
    private pedidosService: PedidoService 
    ) { 
      //Agrega los diferentes articulos agrupados por categoria : [{categoria: nombre, Articulos: []}, {}]
       this.categorias=this.articulosService.getCategorias();
    
    this.articulosxCat=[];
    this.categorias.forEach(element => {
      this.articulosxCat.push({
        categoria:element.nombre, 
        LineadePedidos: [
          {codigo:'',
           cantidad:''}
          ]
        });
      
    });
    console.log(this.articulosxCat)
  }

  ngOnInit() {
  }

  

  buscarArt(codigo:string, categoria:string){
    
    this.articulosService.getArticulo(codigo, categoria);
  }



  agregarPedido(form:NgForm){
    let nroLinea:number=0;
    let lineas: LineaPedido[]=[];
    while (form.value['codigoL'+(nroLinea).toString()]!=undefined) {
      lineas.push({
        categoria:form.value['categoria'], 
        codigo:form.value['codigoL'+nroLinea.toString()],
        cantidad:form.value['cantidadL'+nroLinea.toString()],
        costoU:this.articulosService.getPrecio(form.value['codigoL'+nroLinea.toString()]),
        
      })
      nroLinea=nroLinea+1;
      
    }
    this.pedidosService.addPedidos(lineas)
  }

  //agrega una linea mas para producto 
  agregarLinea(classCategoria:string){
    
    for (let index = 0; index < this.articulosxCat.length; index++) {
      if (this.articulosxCat[index].categoria==classCategoria) {
        this.articulosxCat[index].LineadePedidos.push({codigo:'', cantidad:''});
         break;
      }
      
    }
    
  }

  
}
