import { Usercreate } from "./global.js"

const btnvalidar = document.getElementById('btncrear');

async function registeruser() {

  const user = document.getElementById('emailuser').value
  const pws = document.getElementById('pwsuser').value
  const confirmPassword = document.getElementById("confirmpwsuser").value;

  if (pws === confirmPassword) {
    try {
      const userCredential = await Usercreate(user, pws);
      // Signed in
      const registeredUser = userCredential.user;
      console.log(registeredUser);
      alert('Usuario registrado');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert(errorMessage);
    }
  } else {
    alert("Las contraseñas no coinciden");

  }
  const minLetras = /.{14,}/;
  const caracteres = /[A-Z]/;
  const minNumeros = /\d/;
  if (!minLetras.test(pws) || !caracteres.test(pws) || !minNumeros.test(pws)) {
    alert('La contraseña debe tener al menos 14 caracteres, una mayúscula y un número');
    return;
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  btnvalidar.addEventListener('click', registeruser);
});

