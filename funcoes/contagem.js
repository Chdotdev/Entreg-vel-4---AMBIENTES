function contagem(dados) {
  if (!Array.isArray(dados)) {
    throw new TypeError('A entrada precisa ser um array.');
  }

  let quantidadeInteiros = 0;

  for (let i = 0; i < dados.length; i++) {
    const elemento = dados[i];
    if (typeof elemento === 'number' && Number.isInteger(elemento)) {
      quantidadeInteiros++;
    }
  }

  return quantidadeInteiros;
}

module.exports = contagem;