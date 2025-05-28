const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Abrir meniu mobile
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fechar menu mobile com X
nav.addEventListener("click", () => {
  nav.classList.remove("active");
});

