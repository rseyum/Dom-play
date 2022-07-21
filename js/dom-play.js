function myAlert() {
  alert("I'm clicked!");
}
let spans = document.querySelectorAll("#play span");
console.log(spans);
for (const mySpan of spans) {
  mySpan.addEventListener("click", myAlert);
}

function highlight(el) {
  if (el.style.backgroundColor == "yellow") {
    el.style.backgroundColor = "white";
  } else {
    el.style.backgroundColor = "yellow";
  }
}
