let titulo = document.getElementById("titulo");
let cambiarTexto = document.getElementById("changeJS");
let textChange = document.getElementById("textChange");
let button = document.getElementById("button");

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasenia");
let enviar = document.getElementById("enviar");

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");

let validar = document.getElementById("validar");


titulo.innerHTML = "Hola desde JS";
cambiarTexto.innerHTML = "texto cambiado...!!"

const nuevoTexto = () =>{
    textChange.innerHTML = "texto cambiado :D..!!"
}

button.addEventListener("click", nuevoTexto);

const formulario = () => {

    let valorNombre = nombre.value;
    let valorEmail = email.value;
    let valorContrasenia = contrasenia.value;

    valor1.innerHTML = nombre.value;
    valor2.innerHTML = email.value;
    valor3.innerHTML = contrasenia.value;

    let nombreCorrecto = "Juan";
    let correoCorrecto = "a@a.com";
    let contraseniaCorrecta = "XD"

    if(valorNombre === nombreCorrecto && valorEmail === correoCorrecto && valorContrasenia === contraseniaCorrecta){

        validar.innerHTML = "¡¡¡...Bienvenido...!!!";
    }else {
        validar.innerHTML = "Datos Incorrectos : (";
    }
}

enviar.addEventListener("click", formulario)