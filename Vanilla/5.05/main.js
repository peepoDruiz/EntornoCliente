"use strict";

import { validateForm, getFormData } from "./forms/formHandlers.js";

window.onload = () => {
    const form = document.forms.formAlbum;

    const saveForm = document.getElementById("saveAlbum");
    const showAlbums = document.getElementById("showAlbums");

    saveForm.addEventListener (
        "click",
        () => {
            if (validateForm(form)) {
                getFormData(form);
            }
        },
        false
    );

    showAlbums.addEventListener (
        "click",
        () => {

        },
        false
    );
} //Fin del window.onload.