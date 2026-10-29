function quicksort(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('A entrada deve ser um array.');
  }

  for (const item of array) {
    if (typeof item !== 'number' || isNaN(item)) {
      throw new TypeError('Todos os elementos do array devem ser números válidos.');
    }
  }

  if (array.length <= 1) {
    return array;
  }

  const pivo = array[array.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivo) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

module.exports = quicksort;