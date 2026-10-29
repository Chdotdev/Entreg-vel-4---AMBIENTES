const quicksort = require('../funcoes/quicksort');

test('quicksortFunc 5,4,3,1 = 1,3,4,5', () => {
  expect(quicksort([5, 4, 3, 1])).toEqual([1, 2, 3, 4, 5].filter(n => [5, 4, 3, 1].includes(n)));
});

test('quicksortFunc 100,4,3,150 = 3,4,100,150', () => {
  expect(quicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});