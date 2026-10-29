function fibonacci(quantidade) {
  if (typeof quantidade !== 'number' || isNaN(quantidade)) {
    throw new TypeError('A quantidade deve ser um número válido.');
  }
  if (quantidade < 0 || !Number.isInteger(quantidade)) {
    throw new RangeError('A quantidade deve ser um número inteiro maior ou igual a zero.');
  }

  if (quantidade === 0) return [];
  if (quantidade === 1) return [0];
  if (quantidade === 2) return [0, 1];

  const numeros = [0, 1];
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i < quantidade; i++) {
    const sucessor = n1 + n2;
    n1 = n2;
    n2 = sucessor;
    numeros.push(sucessor);
  }

  return numeros;
}

module.exports = fibonacci;