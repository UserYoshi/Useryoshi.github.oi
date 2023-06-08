import {createuser,login_user} from './ejemplo.js'

const registrar = document.getElementById('btnreg')
const sesion = document.getElementById('btnlogin')


async function evaluar_registro(){

    const correo = document.getElementById('emailuser').value 
    const clave = document.getElementById('pwsuser').value 

    const evaluar = createuser(correo,clave)
    const validar = await evaluar

}

async function loginuser(){
    const em = document.getElementById('emailuser').value 
    const pw = document.getElementById('pwsuser').value
    
    const verificar = login_user(em,pw)
    const comprobar = await verificar
}

window.addEventListener('DOMContentLoaded',async()=>{
    registrar.addEventListener('click',evaluar_registro)
    sesion.addEventListener('click',loginuser)
})