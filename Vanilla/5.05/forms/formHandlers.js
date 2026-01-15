"use strict";

import { validateTextLength, validateCheckBox, validateRegExp, validateNumber } from "../libraries/library.js";
import { showErrors, hideErrors, inputError, hideInputError } from "../ui/css-utils.js";

const nameError = document.getElementById("albumNameError");
const authorError = document.getElementById("albumAuthorError");
const publishYearError = document.getElementById("publishYearError");
const genreError = document.getElementById("genreError");
const locationError = document.getElementById("locationError");

const validateForm = (form) => {

  const expLocation = /^ES-[0-9]{3}[A-Z]{2}$/;
  const checkBoxes = Array.from(form)
    .filter((e) => e.tagName === "INPUT")
    .filter((e) => e.type === "checkbox");
  const inputs = Array.from(form).filter((e) => e.tagName === "INPUT");

  let formValidated = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "location") {
      if (validateRegExp(inputs[i].value, expLocation)) {
        hideErrors(locationError);
        hideInputError(inputs[i]);
      } else {
        showErrors(locationError);
        inputError(inputs[i]);
        formValidated = false;
      }
    }
    if (inputs[i].type === "text") {
      if (validateTextLength(inputs[i].value, 5)) {
        if (inputs[i].name === "albumName") {
            hideErrors(nameError);
            hideInputError(inputs[i]);
        } else if (inputs[i].name === "albumAuthor") {
            hideErrors(authorError);
            hideInputError(inputs[i]);
        }
      } else {
        if (inputs[i].name === "albumName") {
            showErrors(nameError);
            inputError(inputs[i]);
        } else if (inputs[i].name === "albumAuthor") {
            showErrors(authorError);
            inputError(inputs[i]);
        }
        formValidated = false;
      }
    } else if (inputs[i].type === "number") {
      if (validateNumber(inputs[i].value, 1887, 2025)) {
        hideErrors(publishYearError);
        hideInputError(inputs[i]);
      } else {
        showErrors(publishYearError);
        inputError(inputs[i]);
        formValidated = false;
      }
    } else if (inputs[i].type === "checkbox") {
      if (validateCheckBox(checkBoxes)) {
        hideErrors(genreError);
        hideInputError(inputs[i]);
      } else {
        showErrors(genreError);
        inputError(inputs[i]);
        formValidated = false;
      }
    }
  }
  return formValidated;
};

const getFormData = (form) => {
  let formData = {
    name: "",
    cover: "",
    author: "",
    publishYear: "",
    genre: [],
    location: "",
    borrowed: "No",
  };

  const inputs = Array.from(form).filter((e) => e.tagName === "INPUT");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "albumName") {
        formData.name = inputs[i].value;
    } else if (inputs[i].name === "albumCover") {
        formData.cover = inputs[i].value;
    } else if (inputs[i].name === "albumAuthor") {
        formData.author = inputs[i].value;
    } else if (inputs[i].name === "publishYear") {
        formData.publishYear = inputs[i].value;
    } else if (inputs[i].type === "checkbox" && inputs[i].checked === true) {
      formData.genre = [...formData.genre, inputs[i].name];
    } else if (inputs[i].name === "location") {
      formData.location = inputs[i].value;
    } else if(inputs[i].name === "borrowed") {
        if (inputs[i].id === "borrowed-yes" && inputs[i].checked) {
            formData.borrowed = "Sí";
        }
    }
  }
  console.log(formData);
};

export {validateForm, getFormData};