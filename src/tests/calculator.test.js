/**
 * Unit tests for the calculator functions (add, subtract, multiply, divide).
 *
 * Base examples (from images/calc-basic-operations.png):
 *   2 + 3 = 5
 *   10 - 4 = 6
 *   45 * 2 = 90
 *   20 / 5 = 4
 *
 * These are expanded below with additional cases, including negatives,
 * decimals, zero, and edge cases like division by zero.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
