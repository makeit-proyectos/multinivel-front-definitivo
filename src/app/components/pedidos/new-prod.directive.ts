import { Directive, Renderer2, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNewProd]'
})
export class NewProdDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) { 

  }
  @HostListener('') newLine(){
    let producto=this.renderer.createElement('input');
    let div=this.renderer.createElement('div');
    this.renderer.appendChild(div,producto );
    this.renderer.appendChild(this.element.nativeElement,div )

    
  }


}

// <div class="form-inline">
//                 <input type="text" value="" placeholder="Codigo fragancia" class="form-control" />
//                 <input type="number" name="" id="" placeholder="Cant." class="form-control" style="width: 30%; margin-left:3%">

//             </div>

