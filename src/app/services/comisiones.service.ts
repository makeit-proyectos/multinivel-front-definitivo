import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComisionesService {
  comision:Referentes

  constructor() {
    this.comision={
      nombre:'Gerardo',
      asociados:[
        {
          nombre:'yesica',
          asociados:[]
        },
        {
          nombre:'monica',
          asociados:[
            {
              nombre:'pamela',
              asociados:[]
            },{
              nombre:'evangelina',
              asociados:[]
            }
          ]

        },{
          nombre:'maria',
          asociados:[
            {
              nombre:'estela',
              asociados:[]
            },{
              nombre:'roberta',
              asociados:[]
            }
          ]
        }
      ]
      
    }
   }
}

interface Referentes{
  nombre:string,
  asociados:Referentes[]
}