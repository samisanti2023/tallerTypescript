"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
function crearTabla() {
    // Obtener el elemento contenedor de la tabla
    var contenedorTabla = document.getElementById('contenedor-tabla');
    // Crear tabla y aplicar clases de Bootstrap
    var tabla = document.createElement('table');
    tabla.classList.add('table');
    // Crear el encabezado de la tabla
    var encabezado = document.createElement('thead');
    encabezado.innerHTML = "\n        <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Channel</th>\n            <th>Seasons</th>\n        </tr>\n    ";
    tabla.appendChild(encabezado);
    // Crear el cuerpo de la tabla
    var cuerpo = document.createElement('tbody');
    data_js_1.series.forEach(function (objeto) {
        var fila = document.createElement('tr');
        fila.innerHTML = "\n            <td>".concat(objeto.id, "</td>\n            <td>").concat(objeto.titulo, "</td>\n            <td>").concat(objeto.canal, "</td>\n            <td>").concat(objeto.temporadas, "</td>\n        ");
        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);
    // Agregar la tabla al contenedor
    console.log("chao");
    contenedorTabla === null || contenedorTabla === void 0 ? void 0 : contenedorTabla.appendChild(tabla);
}
console.log("hola");
// Llamar a la función para crear la tabla cuando se cargue el documento
console.log(data_js_1.series);
crearTabla();
document.addEventListener('DOMContentLoaded', crearTabla);
