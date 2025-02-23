import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('number to dollars ', () => {
    expect(toDollars(5)).toBe('$5.00');
    expect(toDollars(0)).toBe('$0.00');
  });
});

describe('divideBy', () => {
  it('divides each number in array', () => {
    const numbers = [10, 20, 30];
    const original = [...numbers];
    const result = divideBy(numbers, 10);
    expect(result).toEqual([1, 2, 3]);
    expect(numbers).toEqual(original);
  });
});

describe('multiplyBy', () => {
  it('multiplies numbers in the object', () => {
    const input = { a: 2, b: 'hello', c: 3 };
    const result = multiplyBy(input, 2);
    expect(result).toEqual({ a: 4, b: 'hello', c: 6 });
  });
});
