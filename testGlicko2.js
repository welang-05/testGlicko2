const formulario = document.getElementById("form1");

let jugadores = [];

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  for(let i=1; i<=4; i++){
    let jugador = {
      nombre: document.getElementById("nombre"+i).value,
      rating: document.getElementById("rating"+i).value
    }
    jugadores.push(jugador);
    console.log("Nombre: " + jugador.nombre + " Rating: " + jugador.rating);
  }

  let ganador = document.getElementById("ganador");

  let ganadorTexto = ganador.options[ganador.selectedIndex].innerHTML;

  console.log("Ganador: " + ganadorTexto);

  console.log(jugadores);

  let nuevosRatingsJugadores = glicko2(jugadores, ganador.value);

  let aImprimir = [];

  for(let i=1; i<=4; i++){
    aImprimir.push( document.getElementById("nuevoRating"+i));
    let texto = jugadores[i-1].nombre + " -> " + jugadores[i-1].rating;
    aImprimir[i-1].innerHTML = texto;
  }

});