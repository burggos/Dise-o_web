const pantalla = document.getElementById("pantalla");

function agregar(valor) {
  pantalla.value += valor;
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}

function borrar() {
  pantalla.value = "";
}
