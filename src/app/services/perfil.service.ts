import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfiles: any[]=[
    { id:1234,
      recomendante:'gola',
      nombres: 'laura',
      apellidos:'contrera',
      dni:42342,
      celular: 3777310243,
      fijo:34234,
      correo:'laura@hotmail.com',
      alias:'laura',
      depto:'goya',
      ciudad: 'goya',
      barrio:'itati',
      direccion:'las heras 549'
  
  
  
    }
  ]
  constructor(private http: HttpClient) { }
  getPerfil(id){
    // let url: string='api/perfil';
    // let header= new HttpHeaders({
    //   'id': id      
    // });
    console.log(id);
    for (let index = 0; index < this.perfiles.length; index++) {
      if (this.perfiles[index].id==id) {
        return this.perfiles[index]
      }
      
    }
  }
}
