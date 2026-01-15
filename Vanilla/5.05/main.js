"use strict";

import { validateForm, getFormData } from "./forms/formHandlers.js";

window.onload = () => {
    const form = document.forms.formAlbum;

    const saveForm = document.getElementById("saveAlbum");

    saveForm.addEventListener (
        "click",
        () => {
            if (validateForm(form)) {
                getFormData(form);
            }
        },
        false
    );
} //Fin del window.onload.