import { getCurrentUser } from "./global.js";

// Verifica si el usuario actual está autenticado
getCurrentUser().then((user) => {
  if (!user) {
    // Si no está autenticado, redirige a la página de inicio de sesión
    window.location.href = "../index.html";
  }
});
