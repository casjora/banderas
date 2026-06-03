import datosBanderas from '../data/data.json';

/* async function banderasJason() {
    try {
        let response = await fetch('./data/data.json');
        let data = await response.json();
        console.log("correcto")

        return data
    } catch (error) {
        console.error("algo anda muy mal, ",error)
        
    }
    
} */

let banderasdb = datosBanderas;

function creadorDeTarjetas(){
    let banderasdb = datosBanderas;
}

let listaC = document.getElementById("region-section")

function crearRegion(){
    const regionesUnicas = [...new Set(banderasdb.map(pais => pais.region))];
    regionesUnicas.forEach(region=>{
        let elemento = document.createElement("option")
        elemento.textContent =region
        listaC.appendChild(elemento)
    })

    const lista = banderasdb.forEach(pais => {
        let elemento = document.createElement("option")
        let region = pais.region
        
    });
    
}

let paisesC = document.getElementById("countries-section")

function crearPaisCard(){

    const paises = banderasdb.forEach(pais=>{
        const tarjeta=document.createElement("article")
        const bandera = document.createElement("img")
        const contContenido = document.createElement("div")
        bandera.src=pais.flags.png
        bandera.alt = `Bandera de ${pais.name}`
        bandera.className="aspect-3/2 object-fill"
        tarjeta.className="dark:bg-[#2b3743] dark:text-white max-w-75 md:max-w-150  bg-white rounded-md overflow-hidden gap-4 pb-10 shadow"
        const contenidohtml = `
        <h2 class=" font-bold text-lg py-5">${pais.name}</h2>
        <p class=" dark:text-slate-300 font-semibold">Population: <span class=" dark:text-slate-400 font-normal">${pais.population}</span></p>
        <p class=" dark:text-slate-300 font-semibold">Region: <span class=" dark:text-slate-400 font-normal">${pais.region}</span></p>
        <p class=" dark:text-slate-300 font-semibold">Capital: <span class="dark:text-slate-400 font-normal">${pais.capital}</span></p>        `
        
        contContenido.innerHTML=contenidohtml
        contContenido.classList.add("px-8")
        tarjeta.appendChild(bandera)
        tarjeta.appendChild(contContenido)
        paisesC.appendChild(tarjeta)

    })
    const tarjeta=document.createElement("article")
}


export {creadorDeTarjetas, crearRegion, crearPaisCard}