import '../../style.css'
import {busquedaPorPais,crearRegion,crearPaisCard,filtrarPorRegion  } from "./iterarBanderas";
import { inicializarDarkMode } from "./darkmode";

busquedaPorPais();
crearRegion();
crearPaisCard();

inicializarDarkMode();

filtrarPorRegion()