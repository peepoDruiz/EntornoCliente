"use strict";

//Esta función crea una tabla de 60x60.
const printTable = () => {
  let table = document.createElement("table");
  let row = document.createElement("tr");
  let div = document.getElementById("canvas");
  

  //La iteración es hasta 3600 ya que es el resultado de 60x60.
  for (let i = 1; i <= 3600; i++) {
    if (i === 1) {
      row = document.createElement("tr");
    }
    let column = document.createElement("td");
    row.appendChild(column);

    //Cuando la fila de la tabla tiene 60 columnas crea una fila más.
    if (i % 60 === 0) {
      row = document.createElement("tr");
    }
    table.appendChild(row);
    column.classList.add("td");
  }
  div.appendChild(table);
  table.classList.add("table");
}

let chosenColor = "#000000"; //Color inicial (negro).

const pickColor = () => {
  let inputColor = document.getElementById("chooseColor");
  inputColor.addEventListener(
    "input",
    () => {
      //Cambia el color en base al color elegido en el input color.
      chosenColor = inputColor.value;
    },
    false
  );
};


const paint = () => {
  //Buleano para comprobar si se está manteniendo el click o no.
  let painting = false;
  const cells = document.querySelectorAll("td");

  document.body.addEventListener("mousedown", () => {
    painting = true;
  })
  document.body.addEventListener("mouseup", () => {
    painting = false;
  })

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (painting) {
        cell.style.backgroundColor = chosenColor;
      }
    });
  });
};

//Cambia el color a blanco.
const clear = () => {
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener(
    "click",
    () => {
      chosenColor = "#FFFFFF";
    }
  )
}

const clearAll = () => {
  const cells = document.querySelectorAll("td");
  const clearAllButton = document.getElementById("clearAll");
  clearAllButton.addEventListener(
    "click",
    () => {
      cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
      });
    }
  );
};


export { printTable, pickColor, paint, clear, clearAll };
