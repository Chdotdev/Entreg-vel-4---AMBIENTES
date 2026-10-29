function numeroPrimo(numero) {
  if (typeof numero !== 'number' || isNaN(numero)) {
    throw new TypeError('A entrada deve ser um número válido.');
  }
  if (!Number.isInteger(numero)) {
    throw new RangeError('O número deve ser um inteiro.');
  }

  if (numero <= 1) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = numeroPrimo;