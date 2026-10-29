const mdc = require('../funcoes/mdc');

test('mdcFunc 5 10 = 5', () => {
  expect(mdc(5, 10)).toBe(5);
});

test('mdcFunc 1 = 1', () => {
  expect(mdc(1, 1)).toBe(1);
});