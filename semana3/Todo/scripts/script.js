let tareasPendientes = document.querySelector('tareasPendientes');

function show() {
    TASKS.forEach(task => {
        tareasPendientes.innerHTML += `
            <li> 
                <p class="nombre"> </p>
                <p class="fecha"> </p>
            </li>
        ` 
    })
}
