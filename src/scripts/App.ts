import { series } from './data.js';

function crearTabla() {
    // Obtener el elemento contenedor de la tabla
    const contenedorTabla = document.getElementById('contenedor-tabla');

    
    // Crear tabla y aplicar clases de Bootstrap
    const tabla = document.createElement('table');
    tabla.classList.add('table');

    // Crear el encabezado de la tabla
    const encabezado = document.createElement('thead');
    encabezado.innerHTML = `
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Channel</th>
            <th>Seasons</th>
        </tr>
    `;
    tabla.appendChild(encabezado);

    // Crear el cuerpo de la tabla
    const cuerpo = document.createElement('tbody');
    series.forEach((objeto) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${objeto.id}</td>
            <td>${objeto.titulo}</td>
            <td>${objeto.canal}</td>
            <td>${objeto.temporadas}</td>
        `;
        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);

    // Agregar la tabla al contenedor
    contenedorTabla?.appendChild(tabla);
}
console.log("hola")
// Llamar a la función para crear la tabla cuando se cargue el documento
console.log(series);
document.addEventListener('DOMContentLoaded', crearTabla);
