import { RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UneteComponent } from './components/unete/unete.component';
import { LoginComponent } from './components/login/login.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
var routes = [
    { path: 'registrarse', component: FormularioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: UserLayoutComponent },
    { path: '**', component: UneteComponent }
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
export var app_routes = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map