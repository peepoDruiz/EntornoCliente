"use strict";

const showErrors = (element) => {
    element.classList.remove("hide")
};

const hideErrors = (element) => {
    element.classList.add("hide");
}

export { showErrors, hideErrors };