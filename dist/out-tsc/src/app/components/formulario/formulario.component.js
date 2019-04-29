import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar.service';
var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(regService) {
        this.regService = regService;
        this.error = false;
        this.opc = true; //correspode a las opciones de contactar un consultor independiente--> true: ya conoce; false: ubicar consultor
    }
    FormularioComponent.prototype.ngOnInit = function () {
    };
    FormularioComponent.prototype.registrar = function (correo, password) {
        var _this = this;
        this.cargando = true;
        console.log(correo + password);
        this.regService.setUser(correo, password).subscribe(function (data) {
            console.log(data);
            _this.cargando = false;
        }, function (error) {
            console.log(error.message);
            if (error.message.indexOf('404') > 0) {
                _this.messageError = 'Nombre no encontrado';
            }
            _this.error = true;
            _this.cargando = false;
        });
    };
    FormularioComponent.prototype.f = function () {
        console.log('hola ');
    };
    FormularioComponent.prototype.continuar1 = function () {
        // $('#collapseOne').collapse('hide');
        // $('#collapse2').collapse('show');
        console.log('permuta');
    };
    FormularioComponent.prototype.continuar2 = function () {
        // $('#collapse2').collapse('toggle');
    };
    FormularioComponent = tslib_1.__decorate([
        Component({
            selector: 'app-formulario',
            templateUrl: './formulario.component.html',
            styleUrls: ['./formulario.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RegistrarService])
    ], FormularioComponent);
    return FormularioComponent;
}());
export { FormularioComponent };
//# sourceMappingURL=formulario.component.js.map