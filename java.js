const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const link = document.querySelector(".lk");
const linkk = document.querySelector(".lkk");
const linkkk = document.querySelector(".lkkk");
const linkkkk = document.querySelector(".lkkkk");
const servi = document.querySelector(".servi")

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

link.addEventListener("click", () => nav.classList.toggle("active"));

linkk.addEventListener("click", () => nav.classList.toggle("active"));

linkkk.addEventListener("click", () => nav.classList.toggle("active"));

servi.addEventListener("click", () => nav.classList.toggle("active"));

linkkkk.addEventListener("click", () => nav.classList.toggle("active"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observery = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showy");
    } else {
      entry.target.classList.remove("showy");
    }
  });
});


const hiddenElementsy = document.querySelectorAll(".hiddeny");
hiddenElementsy.forEach((el) => observery.observe(el));



