const myFunction = require("./myFunction");

const body = document.querySelector("body");
const title = document.createElement("h1");
title.textContent = "Battleship project";
body.appendChild(title);
console.log(myFunction("testing"));
