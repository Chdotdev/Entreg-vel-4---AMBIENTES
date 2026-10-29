const somatorio = require('../funcoes/somatorio');

test('sunFunc 10+20 = 30', () => {
  expect(somatorio([10, 20])).toBe(30);
});

test('sunFunc -10+20 = 30', () => {
  expect(somatorio([10, 20])).toBe(30);
});