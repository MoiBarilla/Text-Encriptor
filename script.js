//VARIABLES GLOBALES

let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

let textArea = document.getElementById("textarea");

let textContainer = document.getElementById("text__content");

//LIMPIAR EL TEXTAREA | CLEAN THE TEXTAREA 

function cleanTextArea() {
  document.getElementById("textarea").value = '';
  document.getElementById("textarea").focus();
} 

//TOGGLE PARA EL ASIDE DERECHO | ASIDE RIGHT TOGGLE

function toggleAsideRight() {
  textArea = document.getElementById("textarea").value;

  if (textArea.length >= 1) {
    let emptyImg = document.getElementById("empty");
    emptyImg.classList.remove("show-empty");
    emptyImg.classList.add("hide-empty");
    let content = document.getElementById("content");
    content.classList.remove("hide-content");
    content.classList.add("show-content");
    cleanTextArea();
    return;
  }

}

// BOTÓN ENCRIPTAR | ENCRIPT BUTTON

function encriptar() {
  toggleAsideRight();
  if (textArea.length >= 1) {
  textArea = textArea.replaceAll("e", e);
  textArea = textArea.replaceAll("i", i);
  textArea = textArea.replaceAll("a", a);
  textArea = textArea.replaceAll("o", o);
  textArea = textArea.replaceAll("u", u);
  
  return textContainer.innerHTML = textArea;
  }
}

//BOTON DESENCRIPTAR | DECRIPT BUTTON
function desencriptar() {
  toggleAsideRight();
  if (textArea.length >= 1) {
  textArea = textArea.replaceAll(a, "a");
  textArea = textArea.replaceAll(e, "e");
  textArea = textArea.replaceAll(i, "i");
  textArea = textArea.replaceAll(o, "o");
  textArea = textArea.replaceAll(u, "u");
  
  return textContainer.innerHTML = textArea;
  }
}

//BOTON DE COPIAR | COPY BUTTON

function copy() {
  let copied = textContainer.textContent;
  navigator.clipboard.writeText(copied);
}
