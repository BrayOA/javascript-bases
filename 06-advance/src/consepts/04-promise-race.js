

/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {

    element.innerHTML ='Cargando...'

    const renderValue =(value)=>{
        element.innerHTML = value;
    }

    Promise.race([
        slowPromises(),
        mediunPromises(),
        mediunPromises(),
        fastPromises(),
        mediunPromises(),
        slowPromises(),
    ]).then (renderValue);

}


const slowPromises =()=>new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Slow Promice');
    }, 2000);
})

const mediunPromises =()=>new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Medium Promice');
    }, 1500);
})

const fastPromises =()=>new Promise(resolve =>{
    setTimeout(()=>{
        resolve('fast Promice');
    }, 1000);
})