import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var RegistrarService = /** @class */ (function () {
    function RegistrarService(http) {
        this.http = http;
    }
    RegistrarService.prototype.setUser = function (user, password) {
        var httpHeaders = new HttpHeaders({
            'user': user,
            'password': password
        });
        // const url:string=""
        // return this.http.post(url,{httpHeaders})
        var url = "https://restcountries.eu/rest/v2/name/" + user + "?fullText=true";
        return this.http.get(url);
    };
    RegistrarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegistrarService);
    return RegistrarService;
}());
export { RegistrarService };
//# sourceMappingURL=registrar.service.js.map