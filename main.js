let produtos = [];

function mostrarFormulario() {
  document.getElementById("formularioProduto").classList.remove("oculto");
  document.getElementById("listagem").classList.add("oculto");
}

function mostrarListagem() {
  document.getElementById("formularioProduto").classList.add("oculto");
  document.getElementById("listagem").classList.remove("oculto");
  atualizarListagem();
}

function deletarProduto(index) {
  if (confirm("Tem certeza que deseja deletar este produto?")) {
    produtos.splice(index, 1);
    atualizarListagem();
  }
}
