const numero=document.getElementById('numero')
let cantidad = 0;

let tiempo =setInterval(() => {
cantidad += 1
numero.textContent=cantidad

if(cantidad ===14000){
    clearInterval(tiempo)
}

}, 30);