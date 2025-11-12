// Lista de usuarios permitidos (puede agregar más)
const usuarios = [
  { nombre: "admin", clave: "12345" },
  { nombre: "gabriel", clave: "miClaveSegura" },
  { nombre: "usuario", clave: "abc123" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const mensajeError = document.getElementById("mensajeError");

  // Buscar usuario en la lista
  const userValido = usuarios.find(u => u.nombre === usuario && u.clave === clave);

  if (userValido) {
    // Guardar sesión en localStorage
    localStorage.setItem("usuarioActivo", usuario);
    window.location.href = "menu.html"; // Redirigir
  } else {
    mensajeError.textContent = "Usuario o contraseña incorrectos ❌";
    mensajeError.style.display = "block";
  }
});
