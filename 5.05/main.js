"use strict";

import { validateForm, getFormData } from "./libraries/library.js";

window.onload = () => {
    const form = document.forms.formAlbum;

    const saveForm = document.getElementById("saveAlbum");

    saveForm.addEventListener (
        "click",
        () => {
            if (validateForm(form)) {
                getFormData(form);
            }
        }
    )
} //Fin del window.onload.