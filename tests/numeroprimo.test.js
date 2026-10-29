const numeroPrimo = require('../funcoes/numeroprimo');

test('primeFunc 10 = false', () => {
  expect(numeroPrimo(10)).toBe(false);
});

test('primeFunc 3 = true', () => {
  expect(numeroPrimo(3)).toBe(true);
});