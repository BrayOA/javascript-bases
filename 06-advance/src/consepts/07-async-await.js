

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncAwait2Component = async(element) => {

    console.time ('Start')

    // const value1 = await slowPromises();
    // const value2 = await mediunPromises();
    // const value3 = await fastPromises();
     const [value1, value2, value3] = await Promise.all([
        slowPromises(),
        mediunPromises(),
        fastPromises(),

    ]);

    element.innerHTML = `
        value1:${value1} <br/>
        value2:${value2} <br/>
        value3:${value3} <br/>
    `;

    console.timeEnd('Start');
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