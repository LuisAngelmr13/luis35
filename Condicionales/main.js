//if(condicion){
  //  Comandos...
//}else if(condicion2) {
//Comandos
//}

//let edad = 18;

//if (edad === 18){
//    console. log("Eres mayor de edad");
//}else{
//    console. log("No eres mayor de edad");
//

//let numero = 13

//if(numero % 2 === 0){
//    console. log("es par");
//} else {
//    console. log("es impar")
//}

//let dia = 0;

//if (dia === 0){
//    console. log("lunes");
//} else if(dia === 1){
//    console. log("martes");
//}else if(dia === 2){
//    console.log("miercoles");
//}else if(dia === 3){
//    console. log("jueves");
//}else if(dia === 4){
//    console. log("viernes");
//} else if (dia === 5){
//    console. log("sabado");
//}else if(dia === 6){
//    console. log("domingo");
//}else {
//    console. log("dia invalido");
//}

//let edad = prompt("proporcione su edad");

//if (edad =16 || edad === 17){
//    console. log("permiso de conducir");
//}//else if(edad >= 18 && edad <= 70){
//    console. log("licencia");
//}else if(edad <= 15 && edad > 70){
//    console. log("no puede conducir")
//}else{
//    console. log("no entiendo")
//}

//<===========

let jugador1 = prompt("Elige piedra,papel o tijera");
let jugador2 = prompt("Elige piedra, papel o tijeras");
let piedra = "piedra"
let papel = "papel"
let tijeras = "tijeras"

if(jugador1 === tijeras && jugador2 === papel){
    console. log("jugador1 gana");
}else if(jugador1 === tijeras && jugador2 === piedra){
    console. log("jugador2 pierde");
}else if(jugador1 == "tijeras" && jugador2 
=== tijeras){
    console. log("empate");
}else if(jugador1 === piedra && jugador2 === tijeras){
    console. log("jugador1 gana");
}else if(jugador1 === piedra && jugador2 === papel){
    console. log("jugador1 pierde");
}else if(jugador1 === piedra && jugador2 === piedra){
    console. log("empate");
}else if(jugador1 === papel && jugador2 === piedra){
    console. log("jugador1 gana");
}else if(jugador1 === papel && jugador2 === tijeras){
    console. log("jugador1 pierde");
}else if(jugador1 === papel && jugador2 === papel){
    console. log("empate");
}else{
    console. log("no entiendo");
}