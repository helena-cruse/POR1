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
  
  const fadeParts = document.querySelectorAll(".fade-part");
  
  const appearEach = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 200);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.5,
  });
  
  fadeParts.forEach(part => {
    appearEach.observe(part);
  });
 
  const collabSection = document.querySelector(".collab-section");
  
  if (collabSection) {
    const lines = collabSection.querySelectorAll(".fade-part");
  
    const collabObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
  
        lines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add("visible");
          }, index * 300);
        });
  
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.4,
    });
  
    collabObserver.observe(collabSection);
  }
  