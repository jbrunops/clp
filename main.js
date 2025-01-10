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

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function atualizarListagem() {
  const corpoProdutos = document.getElementById("corpoProdutos");
  corpoProdutos.innerHTML = "";

  if (produtos.length === 0) {
    corpoProdutos.innerHTML = `
                    <tr>
                        <td colspan="4" class="sem-produtos">Nenhum produto cadastrado</td>
                    </tr>
                `;
    return;
  }

  produtos.sort((a, b) => a.valor - b.valor);

  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${produto.nome}</td>
                    <td class="valor">${formatarMoeda(produto.valor)}</td>
                    <td>${produto.disponivel === "sim" ? "Sim" : "Não"}</td>
                    <td>
                        <button onclick="deletarProduto(${index})" class="btn-deletar">Deletar</button>
                    </td>
                `;
    corpoProdutos.appendChild(tr);
  });
}
