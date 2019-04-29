import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistrarService } from './services/registrar.service';
import { HttpClientModule } from '@angular/common/http';
import { UneteComponent } from './components/unete/unete.component';
import { app_routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComisionComponent } from './components/comision/comision.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                FormularioComponent,
                UneteComponent,
                LoginComponent,
                SidebarComponent,
                PerfilComponent,
                ComisionComponent,
                PedidosComponent,
                ConfiguracionComponent,
                UserLayoutComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                app_routes
            ],
            providers: [RegistrarService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map