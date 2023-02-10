

/**
 *
 * @param {HTMLDivElement} element
 */

export const environmentsComponent = (element) => {

    console.log(import.meta.env);

    const html =`
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        KEY: ${import.meta.env.VITE_VITE_KEY} <br/>
        URL: ${import.meta.env.VITE_BASES_URLS} <br/>


    `;
    element.innerHTML = html;

}