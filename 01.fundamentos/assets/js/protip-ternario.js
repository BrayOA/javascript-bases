const elMayor = (a,b)  => (a > b) ? a : b ;

const tieneMembresia = (miembro) => (miembro) ? `2 dolares` : `10 dolares`;

console.log( elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = true;
const amigoArr =[
    `peter`,
    `tony`,
    `Dr. strange`,
    amigo ? `thor` : `loki`,
    // (() =>"nick fury")()
    elMayor (10,15)
];

console.log ( amigoArr );

const nota = 82.5; // A+ A B+
const grado = nota >= 93 ? `A+` :
              nota >= 90 ? `A`  :
              nota >= 85 ? `B+` :
              nota >= 80 ? `B`  :
              nota >= 75 ? `C+` :
              nota >= 70 ? `C`  :  `F`;
console.log({nota,grado});


