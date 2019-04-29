import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UneteComponent = /** @class */ (function () {
    function UneteComponent(route) {
        this.route = route;
    }
    UneteComponent.prototype.ngOnInit = function () {
    };
    UneteComponent.prototype.goUnete = function () {
        this.route.navigate(['/registrarse']);
    };
    UneteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-unete',
            templateUrl: './unete.component.html',
            styleUrls: ['./unete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UneteComponent);
    return UneteComponent;
}());
export { UneteComponent };
//# sourceMappingURL=unete.component.js.map