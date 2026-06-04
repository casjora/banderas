import '../../style.css'
import {busquedaPorPais,crearRegion,crearPaisCard,filtrarPorRegion,vistaDetalle  } from "./iterarBanderas";
import { inicializarDarkMode } from "./darkmode";

busquedaPorPais();
crearRegion();
crearPaisCard();

inicializarDarkMode();

filtrarPorRegion()
vistaDetalle()