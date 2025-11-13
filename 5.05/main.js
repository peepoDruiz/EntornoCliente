"use strict";

import { validateTextLength, validateNumber, validateRegExp, validateForm } from "./libraries/library.js";

window.onload = () => {
    const form = document.forms.formAlbum;
    console.log(form);

    let nombre = "ranas";
    console.log(validateTextLength(nombre, 5));
    let numerito = 2004;
    console.log(validateNumber(numerito, 1887, 2025));

    const expLocation = /^ES-[0-9]{3}[A-Z]{2}$/;
    let probarRegExp = "ES-001AA"
    console.log("RegExp")
    console.log(validateRegExp(probarRegExp, expLocation));

    const saveAlbum = document.getElementById("saveAlbum");

    saveAlbum.addEventListener(
        "click",
        validateForm(form),
        false
    );
} //Fin del window.onload.