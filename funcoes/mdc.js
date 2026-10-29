function mdc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new TypeError('Ambos os parâmetros devem ser números.');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new RangeError('Os números devem ser inteiros.');
  }

  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const resto = x % y;
    x = y;
    y = resto;
  }

  return x;
}

module.exports = mdc;