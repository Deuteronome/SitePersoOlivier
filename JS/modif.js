// JavaScript source code

let eltExp = document.createElement("div");

let eltIn = document.getElementById('sandbox');

eltIn.appendChild(eltExp);

eltExp.innerHTML = '<ul><li>point 1</li><li>point 2</li></ul>';

eltExp.classList.add("nouveau");


