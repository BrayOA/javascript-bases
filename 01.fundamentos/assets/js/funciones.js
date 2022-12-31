
function saludar ( nombre ) {
    // console.log(arguments);
    // console.log("hola" + nombre);
    return  10;

//esto nunca se va ejecutar
    console.log("Soy un codigo que esta despues del return");
}

const saludar2 = function ( nombre ) {
    console.log("hola" + nombre);
}

const saludarFlecha = () => {
    console.log("hola flecha");
}

const saludarFlecha2 = ( nombre ) => {
    console.log("hola"+ nombre);
}

const retornoDeSaludar= saludar(`fernando`, 40, true, "costa rica");
console.log(retornoDeSaludar);
// saludar2(`fernando`);
// saludarFlecha();
// saludarFlecha2("meel");


function sumar (a, b){
    return a + b;
}

// const sumar2 = (a,b) =>{
//     return a+b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();



console.log (getAleatorio2() );