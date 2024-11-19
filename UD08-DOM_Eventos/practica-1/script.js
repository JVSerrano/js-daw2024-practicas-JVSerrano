

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === 'F12') {
        let container = document.querySelector('.container')
          container.style.backgroundImage = 'url(https://picsum.photos/1920/1080)'
        setTimeout(() => {
          location.reload()
        }, 5000)

    }
})