function obtenerVisitas() {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [nombre, valor] = cookie.trim().split('=');
        if (nombre === 'visitas') {
            return parseInt(valor) || 0;
        }
    }
    return 0;
}

function actualizarVisitas() {
    let visitas = obtenerVisitas();
    visitas++;

    if (visitas > 10) {
        visitas = 1;
        document.cookie = 'visitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    }

    let fecha = new Date();
    fecha.setMonth(fecha.getMonth() + 1);
    document.cookie = `visitas=${visitas}; expires=${fecha.toUTCString()}; path=/`;

    document.querySelector('.contenedorVisitas').textContent = visitas;
}