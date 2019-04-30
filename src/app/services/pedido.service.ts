import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos:LineaPedido[]=[
    {
    categoria:'perfume',
    codigo:'033', 
    cantidad:3,
    costoU:15.00},
    {
    categoria:'perfume',
    codigo:'021',  
    cantidad:6,
    costoU:15.00},
    {
    categoria:'esmalte',
    codigo:'024',   
    cantidad:6,
    costoU:15.00},
    {
    categoria:'labial',
    codigo:'050',
    cantidad:6,
    costoU:15.00},
  ]
  urlAPI:string="https://api/";

  constructor(private http:HttpClient,
              ) { }
  


  addPedidos(lineasPedido:LineaPedido[]){
    lineasPedido.forEach(element => {
      this.pedidos.push(element)
    });    
    console.log(this.pedidos);
    
    // const url:string=this.urlAPI+'agregar-pedido';
    // let body:object={
    //   'pedido':lineasPedido,
    // };
    // let headers= new HttpHeaders({
    //   'Content-Type':'Aplication/json'
    // })
    //return this.http.post(url, body,{headers}).subscribe(response=>console.log(response))
  }


  getCategorias(){
    let categorias:string[]=[];
    this.pedidos.forEach(element => {
      if (( categorias.indexOf(element.categoria))<0){  
        categorias.push(element.categoria)
      }
    });
    let pedidosxCat:any[]=[];

    categorias.forEach(
        nombre=>{
          pedidosxCat.push({categoria:nombre, pedidos:[]})      
        }
      );
    this.pedidos.forEach(
      linea=>{
        for (let index = 0; index < pedidosxCat.length; index++) {
          if (pedidosxCat[index].categoria==linea.categoria) {
            pedidosxCat[index].pedidos.push(
              {
                codigo: linea.codigo,
                cantidad: linea.cantidad,
                costoU: linea.costoU
              }
            ) 
          }
        }

      }
    )
    return from(pedidosxCat)
    
    // const urlAPI=this.urlAPI+'get-pedidos';
    // const headers= new HttpHeaders({
    //   'Content-Type':'Aplication/json'
    // });
    // this.http.get(urlAPI, {headers})
    //   .pipe(
    //     map(res=>{
    //       console.log('');
    //       return res
    //     })              
    //   )
    
  }

  eliminarLinea(lineas:number[]){
    lineas.forEach(linea => {
      for (let index = 0; index < this.pedidos.length; index++) {
        if (this.pedidos[index].codigo==(linea).toString()){
          this.pedidos.splice(index, 1);
          break
        }
        
      }
    });
    console.log(this.pedidos)

    // const urlAPI=this.urlAPI+'delete-pedidos';
    // const headers= new HttpHeaders({
    //   'Content-Type':'Aplication/json'
    // });
    // const body:Object={
    //   'lineasPedido':lineas,
    // }
    // return this.http.post(urlAPI,body,{headers})
    
    
  }



}
export interface LineaPedido{
  'categoria': string,
  'codigo': string
  'cantidad':number,
  'costoU':number,   
  }



// export interface Articulo{
//   'codigo':string,
//   'categoria':string,
//   'nombre':string,
//   'marca':string,
//   'color':string,
  
//   'precio':number,
//   'img':string
// }
