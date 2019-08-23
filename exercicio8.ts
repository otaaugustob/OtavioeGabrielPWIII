export class Piscina{
    diametro:number
    custoConstrucao:number

    raio(){
        return this.diametro / 2
    }
    area(){
        return (this.raio() * this.raio()) * 3.14
    }
    custoTotal(){
        return this.area() * this.custoConstrucao
    }
}