#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator.
 *
 * Supports the following arithmetic operations:
 *   - add:        Addition (a + b)
 *   - subtract:   Subtraction (a - b)
 *   - multiply:   Multiplication (a * b)
 *   - divide:     Division (a / b), with division-by-zero handled gracefully
 *   - modulo:     Modulo (a % b), returns the remainder of a divided by b
 *   - power:      Exponentiation (base ** exponent)
 *   - squareRoot: Square root of a single number, with error handling for negatives
 *
 * Usage:
 *   node calculator.js <operation> <a> [b]
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 3
 *   node calculator.js squareRoot 16
 */

// Addition: returns the sum of two numbers.
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers.
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers.
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers.
// Throws an error if dividing by zero so callers can handle it gracefully.
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b.
// Throws an error if b is zero, since the remainder is undefined in that case.
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent.
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns the square root of a single number n.
// Throws an error for negative inputs, since the result would not be a real number.
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot compute the square root of a negative number.');
  }
  return Math.sqrt(n);
}

// Operations that take two arguments (a, b).
const binaryOperations = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
};

// Operations that take a single argument (n).
const unaryOperations = {
  squareRoot,
};

function printUsage() {
  console.log('Usage: node calculator.js <operation> <a> [b]');
  console.log('Operations: add, subtract, multiply, divide, modulo, power, squareRoot');
  console.log('Example: node calculator.js add 5 3');
  console.log('Example: node calculator.js squareRoot 16');
}

function main() {
  const [operation, aArg, bArg] = process.argv.slice(2);

  if (!operation || aArg === undefined) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const a = Number(aArg);
  if (Number.isNaN(a)) {
    console.error('Error: Arguments must be valid numbers.');
    process.exitCode = 1;
    return;
  }

  try {
    let result;

    if (unaryOperations[operation]) {
      result = unaryOperations[operation](a);
    } else if (binaryOperations[operation]) {
      if (bArg === undefined) {
        printUsage();
        process.exitCode = 1;
        return;
      }
      const b = Number(bArg);
      if (Number.isNaN(b)) {
        console.error('Error: Arguments must be valid numbers.');
        process.exitCode = 1;
        return;
      }
      result = binaryOperations[operation](a, b);
    } else {
      console.error(`Error: Unknown operation "${operation}".`);
      printUsage();
      process.exitCode = 1;
      return;
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exitCode = 1;
  }
}

// Only run the CLI when this file is executed directly (not when required/imported).
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
