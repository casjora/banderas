import datosBanderas from '../data/data.json';

let banderasdb = datosBanderas;
let listaC = document.getElementById("region-section");
let paisesC = document.getElementById("countries-section");
let searchBar = document.getElementById("search-bar");
let main = document.getElementById("main");

// 1. CREAR LAS OPCIONES DEL SELECT DINÁMICAMENTE
function crearRegion(){
    const regionesUnicas = [...new Set(banderasdb.map(pais => pais.region))];
    regionesUnicas.forEach(region => {
        if (!region) return;
        let elemento = document.createElement("option");
        elemento.textContent = region;
        elemento.value = region;
        listaC.appendChild(elemento);
    });
}

// 2. RENDERIZAR LAS TARJETAS EN EL CONTENEDOR GRID
function crearPaisCard(listaDePaises = banderasdb){
    paisesC.innerHTML = "";

    listaDePaises.forEach(pais => {
        const tarjeta = document.createElement("article");
        const bandera = document.createElement("img");
        const contContenido = document.createElement("div");
        
        bandera.src = pais.flags.png;
        bandera.alt = `Bandera de ${pais.name}`;
        bandera.className = "aspect-3/2 object-fill";
        tarjeta.className = "cursor-pointer dark:bg-[#2b3743] dark:text-white max-w-75 md:max-w-150 bg-white rounded-md overflow-hidden gap-4 pb-10 shadow";
        
        const contenidohtml = `
        <h2 class="font-bold text-lg py-5">${pais.name}</h2>
        <p class="dark:text-slate-300 font-semibold">Population: <span class="dark:text-slate-400 font-normal">${pais.population.toLocaleString()}</span></p>
        <p class="dark:text-slate-300 font-semibold">Region: <span class="dark:text-slate-400 font-normal">${pais.region}</span></p>
        <p class="dark:text-slate-300 font-semibold">Capital: <span class="dark:text-slate-400 font-normal">${pais.capital || 'N/A'}</span></p>`;
        
        contContenido.innerHTML = contenidohtml;
        contContenido.classList.add("px-8");

        tarjeta.addEventListener("click", () => {
            vistaDetalle(pais);
        });
        
        tarjeta.appendChild(bandera);
        tarjeta.appendChild(contContenido);
        paisesC.appendChild(tarjeta);
    });
}

// 3. LA FUNCIÓN MÁGICA: FILTRADO COMBINADO (Inspirado en la lógica del maestro)
function aplicarFiltros() {
    // Leemos AMBOS valores al mismo tiempo en tiempo real
    const rSeleccionada = listaC.value;
    const busqueda = searchBar.value.toLowerCase();

    // Siempre comenzamos con una copia limpia de la base de datos completa
    let paisesFiltrados = banderasdb;

    // Filtro 1: Por Región (Si es diferente de vacío o del valor 'default')
    if (rSeleccionada !== "" && rSeleccionada !== "default") {
        paisesFiltrados = paisesFiltrados.filter(pais => pais.region === rSeleccionada);
    }

    // Filtro 2: Por Texto (Se aplica sobre el resultado del filtro anterior)
    if (busqueda !== "") {
        paisesFiltrados = paisesFiltrados.filter(pais => 
            pais.name.toLowerCase().includes(busqueda)
        );
    }

    // Finalmente, pintamos únicamente el grupo final que superó ambos filtros
    crearPaisCard(paisesFiltrados);
}

// 4. ESCUCHADORES DE EVENTOS
// Unificamos los eventos para que ambos invoquen a la misma función central de filtrado
function inicializarEscuchadoresFiltros() {
    listaC.addEventListener("change", aplicarFiltros);
    searchBar.addEventListener("input", aplicarFiltros);
}

// 5. VISTA DE DETALLE (Mantiene tu lógica limpia y corregida)
function vistaDetalle(pais){
    if (!pais) return;

    main.innerHTML = "";

    const monedas = pais.currencies ? Object.values(pais.currencies).map(c => c.name).join(', ') : 'N/A';
    const idiomas = pais.languages && Array.isArray(pais.languages) ? pais.languages.map(lang => lang.name).join(', ') : 'N/A';
    const nombreNativo = pais.nativeName || pais.name;

    const newHTML = `
    <div class="px-5 md:px-20 py-10">
    <button id="back-button" class="flex items-center gap-2 bg-white dark:bg-[#2b3743] shadow-md px-8 py-2 rounded-md mb-16 text-sm font-semibold hover:opacity-80 transition cursor-pointer dark:text-white">
        ← Back
    </button>

    <div class="grid grid-cols-1 md:flex gap-10 md:gap-24 items-center">
        
        <div class="w-full max-w-90 md:max-w-150 justify-self-center lg:justify-self-start">
            <img class="w-full aspect-3/2 object-cover shadow-sm rounded-sm" src="${pais.flags.png}" alt="Bandera de ${pais.name}">
        </div>

        <div class="dark:text-white md: md:w-200">
            <h2 class="text-2xl md:text-5xl font-extrabold mb-6">${pais.name}</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm md:text-lg lg:text-2xl">
                
                <div class="flex flex-col gap-2">
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Native Name: <span class="font-normal text-slate-600 dark:text-slate-400">${nombreNativo}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Population: <span class="font-normal text-slate-600 dark:text-slate-400">${pais.population.toLocaleString()}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Region: <span class="font-normal text-slate-600 dark:text-slate-400">${pais.region}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Sub Region: <span class="font-normal text-slate-600 dark:text-slate-400">${pais.subregion || 'N/A'}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Capital: <span class="font-normal text-slate-600 dark:text-slate-400">${pais.capital || 'N/A'}</span></p>
                </div>
                
                <div class="flex flex-col gap-2">
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Top Level Domain: <span class="font-normal text-slate-600 dark:text-slate-400">${pais.topLevelDomain || 'N/A'}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Currencies: <span class="font-normal text-slate-600 dark:text-slate-400">${monedas}</span></p>
                    <p class="font-semibold text-slate-700 dark:text-slate-300">Languages: <span class="font-normal text-slate-600 dark:text-slate-400">${idiomas}</span></p>
                </div>
            </div>

            <div class="md:text-lg lg:text-2xl flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span class="whitespace-nowrap">Border Countries:</span>
                <div id="borders-container" class="flex flex-wrap gap-2">
                    ${pais.borders && pais.borders.length > 0 
                        ? pais.borders.map(border => `<span class="bg-white dark:bg-[#2b3743] shadow-sm px-4 py-1 text-xs rounded-sm font-normal border border-slate-100 dark:border-transparent">${border}</span>`).join('')
                        : '<span class="font-normal text-slate-400">None</span>'
                    }
                </div>
            </div>

        </div>
    </div>
</div>`;

    main.innerHTML = newHTML;

    document.getElementById("back-button").addEventListener("click", () => {
        window.location.reload();
    });
}

// Exportamos las funciones necesarias
export { crearRegion, crearPaisCard, inicializarEscuchadoresFiltros, vistaDetalle };