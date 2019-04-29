import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }
  addUser(body: object){
    const headers=new HttpHeaders({
      'X-Requested/with':'XMLHttpRequest',
      'Content-Type':'aplication/json'

    });
    // const url:string=""
    // return this.http.post(url,body,{httpHeaders})
    // http://localhost:8000/api/auth/signup
    const url:string=`http://localhost:8000/api/auth/signup`;
    return this.http.post(url, body, {headers})


  }
}
