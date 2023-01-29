class Persona {

    static porObjeto (nombre, apellido, pais ){
        return new Persona (nombre, apellido, pais);
    }

    constructor (nombre, apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais ;
    }

    getInfo (){
        console.log(`info: ${this.apellido}, ${this.apellido},${this.pais}`);
    }
}

const nombre1 = 'Meissa';
      apellido1 = 'Flores';
      pais1 = 'Peru';

const fher = {
    nombre : 'fernando',
    apellido: 'Herrera',
    pais : 'costa rica'
}

const persona1 = new Persona (nombre1, apellido1, pais1);
const persona2 =  Persona.porObjeto (fher);


persona1.getInfo ();
persona2.getInfo();




