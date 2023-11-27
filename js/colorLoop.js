const loop = document.getElementById("loop");
let currentColor = "red";

setInterval(() => {
  if (currentColor === "red") {
    loop.classList.remove("red");
    loop.classList.add("blue");
    currentColor = "blue";
  } else {
    loop.classList.remove("blue");
    loop.classList.add("red");
    currentColor = "red";
  }
}, 500);