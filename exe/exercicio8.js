"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina() {
    }
    Piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Piscina.prototype.area = function () {
        return (this.raio() * this.raio()) * 3.1415926;
    };
    Piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return Piscina;
}());
exports.Piscina = Piscina;
//export {Piscina as piscina}
