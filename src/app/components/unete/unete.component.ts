import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.css']
})
export class UneteComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goUnete(){
    this.route.navigate(['/registrarse'])
  }

}
