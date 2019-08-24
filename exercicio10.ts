
export let verificarPI = function (num:number):boolean{

    if(num % 2 == 0){
       return true
    }
    else {
        return false
    }
}

export let area = function(compri:number, larg:number):number{

    return compri * larg
}


export let fcubo = (num:number) =>  num*num*num
