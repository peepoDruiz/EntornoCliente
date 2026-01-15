"use strict";

const showErrors = (element) => {
    element.classList.remove("hide");
};

const hideErrors = (element) => {
    element.classList.add("hide");
};

const inputError = (element) => {
    element.classList.add("error");
};

const hideInputError = (element) => {
    element.classList.remove("error");
}

export { showErrors, hideErrors, inputError, hideInputError };