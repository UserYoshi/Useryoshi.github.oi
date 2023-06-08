import { addcollection,readcollection }from "./global.js"
const caja = document.getElementById('freg')
const ver = document.getElementById('rdata')

async function cargar(){
    ver.innerHTML=''
    const docRef = readcollection()
    const querySnapshot = await docRef
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} `);
        ver.innerHTML+=`
                <tr>
                <th scope="row">${doc.data().nit}</th>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().cel}</td>
                <td>${doc.data().posicion}</td>
                </tr>
        `
      });

}

window.addEventListener('DOMContentLoaded',async()=>
{
    cargar();
})

caja.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nit = caja['txtnit']
    const name = caja['txtinst']
    const direction = caja['txtdir']
    const phone = caja['txtphone']

    addcollection(
        nit.value,
        name.value,
        direction.value,
        phone.value)

    alert('El usuario '+nit.value+' ha sido registrado')

})