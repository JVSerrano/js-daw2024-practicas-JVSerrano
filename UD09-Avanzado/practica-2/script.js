

function temporizador(miliseg){

    return new Promise((resolve, reject)=>{
        let tiempoDoble = miliseg * 2

        let tempo = setTimeout(()=>{
            resolve('Tiempo concluido')
        },miliseg)

        setTimeout(()=>{
            clearTimeout(tempo)
            reject('El tiempo no va bien')
        }, tiempoDoble)
    })
   
}

temporizador(5000)
.then(result =>{
    document.write(result)
}).catch(error =>{
    document.write(error)
})