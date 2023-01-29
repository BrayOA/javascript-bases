

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        console.log(`Nombre : ${ this.nombre } -edad ${this.edad } `);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
     imprimir (){
        console.log(`Nombre : ${ this.nombre } -edad ${this.edad } `);
    }
}

// fher.imprimir();
// ok esto se  deve de crear  con a palabra new
function Persona (nombre, edad) {
    console.log('se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre : ${ this.nombre } -edad ${this.edad } `);
    }


}

const maria = new Persona ('Maria', 18);
const meissa = new Persona ('Melissa', 35);
// console.log(maria);
maria.imprimir();
meissa.imprimir();




