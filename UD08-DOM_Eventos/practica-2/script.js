let correo = document.getElementById('correo')
let contr = document.getElementById('contrasenia')
let form = document.getElementById('form')
let p = document.getElementById('parraf')
let btn = document.getElementById('btn')

let validarCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let validarContr = /^.{8,10}$/

let b1 = false
let b2 = false

let errorContr= ''
let errorCorre= ''


correo.addEventListener('blur', () => {
    if (validarCorreo.test(correo.value)) {
        b1 = true
        validarBtn()
    } else {
        errorCorre = `Formato del correo incorrecto`
        b2= false
    }
    actualizarError()
})

contr.addEventListener('blur', () => {
    if (validarContr.test(contr.value)) {
        b2 = true
        validarBtn()
    } else {
        errorContr = 'Formato de la contraseña incorrecto'
        b2= false
    }
    actualizarError()
})

correo.addEventListener('focus', () => {
  
        errorCorre = ''
        actualizarError()

})
contr.addEventListener('focus', () => {
  
       errorContr = ''
       actualizarError()
    }
)


function validarBtn() {
    if (b1 == true && b2 == true) {
        btn.disabled = false
    }
}

function actualizarError(){
    p.innerHTML = errorCorre + (errorCorre && errorContr ? '<br>' : '') + errorContr;
}
