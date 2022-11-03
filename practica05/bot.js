//Se pueden pasar varias propiedades al objeto
var msj_bot={
    saludo:"Hola",
    despedida:"Adios",
    preocupacion: "Como estas?",
    sorpresa:"orale!"
}
//Se crea un arreglo para los mensajes
var arr_msj = ["Hola","Adios","Como estas?","orale!"]

function test() {
    let mensajes = document.getElementById("msjs")
    mensajes.innerHTML = JSON.stringify(msj_bot);
    //mensajes.innerHTML = JSON.stringify(arr_msj);
    //mensajes.innerHTML = msj_bot;
    //mensajes.innerHTML = arr_msj;
}

function procesa() {
    let campo = document.getElementById("msj").value 
    console.log(woz(campo))
    let mensajes = document.getElementById("msjs")
    mensajes.innerHTML = msj_bot[woz(campo)]
}

function woz(params) {
    if (params=="hola") {
        return "saludo"
    }
    if (params=="me siento mal") {
        return "sorpresa"
    }
    if (params=="adios") {
        return "despedida"
    }
    if (params=="") {
        return "preocupacion"
    }
    
}