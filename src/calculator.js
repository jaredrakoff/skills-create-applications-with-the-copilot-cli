#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator.
 *
 * Supports four basic arithmetic operations:
 *   - add:      Addition (a + b)
 *   - subtract: Subtraction (a - b)
 *   - multiply: Multiplication (a * b)
 *   - divide:   Division (a / b), with division-by-zero handled gracefully
 *
 * Usage:
 *   node calculator.js <operation> <a> <b>
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
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

const operations = {
  add,
  subtract,
  multiply,
  divide,
};

function printUsage() {
  console.log('Usage: node calculator.js <operation> <a> <b>');
  console.log('Operations: add, subtract, multiply, divide');
  console.log('Example: node calculator.js add 5 3');
}

function main() {
  const [operation, aArg, bArg] = process.argv.slice(2);

  if (!operation || aArg === undefined || bArg === undefined) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const fn = operations[operation];
  if (!fn) {
    console.error(`Error: Unknown operation "${operation}".`);
    printUsage();
    process.exitCode = 1;
    return;
  }

  const a = Number(aArg);
  const b = Number(bArg);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exitCode = 1;
    return;
  }

  try {
    const result = fn(a, b);
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

module.exports = { add, subtract, multiply, divide };
