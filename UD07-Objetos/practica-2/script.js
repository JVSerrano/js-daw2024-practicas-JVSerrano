
Array.prototype.mediaAritmetica = function () {

    if (this.length === 0) {

        console.log('Estas accediendo a un array vacio')
    } else {
        let sumaTotal = this.reduce((contador, valor) => contador + valor)
        return sumaTotal / this.length
    }



}

let notas = [10, 4, 6]
console.log(notas.mediaAritmetica())

let loteria = [23, 45, 85, 12, 44]
console.log(loteria.mediaAritmetica())

let arrayVacio = []
console.log(arrayVacio.mediaAritmetica())


