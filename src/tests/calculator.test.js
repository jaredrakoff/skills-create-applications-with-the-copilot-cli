/**
 * Unit tests for the calculator functions:
 * add, subtract, multiply, divide, modulo, power, squareRoot.
 *
 * Base examples (from images/calc-basic-operations.png):
 *   2 + 3 = 5
 *   10 - 4 = 6
 *   45 * 2 = 90
 *   20 / 5 = 4
 *
 * Extended examples (from images/calc-extended-operations.png):
 *   modulo: 5 % 2 = 1
 *   power: 2 ^ 3 = 8
 *   square root: √16 = 4
 *
 * These are expanded below with additional cases, including negatives,
 * decimals, zero, and edge cases like division/modulo by zero and
 * square root of negative numbers.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('add', () => {
  test('2 + 3 = 5 (from example image)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 15)).toBe(25);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });

  test('adds with zero', () => {
    expect(add(0, 7)).toBe(7);
  });
});

describe('subtract', () => {
  test('10 - 4 = 6 (from example image)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers resulting in negative', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -5)).toBe(10);
  });

  test('subtracts two negative numbers', () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracts with zero', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

describe('multiply', () => {
  test('45 * 2 = 90 (from example image)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-4, -6)).toBe(24);
  });

  test('multiplies by zero', () => {
    expect(multiply(123, 0)).toBe(0);
  });

  test('multiplies decimals', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3);
  });
});

describe('divide', () => {
  test('20 / 5 = 4 (from example image)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides a negative by a positive number', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('divides two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

describe('modulo', () => {
  test('5 % 2 = 1 (from example image)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo with an exact multiple returns zero', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo with a negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('modulo with a negative divisor', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('modulo with decimals', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test('modulo with zero dividend', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('throws an error when modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

describe('power', () => {
  test('2 ^ 3 = 8 (from example image)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('any number to the power of 0 is 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('power with a negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('power with a negative base and even exponent', () => {
    expect(power(-2, 2)).toBe(4);
  });

  test('power with a negative base and odd exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('power with a decimal base', () => {
    expect(power(1.5, 2)).toBeCloseTo(2.25);
  });

  test('power with a base of zero', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('power of one is always one', () => {
    expect(power(1, 100)).toBe(1);
  });
});

describe('squareRoot', () => {
  test('√16 = 4 (from example image)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('square root of a decimal', () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a large perfect square', () => {
    expect(squareRoot(10000)).toBe(100);
  });

  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-9)).toThrow(
      'Cannot compute the square root of a negative number.'
    );
  });
});
