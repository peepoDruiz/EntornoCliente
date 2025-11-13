"use strict";

const validateForm = (form) => {
    for (let i = 0; form.length; i++) {
        if (form[i].tagName === "INPUT") {
            if (form[i].type === "text") {
                if (validateTextLength(form[i].input, 5)) {
                    console.log("holiwis")
                } else {
                    console.log("feo de verdad")
                }
            }
        }
    }
};

/* Comprueba que el parámetro text tenga una longitud
igual o mayor a la del parámetro length. */
const validateTextLength = (text, length) => {
    if (text.length >= length) {
        return true;
    } else {
        return false;
    }
};

/* Comprueba que un número esté entre dos números. */
const validateNumber = (numberToValidate, min, max) => {
    /* Decido poner mínimo y máximo, ya que no se ha podido publicar
    nada después de 2025, ni antes de 1887
    (Alex y yo buscamos en que año se crearon los discos). */
    if (numberToValidate >= min && numberToValidate <= max) {
        return true;
    } else {
        return false;
    }
};

/* Comprueba que, al menos, una opción del CheckBox esté marcada. */
const validateCheckBox = (checkBox) => {
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked === true) {
            return true;
        }
    }
    return false;
};

/* Comprueba que la expresión regular sea correcta. */
const validateRegExp = (regExpToValidate, regExp) => {
    if (regExp.test(regExpToValidate)) {
        return true;
    } else {
        return false;
    }
};

export {
    validateTextLength,
    validateNumber,
    validateCheckBox,
    validateRegExp,
    validateForm
};