import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfiles: Object[]=[
    { id:1234,
      recomendante:'Paula',
      nombres: 'Laura',
      apellidos:'Contrera',
      dni:42342,
      celular: 3777310243,
      fijo:34234,
      correo:'laura@hotmail.com',
      alias:'laura',
      depto:'Corrientes',
      ciudad: 'Goya',
      barrio:'Itati',
      direccion:'Las heras 549'
  
  
  
    }
  ]
  constructor(private http: HttpClient) { }
  getPerfil(){
    // let url: string='api/perfil';
    // let header= new HttpHeaders({
    //   'id': id      
    // });
    //return this.http.get(url, {headers})
    return this.perfiles[0]
  }
}
