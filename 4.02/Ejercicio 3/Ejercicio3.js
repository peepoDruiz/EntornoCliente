"use strict";

const generateRandomNumber = () => {
  return parseInt(Math.random() * 5 + 1);
};

const changeColor = (number) => {
  if (number === 1) {
    let color = document.getElementById("first");
    color.getAttribute("style");
    color.setAttribute("style", "color: red");
  } else if (number === 2) {
    let color = document.getElementById("second");
    color.getAttribute("style");
    color.setAttribute("style", "color: red");
  } else if (number === 3) {
    let color = document.getElementById("third");
    color.getAttribute("style");
    color.setAttribute("style", "color: red");
  } else if (number === 4) {
    let color = document.getElementById("fourth");
    color.getAttribute("style");
    color.setAttribute("style", "color: red");
  } else {
    let color = document.getElementById("fifth");
    color.getAttribute("style");
    color.setAttribute("style", "color: red");
  }
};


setInterval(() => {
    changeColor(generateRandomNumber());
  }, 1000);
