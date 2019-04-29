import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `<input ngModel name="codigo-{{cantidad}}" type="text" placeholder="Codigo o fragancia" class="form-control" style="width:50%"/>
  <input ngModel name="cantidad-{{cantidad}}" type="number" placeholder="Cant." class="form-control " style="width: 30%; margin-left:3%  ">`
})
export class DynamicComponent  {
  constructor (public cantidad:number){}
}