const contagem = require('../funcoes/contagem');

test('contFunc 10 = true', () => {
  expect(contagem([10]) > 0).toBe(true);
});

test('contFunc 3 = false', () => {
  expect(contagem([]) > 0).toBe(false);
});