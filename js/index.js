const btn = document.querySelector(".mode-btn");
const circulo = document.querySelector(".circulo");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const cuadrados = document.querySelectorAll(".cuadrado");
const rectangulos = document.querySelectorAll(".rectangulo");
const letrasPequenas = document.querySelectorAll(".span-rect-num");

//CLICK 
btn.addEventListener("click", function () {
    btn.classList.toggle("fondo");
    circulo.classList.toggle("transformacion");
    circulo.classList.toggle("circulo-color");
    body.classList.toggle("color-body");
    h1.classList.toggle("letras-blanc");
    cambioH2();
    cambioCotenedores();
})
//FUNCIONES
// cambio de letras a blanco 
function cambioH2() {
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.toggle("letras-blanc");
    }
    for (let i = 0; i < letrasPequenas.length; i++) {
        letrasPequenas[i].classList.toggle("letras-blanc");
    }
}
//cambio de fondo de los cuadrados y rectángulos 
function cambioCotenedores() {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].classList.toggle("fondo-cuadrados");
    }
    for (let i = 0; i < rectangulos.length; i++) {
        rectangulos[i].classList.toggle("fondo-cuadrados");
    }
}