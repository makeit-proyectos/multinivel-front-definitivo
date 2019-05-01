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
  categorias:any[]=[];
  constructor(private pedidoService: PedidoService) {
    this.pedidoService.getCategorias().subscribe(res=>{
      console.log(res);
      this.categorias.push(res)
    });
    this.formElimLinea=new FormGroup({
      linea:new FormArray([])
    })


    console.log(this.categorias)
    // console.log(this.pedidoService.getCategorias())
   }

  ngOnInit() {
  }
  cargarLinea(cargar:any,codigo:number){
    if(cargar.target.checked){
      (<FormArray>this.formElimLinea.controls['linea'])
        .push(new FormControl(codigo))
    
    }
    console.log(this.formElimLinea.value['linea'])
  }
  eliminarLineas(){
    this.pedidoService.eliminarLinea(this.formElimLinea.value['linea']);
    this.categorias=[];
    this.pedidoService.getCategorias().subscribe(
      categoria=>{
        this.categorias.push(categoria);
      }
    )
    console.log(this.formElimLinea.value['linea'])
  }
  calcuarTotal(lineasPedido:any[]){
    let total:number=0;
    lineasPedido.forEach(element => {
      total=total+element.costoU*element.cantidad
      
    });
    return total
  }



  
  

}
