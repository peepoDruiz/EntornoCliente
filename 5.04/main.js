"use strict";

window.onload = () => {
  const piecesDiv = document.getElementById("pieces");
  //Le he pedido a ChatGPT que me diga como guardar las imagenes del html en un array y lo desordene cada vez.
  const images = Array.from(piecesDiv.querySelectorAll("img"));
  let shuffled = [...images];
  shuffled = shuffled.sort(() => Math.random() - 0.5);
  piecesDiv.innerHTML = "<h2>Piezas</h2>";
  shuffled.forEach((img) => piecesDiv.appendChild(img));

  const board = document.getElementById("board");

  const draggable_elements = document.getElementsByClassName("draggable");
  for (let i = 0; i < draggable_elements.length; i++) {
    draggable_elements[i].setAttribute("draggable", true);
  }

  document.getElementById("draggableZone").addEventListener(
    "dragstart",
    (evento) => {
      evento.dataTransfer.setData("identifier", evento.target.id);
      evento.dataTransfer.setData("name", evento.target.localName);
    },
    false
  );

  document.getElementById("draggableZone").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  document.getElementById("draggableZone").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      if (evento.target.classList.contains("droppable")) {
        evento.target.appendChild(
          document.getElementById(evento.dataTransfer.getData("identifier"))
        );
        checkWin();
      }
    },
    false
  );

  const victoryRoyalMessage = document.getElementById("victory");


  const checkWin = () => {
    let isCorrect = true;
    for (let i = 1; i <= 9; i++) {
        const slot = document.getElementById(`div${i}`);
        const piece = slot.querySelector("img");

        //Si falta alguna pieza o la pieza no coincide con los números del div no está correcto.
        if (!piece || piece.id !== String(i)) {
            isCorrect = false;
            break;
        }
    }
    //Si es correcto muestra imagen de victoria.
    if (isCorrect) {
    victoryRoyalMessage.style.display = "block";
  }
  }

  
  //Quita las imagenes del tablero y las devuelve al div en el que estaban originalmente.
  document.getElementById("reset").addEventListener("click", () => {
    board.querySelectorAll("div").forEach(div => div.innerHTML = "");
    shuffled.forEach(img => piecesDiv.appendChild(img));
    victoryRoyalMessage.style.display = "none";
  });
}; //Fin del window.onload.
