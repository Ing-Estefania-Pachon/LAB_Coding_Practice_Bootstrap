// 1. Seleccionamos los elementos del HTML
const lista = document.getElementById("lista-tareas");
const input = document.getElementById("nueva-tarea");
const boton = document.getElementById("agregar");

// 2. Cuando se hace clic en el botón "Agregar"
boton.addEventListener("click", function(){
    const textoTarea = input.value.trim(); // Quitamos espacios al inicio y final

    if (textoTarea !== "") {
        // 3. Creamos un nuevo elemento <li>
        const nuevaTarea = document.createElement("li");
        nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center";

        // 4. Agregamos contenido al <li>: checkbox, texto y botón
        nuevaTarea.innerHTML = `
            <div>
                <input type="checkbox" class="form-check-input me-2">
                ${textoTarea}
            </div>
            <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        `;

        // 5. Lo agregamos a la lista
        lista.appendChild(nuevaTarea);

        // 6. Limpiamos el input
        input.value = "";
    }
})

// 7. Escuchamos clics en la lista para eliminar tareas (usamos "delegación de eventos")
lista.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("eliminar")) {
        // Si el botón clickeado tiene la clase "eliminar", borramos su tarea
        const tarea = evento.target.closest("li");
        tarea.remove();
    }
});