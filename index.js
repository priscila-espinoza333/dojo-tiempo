function mostrarMensaje(elemento){
    alert("Cargando el pronostico del tiempo")
}

function removerCookie(elemento){
    //elemento.closest('.cookies').remove(); esta es una opcion o esta de abajo.. ambas la desaparecen 
    let cookie = elemento.closest('.cookies');
    cookie.classList.add('ocultar');
}
function cambiarTemperatura(elemento){
    console.log("elemento.value");
    let opcion = elemento.value;
    let temperaturas = document.querySelectorAll('.max >span, .min > span');
    console.log(temperaturas);

    if (opcion === 'f'){
        for(let i = 0; i< temperaturas.length; i++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura * 1.8)+ 32; // aca hago la formula para pasar de c a f 
            temperaturas[i].innerText = Math.round(temperaturaFinal); // aca estoy sacando el decimal
        }

    }
}