"use strict";

import { printFilms } from "./libraries/ui/filmHandler.js";
import { catchData } from "./libraries/library.js";

window.onload = () => {
    printFilms(catchData());
}; //Fin del window.onload.
