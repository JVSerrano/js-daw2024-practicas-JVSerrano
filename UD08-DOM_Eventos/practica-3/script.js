let capa1 = document.querySelector('.capa1')
let capa2 = document.querySelector('.capa2')

capa2.addEventListener('dragenter', ()=>{
    capa2.style.background = 'red'
})

capa2.addEventListener('dragover', (e)=>{
    e.preventDefault()
})

capa2.addEventListener('dragleave', ()=>{
    capa2.style.background= ''
})

capa2.addEventListener('drop', (e)=>{
    e.preventDefault()

    capa1.style.display = 'none'

    capa2.textContent = 'Lo has logrado'
})