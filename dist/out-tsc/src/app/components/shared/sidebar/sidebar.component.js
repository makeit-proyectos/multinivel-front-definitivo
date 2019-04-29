import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
export var ROUTES = [
    { path: '/perfil', title: 'Perfil', icon: 'dashboard', class: '' },
    { path: '/comision', title: 'comision', icon: 'comision', class: '' },
    { path: '/pedidos', title: 'pedidos', icon: 'pedidos', class: '' },
    { path: '/configuracion', title: 'configuracion', icon: 'configuracion', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map