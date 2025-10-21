const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "C:/Users/unifcnakashima/CCP120/FULLSTACK-CCP120-FEI-1/Aula 08 - Prog Full Stack CCP120 + LAB/img/Daft-Punk-Helmet-PNG-HD-Image.png"; // Imagem

// posição inicial (centro do canvas)
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const imgWidth = 50;
const imgHeight = 50;

// função que desenha a imagem centralizada
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, mouseX - imgWidth / 2, mouseY - imgHeight / 2, imgWidth, imgHeight);
}

// atualiza posição conforme o movimento do mouse
canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  // centraliza o mouse na imagem
  x = Math.max(imgWidth / 2, Math.min(x, canvas.width - imgWidth / 2));
  y = Math.max(imgHeight / 2, Math.min(y, canvas.height - imgHeight / 2));

  mouseX = x;
  mouseY = y;
});

// se o mouse sair do canvas, imagem fica na última posição válida
document.addEventListener("mouseleave", () => {
  // não faz nada — a imagem permanece onde estava
});

// loop de animação contínuo
function animar() {
  desenhar();
  requestAnimationFrame(animar);
}

img.onload = animar;
