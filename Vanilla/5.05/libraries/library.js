"use strict";

/* Comprueba que el parámetro text tenga una longitud
igual o mayor a la del parámetro length. */
const validateTextLength = (text, length) => {
  return text.length >= length;
};

/* Comprueba que un número esté entre dos números. */
const validateNumber = (numberToValidate, min, max) => {
  /* Decido poner mínimo y máximo, ya que no se ha podido publicar
    nada después de 2025, ni antes de 1887
    (Alex y yo buscamos en que año se crearon los discos). */
  return numberToValidate >= min && numberToValidate <= max;
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
  return regExp.test(regExpToValidate);
};



export {
  validateTextLength,
  validateNumber,
  validateCheckBox,
  validateRegExp
};
