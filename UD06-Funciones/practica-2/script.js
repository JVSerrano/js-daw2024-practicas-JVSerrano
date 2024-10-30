
let words = []
let wordcasa
let countMap = new Map()

do {

    word = prompt('Dime palabras..')

    if (word) {
        words.push(word)
    }

} while (word)

words.forEach(w =>{
    countMap.set(w, (countMap.get(w) || 0) + 1)
})

let list = document.getElementById('list')

countMap.forEach((count, w) => {
    let li = document.createElement('li')

    li.textContent = `${w} : ${count}`

    list.appendChild(li)
})