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

    class Heroe extends Persona {

        clan= 'sin clan';

        constructor (nombre, codigo, frase) {
            super (nombre, codigo, frase);

            this.clan = 'los avenger'
        }

        quienSoy () {
            console.log(`soy ${this.nombre}, ${this.clan}`);
            super.quienSoy ();
        }
    }



const spiderman = new Persona ('Peer Parker', 'Spiderman','Soy tu amigable vecino spiderman');
// const spiderman = new Heroe ();

console.log(spiderman);
spiderman.quienSoy ();
