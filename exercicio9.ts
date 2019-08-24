import { Piscina } from "./exercicio8";

let custo = new Piscina()

custo.diametro = 6
custo.custoConstrucao = 75

console.log(custo.custoTotal().toFixed(2))