const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const lin = document.querySelector(".lk");
const linkk = document.querySelector(".lkk");
const linkkk = document.querySelector(".lkkk");
const linkkkk = document.querySelector(".lkkkk");
const servi = document.querySelector(".servi");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

lin.addEventListener("click", () => nav.classList.toggle("active"));

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

function closeDescription(num) {
  const descricao = document.getElementById("description" + num);
  const body = document.body;

  descricao.style.display = "none";
  descricao.style.opacity = "0"; // Define a opacidade para 0 ao esconder
  body.style.overflow = "auto"; // Restaura o scroll
}

function showDescription(num) {
  const descricao = document.getElementById("description" + num);
  const body = document.body;
  const video = descricao.querySelector(".meuVideo"); // Seleciona o vídeo pela classe

  // Invertendo a lógica
  if (
    descricao.style.display !== "flex" &&
    descricao.style.display !== "block"
  ) {
    // Mostra a descrição
    descricao.style.display = "flex";
    descricao.style.opacity = "1"; // Define a opacidade para 1 ao mostrar
    body.style.overflow = "hidden"; // Desabilita o scroll
    video.currentTime = 0; // Reinicia o vídeo
    video.play(); // Reproduz o vídeo
  } else {
    // Chama a função de fechar
    closeDescription(num);
  }
}


const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)