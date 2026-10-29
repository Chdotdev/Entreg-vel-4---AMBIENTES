function somatorio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('A entrada deve ser um array de números.');
  }

  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    const item = numeros[i];
    if (typeof item !== 'number' || isNaN(item)) {
      throw new TypeError('Todos os elementos do array devem ser números.');
    }
    total += item;
  }

  return total;
}

module.exports = somatorio;