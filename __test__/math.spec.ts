import { Math } from '../src/Math';

describe('test', () => {
  test('add', () => {
    const a = 1;
    const b = 1;
    const result = 2;
    expect(Math().sum({ a, b })).toEqual(result);
  });

  test('multiplies', () => {
    const a = 2;
    const b = 3;
    const result = 6;
    expect(Math().multiply({ a, b })).toEqual(result);
  });
});
