/*let verificarPI = function (num:number):void{

    if(num % 2 == 0){
        console.log("O número é par.")
    }
    else {
        console.log("O número é impar.")
    }
}
*/

let verificarPI = function (num:number):boolean{

    if(num % 2 == 0){
       return true
    }
    else {
        return false
    }
}
console.log(verificarPI(8))