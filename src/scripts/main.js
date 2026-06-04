import '../../style.css'
import {creadorDeTarjetas,crearRegion,crearPaisCard,filtrarPorRegion  } from "./iterarBanderas";
import { inicializarDarkMode } from "./darkmode";

creadorDeTarjetas();
crearRegion();
crearPaisCard();

inicializarDarkMode();

filtrarPorRegion()