/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getElementoAleatorio(anArray) {
    let indiceAleatorio = Math.floor(Math.random() * anArray.length);
    return anArray[indiceAleatorio];
  }

  function RandomExcuse() {
    let quien = getElementoAleatorio(who);
    let accion = getElementoAleatorio(action);
    let que = getElementoAleatorio(what);
    let cuando = getElementoAleatorio(when);

    return `${quien} ${accion} ${que} ${cuando}.`;
  }

  function mostrarFrase() {
    let frase = RandomExcuse();
    document.getElementById("frase").textContent = frase;
  }

  mostrarFrase();

  document
    .getElementById("generarFrase")
    .addEventListener("click", mostrarFrase);
};
