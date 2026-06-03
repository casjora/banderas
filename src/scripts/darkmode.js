let dom = document.documentElement;

function inicializarDarkMode() {
    let botoncito = document.querySelectorAll(".dark-button");

    // Si por error el botón no existe en el HTML, esto evita que el código rompa
    if (!botoncito) return; 

    // Cambiado a "click" (cambialo a "change" SOLO si es un checkbox/switch)
    
    for (let i = 0; i < botoncito.length; i++) {
        botoncito[i].addEventListener("click", () => {
        dom.classList.toggle("dark");
        console.log("¡Modo oscuro alternado!");
    });        
    }
    /* botoncito[0].addEventListener("click", () => {
        dom.classList.toggle("dark");
        console.log("¡Modo oscuro alternado!");
    });

        botoncito[1].addEventListener("click", () => {
        dom.classList.toggle("dark");
        console.log("¡Modo oscuro alternado!");
    }); */
}

// Exportamos la función que activa la lógica
export { inicializarDarkMode };