"use strict";
exports.__esModule = true;
var exercicio8_1 = require("./exercicio8");
var custo = new exercicio8_1.Piscina();
custo.diametro = 6;
custo.custoConstrucao = 75;
console.log(custo.custoTotal().toFixed(2));
