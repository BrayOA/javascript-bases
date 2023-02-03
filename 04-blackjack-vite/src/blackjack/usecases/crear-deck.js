import _ from "underscore";

// export const  miNombre = ' fernando';

/**
 *Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo:['C','D','H','S'];
 * @param {Array<String>} tiposEpeciales Ejemplo:['A','J','Q','K'];
 * @returns {Array<String>}
 */
 export const crearDeck = ( tiposDeCarta, tiposEpeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 )
        throw new  Error('TiposDeCartas es obligatorio como un arreglo de string');

    if (!tiposEpeciales || tiposEpeciales.length === 0 )
    throw new  Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEpeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}