let dom = document.documentElement;

function inicializarDarkMode() {
    let botoncito = document.querySelectorAll(".dark-button");

    if (!botoncito) return; 

    
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