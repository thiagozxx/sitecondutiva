// Evento para abrir o modal da imagem 1
const abrirModalImagem1 = document.getElementById("miniatura1");
const modalImagem1 = document.getElementById("modalImagem1");
const fecharModal1 = document.getElementById("fecharModal1");

abrirModalImagem1.addEventListener("click", () => {
  modalImagem1.style.display = "block";
});

fecharModal1.addEventListener("click", () => {
  modalImagem1.style.display = "none";
});

// Evento para abrir o modal da imagem 2
const abrirModalImagem2 = document.getElementById("miniatura2");
const modalImagem2 = document.getElementById("modalImagem2");
const fecharModal2 = document.getElementById("fecharModal2");

abrirModalImagem2.addEventListener("click", () => {
  modalImagem2.style.display = "block";
});

fecharModal2.addEventListener("click", () => {
  modalImagem2.style.display = "none";
});

// Adicione mais eventos para outras imagens conforme necessário
