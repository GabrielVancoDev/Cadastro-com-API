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

const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
};

const limparFormulario = () => {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);