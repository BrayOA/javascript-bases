

class Persona{

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + 'instancias'
    }

    static mensaje () {
        console.log(this.nombre);
        console.log(`hola soy un metodo estatico`);
    }

    nombre = '';
    codigo = '';
    frases = '';
    comida = '';

    constructor ( nombre = 'sin nombre', codigo = 'sin codigo', frase ='sin frase',) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frases = frase;

        Persona._conteo++;
    }

    set setComidaFavorita (comida) {
        this.comida = comida.toUpperCase();
    }
     get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy () {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);

    }

    miFrase () {
        this.quienSoy();
        console.log(`${this.codigo}dice: ${this.frases}`);
    }


}




const spiderman = new Persona ('Peer Parker', 'Spiderman','Soy tu amigable vecino spiderman');
const ironman = new Persona ('Tony Stark', 'Ironman','Soy Ironman');

// console.log(spiderman);
// console.log(ironman);

spiderman.miFrase ();
// ironman.miFrase ();

spiderman.setComidaFavorita = 'El pastel de ceresas de la tia May';
// spiderman.nemesis = 'duende verde',
// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

// Persona._conteo = 2;
console.log('conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'hola mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);

