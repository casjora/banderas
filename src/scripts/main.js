import '../../style.css';
import { crearRegion, crearPaisCard, inicializarEscuchadoresFiltros } from "./iterarBanderas";
import { inicializarDarkMode } from "./darkmode";

// Renders iniciales en pantalla
crearRegion();
crearPaisCard(); // Muestra todos los países al cargar la página

// Inicializamos los escuchadores de eventos
inicializarDarkMode();
inicializarEscuchadoresFiltros();