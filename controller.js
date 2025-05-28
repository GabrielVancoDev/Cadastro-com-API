"use strict"; //Modo restrito

// Verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  limparFormulario();
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  if (cepValido(cep.value)) {
    const dados = await fetch(url);
    const address = await dados.json();

    // hasOwnProperty verifica se o cep nao foi encontrado
    if (address.hasOwnProperty("erro")) {
      alert("Cep nao encontrado");
    } else {
      preencherFormulario(address);
    }
  }
};

preencherFormulario = (endereco) => {
    ,0
};

limparFormulario = () => {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
};
