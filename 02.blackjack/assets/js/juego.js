/**
 * 2C= To of club (treboles)
 * 2D= To of diaminds (diamante)
 * 2H= To of hearts (corazones)
 * 2S= To of spades (espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntoJugador = 0;
    puntosComputadora = 0;

//referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

// esta funcion crea un nuevo deck

const crearDeck = ( ) => {

    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push (i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push (esp + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle (deck);
    console.log(deck);
    return deck
}

crearDeck();

//esta funcion me permite tomar una carta
const pedirCarta = () => {

    if(deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }
    const  carta = deck.pop ();
    return carta;

}

//  pedirCarta();
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            :valor * 1;
}

// turno de la computadora

  const turnoComputadora = (puntosMinimos) => {

    do {
     const carta = pedirCarta ();

    puntosComputadora = puntosComputadora + valorCarta (carta);
    puntosHTML[1].innerText = puntosComputadora;

    //  <img class="carta" src="assets/cartas/2C.png"" alt="">
    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
        break;
    }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );

}

// Eventos
 btnPedir.addEventListener('click', () => {

    const carta = pedirCarta ();

    puntoJugador = puntoJugador + valorCarta ( carta );
    puntosHTML[0].innerText = puntoJugador;

    //  <img class="carta" src="assets/cartas/2C.png"" alt="">
    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntoJugador > 21){
        console.warn('Lo sentimos mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntoJugador );

    } else if (puntoJugador === 21 ) {
        console.warn('21, Genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntoJugador );

    }

});

btnDetener.addEventListener('click',() => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora (puntoJugador);
});

btnNuevo.addEventListener('click', () =>{
    console.clear();
    deck = [];
    deck = crearDeck();

    puntoJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled  = false;
    btnDetener.disabled = false;

});



