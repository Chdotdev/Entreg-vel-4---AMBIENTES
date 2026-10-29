const fibonacci = require('../funcoes/fibonacci');

test('fibonacciFunc 5 = 0, 1, 1, 2, 3', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('fibonacciFunc 1 = 0', () => {
  expect(fibonacci(1)).toEqual([0]);
});