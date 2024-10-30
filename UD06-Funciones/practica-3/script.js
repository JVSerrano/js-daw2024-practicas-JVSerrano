

// Multiplicar por dos
console.log('Multiplicar array por dos:')
let numbers = [2, 4, 6, 8, 10]

function filtro(callback, array) {
    numbers = numbers.map(num => console.log(callback(num)))
}

function duplicate(x) {
    return x * 2
}

filtro(duplicate, numbers)

console.log('------------------------')

//Dado un array en minusculas pasarlo a mayusculas
console.log('Convertir en mayusculas:')
let names = ['Pedri', 'Ronaldo', 'Cannavaro', 'Platini', 'Muller']

function filtro2(callback, array) {
    array = array.map(nam => console.log(callback(nam)))
}

function capitalLetters(x){
    return x.toUpperCase()
}

filtro2(capitalLetters,names)

console.log('------------------------')

//Calcular factorial

// debugger
console.log('Calcular factorial: ')

let numbersF = [2, 4, 6, 8, 10]

function filtro3(callback, array){
numbersF = numbersF.map(n => console.log(`Factorial de ${n} : ${callback(n)}`))
}

function factorial(x){
 let fact = 1
    for (let i = 1; i < x ; i++){
        fact += fact*i
    }

    return fact
}

filtro3(factorial, numbersF)