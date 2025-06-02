document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero-text");
    heroText.classList.add("visible");
  });
  
const typeText = "Hello, I'm Helena Meyer";
const typeTarget = document.getElementById("typewriter");
let typeIndex = 0;

function typeLetter() {
  if (typeIndex < typeText.length) {
    typeTarget.textContent += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeLetter, 80);
  }
}
typeLetter();

document.addEventListener("mousemove", function (e) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 700);
  });
  