const { add, subtract, multiply, divide } = require('./calculator');

test('adds two numbers', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies two numbers', () => {
  expect(multiply(6, 7)).toBe(42);
});

test('divides two numbers', () => {
  expect(divide(8, 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
