"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, titulo, canal, temporadas, descripcion, enlace, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.imagen = imagen;
    }
    return Serie;
}());
exports.Serie = Serie;
