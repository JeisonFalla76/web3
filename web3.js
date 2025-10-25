/* ==============================
   web3.js — GYS IMPORTPLAST
   Interactividad moderna y animaciones
   ============================== */

// ==============================
// NAVBAR STICKY + HAMBURGUER MENU
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".topbar");
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  // Efecto scroll en la barra superior
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }
  });

  // Menú móvil
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
    navToggle.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
      navToggle.classList.remove("active");
    });
  });
});

// ==============================
// ANIMACIONES "SCROLL REVEAL"
// ==============================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==============================
// FORMULARIO DE ENCUESTA / FEEDBACK
// ==============================
const surveyForm = document.getElementById("surveyForm");
const thankYou = document.querySelector(".thanks");

if (surveyForm) {
  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    thankYou.style.display = "block";
    thankYou.style.opacity = "0";
    setTimeout(() => {
      thankYou.style.opacity = "1";
      thankYou.style.transition = "opacity 0.6s ease-in-out";
    }, 100);
    surveyForm.reset();

    setTimeout(() => {
      thankYou.style.opacity = "0";
      setTimeout(() => {
        thankYou.style.display = "none";
      }, 600);
    }, 4000);
  });
}

// ==============================
// FORMULARIO DE COTIZACIÓN
// ==============================
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Animación visual rápida de confirmación
    const btn = quoteForm.querySelector("button");
    const originalText = btn.textContent;
    btn.textContent = "Enviado ✅";
    btn.style.background = "#4caf50";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      quoteForm.reset();
    }, 3000);
  });
}

// ==============================
// ANIMACIÓN SUAVE EN SCROLL (ANCHOR LINKS)
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// ==============================
// EFECTO PARALLAX EN HERO
// ==============================
window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    let scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
  }
});
