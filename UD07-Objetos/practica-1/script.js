

function Puntos (x,y){
    this.x = (typeof x === 'number' ? x : 0),
    this.y = (typeof y === 'number' ? y : 0)

    this.cambiar = function(newX, newY){
        return  this.x = newX,
                this.y = newY
    }

    this.copiar = function(){
        return new Puntos(this.x, this.y)
    }

    this.sumar = function(z){
        Puntos[z]= this.z
        return this.x + this.y + z
    }

}

let p1 = new Puntos(20,22) //Establecer valores
console.log('p1: ' + p1.x + ' ' +p1.y)

let p2 = new Puntos('Hola','Adios')
console.log ('p2: ' + p2.x + ' ' +p2.y) //Aquí da 0

p1.cambiar(10,11) //Cambiamos los valores
console.log('p1: ' + p1.x + ' ' +p1.y)

let p3 = p1.copiar() //Creacion de p3 copiado del p1
console.log('p3: ' + p3.x + ' ' +p3.y)


console.log(p1.sumar(12)) //Añadir un tercer punto y suparlo al resto