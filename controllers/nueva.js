import {logout,userstate} from './ejemplo.js'

userstate()
const cerrar = document.getElementById('btnout')

async function cerrarsesion(){

    const verficar = logout()
    const validar = await verficar

    .then((validar) =>
    {
        alert('Sesión cerrada')
        window.location.href="../indes.html"
    })
    .catch((error) => {
        alert('sesion no cerrada')
    });
    

}

window.addEventListener('DOMContentLoaded',async()=>{
    cerrar.addEventListener('click',cerrarsesion)
})