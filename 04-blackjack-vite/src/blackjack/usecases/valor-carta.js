// pedirCarta();

/**
 * optener el valor de la carta
 * @param {Sting} carta
 * @returns {Number} valor carta
 */
 export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}