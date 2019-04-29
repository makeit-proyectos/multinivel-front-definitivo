import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar.service';
import { Form, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ReferenteService } from 'src/app/services/referente.service';
import *  as $ from 'jquery';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  messageError:string;
  error:boolean=false;
  cargando:boolean;
  opc:boolean=true; //correspode a las opciones de contactar un consultor independiente--> true: ya conoce; false: ubicar consultor
  nuevoUsuario:FormGroup;
  referentes:any[]=[];
  tipoDoc:string []=['dni','dui'];
  formReferente:FormGroup;
  termYCond:boolean;
  noEncontrado:boolean=false;
  existe:boolean=false;
  
  constructor(private regService: RegistrarService, 
    private referenteService:ReferenteService) { 
    this.termYCond=false;
    this.formReferente=new FormGroup({
      id:new FormControl('',Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      ubicacion: new FormGroup({
        depto:new FormControl(''),
        ciudad:new FormControl(''),
        barrio:new FormControl('')
      })
    
      
    })
    this.nuevoUsuario= new FormGroup({
      asociado:new FormGroup({
        nombre:new FormControl('',Validators.required),
        apellido:new FormControl('',Validators.required),
        tipoDoc:new FormControl(this.tipoDoc[0],Validators.required),
        nroDoc:new FormControl('',Validators.required),
        celular:new FormControl('',Validators.required),
        correo:new FormControl('',Validators.required),
        fechaNac:new FormControl('',Validators.required),
      }),
      complementario:new FormGroup({
        alias:new FormControl('',Validators.required),
        telefono:new FormControl('',Validators.required),
        genero:new FormControl('',Validators.required),
        domicilio:new FormGroup({
          depto:new FormControl('',Validators.required),
          ciudad:new FormControl('',Validators.required),
          barrio:new FormControl('',Validators.required),
          direccion:new FormControl('',Validators.required),
          via:new FormControl('',Validators.required),
          referencia:new FormControl(''),
          mismoLugar:new FormControl('',Validators.required)
      })
        
    }),
    referente:new FormGroup({
      id:new FormControl('', Validators.required),
    }), 
      
    usuario:new FormGroup({
      nombre:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
     
  
    });
    
  }
  
  ngOnInit() {
  }

  buscarReferente(){
  
    console.log(this.formReferente)
    let nombre:string=this.formReferente.controls['nombre'].value;
    let id:number=this.formReferente.controls['id'].value;
    let ubicacion:Object={
      depto:(<FormGroup>this.formReferente.controls['ubicacion']).controls['depto'].value,
      ciudad:(<FormGroup>this.formReferente.controls['ubicacion']).controls['ciudad'].value,
      barrio:(<FormGroup>this.formReferente.controls['ubicacion']).controls['barrio'].value

    }
    
    if (this.formReferente.controls['nombre'].value!="") {
      this.referentes=(this.referenteService.buscarNombre(nombre));
    }else{
      if(this.formReferente.controls['id'].value!=""){
        this.referentes=this.referenteService.buscarCodigo(id)

      }else{
        this.referentes=this.referenteService.buscarZona(ubicacion['depto'],ubicacion['ciudad'],ubicacion['barrio']);
      }

    }
    if(this.referentes.length==0){
      this.noEncontrado=true;
    }else{
      this.noEncontrado=false;
    }

    this.formReferente.reset({
      id:'',
      nombre:'',
      apellido:'',
      ubicacion:{
        depto:'',
        ciudad:'',
        barrio:'',
      }
    })
  };


  // registrar(correo:string, password: string){
  //   this.cargando=true;
  //   console.log(correo+password)
  //   this.regService.setUser(correo, password).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       this.cargando=false;
  //     },
  //     error=>{
  //       console.log(error.message);
  //       if (error.message.indexOf('404')>0) {
  //         this.messageError=  'Nombre no encontrado';
          
  //       }
        
  //       this.error= true;
  //       this.cargando=false;
           
  //     });
      
  // }

  //registrar el usuario
  guardarUsuario(){
    console.log(this.nuevoUsuario);
    let body:Object={
      apellido:this.nuevoUsuario.value['asociado']['apellido'],
      nombre: this.nuevoUsuario.value['asociado']['nombre'],
      tipoDoc:this.nuevoUsuario.value['asociado']['tipoDoc'],
      nroDocumento:this.nuevoUsuario.value['asociado']['nroDoc'],
      nroCelular:this.nuevoUsuario.value['asociado']['celular'],
      email:this.nuevoUsuario.value['asociado']['correo'],
      fechaNacimiento:this.nuevoUsuario.value['asociado']['fechaNac'],
      nombreFavorito:this.nuevoUsuario.value['complementario']['alias'],
      nroFijo:this.nuevoUsuario.value['complementario']['nroFijo'],
      genero:this.nuevoUsuario.value['complementario']['genero'],
      
      departamento:this.nuevoUsuario.value['complementario']['domicilio']['depto'],
      ciudad:this.nuevoUsuario.value['complementario']['domicilio']['ciudad'],
      barrio:this.nuevoUsuario.value['complementario']['domicilio']['barrio'],
      direccion:this.nuevoUsuario.value['complementario']['domicilio']['direccion'],
      tipoVia:this.nuevoUsuario.value['complementario']['domicilio']['via'],
      referencia:this.nuevoUsuario.value['complementario']['domicilio']['referencia'],
      // mismoLugar:this.nuevoUsuario.value['complementario']['domicilio']['mismoLugar'],
        
    idReferente:this.nuevoUsuario.value['referente']['id'],
    
      
    
      nombreUsuario:this.nuevoUsuario.value['usuario']['nombre'],
      password:this.nuevoUsuario.value['usuario']['password'],
      password_confirmation:this.nuevoUsuario.value['usuario']['password'],
    };
    console.log(body);
    this.regService.addUser(body);

  }

  //cambiar de opciones de busqueda de representante
  conoceReferente(conoce:boolean){
    this.opc=conoce;
  }

  //corresponde al check de aceptar terminos y condiciones
  aceptarTerm(){
    this.termYCond=!this.termYCond;
  }
  
  verificarNombreUsuario(usuario:string){
    // this.sesionService(this.nuevoUsuario.value['usuario']['nombre']).subscribe(existe=>if (existe){this.ocupado=true})
    let usuarioNoDisp:string[]=['gera','gera2'];
    if(usuarioNoDisp.includes(usuario)==true){
      this.existe=true;
    }else{
      this.existe=false;
    }
  }
  //confirma validacion del ingreso de datos personales
  guardarDPersonal(){

    if (this.nuevoUsuario.controls['asociado'].valid){
     
    console.log('valido')

      };
      // 

      
      //registrar usuaruio en bd y solicitar al servicio de inicio de sesion permiso para ingresar
      //this.sesionService(this.form)
      //

    
  }

}
