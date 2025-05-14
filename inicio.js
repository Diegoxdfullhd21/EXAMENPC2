const botonIzquierda = document.querySelectorAll(".carrusel-container button")[0];
const botonDerecha = document.querySelectorAll(".carrusel-container button")[1];
const imagenes = document.querySelectorAll(".carrusel-slides img");

let indiceActual = 0;

function mostrarImagen(indice) {
    imagenes.forEach((img, i) => {
        if (i === indice) {
            img.classList.add("actual");
            img.classList.remove("oculto");
        } else {
            img.classList.add("oculto");
            img.classList.remove("actual");
        }
    });
}

botonIzquierda.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

botonDerecha.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
});
