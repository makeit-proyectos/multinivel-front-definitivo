import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  formElimLinea:FormGroup;
  categorias:any[];
  constructor(private pedidoService: PedidoService) {
    this.categorias=this.pedidoService.getCategorias();
    this.formElimLinea=new FormGroup({
      linea:new FormArray([])
    })


    console.log(this.categorias)
    // console.log(this.pedidoService.getCategorias())
   }

  ngOnInit() {
  }
  cargarLinea(codigo:number){
  
    (<FormArray>this.formElimLinea.controls['linea']).push(new FormControl(codigo))
  }
  eliminarLineas(){
    console.log(this.formElimLinea.value)
  }



  
  

}
