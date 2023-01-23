/**
 * dias de semana abrimos alas 11
 * pero los fines de semana  abrimos alas 9
 */

//Entra a un sitio web, par consultar si esta abierto hoy...
const dia = 1 ; // 0:domingo...1:lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos alas xx

// if (dia == 0 || dia == 6) {
// if ( [0,6],includes(dia)) {
//     console.log("fin de semana");
//     horaApertura = 9;
// } else{
//     console.log("dia semana");
//     horaApertura = 11
// }

horaApertura = ( [0,6].includes (dia)) ? 9 : 11 ;

// if (horaActual >= horaApertura) {
//     mensaje= "Esta abierto"
// }else{
//     mensaje = `Esta cerrado, hoy abrimos alas  ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura) ? `Esta abierto` : `Esta cerrado, abrimos alas ${horaApertura}`;


console.log({horaApertura, mensaje});