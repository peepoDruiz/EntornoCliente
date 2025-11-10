"use strict";

window.onload = () => {
  const piecesDiv = document.getElementById("pieces");
  //Le he pedido a ChatGPT que me diga como guardar las imagenes del html en un array y lo desordene cada vez.
  const images = Array.from(piecesDiv.querySelectorAll("img"));
  const shuffled = images.sort(() => Math.random() - 0.5);
  const board = document.getElementById("board");
  piecesDiv.innerHTML = "<h2>Piezas</h2>";
  shuffled.forEach((img) => piecesDiv.appendChild(img));

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
        console.log(`Soltado en ${evento.target.className}`);
        evento.target.appendChild(
          document.getElementById(evento.dataTransfer.getData("identifier"))
        );
        
      }
    },
    false
  );

  document.getElementById("reset").addEventListener("click", () => {
    //Le he preguntado a ChatGPT si había una función de recargar la página. No sé si recargar la página es una mala práctica.
    location.reload();
  });
}; //Fin del window.onload.
