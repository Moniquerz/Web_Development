const pColor= document.querySelectorAll("p:nth-of-type(2n)");
for (let i = 0; i < pColor.length; i++) {
  pColor[i].style.backgroundColor = "#ddd";
}

// Could you have done this with forEach()? How?