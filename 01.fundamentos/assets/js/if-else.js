

let a = 10;


if (a >= 10) { // undefined, null, una asignacion
    console.log(`A es mayor o igual a 10`);
} else {
    console.log(`A es menor a 10`);
}

console.log(`fin de programa`);

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0:domingo 1:lunes 2:martes...

console.log({dia});

if ( dia === 0) {
    console.log(`Domingo`);
} else  if (dia === 1){
    console.log(`lunes`);

    // if (dia === 1) {
    //     console.log(`Lunes`);
    // } else {
    //     console.log(`No es lunes ni domongo`);
    // }
}else  if (dia === 2) {
    console.log(`martes`);

}else{
    console.log(`No es lunes, martes o domingo...`);
}

// sin usar if else o switch unicamente objetos
dia = 3; //0:domingo ...


// dia de la semana

console.log(diaLetras[dia]);

