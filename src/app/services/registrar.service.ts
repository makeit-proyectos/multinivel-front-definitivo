import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }
  addUser(body2: object){
    const headers=new HttpHeaders({
      'X-Requested/with':'XMLHttpRequest',
      'Content-Type':'aplication/json'

    });
    let body:{
      //aca va el json con todos los campos que pones en el postman
    }
    
    const url:string=`http://localhost:8000/api/auth/signup`;
    return this.http.post(url, body, {headers})


  }
}
