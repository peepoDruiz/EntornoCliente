"use strict";

const validateForm = (form) => {
  const expLocation = /^ES-[0-9]{3}[A-Z]{2}$/;
  const checkBoxes = Array.from(form)
    .filter((e) => e.tagName === "INPUT")
    .filter((e) => e.type === "checkbox");
  const inputs = Array.from(form).filter((e) => e.tagName === "INPUT");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "location") {
      if (validateRegExp(inputs[i].value, expLocation)) {
        continue;
      } else {
        console.log("Falla la regexp");
        return false;
      }
    }
    if (inputs[i].type === "text") {
      if (validateTextLength(inputs[i].value, 5)) {
        continue;
      } else {
        console.log("Falla un texto");
        return false;
      }
    } else if (inputs[i].type === "number") {
      if (validateNumber(inputs[i].value, 1887, 2025)) {
        continue;
      } else {
        console.log("falla el number");
        return false;
      }
    } else if (inputs[i].type === "checkbox") {
      if (validateCheckBox(checkBoxes)) {
        continue;
      } else {
        console.log("falla el checkbox");
        return false;
      }
    }
  }
  return true;
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

const getFormData = (form) => {
  let formData = {
    name: "",
    cover: "",
    author: "",
    publishYear: "",
    genre: [],
    location: "",
    borrowed: "",
  };

  const inputs = Array.from(form).filter((e) => e.tagName === "INPUT");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "albumName") {
        formData.name = inputs[i].value;
        console.log(formData.name)
    } else if (inputs[i].name === "albumCover") {
        formData.cover = inputs[i].value;
        console.log(formData.cover);
    } else if (inputs[i].name === "albumAuthor") {
        formData.author = inputs[i].value;
        console.log(formData.author);
    } else if (inputs[i].name === "publishYear") {
        formData.publishYear = inputs[i].value;
        console.log(formData.publishYear);
    } else if (inputs[i].name === "")
  }
};

export {
  validateTextLength,
  validateNumber,
  validateCheckBox,
  validateRegExp,
  validateForm,
  getFormData
};
