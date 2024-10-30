
let words = []
let word

do{
    word = prompt('Dime palabras..')

       if(word && !words.includes(word)){
        words.push(word)
       }
    

}while(word)

    words.sort((a,b)=> b.localeCompare(a))

    let list = document.getElementById('list')

    words.forEach (w=>{

        let li = document.createElement('li')

        li.textContent = w

        list.appendChild(li)
    })

    

   

