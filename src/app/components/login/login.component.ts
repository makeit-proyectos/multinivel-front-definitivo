import { Component, OnInit } from '@angular/core' ;
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Text } from '@angular/compiler';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  private oauthUrl = "http://localhost:8000/api/user/ogin";
    public user:any; public password:any;
  ngOnInit() {
    document.body.className = "newbg";
  }

  login(user:string, password:string) {
  
  	var headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
    });

    let postData = {
        email: user,
        password: password
    }
    return this.http.post(this.oauthUrl, JSON.stringify(postData), {
        headers: headers
    })
    .subscribe(
      res => {
        // if(typeof(JSON.parse(res.json()).success.token) == "string"){
        //   console.warn(JSON.parse(res.json()).success.token)
        // }else{
        //   console.warn("no sucedio");
        // }
    },err => {
      $['notify']({
          icon: "notifications",
          message: "<b>Atención! </b> - los datos son incorrectos."

      },{
          type: "orange",
          timer: 4000,
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
    },
    () => console.log('yay'))
  }

}