let boton_generar = document.getElementById("valores_prueba");
let file = "../../src/logica/numerosDePrueba.txt";
boton_generar.addEventListener("click", () => {
  /* fetch(file)
     .then(texto=>texto.text())
     .then(datos => {
         let datosJson = JSON.parse(datos)
         console.log(datosJson)
     })*/

  document.getElementById("C1M").value = generarRandom();
  document.getElementById("C1V").value = generarRandom();
  document.getElementById("C2M").value = generarRandom();
  document.getElementById("C2V").value = -generarRandom();
});

let clicks = 0;
let datos = [
  4.4146, 1.3415, 7.8293, 11.2439, 7.1463, 6.4634, 1.6829, 10.2195, 13.9756,
  12.2683, 14.3171, 14.6585, 3.0488, 5.7805, 10.9024, 4.7561, 3.7317, 10.561,
  2.3659, 1, 5.439, 8.5122, 2.0244, 12.6098, 2.7073, 3.3902, 8.1707, 13.6341,
  9.878, 11.5854, 9.5366, 9.1951, 6.8049, 4.0732, 12.9512, 5.0976, 6.122,
  13.2927, 7.4878, 8.8537,
];

function generarRandom() {
  return Math.floor(Math.random() * (41 - 1) + 1);
}
