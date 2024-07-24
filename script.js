/* pedir las veces que se desea jugar  */
/* pedir la jugada del usuario */
/* pedir la jugada de la maquina */
/* comparar jugadas */
/* dar respuesta a la partida */

var cantVeces;
var eleccionJugador;
var eleccionMaquina;
var piedra = 0;
var tijera = 1;
var papel = 2;
var resultado;

cantVeces = prompt('ingrese la cantidad de veces que desea jugar');
/* if(!isNaN(cantVeces)){
    console.log(`es solo digito`)
} */
for(var i =0 ; i < cantVeces ; i = i + 1){
    eleccionJugador = prompt ('elige entre piedra papel o tijera')
    eleccionMaquina = Math.floor(Math.random()*3); 
switch (eleccionJugador){
    case 'piedra':
        if(eleccionMaquina == piedra){
            console.log('empate');
        }else if(eleccionMaquina == papel){
            console.log('lo sentimos haz perdido');
        }else{
            console.log('felicitaciones, ha ganado');
        }
        break;
    case 'papel':
        if(eleccionMaquina == piedra){
            console.log('empate');
        }else if(eleccionMaquina == papel){
            console.log('lo sentimos haz perdido');
        }else{
            console.log('felicitaciones, ha ganado');
        }
        break;
    case 'tijera':
        if(eleccionMaquina == piedra){
            console.log('lo sentimos a perdido');
        }else if(eleccionMaquina == papel){
            console.log('felicitaciones, ha ganado');
        }else{
            console.log('empate');
        }
        break;
    }
}




