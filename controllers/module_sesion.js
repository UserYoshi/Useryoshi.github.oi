import {useregister} from'./global.js'

const registrar = document.getElementById('btnregister')

async function Register(){

    const usuario = document.getElementById('emailuser').value
    const clave = document.getElementById('pwsuser').value

    const registrarusuario = useregister(usuario,clave)
    const verificar = await registrarusuario

    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        alert('Usuario registrado')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert('Usuario NO registrado')
        // ..
      });
}

window.addEventListener('DOMContentLoaded', async()=>
{
    registrar.addEventListener('click',Register);
})