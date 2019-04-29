import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { FormularioComponent } from './components/formulario/formulario.component';
import { UneteComponent } from './components/unete/unete.component';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComisionComponent } from './components/comision/comision.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';


const routes: Routes = [
    { path: 'signup', component: FormularioComponent },
    // {path:'signup', component:UneteComponent},
    { path: 'signin', component: LoginComponent},
    {path:'home/:id', component:UserLayoutComponent,children:[
        {path:'perfil', component:PerfilComponent},
        {path:'comision', component:ComisionComponent},
        {path:'pedidos', component:PedidosComponent},
        {path:'config', component:ConfiguracionComponent},
        {path:'detalle', component:DetallePedidoComponent},
        {path:'**', component:PerfilComponent}
    ]},
    { path: '**', component: UserLayoutComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

     
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule { }
 
export const app_routes=RouterModule.forRoot(routes)