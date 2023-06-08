import { loginvalidation, servicegoogle } from "./global.js";

const iniciar = document.getElementById('btnlogin')
const googlebtn= document.getElementById('btngoogle')

async function Validar(){
    const user = document.getElementById('emailuser').value
    const pass = document.getElementById('pwsuser').value

    const sesion = loginvalidation(user,pass)
    const validation = await sesion   
    

    
    .then((validation) => {
        alert("The user: "+user+" is successfull")
        if (user=="hlcp2567@gmail.com" && pass=="123456789" ) {
            window.location.href= "../Templates/registro_unico.html"
          }else {window.location.href= "../Templates/nueva.html"}
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("The user: "+user+" no validation "+errorMessage)
    });
}

async function google(){
    await servicegoogle()
}

window.addEventListener('DOMContentLoaded', async()=>
{
    iniciar.addEventListener('click',Validar);
    googlebtn.addEventListener('click',google)
})