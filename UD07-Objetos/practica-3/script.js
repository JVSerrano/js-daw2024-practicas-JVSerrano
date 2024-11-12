

function Ordenador(marca, modelo, mRam = 4, discoDuro = 512, pulgadas = 17){
    this.marca =  marca,
    this.modelo = modelo,
    this.mRam = mRam,
    this.discoDuro = discoDuro,
    this.pulgadas = pulgadas

}

Ordenador.prototype.toString = function(){
    return `Características del ordenador: \n Marca: ${this.marca} \n Modelo: ${this.modelo} \n Memoria Ram: ${this.mRam} GB \n Disco duro: ${this.discoDuro} GB \n Pulgadas: ${this.pulgadas}`
}



let ordenadorCasa = new Ordenador('hp', 'pavilion')
console.log(ordenadorCasa.toString())

let ordenadorEmpresa = new Ordenador('MacBook Air', 'M2', 8, 256, 24)
console.log(ordenadorEmpresa.toString())



function OrdenadorPortatil(marca, modelo, mRam = 4, discoDuro = 512, pulgadas = 17, autonomia){
    Ordenador.call(this,marca, modelo, mRam , discoDuro , pulgadas )

    this.autonomia = autonomia

    this.toString = function(){
        return `${Ordenador.prototype.toString.call(this)} \n Autonomia: ${this.autonomia}`
    }
}

let pcPort = new OrdenadorPortatil('Cecotec','F45D',4,433,23,'Infinita')
console.log(pcPort.toString())


// Manera moderna de hacerlo (para practicar)

class Ordenador2{
    constructor(marca, modelo, ram = 4, dd = 512, pulgadas = 17){
        this.marca = marca,
        this.modelo = modelo,
        this.ram = ram,
        this.dd = dd,
        this.pulgadas = pulgadas
    }
}

Ordenador2.prototype.toString = function(){
    return `Características del ordenador: \n Marca: ${this.marca} \n Modelo: ${this.modelo} \n Memoria Ram: ${this.mRam} GB \n Disco duro: ${this.discoDuro} GB \n Pulgadas: ${this.pulgadas}`
}

class Portatiles extends Ordenador2{
    constructor(marca, modelo, ram = 4, dd = 512, pulgadas = 17, autonomia){
        super(marca, modelo, ram , dd, pulgadas)
        this.autonomia = autonomia
    }


    toString() {
        return `${super.toString()} \n Autonomía: ${this.autonomia} horas`;
    }
   
}

let pc1 = new Portatiles('pp', 'Pavilion',7,8,66,5)
console.log(pc1.toString())