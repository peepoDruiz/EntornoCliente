"use strict";

const printTable = () => {
  let table = document.createElement("table");
  let row = document.createElement("tr");

  for (let i = 1; i <= 100; i++) {
    if (i === 1) {
      row = document.createElement("tr");
    }
    let column = document.createElement("td");
    column.textContent = i;
    row.appendChild(column);

    if (i % 10 === 0) {
      row = document.createElement("tr");
    }
    table.appendChild(row);
    column.classList.add("td");
    if (isPrime(i)) {
      setTimeout(() => {
        column.classList.add("primeNumbers");
      }, 2000);
    }
  }
  document.body.appendChild(table);
  table.classList.add("table");
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  } else if (number == 2 || number == 3 || number == 5 || number == 7) {
    return true;
  } else if (
    number % 2 == 0 ||
    number % 3 == 0 ||
    number % 5 == 0 ||
    number % 7 == 0
  ) {
    return false;
  } else {
    return true;
  }
};

printTable();
