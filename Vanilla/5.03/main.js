"use strict";

import {printTable, pickColor, paint, clear, clearAll } from "./libraries/library.js";

window.onload = () => {
    printTable();
    paint(pickColor());
    clear();
    clearAll();
}; //Fin del window.onload.